package uni.fmi.booking.service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import uni.fmi.models.Appointment;
import uni.fmi.models.User;


public class BookingAnHourService {
	
	private static final List<Appointment> appointmentDB = new ArrayList<>();
	public static final Pattern VALID_EMAIL_ADDRESS_REGEX = Pattern.compile("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$",
			Pattern.CASE_INSENSITIVE);

	public static String booking(String name, String email,LocalDateTime bookedHour,
			String message) {
		initDb();
		
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String formatDateTimeBookedHour = bookedHour.format(formatter);
       
        
		if(null == name || name.trim().equals("")) {
			return "Въведете име!";
		}
		
		if(!validate(email)) {
			return "Невалидна електронна поща!";
		}
		
		
		final User guest = new User(name,email);
		final Appointment newAppointment= new Appointment(bookedHour,guest);
		for(int i = 0; i< appointmentDB.size();i++) {
			String formatDateDB = (appointmentDB.get(i).getReservedTime()).format(formatter);
			 boolean isAvailable= (formatDateTimeBookedHour).equals(formatDateDB);
			if(isAvailable) {
				return "Избраната дата е заета!";
			}
		}
		
		appointmentDB.add(newAppointment);
		return "Резервирахте час успешно!";
	}
	
	 private static void initDb(){
		final User guest = new User("Васил Иванов","vasil@abv.bg");
		appointmentDB.clear();
		appointmentDB.add(new Appointment(LocalDateTime.of(2021,12,22,10,30),guest));
	}
	private static boolean validate(String emailStr) {
		Matcher matcher = VALID_EMAIL_ADDRESS_REGEX.matcher(emailStr);
		return matcher.find();
	}

}

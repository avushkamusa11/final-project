package uni.fmi.booking.models;

import java.time.LocalDateTime;

import uni.fmi.booking.service.BookingAnHourService;

public class BookingAnHourScreenModel {

	private String name;
	private String email;
	private String message;
	private LocalDateTime bookedHour;

	public void setName(final String name) {
		this.name = name;
	}

	public void setEmail(String email) {
		this.email = email;
		
	}

	
	public void setBookingHour(LocalDateTime bookedHour) {
		this.bookedHour=bookedHour;
	}

	public void clickBookingAnHourButton() {
		message = BookingAnHourService.booking(name,email,bookedHour,message);
		
	}

	public String getMessage() {
		return message;
	}

	
	

}

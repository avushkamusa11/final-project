package uni.fmi.schedule.service;

import java.time.LocalDateTime;


import uni.fmi.models.User;

public class CalendarService {

	public static String createSchedule(final User user, final LocalDateTime startTime, final LocalDateTime endTime) {
		boolean isDentist = user.getRoles().stream().anyMatch(r->"dentist".equals(r.getCodeRole()));
		
		if(isDentist) {
			if(null == startTime || null == endTime) {
				return "Въведете валидни дати";
			}else {
				return "Успешно създадохте график";
				}
		
		}else {
			
		return  "Нямате права да създавате график";
		}
	}
	

}

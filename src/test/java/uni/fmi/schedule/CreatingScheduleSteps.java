package uni.fmi.schedule;

import static org.junit.Assert.assertEquals;

import java.time.LocalDateTime;
import java.util.Set;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.fmi.models.Role;
import uni.fmi.models.User;
import uni.fmi.schedule.service.CalendarService;

public class CreatingScheduleSteps {

	private User user;
	private LocalDateTime startTime;
	private LocalDateTime endTime;
	private String message;

	@Given("^В системата влизаме с профил с роля Зъболекар$")
	public void enterWithDentistUser() throws Throwable {
		user = new User("dentist","0893525477","dentist@abv.bg");
		final Set<Role> roles = user.getRoles();
		roles.add(new Role("dentist"));
	}

	@Given("^Отваряме екрана за създаване на график$")
	public void openCreateCalendarScreen() throws Throwable {
		//TODO implement me
	}

	@When("^Натискаме бутона за създаване$")
	public void clickCreateButton() throws Throwable {
		message = CalendarService.createSchedule(user,startTime,endTime);
	}

	@Then("^Виждаме съобщение: \"([^\"]*)\"$")
	public void checkMessage(String expectedMessage) throws Throwable {
		assertEquals(expectedMessage,message);
	}


	@Given("^В системата влизаме с профил с роля Служител$")
	public void enterWithEmployeeUser() throws Throwable {
		user = new User("employee","0893525477","employee@abv.bg");
		final Set<Role> roles = user.getRoles();
		roles.add(new Role("employee"));
	}

	@When("^Въведе начален час (\\d+),(\\d+),(\\d+),(\\d+),(\\d+)$")
	public void addStartTime(final int year,final int month,final int day,final int hour, int minute) throws Throwable {
		startTime = LocalDateTime.of(2021,12,21,10,15);
		
	}

	@When("^Въведе краен час (\\d+),(\\d+),(\\d+),(\\d+),(\\d+)$")
	public void addEndTime(final int year,final int month,final int day,final int hour, int minute) throws Throwable {
		endTime = LocalDateTime.of(2021,12,21,19,15);
	
	}

	




}

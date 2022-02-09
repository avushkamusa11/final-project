package uni.fmi.booking;

import static org.junit.Assert.assertEquals;

import java.time.LocalDateTime;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.fmi.booking.models.BookingAnHourScreenModel;

public class BookingAnHourSteps {

	private BookingAnHourScreenModel bookingAnHourScreenModel;

	@Given("^Гост-потребителя отваря екрана за запазване на час$")
	public void openBookingAnHourScreen() throws Throwable {
		bookingAnHourScreenModel = new BookingAnHourScreenModel();
	}

	@When("^Въведе име \"([^\"]*)\"$")
	public void addName(final String name) throws Throwable {
		bookingAnHourScreenModel.setName(name);
	}

	@When("^Въведе адрес за електронна поща \"([^\"]*)\"$")
	public void addEmail(final String email) throws Throwable {
		bookingAnHourScreenModel.setEmail(email);
	}

	@When("^Избере час  (\\d+),(\\d+),(\\d+),(\\d+),(\\d+)$")
	public void addHour(final int year,final int month,final int day,final int hour,final int minutes) throws Throwable {
		LocalDateTime bookedHour = LocalDateTime.of(year, month,day,hour,minutes);
		bookingAnHourScreenModel.setBookingHour(bookedHour);
	}


	@When("^Натисне бутона за резервиране час$")
	public void clickBookingAnHourButton() throws Throwable {
		bookingAnHourScreenModel.clickBookingAnHourButton();
	}

	@Then("^Вижда съобщение: \"([^\"]*)\"$")
	public void checkMessage(final String expecedMessage) throws Throwable {
		assertEquals(expecedMessage, bookingAnHourScreenModel.getMessage());
	}


}

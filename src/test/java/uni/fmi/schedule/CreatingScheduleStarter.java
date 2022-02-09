package uni.fmi.schedule;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(monochrome = true, plugin = {"pretty", "html:target/schedule-feature"},
features = {"src/test/resources/uni/fmi/schedule"}, glue = {"uni.fmi.schedule"})
public class CreatingScheduleStarter {

}

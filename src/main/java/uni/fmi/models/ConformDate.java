package uni.fmi.models;
import java.util.*;

/**
 * 
 */
public class ConformDate {
	
	
    private boolean isConform;
    private Set<Appointment> appointments;
    /**
     * Default constructor
     */
    public ConformDate() {
    }

    

    /**
     * @return
     */
    public boolean getIsConform() {
        return isConform;
    }

    /**
     * @param isConform 
     * @return
     */
    public void setIsConform(boolean isConform) {
       this.isConform=isConform;
    }

    /**
     * @return
     */
    public Set<Appointment> getAppointment() {
    	if(appointments == null) {
    		appointments = new HashSet<Appointment>();
    	}
        return appointments;
    }

    /**
     * @param appointments 
     * @return
     */
    public void setAppointment(Set<Appointment> appointments) {
        this.appointments=appointments;
    }

}
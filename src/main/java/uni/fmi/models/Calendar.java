package uni.fmi.models;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

/**
 * 
 */
public class Calendar {
	
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private Set<User> dentist;
    private Set<Appointment> appointment;
    
    /**
     * Default constructor
     */
    public Calendar() {
    }

    /**
     * @return
     */
    public LocalDateTime getStartTime() {
        return startTime;
    }

    /**
     * @param startTime 
     * @return
     */
    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
    }

    /**
     * @return
     */
    public LocalDateTime getEndTime() {
        return endTime;
    }

    /**
     * @param endTime 
     * @return
     */
    public void setEndTime(LocalDateTime endTime) {
        this.endTime = endTime;
    }

    /**
     * @return
     */
    public Set<User> getDentists() {
    	if(dentist == null) {
    		dentist=new HashSet<User>();
    	}
        return dentist;
    } 

    /**
     * @param desntists 
     * @return
     */
    public void setDentists(Set<User> desntists) {
        this.dentist = desntists;
    }

    /**
     * @return
     */
    public Set<Appointment> getAppointment() {
    	if(appointment == null) {
    		appointment= new HashSet<Appointment>();
    	}
        return appointment;
    }

    /**
     * @param appointment 
     * @return
     */
    public void setAppointment(Set<Appointment> appointment) {
        this.appointment = appointment;
    }

}
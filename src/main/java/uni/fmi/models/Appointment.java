package uni.fmi.models;
import java.time.LocalDateTime;


/**
 *   
 */
public class Appointment {
	
    private LocalDateTime reservedTime;
    private User guest;
    private Calendar freeHours;
    private ConformDate status;
    
    
    /**
     * Default constructor
     */
    public Appointment() {
    	this(null,null);
    }

    

    public Appointment(LocalDateTime reservedTime, User guest) {
		this.reservedTime=reservedTime;
		this.guest = guest;
	}



	/**
     * @return
     */
    public LocalDateTime getReservedTime() {
        return reservedTime;
    }

    /**
     * @param reservedTime 
     * @return
     */
    public void setReservedTime(LocalDateTime reservedTime) {
        this.reservedTime=reservedTime;
    }

    /**
     * @return
     */
    public User getPatient() {
        return guest;
    }

    /**
     * @param patient 
     * @return
     */
    public void setPatient(User guest) {
        this.guest = guest;
    }

    /**
     * @return
     */
    public Calendar getFreeHours() {
        return freeHours;
    }

    /**
     * @param freeHours 
     * @return
     */
    public void setFreeHours(Calendar freeHours) {
        this.freeHours=freeHours;
    }

    /**
     * @return
     */
    public ConformDate getstatus() {
        return status;
    }

    /**
     * @param status 
     * @return
     */
    public void setStatus(ConformDate status) {
        this.status = status;
    }



	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((reservedTime == null) ? 0 : reservedTime.hashCode());
		return result;
	}



	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (obj == null) {
			return false;
		}
		if (getClass() != obj.getClass()) {
			return false;
		}
		Appointment other = (Appointment) obj;
		if (reservedTime == null) {
			if (other.reservedTime != null) {
				return false;
			}
		} else if (!reservedTime.equals(other.reservedTime)) {
			return false;
		}
		return true;
	}

}
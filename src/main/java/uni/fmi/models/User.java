package uni.fmi.models;
import java.util.*;

/**
 * 
 */
public class User {
	
    private String name;
    private String phoneNumber;
    private String email;
    private Set<Role> roles;
    private Set<Calendar> calendar;
    private Set<Appointment> appointments;
    
    /**
     * Default constructor
     */
    public User() {
    	this(null,null,null);
    }

  

   



	public User(String name, String phoneNumber, String email) {
		this.name=name;
		this.email=email;
		this.phoneNumber=phoneNumber;
	}


	public User(String name, String email) {
		this.name=name;
		this.email=email;
	}







	/**
     * @return
     */
    public String getName() {
        return name;
    }

    /**
     * @param name 
     * @return
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return
     */
    public String getPhoneNumber() {
        return phoneNumber;
    }

    /**
     * @param phoneNumber 
     * @return
     */
    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    /**
     * @return
     */
    public String getEmail() {
        return email;
    }

    /**
     * @param email 
     * @return
     */
    public void setEmail(String email) {
        this.email=email;
    }

    /**
     * @return
     */
    public Set<Role> getRoles() {
    	if(roles==null) {
    		roles = new HashSet<Role>();
    	}
        return roles;
    }

    /**
     * @param roles 
     * @return
     */
    public void setRoles(Set<Role> roles) {
    	if(roles!= null) {
    		this.roles=roles;
    	}else {
    		this.roles.clear();   
    	}
        
    }

    /**
     * @return
     */
    public Set<Calendar> getCalendar() {
    	if(calendar == null) {
    		calendar = new HashSet<Calendar>();
    	}
        return calendar;
    }

    /**
     * @param schedule 
     * @return
     */
    public void setCalendar(Set<Calendar> calendars) {
        this.calendar=calendars;
    }
    
    public Set<Appointment> getAppointments() {
    	if(appointments == null) {
    		appointments = new HashSet<Appointment>();
    	}
        return appointments;
    }

    /**
     * @param schedule 
     * @return
     */
    public void setAppointments(Set<Appointment> appointments) {
        this.appointments=appointments;
    }
    
    

}
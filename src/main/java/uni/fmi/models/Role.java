package uni.fmi.models;
import java.util.*;

/**
 * 
 */
public class Role {
	
	
    private String codeRole;
    private Set<User> users;
    
    /**
     * Default constructor
     */
    public Role() {
    }

    

    public Role(String codeRole) {
		this.codeRole=codeRole;
	}



	/**
     * @return
     */
    public String getCodeRole() {
        return codeRole;
    }

    /**
     * @param codeRole 
     * @return
     */
    public void setCodeRole(String codeRole) {
        this.codeRole = codeRole;
    }

    /**
     * @return
     */
    public Set<User> getUsers() {
    	if(users == null) {
    		users = new HashSet<User>();
    	}
        return users;
    }

    /**
     * @param users 
     * @return
     */
    public void setUsers(Set<User> users) {
       this.users=users;
    }



	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((codeRole == null) ? 0 : codeRole.hashCode());
		result = prime * result + ((users == null) ? 0 : users.hashCode());
		return result;
	}



	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Role other = (Role) obj;
		if (codeRole == null) {
			if (other.codeRole != null)
				return false;
		} else if (!codeRole.equals(other.codeRole))
			return false;
		if (users == null) {
			if (other.users != null)
				return false;
		} else if (!users.equals(other.users))
			return false;
		return true;
	}
    

}
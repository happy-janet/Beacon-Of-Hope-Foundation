// user class to handle details and roles for users
class user {
	constructor(name, email, role = "user") {
		this.name = name;
		this.email = email;
		this.role = role;
	}

	// method to check if the user is a superuser
	isSuperUser() {
		return this.role === "superuser";
	}

	// method to display user details
	getUserInfo() {
		return `Name: ${this.name}, Email: ${this.email}, Role: ${this.role}`;
	}
}

// SuperUser class that extends User
class SuperUser extends User {
	constructor(name, email) {
		super(name, email, "superuser");
	}

	// super user specific actions
	grantPermission(user) {
		if (user instanceof User) {
			user.role = "admin";
			console.log(`${user.name} has been granted admin permission`);
		} else {
			console.log("Invalid user.");
		}
	}

	revokePermission(user) {
		if (user instanceof User && user.role === "admin") {
			user.role = "user";
			console.log(`${user.name} has been revoked admin permission`);
		} else {
			console.log("Invalid operation.");
		}
	}
}

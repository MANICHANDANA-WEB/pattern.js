class UserAccount {
    #username;
    #password;

    constructor(username, password) {
        this.#username = username;
        this.#password = password;
    }

    login(inputUsername, inputPassword) {
        if (
            inputUsername === this.#username &&
            inputPassword === this.#password
        ) {
            console.log("Login successful");
        } else {
            console.log("Invalid username or password");
        }
    }
}

const user1 = new UserAccount("riya", "12345");

user1.login("riya", "12345");   
user1.login("riya", "wrong");   


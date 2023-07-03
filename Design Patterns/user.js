// Variable Injection & Dependancy Injection
// 01. Parameterized constructor
// 02. Setters and Getter
// Class
var User = /** @class */ (function () {
    // Methods
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    User.login = function (credentials) {
        if (User.user == null) {
            return User.user = new User(credentials.username, credentials.password);
        }
        else {
            return User.user;
        }
    };
    User.logout = function () {
        User.user = null;
    };
    // Setters
    User.prototype.setUsername = function (username) {
        this.username = username;
    };
    User.prototype.setPassword = function (password) {
        this.password = password;
    };
    // Getters
    User.getLoggedInUser = function () {
        return User.user;
    };
    User.prototype.getUsername = function () {
        return this.username;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    return User;
}());
// Objects
var user1 = User.login({ username: "Aloisius", password: "pswd1" });
console.log(user1.getUsername());
console.log(user1.getPassword());
// User.logout();
var user2 = User.login({ username: "Charlotte", password: "passwrd2" });
console.log(user2.getUsername());
console.log(user2.getPassword());
// User.logout();
var user3 = User.login({ username: "Johnson", password: "passwrd3" });
console.log(user3.getUsername());
console.log(user3.getPassword());
// User.logout();
var user4 = User.login({ username: "Sarah", password: "passwrd4" });
console.log(user4.getUsername());
console.log(user4.getPassword());

// Variable Injection & Dependancy Injection
    // 01. Parameterized constructor
    // 02. Setters and Getter


// Class
class User{

    // Data
    private username:string;
    private password:string;

    private static user:any;

    // Methods
    private constructor(username:string, password:string){
        this.username = username;
        this.password = password;
    }

    public static login(credentials:any){
        if(User.user == null){
            return User.user = new User(credentials.username, credentials.password);
        }else{
            return User.user
        }
    }

    public static logout(){
        User.user = null;
    }

    // Setters
    setUsername(username:string){
        this.username = username;
    }
    setPassword(password:string){
        this.password = password;
    }

    // Getters
    public static getLoggedInUser(){
        return User.user
    }

    getUsername(){
        return this.username
    }
    getPassword(){
        return this.password
    }

}

// Objects
let user1:User = User.login({username: "Aloisius", password: "pswd1"});
    console.log(user1.getUsername())
    console.log(user1.getPassword())


// User.logout();
let user2:User = User.login({username: "Charlotte", password: "passwrd2"});
    console.log(user2.getUsername())
    console.log(user2.getPassword())


// User.logout();
let user3:User = User.login({username: "Johnson", password: "passwrd3"});
    console.log(user3.getUsername())
    console.log(user3.getPassword())

// User.logout();
let user4:User = User.login({username: "Sarah", password: "passwrd4"});
    console.log(user4.getUsername())
    console.log(user4.getPassword())

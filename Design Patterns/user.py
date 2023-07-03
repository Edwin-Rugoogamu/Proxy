""" 
Demonstrate Singleton Design Pattern in Python
Instantiate only 1 object of that class

STEPS
1. Create class instance variable
2. Create private constructor-like method __init__ , __new__
3. Static method that controls when the constructor is called

"""

# Class
class User():
    """class to demonstrate singleton pattern"""
    __instance = None

    @staticmethod
    def login(username, password):
        """get the current instance of the class"""
        if User.__instance is None:
            return User(username, password)
        return User.__instance

    def __init__(self, username: str, password: str):
        """ initialise/ set the instance itself"""
        if User.__instance is None:
            User.__instance = self
            self.username = username
            self.password = password
        else:
            raise Exception("User logged in") #prevent creation of multiple objects
    
    @staticmethod   
    def logout():
        """log out/ end session for current instance"""
        User.__instance = None
        
    def set_username(self, username: str):
        """set username"""
        self.username = username

    def set_password(self, password: str):
        """set the password"""
        self.password = password

    def get_username(self):
        """return the username"""
        return User.__instance.username # updated the getter for username

    def get_password(self):
        """ return the password"""
        return User.__instance.password # updated the getter for password

# Objects
user_1 = User.login("Pauline", "pkt")
print(user_1.get_username(), user_1.get_password())
user_1.logout() # need to logout for other users to log in

user_2 = User.login("Oliver", "pasd")
#user_2 = User("Oliver", "pasd") # calling User like this will return an error
print(user_2.get_username(), user_2.get_password())
# user_2.logout()

user_3 = User.login("Izo", "pwd")
print(user_3.get_username(), user_3.get_password())
# user_3.logout()

user_3 = User.login("Demma", "123")
print(user_3.get_username(), user_3.get_password())
# user_3.logout()

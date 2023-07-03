from abc import ABC, abstractmethod


class User:
    def __init__(self, username, password):
        self.username = username
        self.password = password

    #setters
    def set_username(self, username):
        self.username = username

    def set_password(self, password):
        self.password = password

    #getters
    def get_username(self):
        return self.username
    
    def get_password(self):
        return self.password


class InputDevice(ABC):
    @abstractmethod
    def input(self, data):
        pass


class Keyboard(InputDevice):
    def input(self, data):
        print("---- Inputing data from keyboard ------------------")
        print("Step1: Listen to data from keyboard")
        print("Step2: Pick data from Keyboard")
        print("Step3: Locate current cursor position")
        print("Step4: Place data in the current cursor position")
        print("Step5: Start Listening to data from keyboard")
        print("")  # Empty Print statement at end of every method


class Mouse(InputDevice):
    def input(self, data):
        print("---- Inputing data from mouse ------------------")
        print("Step1: Listen to data from mouse")
        print("Step2: Pick data from mouse")
        print("Step3: Locate current cursor position")
        print("Step4: Place data in the current cursor position")
        print("Step5: Start Listening to data from mouse")
        print("")  # Empty Print statement at end of every method


class TouchScreen(InputDevice):
    def input(self, data):
        print("---- Input Process using Screen Touch ------------------")
        print("Step1: Listen to data from Screen")
        print("Step2: Pick data from Screen")
        print("Step3: Locate current tourch position")
        print("Step4: Place data in the current tourch position")
        print("Step5: Start Listening to data from Screen")
        print("")  # Empty Print statement at end of every method


class ProcessorChip(ABC):
    @abstractmethod
    def process(self, data):
        pass


class Intel(ProcessorChip):
    def process(self, data):
        print("---- Proceessing using Intel Chip ------------------")
        print("")  # Empty Print statement at end of every method


class AMD(ProcessorChip):
    def process(self, data):
        print("---- Proceessing using AMD Chip ------------------")
        print("")  # Empty Print statement at end of every method


class Nvidia(ProcessorChip):
    def process(self, data):
        print("---- Proceessing using Nvidia ------------------")
        print("")  # Empty Print statement at end of every method


class Memory(ABC):
    @abstractmethod
    def store(self, data):
        pass


class SSD(Memory):
    def store(self, data):
        print("--------storing data on SSD----------\n")


class InternalMemory(Memory):
    def store(self, data):
        print("---- Storage Process ------------------")
        print("Step1: Receive data to be stored")
        print("Step2: Open Internal memory where data is to stored")
        print("Step3: Prepare for data storage operation")
        print("Step4: Launch storage operation")
        print("Step5: Send back signal representing the state of the storage operation")
        print("")  # Empty Print statement at end of every method


class OutputDevice(ABC):
    @abstractmethod
    def output(self, data):
        pass


class Monitor(OutputDevice):
    def output(self, data):
        print("---- Outputing to Monitor ------------------")
        print("Step1: Receive data to be output")
        print("Step2: Open monitor where data is to displayed")
        print("Step3: Prepare for data output operation")
        print("Step4: Launch output operation")
        print("Step5: Send back signal representing the state of the output operation")
        print("")


class Projector(OutputDevice):
    def output(self, data):
        print("---- Outputing to Projector ------------------")
        print("Step1: Receive data to be output")
        print("Step2: Open projector where data is to displayed")
        print("Step3: Prepare for data output operation")
        print("Step4: Launch output operation")
        print("Step5: Send back signal representing the state of the output operation")
        print("")



class Computer(ABC):
    def __init__(self, input_device, processor_chip, memory, output_device):
        # Fields
        self.brand = ""
        self.model = ""
        self.user = User(username=None, password=None)
        self.input_device = input_device
        self.processor_chip = processor_chip
        self.memory = memory
        self.output_device = output_device

    #setters
    def set_input(self, input_device:str):
        self.input_device = input_device

    def set_processor_chip(self, processor_chip):
        self.processor_chip = processor_chip

    def set_memory(self, memory):
        self.memory = memory

    def set_output_device(self, output_device):
        self.output_device = output_device   

    #getters
    def get_input(self):
        return self.input_device

    def get_processor_chip(self):
        return self.processor_chip
    
    def get_memory(self):
        return self.memory
    
    def get_output_device(self):
        return self.output_device



    # Methods
    def input(self, data):
        self.input_device.input(data)

    def process(self, data):
        self.processor_chip.process(data)  # delegation of one method to another

    def store(self, data):
        self.memory.store(data)

    def output(self, data):
        self.output_device.output(data)


# Inheritance: Desktop is inheriting from Computer
class Desktop(Computer):
    # Fields
    pass
    # Methods


# Inheritance: Laptop is inheriting from Computer
class Laptop(Computer):
    # Fields
    pass

    # Methods
    def fold(self):
        print("-----------Folding Process ----------")
        print("Step1: Folding")
        print("")


# Inheritance: Walltop is inheriting from Computer
class Walltop(Computer):
    # Fields
    pass



user = User("Shafic", "profic")

print(user.get_username(), user.get_password())

user.set_username("Bruce")
user.set_password("admin")

print(user.get_username(), user.get_password())

computer = Desktop(Keyboard(), Nvidia(), InternalMemory(), Projector())
computer.set_input(TouchScreen())
computer.input("blah")
computer.set_memory(SSD())
computer.process("see")
computer.store("1")
computer.output("12")


computer = Laptop(Mouse(), AMD(), SSD(), Projector())
computer.input("soo")
computer.process("ts")
computer.store("2")
computer.set_output_device(Monitor())
computer.output("12")

computer = Walltop(Keyboard(), Intel(), SSD(), Monitor())
computer.set_processor_chip(Nvidia())
computer.process("s")
#computer.set_memory(InternalMemory())
computer.store("3")
computer.set_input(TouchScreen())
computer.input("simsim")
computer.output("abs")


# my_laptop = Laptop()
# my_laptop.input()
# my_laptop.process(12, "hop")
# my_laptop.store("one")
# my_laptop.output()
# my_laptop.fold()

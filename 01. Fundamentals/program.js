var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    //Methods
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    User.login = function (credentials) {
        if (!User.user) {
            return User.user = new User(credentials.username, credentials.password);
        }
        else {
            return User.user;
        }
    };
    User.logout = function () {
        User.user = null;
    };
    User.prototype.getUsername = function () {
        return this.username;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    return User;
}());
var KeyBoard = /** @class */ (function () {
    function KeyBoard() {
    }
    KeyBoard.prototype.input = function (data) {
        console.log("---- Data input from Keyboard -------------------");
        console.log("Step 1: Listen to data from keyboard");
        console.log("Step 2: Pick data from keyboard");
        console.log("Step 3: Locate current cursor position");
        console.log("Step 4: Place data to the current cursor position");
        console.log("Step 5: Start listening to data from keyboard");
        console.log("");
    };
    return KeyBoard;
}());
var Mouse = /** @class */ (function () {
    function Mouse() {
    }
    Mouse.prototype.input = function (data) {
        console.log("---- Data input from Mouse -------------------");
        console.log("Step 1: Listen to data from Mouse");
        console.log("");
    };
    return Mouse;
}());
var Intel = /** @class */ (function () {
    function Intel() {
    }
    Intel.prototype.process = function (data) {
        console.log("--------------------");
        console.log("Processing using Intel Chip..");
        console.log("");
    };
    return Intel;
}());
var AMD = /** @class */ (function () {
    function AMD() {
    }
    AMD.prototype.process = function (data) {
        console.log("--------------------");
        console.log("Processing using AMD Chip..");
        console.log("");
    };
    return AMD;
}());
var Nvidia = /** @class */ (function () {
    function Nvidia() {
    }
    Nvidia.prototype.process = function (data) {
        console.log("--------------------");
        console.log("Processing using Invidia Chip..");
        console.log("");
    };
    return Nvidia;
}());
var InternalMemory = /** @class */ (function () {
    function InternalMemory() {
    }
    InternalMemory.prototype.store = function (data) {
        console.log("---- Storing data in internal memory -------------------");
        console.log("Step 1: Receive data to be stored");
        console.log("Step 2: Open internal memory where data is to be stored");
        console.log("Step 3: Prepare for data storage");
        console.log("Step 4: launch storage operation");
        console.log("Step 5: Send back signal representing the state of the storage operation");
        console.log("");
    };
    return InternalMemory;
}());
var SSD = /** @class */ (function () {
    function SSD() {
    }
    SSD.prototype.store = function (data) {
        console.log("storing data on SSD");
    };
    return SSD;
}());
var HDD = /** @class */ (function () {
    function HDD() {
    }
    HDD.prototype.store = function (data) {
        console.log("storing data on HDD");
    };
    return HDD;
}());
var Monitor = /** @class */ (function () {
    function Monitor() {
    }
    Monitor.prototype.output = function (data) {
        console.log("---- Data output from Monitor -------------------");
        console.log("");
    };
    return Monitor;
}());
var Projector = /** @class */ (function () {
    function Projector() {
    }
    Projector.prototype.output = function (data) {
        console.log("---- Data output from Projector -------------------");
        console.log("");
    };
    return Projector;
}());
// Computer Classes
var Computer = /** @class */ (function () {
    // Methods
    function Computer(brand, model, inputDevice, proccessorChip, storageDevice, outputDevice, user) {
        this.brand = brand;
        this.model = model;
        this.inputDevice = inputDevice;
        this.proccessorChip = proccessorChip;
        this.storageDevice = storageDevice;
        this.outputDevice = outputDevice;
        this.user = user;
    }
    Computer.prototype.input = function (data) {
        this.inputDevice.input(data);
    };
    Computer.prototype.process = function (data) {
        this.proccessorChip.process(data);
    };
    Computer.prototype.store = function (data) {
        this.storageDevice.store(data);
    };
    Computer.prototype.output = function (data) {
        this.outputDevice.output(data);
    };
    // Setters
    Computer.prototype.setBrand = function (brand) {
        this.brand = brand;
    };
    Computer.prototype.setModel = function (model) {
        this.model = model;
    };
    Computer.prototype.setInputDevice = function (inputDevice) {
        this.inputDevice = inputDevice;
    };
    Computer.prototype.setProcessorChip = function (proccessorChip) {
        this.proccessorChip = proccessorChip;
    };
    Computer.prototype.setStorageDevice = function (storageDevice) {
        this.storageDevice = storageDevice;
    };
    Computer.prototype.setOutputDevice = function (outputDevice) {
        this.outputDevice = outputDevice;
    };
    //setter for user
    Computer.prototype.setUser = function (user) {
        this.user = user;
    };
    //getters
    Computer.prototype.getBrand = function () {
        return this.brand;
    };
    Computer.prototype.getModel = function () {
        return this.model;
    };
    Computer.prototype.getInputDevice = function () {
        return this.inputDevice;
    };
    Computer.prototype.getProcessorChip = function () {
        return this.proccessorChip;
    };
    Computer.prototype.getStorageDevice = function () {
        return this.storageDevice;
    };
    Computer.prototype.getOutputDevice = function () {
        return this.outputDevice;
    };
    //getter for user
    Computer.prototype.getUser = function () {
        return this.user;
    };
    return Computer;
}());
var Desktop = /** @class */ (function (_super) {
    __extends(Desktop, _super);
    function Desktop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Desktop;
}(Computer));
var Laptop = /** @class */ (function (_super) {
    __extends(Laptop, _super);
    function Laptop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Fields
    // Methods
    Laptop.prototype.fold = function () {
        console.log("-----------Folding Process ----------");
        console.log("Step1: Folding");
        console.log("");
    };
    return Laptop;
}(Computer));
var Walltop = /** @class */ (function (_super) {
    __extends(Walltop, _super);
    function Walltop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Walltop;
}(Computer));
// Objects
var computer;
// can be a Desktop Computer
computer = new Desktop("HP", "XP-X2", new Mouse(), new Intel(), new InternalMemory(), new Projector(), User.login({ username: "Williamz", password: "Pwd" }));
computer.setBrand("DELL");
console.log(computer.getBrand());
console.log(computer.getUser().getUsername(), computer.getUser().getPassword());
User.logout();
// can be a Laptop Computer
computer = new Laptop("HP", "XP-X2", new KeyBoard(), new AMD(), new SSD(), new Monitor(), User.login({ username: "James", password: "password" }));
computer.process('cccgdnbhx');
computer.setInputDevice(new Mouse());
console.log(computer.getInputDevice());
computer.input("");
console.log(computer.getUser().getUsername(), computer.getUser().getPassword());
User.logout();
// // can be a walltop Computer
computer = new Walltop("HP", "XP-X2", new KeyBoard(), new Nvidia, new HDD(), new Projector(), User.login({ username: "Kevin", password: "password" }));
computer.store('cccgdnbhx');
computer.setStorageDevice(new SSD());
console.log(computer.getStorageDevice());
computer.store('x');
console.log(computer.getUser().getUsername(), computer.getUser().getPassword());

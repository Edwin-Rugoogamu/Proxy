// Create the real Google
var Google = /** @class */ (function () {
    function Google(componentType) {
        this.componentType = componentType;
        // Simulate loading data for the component
        console.log("Loading data for ".concat(this.componentType));
    }
    Google.prototype.search = function (keyword) {
        console.log("Searching ".concat(this.componentType, " for ").concat(keyword));
        // Perform the search operation for the component
    };
    return Google;
}());
// Create the proxy Browser
var Browser = /** @class */ (function () {
    function Browser(componentType) {
        this.realComponent = null;
        this.componentType = componentType;
    }
    Browser.prototype.search = function (keyword) {
        if (this.realComponent === null) {
            this.realComponent = new Google(this.componentType);
        }
        this.realComponent.search(keyword);
    };
    return Browser;
}());
// Usage
var searchEngine = new Browser("Chrome");
// The real component is only loaded when search() is called
searchEngine.search("Intel");

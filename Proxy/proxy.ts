// Define an interface for the SearchEngine
interface SearchEngine {
  search(keyword: string): void;
}

// Create the real Google
class Google implements SearchEngine {
  private componentType: string;

  constructor(componentType: string) {
    this.componentType = componentType;
    // Simulate loading data for the component
    console.log(`Loading data for ${this.componentType}`);
  }

  public search(keyword: string): void {
    console.log(`Searching ${this.componentType} for ${keyword}`);
    // Perform the search operation for the component
  }
}

// Create the proxy Browser
class Browser implements SearchEngine {
  private realComponent: Google | null = null;
  private componentType: string;

  constructor(componentType: string) {
    this.componentType = componentType;
  }

  public search(keyword: string): void {
    if (this.realComponent === null) {
      this.realComponent = new Google(this.componentType);
    }
    this.realComponent.search(keyword);
  }
}

// Usage
const searchEngine: SearchEngine = new Browser("Chrome");

// The real component is only loaded when search() is called
searchEngine.search("Intel");

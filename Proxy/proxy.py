# Define a SearchEngine abstract base class to use
from abc import ABC, abstractmethod

# Search engine inherits from ABC class
class SearchEngine(ABC):
    @abstractmethod
    def search(self):
        pass

# Create the real Google class implementing the SearchEngine
class Google(SearchEngine):
    # constructor
    def __init__(self, component_type: str):
        self.component_type = component_type
        # Simulate loading data for the component
        print("Loading data for " + self.component_type)

    def search(self, component_type):
        print("Searching " + self.component_type)
        # Perform the search operation for the component

# Create the proxy Browser class implementing the SearchEngine
class Browser(SearchEngine):
    def __init__(self, component_type: str):
        self.real_component = None
        self.component_type = component_type

    def search(self, component_type):
        if self.real_component is None:
            self.real_component = Google(self.component_type)
        self.real_component.search(component_type)

# Usage of Browser class
search_engine = Browser("Chrome")

# The real component is only loaded when search() is called
search_engine.search("Intel")

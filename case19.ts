
// IoC CONTAINER (SIMPLIFIED VERSION)


// INTERFACE

interface NewsSource {
  fetchArticles(): Promise<string[]>;
}

// IMPLEMENTATIONS

class RSSFeedSource implements NewsSource {
  async fetchArticles(): Promise<string[]> {
    return ["RSS: Article 1", "RSS: Article 2"];
  }
}

class APISource implements NewsSource {
  async fetchArticles(): Promise<string[]> {
    return ["API: Article A", "API: Article B"];
  }
}

class MockSource implements NewsSource {
  async fetchArticles(): Promise<string[]> {
    return ["Mock article"];
  }
}

// SIMPLE IoC CONTAINER

class Container {
  private static services = new Map<string, any>();

  static register(name: string, instance: any) {
    this.services.set(name, instance);
  }

  static resolve<T>(name: string): T {
    return this.services.get(name);
  }
}


// SERVICE USING DI

class NewsAggregator {
  constructor(private source: NewsSource) {}

  async showNews() {
    const articles = await this.source.fetchArticles();
    articles.forEach(a => console.log(a));
  }
}

// REGISTER SERVICES

Container.register("newsSource", new RSSFeedSource());

// resolve
const source = Container.resolve<NewsSource>("newsSource");
const app = new NewsAggregator(source);

app.showNews();

// SWAP IMPLEMENTATION

console.log("\nSwitching to API source\n");

Container.register("newsSource", new APISource());

const source2 = Container.resolve<NewsSource>("newsSource");
const app2 = new NewsAggregator(source2);


// TEST WITH MOCK

console.log("\nTesting with mock\n");

Container.register("newsSource", new MockSource());

const testSource = Container.resolve<NewsSource>("newsSource");
const testApp = new NewsAggregator(testSource);
testApp.showNews();

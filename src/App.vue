<script setup>
import ProfileSection from "./components/ProfileSection.vue";
import FeaturedItem from "./components/FeaturedItem.vue";
import ProjectList from "./components/ProjectList.vue";
import FooterSection from "./components/FooterSection.vue";
</script>

<template>
  <main class="app-container">
    <pre class="ascii-banner">
███████╗ █████╗ ███╗   ███╗███╗   ███╗ ██████╗  ██████╗ ███╗   ██╗███████╗██╗   ██╗██████╗ ███████╗██╗   ██╗
██╔════╝██╔══██╗████╗ ████║████╗ ████║██╔═══██╗██╔═══██╗████╗  ██║██╔════╝╚██╗ ██╔╝██╔══██╗██╔════╝██║   ██║
███████╗███████║██╔████╔██║██╔████╔██║██║   ██║██║   ██║██╔██╗ ██║█████╗   ╚████╔╝ ██║  ██║█████╗  ██║   ██║
╚════██║██╔══██║██║╚██╔╝██║██║╚██╔╝██║██║   ██║██║   ██║██║╚██╗██║██╔══╝    ╚██╔╝  ██║  ██║██╔══╝  ╚██╗ ██╔╝
███████║██║  ██║██║ ╚═╝ ██║██║ ╚═╝ ██║╚██████╔╝╚██████╔╝██║ ╚████║███████╗   ██║   ██████╔╝███████╗ ╚████╔╝ 
╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝     ╚═╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚═════╝ ╚══════╝  ╚═══╝  
    </pre>
    <ProfileSection />

    <FeaturedItem
      title="Honours Project"
      subtitle="An Internet Search Engine for Technical Resources"
      description="A domain-specific search engine designed to crawl, index and search high-quality technical content on the web"
      details="
              <p>
              This project is a domain-specific search engine designed for retrieving high-quality technical resources from trusted sources. The system was built to investigate whether restricting search results to curated technical documentation and educational content could improve relevance and reliability when compared to general-purpose search engines.
              </p>

              <p>
              The project was implemented as a complete information retrieval pipeline, including:
              </p>

              <ul>
                <li>Custom web crawling of selected technical websites</li>
                <li>Content extraction and processing</li>
                <li>Structured storage and indexing</li>
                <li>Keyword-based search and ranking</li>
                <li>Incremental crawling for efficient content updates</li>
              </ul>

              <p>
              An inverted index was developed to support efficient search queries, with ranking based on term frequency scoring. The crawler was designed to selectively update content only when changes were detected, reducing unnecessary processing during large crawls.
              </p>

              <p>
              Performance testing showed predictable linear scaling across crawl time, indexing time, and storage requirements as dataset size increased. Functional testing also demonstrated reliable retrieval of relevant technical results across a range of standard and edge-case queries.
              </p>

              <p>
              The project demonstrates how focused search systems can provide useful and trustworthy technical search experiences without relying on advertising-driven ranking systems or large-scale infrastructure.
              </p>
              "
    />
    <ProjectList />
    <FooterSection />
  </main>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=JetBrains+Mono:wght@400;700&display=swap");

:root {
  --bg: #0a0f17;
  --fg: #e6ecf3;
  --font-heading: "Space Mono", monospace;
  --font-body: "JetBrains Mono", monospace;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-heading);
}

body {
  background: var(--bg);
  color: var(--fg);
  font-family: var(--font-body);
  overflow-x: hidden;
}

.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;
  margin: 0 auto;
  padding: 2rem 1rem;
}

@media (max-width: 768px) {
  .app-container {
    padding: 1.5rem 0.75;
  }
}

.ascii-banner {
  font-family: monospace;
  white-space: pre;
  text-align: center;
  color: var(--fg);
  line-height: 1.2;
  overflow-x: auto;
  max-width: 100%;
  font-size: 0.6rem;
}

@media (max-width: 768px) {
  .ascii-banner {
    font-size: 0.25rem;
  }
}
</style>

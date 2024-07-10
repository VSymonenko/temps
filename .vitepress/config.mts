import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Temps",
  description: "Create template",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Use cases', link: '/use-cases' }
    ],

    sidebar: [
      {
        text: 'Use cases',
        items: [
          { text: 'Single measure', link: '/use-cases' },
        ]
      }
    ],

  }
})

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Temps",
  description: "Create template",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Cases', link: '/use-cases' }
    ],

    sidebar: [
      {
        text: 'Cases',
        items: [
          { text: 'Use cases', link: '/use-cases' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/VSymonenko/temps' }
    ]
  }
})

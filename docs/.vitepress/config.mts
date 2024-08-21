import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Temps",
  description: "Create template",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Use cases', link: '/use-cases' },
    ],
    
    sidebar: [
      {
        text: 'Use cases',
        items: [
          { text: 'Single measure', link: '/use-cases' },
        ],
      },
      { text: 'Privacy policy', link: '/privacy-policy' },
    ],
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
    uk: {
      label: 'Українська',
      lang: 'uk',
      description: 'Створення шаблонів',
      themeConfig: {
        nav: [
          { text: 'Головна', link: '/uk/' },
          { text: 'Приклади використання', link: '/uk/use-cases' },
        ],
        sidebar: [
          {
            text: 'Приклади використання',
            items: [
              { text: 'Вимірювання', link: '/uk/use-cases' },
            ],
          },
          { text: 'Політика конфіденційності', link: '/uk/privacy-policy' },
        ],
      },
    },
  },
});

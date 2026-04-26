import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DebugUI",
  description: "Debug panels made easy.",
  base: "/DebugUI/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },

    nav: [
      { text: "Home", link: "/" },
      { text: "Tutorial", link: "/tutorial/getting-started" },
      { text: "API", link: "/api/test" },
    ],

    sidebar: {
      "/tutorial/": [
        {
          text: "Tutorial",
          items: [
            { text: "Installation", link: "/tutorial/installation" },
            { text: "Getting Started", link: "/tutorial/getting-started" },
            { text: "Creating a Plugin", link: "/tutorial/creating-a-plugin" },
            { text: "Creating a Window", link: "/tutorial/creating-a-window" },
            { text: "Fusion Components", link: "/tutorial/components" },
            { text: "Creating a Command", link: "/tutorial/creating-a-command", },
          ],
        },
      ],

      "/api/": [
        {
          text: "API",
          items: [{ text: "Test", link: "/api/test" }],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/mattomatics2/DebugUI" },
    ],
  },
});

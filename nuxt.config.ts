import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  rootDir: ".",
  srcDir: "./src",
  components: true,

  ssr: true,
  target: "static",

  modules: [
    "@nuxtjs/tailwindcss",
    "unplugin-icons/nuxt",
    "@nuxt/content",
    "@vueuse/motion/nuxt",
  ],

  content: {
    highlight: {
      theme: "one-dark-pro",
    },
  },

  runtimeConfig: {
    public: {
      DISCORD: "https://linkedin.com/in/taricov",
      API_BASE: "https://twitter.com/taric_ov",
      GITHUB_REPO: "https://github.com/taricov?tab=repositories&q=d-suite",
    },
  },

  tailwindcss: {
    viewer: false,
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        types: ["unplugin-icons/types/vue"],
      },
    },
  },
});

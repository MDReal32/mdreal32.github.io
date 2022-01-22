<template>
  <div class="app">
    <aside class="aside">
      <div v-for="page in pages">
        <a :href="`#/${page.type}`" @click.prevent="setPage(page.type)">{{ page.name }}</a>
      </div>
    </aside>
    <main class="page">
      <component :is="getComponentFromPage(getActivePage().type)" />
    </main>
  </div>
</template>

<script lang="ts">
import { Page, PageType } from "./types/State";
import { defineComponent, DefineComponent } from "vue";
import Main from "./pages/Main.vue";
import About from "./pages/About.vue";

export default defineComponent({
  name: "App",
  data() {
    return { pages: this.$store.getters.allPages as Page[] };
  },
  methods: {
    setPage(page: PageType) {
      this.$store.dispatch("setPage", page);
    },
    getActivePage() {
      return this.$store.getters.currentPage;
    },
    getComponentFromPage(page: PageType) {
      const pages: Record<PageType, DefineComponent<any, any, any>> = { main: Main, about: About };
      return pages[page] || Main;
    }
  }
});
</script>

<style lang="scss" scoped>
.app {
  display: grid;
  grid-template-columns: 150px auto;

  .aside {
  }

  .main {
  }
}
</style>

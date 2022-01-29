<template>
  <div class="app">
    <aside class="aside">
      <div
        :class="{ 'link-container': true, 'active': isActive(idx) }"
        v-for="(route, idx) in routes"
        @click.prevent="setPage(idx)"
      >
        <a :href="route.path" class="link" @click.prevent>{{ route.name }}</a>
      </div>
    </aside>
    <main class="page">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { routes } from "./router";

const router = useRouter();

const isActive = (idx: number) => routes[idx].path === router.currentRoute.value.path;
const setPage = (idx: number) => router.push(routes[idx].path);
</script>

<style lang="scss" scoped>
.app {
  height: 100%;
  display: grid;
  grid-template-columns: 200px auto;
  overflow: hidden;

  .aside {
    background-color: #182db2;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 80px;
    position: sticky;

    .link-container {
      padding: 10px;
      background-color: #162654;
      width: calc(80% - 20px);
      margin: 0 0 0 5%;
      position: relative;
      --percent: 69%;
      color: #fff;
      transition: 0.2s;
      cursor: pointer;

      &.active {
        background-color: #0a1b4b;
      }

      &:hover {
        transform: scale(1.1) translate(5px, 0);
      }

      &:after {
        content: " ";
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        height: 50%;
        aspect-ratio: 2 / 1;
        background-image: linear-gradient(45deg, transparent var(--percent), #182db2 var(--percent));
      }

      &:before {
        content: " ";
        display: block;
        position: absolute;
        bottom: 0;
        right: 0;
        height: 50%;
        aspect-ratio: 2 / 1;
        background-image: linear-gradient(135deg, transparent var(--percent), #182db2 var(--percent));
      }

      .link {
        text-decoration: none;
        color: inherit;
        display: block;
      }
    }
  }

  main {
    overflow: auto;
  }
}
</style>

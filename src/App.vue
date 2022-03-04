<template>
  <div class="app">
    <aside class="aside">
      <div :class="{ groups: true, active: true }">
        <div class="grouping" :style="{ '--children-count': languages.length }">
          <button
            :class="{ button: true, animated: true, active: l === activeLanguage }"
            v-for="l in languages"
            @click="locale(l)"
          >
            <span>{{ modifyString(l || "") }}</span>
          </button>
        </div>

        <div class="grouping" :style="{ '--children-count': skillTypes.length > 3 ? 3 : skillTypes.length }">
          <button
            :class="{ button: true, animated: true, active: st === skillType }"
            v-for="st in skillTypes"
            @click="changeSkillTo(st)"
          >
            <span>{{ modifyString(st.toLowerCase() || "") }}</span>
          </button>
        </div>
      </div>

      <div
        v-for="(route, idx) in pageRoutes"
        :class="{ 'link-container': true, 'active': isActive(idx) }"
        @click.prevent="setPage(idx)"
      >
        <a :href="route.path" class="link" @click.prevent>{{ route.text }}</a>
      </div>
    </aside>
    <main class="page">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { Data } from "./types/Data";
import { Lang } from "./types/Lang";
import { modifyString } from "./utils/modifyString";
import { getPageRoutes } from "./utils/pageRoutes";
import { computed } from "vue";

const store = useStore();
const router = useRouter();
const pageRoutes = getPageRoutes();

const config = store.getters.config as Data;

const languages: Lang[] = ["az", "ru", "en"];
const skillTypes = computed(() => Object.keys(config.skillTypes));
const skillType = computed(() => store.getters.skillType as string);
const activeLanguage = computed(() => store.getters.getLang as Lang);

const locale = (lang: Lang) => store.dispatch("setLang", lang);
const isActive = (idx: number) => () => pageRoutes[idx].path === router.currentRoute.value.path;
const setPage = (idx: number) => router.push(pageRoutes[idx].path);
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

    .convertLanguage {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      padding: 5px 10px;

      .button {
        pointer-events: auto;
        cursor: pointer;
        background: #e7e7e7;
        border: none;
        padding: 10px 20px;
        margin: 0;
        font-family: inherit;
        font-size: inherit;
        position: relative;
        display: inline-block;
        outline: none;

        &:before,
        &:after {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        &.animated {
          text-transform: uppercase;
          letter-spacing: 0.05rem;
          font-weight: 700;
          font-size: 0.85rem;
          border-radius: 0.5rem;
          overflow: hidden;
          color: #fff;
          background: #fff;

          span {
            position: relative;
            mix-blend-mode: difference;
          }

          &:before {
            content: "";
            background: #0a1b4b;
            width: 130%;
            left: -15%;
            transform: skew(30deg);
            transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
          }

          &:hover::before {
            transform: translate(100%, 0);
          }
        }
      }
    }

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

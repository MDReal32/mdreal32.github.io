<template>
  <div class="container">
    <section v-for="field in fields" class="section">
      <h2>{{ field }} Skills</h2>
      <div class="bars">
        <Progressbar
          v-for="{ percentage, name, color } in progresses[field]"
          :animation-duration="0.5"
          :is-animate="isLoadingEnabled"
          :has-text-content="true"
          :percentage="percentage"
          :progressbar-color="color"
          :size="80"
          :text="name"
          :text-color="color"
          progressbar-type="circle"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import Progressbar from "../components/Progressbar.vue";
import { computed, ref } from "vue";
import { Data } from "../types/Data";
import { useStore } from "vuex";

const progresses = ref<Config>({});
const fields = ref<string[]>([]);

const store = useStore();
progresses.value = store.getters.config;
fields.value = Object.keys(store.getters.config);

const isLoadingEnabled = computed(() => store.getters.isPageReady);
</script>

<style lang="scss" scoped>
.container {
  background: #1a1a1a;
  color: #b5e853;
  min-height: 100%;

  &.content-is-loading {
    height: 100%;
    overflow: hidden;
  }

  .section {
    padding: 10px 10px 5px 10px;

    h2 {
      text-align: center;
      font-family: "Comforter", cursive;
    }

    .bars {
      display: grid;
      grid-template-columns: repeat(auto-fit, 120px);
      gap: 10px;
    }
  }

  .loading {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 20px;

    .progress-container {
      width: 100%;
    }
  }

  .fade {
    &-enter-active {
      transition: all 0.3s ease-out 0.8s;
    }

    &-leave-active {
      transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }

    &-enter-from,
    &-leave-to {
      opacity: 0;
    }
  }
}
</style>

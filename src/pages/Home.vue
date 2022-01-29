<template>
  <div :class="{ 'container': true, 'content-is-loading': isOverflow }">
    <transition name="fade">
      <section v-if="!isLoadedData" class="loading">
        <div class="progress-container">
          <h2 class="loading-data">Please wait. Loading data about me{{ getDots }}</h2>
          <Progressbar :is-percent-shown="true" :percentage="loadedPercent" />
        </div>
      </section>
    </transition>

    <transition v-for="field in fields" name="fade">
      <section class="section">
        <h2>{{ field }}</h2>
        <div class="bars">
          <Progressbar
            v-for="{ percentage, text, color } in progresses[field]"
            :animation-duration="0.5"
            :await="0.8"
            :has-text-content="true"
            :percentage="percentage"
            :progressbar-color="color"
            :size="80"
            :text="text"
            :text-color="color"
            progressbar-type="circle"
          />
        </div>
      </section>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import Progressbar from "../components/Progressbar.vue";
import { computed, ref } from "vue";
import { Props } from "../types/Props";
import random from "random";
import Axios from "axios";

const dotsCount = ref(1);
const loadedPercent = ref(0);
const isLoadedData = ref(false);
const isOverflow = ref(true);
const progresses = ref<Record<string, Props[]>>({});
const fields = ref<string[]>([]);

const interval = setInterval(() => {
  if (dotsCount.value === 5) dotsCount.value = 0;
  dotsCount.value++;

  if (isLoadedData.value) clearInterval(interval);
}, 650);

const firstLimit = random.int(35, 44);
const secondLimit = random.int(5, 9);

const loadingIntervalStep1 = setInterval(() => {
  loadedPercent.value++;
  if (loadedPercent.value >= firstLimit) clearInterval(loadingIntervalStep1);
}, 80);

const loadingIntervalStep2 = setInterval(() => {
  if (loadedPercent.value < firstLimit) return;
  loadedPercent.value++;
  if (loadedPercent.value >= firstLimit + secondLimit) clearInterval(loadingIntervalStep2);
}, 400);

const loadingIntervalStep3 = setInterval(() => {
  if (loadedPercent.value < firstLimit + secondLimit) return;
  loadedPercent.value += random.int(3, 5);

  if (loadedPercent.value >= 100) {
    loadedPercent.value = 100;
    clearInterval(loadingIntervalStep3);
    isLoadedData.value = true;
    setTimeout(() => (isOverflow.value = false), 800);
  }
}, 60);

const getDots = computed(() => Array.from({ length: dotsCount.value }).fill(".").join(""));

interface Config {}

Axios.get<Config>("https://raw.githubusercontent.com/MDReal32/MDReal32/master/config.json").then(({ data: config }) => {
  progresses.value = {
    General: [
      { text: "JavaScript", percentage: 60, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 70, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 30, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 25, color: "#E5CF1C" }
    ],
    Frontend: [
      { text: "JavaScript", percentage: 60, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 70, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 20, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 25, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 70, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 20, color: "#E5CF1C" }
    ],
    Backend: [
      { text: "JavaScript", percentage: 60, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 70, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 30, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 70, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 20, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 25, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 30, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 70, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 70, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 20, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 70, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 20, color: "#E5CF1C" }
    ]
  };

  fields.value = Object.keys(progresses.value);
});
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

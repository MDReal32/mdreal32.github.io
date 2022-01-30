<template>
  <h2 ref="rootElement">Please wait. Loading data about me{{ getDots }}</h2>
  <Progressbar class="preloader-progressbar" :is-percent-shown="true" :percentage="loadedPercent" />
</template>

<script setup lang="ts">
import Progressbar from "./Progressbar.vue";
import { computed, ref } from "vue";
import random from "random";
import { useStore } from "vuex";

const rootElement = ref<HTMLDivElement>();
const store = useStore();

const dotsCount = ref(1);
const loadedPercent = ref(0);
const isLoadedData = ref(false);

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
}, 300);

const loadingIntervalStep3 = setInterval(() => {
  if (loadedPercent.value < firstLimit + secondLimit) return;
  loadedPercent.value += random.int(3, 5);

  if (loadedPercent.value >= 100) {
    loadedPercent.value = 100;
    clearInterval(loadingIntervalStep3);
    isLoadedData.value = true;

    const parent = rootElement.value?.parentNode?.parentNode as HTMLDivElement;
    parent.classList.add("loaded");
    setTimeout(() => store.dispatch("pageReady"), 400);
    setTimeout(() => (parent.innerHTML = ""), 800);
  }
}, 30);

const interval = setInterval(() => {
  if (dotsCount.value === 5) dotsCount.value = 0;
  dotsCount.value++;

  if (isLoadedData.value) clearInterval(interval);
}, 650);
const getDots = computed(() => Array.from({ length: dotsCount.value }).fill(".").join(""));
</script>

<style scoped lang="scss">
.preloader-progressbar {
  width: 100%;
}
</style>

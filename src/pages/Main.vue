<template>
  <div :class="{ 'container': true, 'content-is-loading': isOverflow }">
    <transition name="fade">
      <section class="loading" v-if="!isLoadedData">
        <div class="progress-container">
          <h2 class="loading-data">Please wait. Loading data about me{{ getDots }}</h2>
          <Progressbar :percentage="loadedPercent" :is-percent-shown="true" />
        </div>
      </section>
    </transition>

    <transition name="fade" v-for="field in fields">
      <section class="section" v-if="isLoadedData">
        <h2>{{ field }}</h2>
        <div class="bars">
          <Progressbar
            v-for="{ percentage, text, color } in progresses[field]"
            progressbar-type="circle"
            :progressbar-color="color"
            :text-color="color"
            :text="text"
            :percentage="percentage"
            :animation-duration="0.5"
            :has-text-content="true"
            :size="80"
            :await="0.8"
          />
        </div>
      </section>
    </transition>
  </div>
</template>

<script setup lang="ts">
import Progressbar from "../components/Progressbar.vue";
import { progresses } from "../config";

const fields = Object.keys(progresses);
</script>

<style lang="scss" scoped></style>

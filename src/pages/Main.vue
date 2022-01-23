<template>
  <section v-for="field in fields">
    <h2>{{ field }}</h2>
    <Progressbar
      v-for="{ percentage, text, progressbarColor } in progresses[field]"
      progressbar-type="circle"
      :progressbar-color="progressbarColor"
      :text-color="progressbarColor"
      :text="text"
      :percentage="percentage"
      :animation-duration="0.5"
      :has-text-content="true"
      :size="80"
      :container-width="120"
    />
  </section>
</template>

<script setup lang="ts">
import Progressbar from "../components/Progressbar.vue";
import { progresses } from "../config";

const fields = Object.keys(progresses);
</script>

<style lang="scss" scoped></style>

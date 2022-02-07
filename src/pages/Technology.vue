<template>
  <pre>{{ currentGroups }}</pre>
  <pre>{{ currentSkills }}</pre>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
import { Data } from "../types/Data";
import { computed, ref } from "vue";
import { useRouter, onBeforeRouteUpdate, onBeforeRouteLeave } from "vue-router";

const store = useStore();
const router = useRouter();

onBeforeRouteUpdate((to, from, next) => {
  if (to.params.techid) techId.value = to.params.techid as string;
  next();
});

const techId = ref(router.currentRoute.value.params.techid as string);

const config = store.getters.config as Data;
const currentSkills = computed(() => config.skills[techId.value]);
const currentGroups = computed(() =>
  Array.from(new Set<string>(currentSkills.value.map(skill => skill.group as string)))
    .filter(Boolean)
    .reduce((acc, skillGroup) => {
      acc[skillGroup] = config.groups[skillGroup];

      return acc;
    }, {} as Record<string, string>)
);
</script>

<style lang="scss" scoped></style>

<template>
  <div class="resume">
    <div class="left">
      <section class="sector logo">
        <img :alt="`${t(config.name)} ${t(config.surname)}`" :src="config.image" class="me" />
      </section>

      <section class="sector">
        <h2 class="header">Social Networks</h2>

        <div class="links">
          <div v-for="{ name, icon, url } in config.socialLinks" class="link">
            <a :href="url" target="_blank">
              <img :alt="name" :src="icon" class="icon" width="20" height="20" />
              <span>@{{ getUserNameFromUrl(url) }}</span>
            </a>
          </div>
        </div>
      </section>

      <section class="sector">
        <h2 class="header">Languages</h2>

        <div class="languages">
          <div v-for="{ name, percent } in config.languages" class="language">
            <div class="language--name">{{ name }}</div>
            <Progressbar
              :has-text-content="true"
              :is-animate="isLoadingEnabled"
              :is-number-visible="false"
              :percentage="percent"
              :text="getLevelFromPercent(percent)"
              container-width="80%"
            />
          </div>
        </div>
      </section>

      <section class="sector">
        <h2 class="header">Education</h2>

        <div class="educations">
          <div v-for="{ name, location, from, to } in educations" class="education">
            <div class="name">{{ t(name) }}</div>
            <div class="location">{{ t(location.name) }} - {{ t(location.country) }}, {{ t(location.city) }}</div>
            <div v-if="to" class="from-to">{{ from }} - {{ to }}</div>
            <div v-else class="from-since">{{ tForm(from.toString(), "education.since") }}</div>
          </div>
        </div>
      </section>
    </div>
    <div class="right">
      <section class="sector about">
        <h2 class="header">{{ t(config.name) }} {{ t(config.surname) }}</h2>
        <h3 class="header">{{ t(config.description) }}</h3>

        <div class="half">
          <div class="first">
            <img
              src="https://icongr.am/material/phone.svg?size=16&color=currentColor"
              alt="Phone"
              width="16"
              height="16"
            />
            <span>{{ config.phoneNumber }}</span>
          </div>
          <div class="second">
            <img
              src="https://icongr.am/material/calendar.svg?size=16&color=currentColor"
              alt="Date"
              width="16"
              height="16"
            />
            <span>{{ birthday }}</span>
          </div>
        </div>

        <div class="half">
          <div class="first">
            <img
              src="https://icongr.am/material/email.svg?size=16&color=currentColor"
              alt="Mail"
              width="16"
              height="16"
            />
            <span>{{ config.email }}</span>
          </div>
          <div class="second">
            <img
              src="https://icongr.am/material/map-marker.svg?size=16&color=currentColor"
              alt="Marker"
              width="16"
              height="16"
            />
            <span>{{ t(config.from.city) }}, {{ t(config.from.country) }}</span>
          </div>
        </div>
      </section>

      <section class="sector">
        <h2 class="header">Skills</h2>

        <div class="skills">
          <div v-for="(skill, name) in filterByTypes(config.skills)" class="skill">
            <h4 class="skill-name">{{ name }} Skills</h4>

            <div class="skill-items">
              <div v-for="{ name, description } in groupBy(skill)" class="item">
                <div class="item-name">{{ name }}</div>
                <div class="item-description">{{ t(description || "") }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="sector">
        <h2>Work Experience</h2>

        <div class="jobs">
          <div class="job" v-for="{ name, role, description, from, to, location } in jobs">
            <div class="job-name">
              <span>{{ role }}</span>
            </div>
            <div class="job-content">
              <span class="name">{{ name }}</span>
              <span class="hyphen">&nbsp;-&nbsp;</span>
              <span class="location">{{ t(location.country) }}, {{ t(location.city) }}</span>
              <span class="hyphen">&nbsp;-&nbsp;</span>
              <span class="from-to" v-if="to">
                {{ modifyString(tForm(`${from.year} ${t(getMonth(from.month))}`, "work.from")) }}
                {{ modifyString(tForm(`${to.year} ${t(getMonth(to.month))}`, "work.to")) }}
              </span>
              <span v-else class="from-since">{{ tForm(`${from.month} ${from.year}`, "education.since") }}</span>
            </div>
            <div class="job-description">
              <span>{{ t(description || "") }}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
import { Data, OverkilledSkill } from "../types/Data";
import Progressbar from "../components/Progressbar.vue";
import { computed, ref } from "vue";
import { getMonth } from "../utils/getMonth";
import { padStart } from "../utils/padStart";
import { Lang } from "../types/Lang";
import { modifyString } from "../utils/modifyString";

const store = useStore();
const config = store.getters.config as Data;
const language = computed(() => store.getters.getLang as Lang);
const isLoadingEnabled = computed(() => store.getters.isPageReady);
const educations = computed(() => config.education.reverse());
const jobs = computed(() => config.job.reverse());
const skillTypes = computed(() => Object.keys(config.skillTypes));
const activeSkillType = computed(() => store.getters.skillType as string);
const pdf = ref();

const t = (message: string) => config.i18n[message?.slice(1)]?.[language.value] || message;
const tForm = (input: string, code: string) =>
  language.value === "az" ? `${t(input)}${t(`#${code}`)}` : `${t(`#${code}`)} ${t(input)}`;

const birthday = computed(() => {
  const { day, month, year } = config.birthday;
  return `${padStart(day, "0", 2)} ${t(getMonth(month))} ${year}`;
});

const getLevelFromPercent = (percent: number) => {
  return t(
    percent >= 100
      ? "#native"
      : percent >= 85
      ? "#advanced"
      : percent >= 70
      ? "#upper-intermediate"
      : percent >= 60
      ? "#intermediate"
      : percent >= 40
      ? "#pre-intermediate"
      : "#beginner"
  )
    .split(" ")
    .map(str => modifyString(str))
    .join(" ");
};

const getUserNameFromUrl = (url: string) => {
  const regexes = {
    github: /^(?:https?:\/\/(?:www\.)?)?github\.com\/(?<username>\w+)\/?$/,
    linkedin: /^(?:https?:\/\/(?:www\.)?)?linkedin\.com\/in\/(?<username>\w+)\/?$/
  };

  let m;
  if ((m = url.match(regexes.github))) {
    return m.groups?.username;
  }

  if ((m = url.match(regexes.linkedin))) {
    return m.groups?.username;
  }

  return url;
};

const filterByTypes = (skills: Data["skills"]) => {
  const filteredSkills: Data["skills"] = {};

  Object.entries(skills).forEach(([name, value]) => {
    if (skillTypes.value.includes(name)) {
      if (name === activeSkillType.value) {
        filteredSkills[name] = value;
      }
    } else {
      filteredSkills[name] = value;
    }
  });

  return filteredSkills;
};

const groupBy = <T extends OverkilledSkill = OverkilledSkill>(skills: T[]): T[] => {
  const newSkills: Record<string, T[]> = {};

  for (const skill of skills) {
    if (skill.group) {
      newSkills[skill.group] ||= [];
      newSkills[skill.group].push(skill);
    }
  }

  const combinedSkillsEntries = Object.entries(newSkills).map(([name, skills]) => {
    const skill = skills.reduce((acc, skill) => {
      acc.name = acc.name ? `${acc.name} / ${skill.name}` : skill.name;
      acc.description = config.groups[skill.group!];

      return acc;
    }, {} as T);

    return [name, skill];
  });
  const combinedSkills = Object.fromEntries(combinedSkillsEntries);

  const loaded = new Set<string>();
  return skills
    .map(skill => {
      if (skill.group && !loaded.has(skill.group)) {
        loaded.add(skill.group);
        return combinedSkills[skill.group];
      } else if (!skill.group) {
        return skill;
      }
    })
    .flat(1)
    .filter(Boolean) as T[];
};
</script>

<style lang="scss" scoped>
.resume {
  padding: 20px 30px;
  display: grid;
  grid-template-columns: 30% 70%;

  .left {
    padding-right: 20px;

    section.sector {
      display: flex;
      flex-direction: column;
      margin: 5px 0 5px 0;

      .header {
        text-align: left;
        margin: 20px 0 15px 0;
      }

      &.logo {
        background: #ccc;
        width: 100%;
      }

      img.me {
        width: 70%;
        margin: 0 auto;
      }

      .links {
        .link {
          a {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            gap: 10px;
            text-decoration: none;
            color: #000;

            .icon {
              max-width: 20px;
            }
          }
        }
      }

      .languages {
        .language {
          &--name {
            font-weight: bold;
            font-size: 2.4rem;
          }

          :deep(.container) {
            padding: 0 0 20px 0 !important;

            .progress {
              margin: 0 !important;

              .text-entry {
                text-align: left !important;
              }
            }
          }
        }
      }

      .educations {
        .education {
          padding-top: 10px;

          .name {
            font-weight: bold;
            font-size: 2.4rem;
          }

          .description {
          }

          .from-to {
          }

          .from-since {
          }
        }
      }
    }
  }

  .right {
    section.sector {
      display: flex;
      flex-direction: column;
      margin: 5px 0 5px 0;

      &.about {
        margin-bottom: 15px;
      }

      .header {
        text-align: left;
        margin: 20px 0 15px 0;
      }

      .half {
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        & > div {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 8px;
        }
      }

      .skills {
        .skill {
          &-name {
            font-weight: bold;
            font-size: 2.4rem;
          }

          &-items {
            margin-bottom: 20px;

            .item {
              margin: 5px 0;

              &-name {
                font-size: 2rem;
                padding-left: 4px;

                &:before {
                  content: " - ";
                }
              }

              &-description {
                padding-left: 20px;
              }
            }
          }
        }
      }

      .jobs {
        .job {
          padding: 5px 0 5px 10px;

          &-name {
            font-weight: bold;
            font-size: 2.4rem;
          }

          &-description {
            padding-left: 10px;
          }

          &-content {
            padding-left: 10px;
          }
        }
      }
    }
  }
}
</style>

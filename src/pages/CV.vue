<template>
  <button v-for="l in languages" @click="locale(l.toLowerCase())">
    {{ modifyString(l || "") }}
  </button>

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
              <img :alt="name" :src="icon" class="icon" />
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
          <div class="first">{{ config.phoneNumber }}</div>
          <div class="second">{{ birthday }}</div>
        </div>

        <div class="half">
          <div class="first">{{ config.email }}</div>
          <div class="second">{{ t(config.from.city) }}, {{ t(config.from.country) }}</div>
        </div>
      </section>

      <section class="sector">
        <h2 class="header">Skills</h2>

        <div class="skills">
          <div v-for="[name, skill] of Object.entries(config.skills)" class="skill">
            <h4 class="skill-name">{{ name }} Skills</h4>

            <div class="skill-items">
              <div v-for="{ name, description } in groupBy(skill)" class="item">
                <div class="item-name">{{ name }}</div>
                <div class="item-description">{{ t(description) }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="sector">
        <h2>Work Experience</h2>

        <div class="jobs">
          <div class="job" v-for="{ name, role, description, from, to, location } in config.work.reverse()">
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
              <span>{{ t(description) }}</span>
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

const store = useStore();
const config = store.getters.config as Data;
const isLoadingEnabled = computed(() => store.getters.isPageReady);
const educations = computed(() => config.education.reverse());
const languages = ["az", "ru", "en"];
const language = ref("az");

const locale = (lang: string) => (language.value = lang);
const t = (message: string) => config.i18n[language.value][message?.slice(1)] || message;
const tForm = (input: string, code: string) =>
  language.value === "az" ? `${t(input)}${t(`#${code}`)}` : `${t(`#${code}`)} ${t(input)}`;

const modifyString = (
  message: string,
  startIndex = 0,
  endIndex = 1,
  callback: (message: string) => string = e => e.toUpperCase()
) => callback(message.slice(startIndex, endIndex)) + message.slice(endIndex);

const birthday = computed(() => {
  const { day, month, year } = config.birthday;
  return `${padStart(day, "0", 2)} ${getMonth(month)} ${year}`;
});

const getLevelFromPercent = (percent: number) => {
  return percent >= 100
    ? "Native"
    : percent >= 85
    ? "Advanced"
    : percent >= 70
    ? "Upper-Intermediate"
    : percent >= 60
    ? "Intermediate"
    : percent >= 40
    ? "Pre-Intermediate"
    : "Beginner";
};

const getUserNameFromUrl = (url: string) => {
  const regexes = {
    github: /^(?:https?:\/\/(?:www\.)?)github\.com\/(?<username>\w+)\/?$/,
    linkedin: /^(?:https?:\/\/(?:www\.)?)linkedin\.com\/in\/(?<username>\w+)\/?$/
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

const groupBy = <T extends OverkilledSkill = OverkilledSkill>(skills: T[]): T[] => {
  const newSkills: Record<string, T[]> & { [nongroup]: T[] } = { [nongroup]: [] };

  skills.forEach(skill => {
    if (skill.group) {
      newSkills[skill.group] ||= [];
      newSkills[skill.group].push(skill);
    } else {
      newSkills[nongroup].push(skill);
    }
  });

  const combinedSkills = Object.values(newSkills).map(skills => {
    return skills.reduce((acc, skill) => {
      acc.name = acc.name ? `${acc.name} / ${skill.name}` : skill.name;
      acc.description = config.groups[skill.group!];

      return acc;
    }, {} as T);
  });

  return [...newSkills[nongroup], ...combinedSkills];
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

            img {
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
              }

              &-description {
              }
            }
          }
        }
      }
    }
  }
}
</style>

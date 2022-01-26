<template>
  <div class="container" :style="{ width: containerWidth ? `${containerWidth}px` : '100%' }">
    <div :class="{ progress: true }">
      <div v-if="isLine" class="line">
        <div :style="{ height: `${strokeHeight}px` }" class="outer">
          <div :style="barStyle" class="inner" />
        </div>
      </div>
      <div v-else :style="{ width: `${size}px`, height: `${size}px` }" class="circle">
        <svg :style="{ width: `${size}px`, height: `${size}px` }" viewBox="0 0 100 100">
          <path :d="trackPath" :stroke-width="relativeStrokeHeight" fill="none" stroke="#e5e9f2" />
          <path
            :d="trackPath"
            :stroke="props.progressbarColor || '#20a0ff'"
            :stroke-width="relativeStrokeHeight"
            :style="circlePathStyle"
            class="fillTrack"
            fill="none"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div :class="{ 'text-entry': true, 'circle': !isLine }">
        <div :style="{ color: textColor }" class="integer">
          <span v-if="isLine">{{ text }}&nbsp;</span>
          <span v-if="isLine">(</span>
          <span class="fullPart">{{ number[0] }}</span>
          <span class="point">.</span>
          <span class="fractionalPart">{{ number[1] }}</span>
          <span v-if="isLine">)</span>
        </div>
      </div>
    </div>
    <div v-if="text && !isLine" :style="{ color: textColor }" class="text">{{ text }}</div>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from "vue";

const props = defineProps({
  strokeHeight: { type: Number, default: 4 },
  percentage: { type: Number, default: 0, required: true, validator: (value: number) => value >= 0 && value <= 100 },
  progressbarType: { type: String, default: "line", validator: (val: string) => ["circle", "line"].includes(val) },
  progressbarColor: { type: String },
  hasTextContent: { type: Boolean, default: false },
  text: { type: String },
  textColor: { type: String },
  size: { type: Number, default: 100 },
  animationDuration: { type: Number, default: 1 },
  contentMaxAcceptableNumber: { type: Number, default: 10 },
  containerWidth: { type: Number, default: 150 }
});

const calculatedPercentage = reactive(ref(0));

const barStyle = computed(() => ({ width: `${calculatedPercentage.value}%`, backgroundColor: props.progressbarColor }));
const relativeStrokeHeight = computed(() => (props.strokeHeight * 100) / props.size);
const radius = computed(() => 50 - relativeStrokeHeight.value / 2);
const doubleRadius = computed(() => radius.value * 2);
const trackPath = computed(() => {
  return `M 50 50 m 0 -${radius.value} a ${radius.value} ${radius.value} 0 1 1 0 ${doubleRadius.value} a ${radius.value} ${radius.value} 0 1 1 0 -${doubleRadius.value}`;
});
const perimeter = computed(() => 2 * Math.PI * radius.value);
const circlePathStyle = computed(() => ({
  strokeDasharray: `${perimeter.value}px,${perimeter.value}px`,
  strokeDashoffset: `${(1 - calculatedPercentage.value / 100) * perimeter.value}px`
}));
const numberAsPercent = computed(() =>
  ((props.contentMaxAcceptableNumber * calculatedPercentage.value) / 100).toFixed(2)
);
const number = computed(() => numberAsPercent.value.split(`.`));
const isLine = computed(() => props.progressbarType === "line");

const stepsCount = 20;
const stepPart = props.percentage / ((stepsCount * (stepsCount + 1)) / 2);
const msPart = (props.animationDuration * 1000) / ((stepsCount * (stepsCount + 1)) / 2);

let step = stepPart * stepsCount;
let ms = msPart * stepsCount;

const timer = () => {
  calculatedPercentage.value += step;

  step -= stepPart;
  ms -= msPart;

  if (calculatedPercentage.value + stepPart >= props.percentage) {
    console.log(calculatedPercentage.value, props.percentage);
    calculatedPercentage.value = props.percentage;
    return;
  }

  setTimeout(timer, ms);
};

setTimeout(timer, ms);
</script>

<style lang="scss" scoped>
.container {
  padding: 10px;

  .progress {
    width: 100%;
    margin: 10px auto;
    position: relative;

    .line {
      display: inline-block;
      width: 98%;
      box-sizing: border-box;

      .outer {
        width: 100%;
        border-radius: 10px;
        background-color: #ebeef5;

        .inner {
          background-color: rebeccapurple;
          border-radius: 10px;
          height: 100%;
          transition: width 0.6s ease;
          text-align: right;
          line-height: 80%;

          .line-text {
            margin-left: 6px;
            display: inline-block;
            vertical-align: middle;
            margin-right: 5px;
          }
        }
      }
    }

    .circle {
      display: block;
      position: relative;
      margin: 0 auto;

      .fillTrack {
        transition: 0.1s;
      }
    }

    .text-entry {
      width: 100%;
      margin-left: 0;
      text-align: center;

      &.circle {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        margin-left: 0;
        text-align: center;
        width: 100%;
      }

      .integer {
        display: block;

        .fullPart {
          font-size: 2rem;
        }

        .point,
        .fractionalPart {
          font-size: 1.4rem;
        }
      }
    }
  }

  .text {
    text-align: center;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { CheckIcon } from "@heroicons/vue/solid";
import type PopularTitles from "./models/movies";

const eventTypes = {
  neutral: { icon: CheckIcon, bgColorClass: "bg-gray-400" },
  active: { icon: CheckIcon, bgColorClass: "bg-gray-400 bg-green-500" },
};

export default defineComponent({
  props: {
    popularTitles: Array<PopularTitles>,
  },
  data() {
    return {
      eventTypes: {
        neutral: { icon: CheckIcon, bgColorClass: "bg-gray-400" },
        active: { icon: CheckIcon, bgColorClass: "bg-gray-400 bg-green-500" },
      },
      timeline: [
        {
          id: 1,
          type: eventTypes.active,
          content: "Applied to",
          target: "Front End Developer",
          date: "Sep 20",
          datetime: "2020-09-20",
        },
        {
          id: 2,
          type: eventTypes.neutral,
          content: "Advanced to phone screening by",
          target: "Bethany Blake",
          date: "Sep 22",
          datetime: "2020-09-22",
        },
        {
          id: 3,
          type: eventTypes.neutral,
          content: "Completed phone screening with",
          target: "Martha Gardner",
          date: "Sep 28",
          datetime: "2020-09-28",
        },
        {
          id: 4,
          type: eventTypes.neutral,
          content: "Advanced to interview by",
          target: "Bethany Blake",
          date: "Sep 30",
          datetime: "2020-09-30",
        },
        {
          id: 5,
          type: eventTypes.neutral,
          content: "Completed interview with",
          target: "Katherine Snyder",
          date: "Oct 4",
          datetime: "2020-10-04",
        },
      ],
    };
  },
  setup(props) {
    props.popularTitles;
  },
});
</script>

<template>
  <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
    <h2 id="timeline-title" class="text-lg font-medium text-gray-900">
      CONTENTS
    </h2>

    <!-- Activity Feed -->
    <div class="mt-6 flow-root">
      <ul role="list" class="-mb-8">
        <li v-for="(item, itemIdx) in popularTitles" :key="item.id">
          <div class="relative pb-8">
            <span
              v-if="itemIdx !== timeline.length - 1"
              class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
              aria-hidden="true"
            />
            <div class="relative flex space-x-3">
              <div>
                <span
                  :class="[
                    eventTypes.neutral.bgColorClass,
                    'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white',
                  ]"
                >
                  <component
                    :is="eventTypes.neutral.icon"
                    class="w-5 h-5 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                <div>
                  <p class="text-sm text-gray-500">
                    {{ item.originalTitleText?.text }}
                    <a href="#" class="font-medium text-gray-900">{{
                      item.ratingsSummary?.aggregateRating
                    }}</a>
                  </p>
                </div>
                <div class="text-right text-sm whitespace-nowrap text-gray-500">
                  <span>{{ item.releaseYear?.year }}</span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="mt-6 flex flex-col justify-stretch">
      <button
        type="button"
        class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Advance to offer
      </button>
    </div>
  </div>
</template>

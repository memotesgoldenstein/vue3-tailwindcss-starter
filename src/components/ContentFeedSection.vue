<script lang="ts">
import { defineComponent } from "vue";
import { CheckIcon } from "@heroicons/vue/solid";
import type { Post } from "./models/post";

const eventTypes = {
  neutral: { icon: CheckIcon, bgColorClass: "bg-gray-400" },
  active: { icon: CheckIcon, bgColorClass: "bg-gray-400 bg-green-500" },
};

export default defineComponent({
  props: {
    postList: Array<Post>,
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
    props.postList;
  },
});
</script>

<template>
  <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
    <h2 id="timeline-title" class="text-lg font-medium text-gray-900">
      LATEST POSTS
    </h2>

    <!-- Activity Feed -->
    <div class="mt-6 flow-root">
      <ul role="list" class="-mb-8">
        <li v-for="item in postList" :key="item.id">
          <div class="relative pb-8">
            <div class="relative flex space-x-3">
              <div class="min-w-0 flex-1 pt-1.5 flex-col space-x-4">
                <div>
                  <p class="text-sm text-gray-500">
                    {{ item.title }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

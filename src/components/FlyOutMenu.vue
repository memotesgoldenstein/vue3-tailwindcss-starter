<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";

const vueTopics = [
  {
    name: "Tailwind Configuration",
    description: "Learn about tailwind configuration!",
    href: "/tailwindConfiguration",
    current: false,
  },
];
</script>

<template>
  <Popover class="relative" v-slot="{ open }">
    <PopoverButton
      :class="[
        open
          ? 'bg-gray-900 text-white'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
        'rounded-md py-2 px-3 inline-flex items-center text-sm font-medium',
      ]"
    >
      <span>Vue Js</span>
      <ChevronDownIcon
        :class="[
          open ? 'text-gray-600' : 'text-gray-400',
          'ml-2 h-5 w-5 group-hover:text-gray-500',
        ]"
        aria-hidden="true"
      />
    </PopoverButton>

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <PopoverPanel
        class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0"
      >
        <div
          class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
        >
          <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
            <router-link
              v-for="item in vueTopics"
              :key="item.name"
              :to="item.href"
              class="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
            >
              <p class="text-base font-medium text-gray-900">
                {{ item.name }}
              </p>
              <p class="mt-1 text-sm text-gray-500">
                {{ item.description }}
              </p>
            </router-link>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

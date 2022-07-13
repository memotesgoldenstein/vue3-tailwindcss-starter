<script setup lang="ts">
import FlyOutMenu from "./FlyOutMenu.vue";
const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "About", href: "/about", current: false },
];
</script>

<template>
  <nav class="hidden lg:py-2 lg:flex lg:space-x-8" aria-label="Global">
    <router-link
      v-for="item in navigation"
      :key="item.name"
      :to="item.href"
      :class="[
        item.current
          ? 'bg-gray-900 text-white'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
        'rounded-md py-2 px-3 inline-flex items-center text-sm font-medium',
      ]"
      :aria-current="item.current ? 'page' : undefined"
    >
      {{ item.name }}
    </router-link>
    <FlyOutMenu></FlyOutMenu>
  </nav>
</template>

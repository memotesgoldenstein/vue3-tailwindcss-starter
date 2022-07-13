<script setup lang="ts">
import FlyOutMenu from "./FlyOutMenu.vue";
const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
];
</script>

<template>
  <DisclosureButton
    v-for="item in navigation"
    :key="item.name"
    as="a"
    :href="item.href"
    :class="[
      item.current
        ? 'bg-gray-900 text-white'
        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
      'block rounded-md py-2 px-3 text-base font-medium',
    ]"
    :aria-current="item.current ? 'page' : undefined"
    >{{ item.name }}</DisclosureButton
  >
  <FlyOutMenu></FlyOutMenu>
</template>

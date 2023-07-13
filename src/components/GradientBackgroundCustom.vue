<script setup lang="ts">
const prodColor =ref("")
</script>

<template>
  <div
    v-motion-fade
    :delay="500"
    class="absolute inset-0 w-full h-full overflow-hidden bg-no-repeat pointer-events-none -z-10 lg:block bg-gradient-to-b from-[#168896] to-[#13131A] via-[#168896]/30"
  />
</template>

// :style="{
//   backgroundImage: `linear-gradient(
//     to top left,
//     #13131A,
//     #13131A,
//     #D7BB8725
//   )`,
//   backgroundSize: `60% 50%`,
// }"

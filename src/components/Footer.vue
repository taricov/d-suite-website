<script lang="ts" setup>
import HeartIcon from "~icons/tabler/heart";

const {
  public: { GITHUB_REPO },
} = useRuntimeConfig();
</script>

<template>
  <footer
    class="container flex flex-col items-center justify-center pb-6 mx-auto mt-24 text-white/50"
  >
    <HeartIcon class="text-xl" />

    <span>
      <!-- D-Suite by
      <Link href="https://github.com/taricov" external blank>Taric Ov</Link>, -->
      D-Suite by
      <Link href="https://github.com/taricov" external blank>@taricov</Link>
    </span>

    <Link :href="GITHUB_REPO" external blank> Open source on GitHub </Link>
  </footer>
</template>

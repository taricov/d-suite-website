<script lang="ts" setup>
import IconHome from "~icons/tabler/home";
import IconApi from "~icons/tabler/packge-import";

interface LinksProps {
    label:string;
    url: string;
    icon:Record<string, any>
    // <IconApi class="group-hover:animate-bounce"/>

}

const links: LinksProps[] = [
  {
    label: "Products",
    url: "/products",
    icon:"IconApi"
    // <IconApi class="group-hover:animate-bounce"/>
  },
  {
    label: "Connect",
    url: "/connect",
    icon:""
    // <IconApi class="group-hover:animate-bounce"/>
  },
  {
    label: "Toturial",
    url: "/toturial",
    icon:""
    // <IconApi class="group-hover:animate-bounce"/>
  },
  {
    label: "Author",
    url: "/author",
    icon:""
    // <IconApi class="group-hover:animate-bounce"/>
  },
]
</script>

<template>
  <nav
    v-motion-fade
    class="container flex flex-col items-center justify-between gap-4 mx-auto lg:flex-row lg:w-7/12"
  >
    <NuxtLink to="/">
      <img
        src="https://storage.googleapis.com/lanyard/static/lanyardtemplogo.png"
        alt="logo"
        class="w-44 lg:w-36"
      />
    </NuxtLink>

    <ul class="items-center hidden space-x-3 lg:flex text-sm">
      <li v-for="l in links" :key="l.label" class="group flex items-center space-x-2 rounded px-2 py-1 bg-white/5 hover:bg-white/30 transition duration-200">
        <Component :is="l.icon" class="group-hover:animate-bounce"/>
        <NuxtLink :href="l.url" target="_blank">{{l.label}}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

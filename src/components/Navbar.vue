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
    <NuxtLink to="/" class="font-bold text-5xl m-0">
      <svg class="" width="60" heigh="60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128.65 139.81"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M94.85,5.15,0,139.81,52.44,0H64.19Q83.17,0,94.85,5.15Z"/><polygon class="cls-2" points="52.44 0 0 139.81 0 0 52.44 0"/><path class="cls-3" d="M128.65,69.43q0,22.41-5.1,34.76a57.54,57.54,0,0,1-14.16,20.7A46.32,46.32,0,0,1,89.93,136a100.26,100.26,0,0,1-25.74,3.81H0L126.83,49.42A106.53,106.53,0,0,1,128.65,69.43Z"/><path class="cls-4" d="M126.83,49.42,0,139.81,94.85,5.15a50,50,0,0,1,19.31,14.78,61.41,61.41,0,0,1,11.06,22.42C125.85,44.67,126.38,47,126.83,49.42Z"/></g></g></svg>

      <!-- <img
        src="https://storage.googleapis.com/lanyard/static/lanyardtemplogo.png"
        alt="logo"
        class="w-44 lg:w-36"
      />-->
    </NuxtLink>

    <ul class="items-center hidden space-x-3 lg:flex text-sm">
      <li v-for="l in links" :key="l.label" class="group flex items-center space-x-2 rounded px-2 py-1 bg-white/5 hover:bg-white/30 transition duration-200">
        <Component :is="l.icon" class="group-hover:animate-bounce"/>
        <NuxtLink :href="l.url" >{{l.label}}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>


<style scoped>
.cls-1{fill:#afa6c1;}
.cls-2{fill:#d5d1e0;}
.cls-3{fill:#4a3c71;}
.cls-4{fill:#8a7ea3;}
  
  </style>
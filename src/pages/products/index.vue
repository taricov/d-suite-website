<script lang="ts" setup>
import { ref } from "vue"
const allProducts = ref<any>([
  { name: "D-Notes", description: "Take notes per page on-the-go and effortlessly.", tag: null, icon: '<svg width="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128.65 139.81"><defs><style>.notes1{fill:#35b0b0;}.notes2{fill:#74c6c9;}.notes3{fill:#115b7c;}.notes4{fill:#168896;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="notes1" d="M94.85,5.15,0,139.81,52.44,0H64.19Q83.17,0,94.85,5.15Z"/><polygon class="notes2" points="52.44 0 0 139.81 0 0 52.44 0"/><path class="notes3" d="M109.39,124.89A46.32,46.32,0,0,1,89.93,136a100.26,100.26,0,0,1-25.74,3.81H0L126.83,49.42a106.53,106.53,0,0,1,1.82,20q0,22.41-5.1,34.76a57.54,57.54,0,0,1-14.16,20.7"/><path class="notes4" d="M126.83,49.42,0,139.81,94.85,5.15a50,50,0,0,1,19.31,14.78,61.41,61.41,0,0,1,11.06,22.42C125.85,44.67,126.38,47,126.83,49.42Z"/></g></g></svg>', link: "/products/d-notes"},
  { name: "D-Profile", description: "Create an About page and tell your entreprise story, share your corporate links to reach out instantly.", tag: "Corporate", icon: '<svg width="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128.65 139.81"><defs><style>.profile1{fill:#a37389;}.profile2{fill:#c198ab;}.profile3{fill:#723456;}.profile4{fill:#8a516e;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="profile1" d="M94.85,5.15,0,139.81,52.44,0H64.19Q83.17,0,94.85,5.15Z"/><polygon class="profile2" points="52.44 0 0 139.81 0 0 52.44 0"/><path class="profile3" d="M128.65,69.43q0,22.41-5.1,34.76a57.54,57.54,0,0,1-14.16,20.7A46.32,46.32,0,0,1,89.93,136a100.26,100.26,0,0,1-25.74,3.81H0L126.83,49.42A106.53,106.53,0,0,1,128.65,69.43Z"/><path class="profile4" d="M126.83,49.42,0,139.81,94.85,5.15a50,50,0,0,1,19.31,14.78,61.41,61.41,0,0,1,11.06,22.42C125.85,44.67,126.38,47,126.83,49.42Z"/></g></g></svg>', link: "https://d-profile.vercel.app/"},
  { name: "D-Invoice", description: "Preview and navigate invoices as you never before.", tag: "Popular", icon: '<svg width="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128.65 139.81"><defs><style>.inv1{fill:#7ebb41;}.inv2{fill:#63a330;}.inv3{fill:#c8db82;}.inv4{fill:#9bc764;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="inv1" d="M94.85,5.15,0,139.81,52.44,0H64.19Q83.17,0,94.85,5.15Z"/><polygon class="inv2" points="52.44 0 0 139.81 0 0 52.44 0"/><path class="inv3" d="M128.65,69.43q0,22.41-5.1,34.76a57.54,57.54,0,0,1-14.16,20.7A46.32,46.32,0,0,1,89.93,136a100.26,100.26,0,0,1-25.74,3.81H0L126.83,49.42A106.53,106.53,0,0,1,128.65,69.43Z"/><path class="inv4" d="M126.83,49.42,0,139.81,94.85,5.15a50,50,0,0,1,19.31,14.78,61.41,61.41,0,0,1,11.06,22.42C125.85,44.67,126.38,47,126.83,49.42Z"/></g></g></svg>', link: "/products/d-bar"},
  { name: "D-Bar", description: "A Nitro-engine to shortcut your way around.", tag: null, icon: '<svg width="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128.65 139.81"><defs><style>.bar1{fill:#32ace1;}.bar2{fill:#73c6eb;}.bar3{fill:#135aa5;}.cls-4{fill:#1685c8;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="bar1" d="M94.85,5.15,0,139.81,52.44,0H64.19Q83.17,0,94.85,5.15Z"/><polygon class="bar2" points="52.44 0 0 139.81 0 0 52.44 0"/><path class="bar3" d="M128.65,69.43q0,22.41-5.1,34.76a57.54,57.54,0,0,1-14.16,20.7A46.32,46.32,0,0,1,89.93,136a100.26,100.26,0,0,1-25.74,3.81H0L126.83,49.42A106.53,106.53,0,0,1,128.65,69.43Z"/><path class="cls-4" d="M126.83,49.42,0,139.81,94.85,5.15a50,50,0,0,1,19.31,14.78,61.41,61.41,0,0,1,11.06,22.42C125.85,44.67,126.38,47,126.83,49.42Z"/></g></g></svg>', link: "/products/d-bar"},
])

</script>

<template>
  <main class="flex flex-col gap-y-10">
    <div class="w-full p-4 bg-slate-700/20 rounded-lg shadow sm:p-6">
        <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-6xl dark:text-white text-center">
            List Of Products
        </h5>
        <p class="text-sm font-normal text-gray-500 dark:text-gray-400 text-center">Learn more about our ready-to-use tools and apps to leverage your business effeciency.</p>
        <ul class="my-4 space-y-3">
          <li v-for="prod in [...allProducts]" :key="prod.name">
                <a :href="prod.link" class="flex items-center justify-between p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50/5 hover:bg-gray-100/10 group hover:shadow transition duration-300 dark:text-white">
                   <div class="flex ">
                   <span class="" v-html="prod.icon"></span>
                   <div class="">
                    <span class="flex-1 ml-3 whitespace-nowrap text-3xl">{{ prod.name }}</span>
                    <span class="font-normal block flex-1 ml-3 whitespace-nowrap text-sm text-slate-200 text-wrap">{{ prod.description }}</span>
                   </div>
                   </div>
                    <span v-show="prod.tag !== null" class="inline-flex text-md items-center justify-center px-2 py-0.5 ml-3 font-medium rounded bg-gray-900/30 text-gray-400">{{ prod.tag }}</span>
                </a>
            </li>
        </ul>
    </div>
    
  </main>
</template>
<style>

.tc{
@apply bg-gradient-to-bl from-[#4a3c71] to-[#afa6c1]
}
.bc{
@apply bg-[#4a3c71] hover:bg-[#4a3c71]/80
}
.text-wrap{
  text-wrap: wrap;
}
</style>

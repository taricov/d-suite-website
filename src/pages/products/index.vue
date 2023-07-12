<script lang="ts" setup>
import { ref } from "vue"
const allProducts = ref<any>([
  { name: "D-Notes", description: "lsdjg sjgskfsj mlgksglks jlgjsgl;jslgkjslgknds lnsgnksldgnk", tag: null, icon: '', link: "/products/d-notes"}
])
// import { useDebounceFn } from "@vueuse/shared";
// import { useReadmeProjects } from "../composables/useReadmeProjects";

// // Icons
// import IconChevronRight from "~icons/tabler/chevron-right";
// import IconChevronLeft from "~icons/tabler/chevron-left";
// import IconLogin from "~icons/tabler/login";
// import IconGithub from "~icons/tabler/brand-github";
// import IconApi from "~icons/tabler/api";

// const pageData = useReadmeProjects();
// const scrollContainer = ref<HTMLElement | null>(null);
// const playgroundInput = ref("");
// const magicPreviewError = ref(false);
// const result = reactive<any>({ lanyard: {} });
// const {
//   public: { API_BASE, DISCORD },
// } = useRuntimeConfig();

// useHead({
//   title: "Home",
// });

// const handleClick = (direction: "prev" | "next") => {
//   scrollContainer.value.scrollBy({
//     left: direction === "prev" ? -200 : 200,
//     behavior: "smooth",
//   });
// };

// const getStatus = computed<{ color: string; name: string }>(
//   () =>
//     ({
//       online: { color: "bg-green-600", name: "Online" },
//       dnd: { color: "bg-red-600", name: "Do Not Disturb" },
//       idle: { color: "bg-yellow-600", name: "Idle" },
//       offline: { color: "bg-gray-200", name: "Offline" },
//     }[result.lanyard?.data?.discord_status || "offline"])
// );

// const handleSearch = useDebounceFn(async () => {
//   if (playgroundInput.value === "") return;

//   const response = await fetch(`${API_BASE}/${playgroundInput.value}`);
//   const data = await response.json();

//   result.lanyard = data;
// }, 150);
</script>

<template>
  <main class="flex flex-col gap-y-10">
    <div class="w-full p-4 bg-slate-700/20 rounded-lg shadow sm:p-6">
        <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-6xl dark:text-white text-center">
            List Of Products
        </h5>
        <p class="text-sm font-normal text-gray-500 dark:text-gray-400 text-center">Connect with one of our available wallet providers or create a new one.</p>
        <ul class="my-4 space-y-3">
          <li v-for="prod in allProducts" :key="prod.name">
                <a :href="prod.link" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50/5 hover:bg-gray-100/10 group hover:shadow transition duration-300 dark:text-white">
                   <span v-html="prod.icon"></span>
                   <div>
                    <span class="flex-1 ml-3 whitespace-nowrap text-3xl">{{ prod.name }}</span>
                    <span class="font-normal block flex-1 ml-3 whitespace-nowrap text-sm text-slate-200">{{ prod.description }}</span>
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

</style>

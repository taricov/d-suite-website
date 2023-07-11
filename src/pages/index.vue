<script lang="ts" setup>
import { useDebounceFn } from "@vueuse/shared";
import { useReadmeProjects } from "../composables/useReadmeProjects";

// Icons
import IconChevronRight from "~icons/tabler/chevron-right";
import IconChevronLeft from "~icons/tabler/chevron-left";
import IconLogin from "~icons/tabler/login";
import IconGithub from "~icons/tabler/brand-github";
import IconApi from "~icons/tabler/api";

const pageData = useReadmeProjects();
const scrollContainer = ref<HTMLElement | null>(null);
const playgroundInput = ref("");
const magicPreviewError = ref(false);
const result = reactive<any>({ lanyard: {} });
const {
  public: { API_BASE, DISCORD },
} = useRuntimeConfig();

useHead({
  title: "Home",
});

const handleClick = (direction: "prev" | "next") => {
  scrollContainer.value.scrollBy({
    left: direction === "prev" ? -200 : 200,
    behavior: "smooth",
  });
};

const getStatus = computed<{ color: string; name: string }>(
  () =>
    ({
      online: { color: "bg-green-600", name: "Online" },
      dnd: { color: "bg-red-600", name: "Do Not Disturb" },
      idle: { color: "bg-yellow-600", name: "Idle" },
      offline: { color: "bg-gray-200", name: "Offline" },
    }[result.lanyard?.data?.discord_status || "offline"])
);

const handleSearch = useDebounceFn(async () => {
  if (playgroundInput.value === "") return;

  const response = await fetch(`${API_BASE}/${playgroundInput.value}`);
  const data = await response.json();

  result.lanyard = data;
}, 150);
</script>

<template>
  <main class="flex flex-col gap-y-10">
  <div
        v-motion-fade
        class="sweep select-none text-6xl font-bold leading-snug text-center text-transparent lg:text-center lg:text-[170px] tc m-auto bg-clip-text" style='animation-delay:0.15s; animation-fill-mode:forwards anim'>D-Suite</div>
    <header class="pb-8 space-y-8 lg:pb-14 lg:pt-10">
      <h1
        v-motion-fade
        :delay="150"
        class="text-3xl font-bold leading-snug text-center text-transparent lg:text-center lg:text-5xl tc m-auto bg-clip-text"
      >
      A FREE and Open-Source <br/>Business Toolkit 
      </h1>
      <h3
      v-motion-fade
        :delay="150"
        class="relative text-lg py-2 font-bold leading-snug text-center text-transparent lg:text-center lg:text-xl tc m-auto bg-clip-text !mt-3 before:content-[''] before:w-full before:h-full before:rounded-full before:absolute before:top-0 before:left-0 before:bg-[#afa6c1]/10"
        >
      
        D-Suite is dedicated for Daftra's users and ppl working in business in MENA
      </h3>

     

<section class="flex items-center justify-center w-full m-auto space-x-4">
    <Button
          href="/connect"
          :icon="IconLogin"
          label="Pick and Connect .. Try it now!"
          blank
          class="bc"
        />

        <Button
          href="tutorial"
          label="Learn More"
          class="bc"
          blank
        />
</section>
      
    </header>

    <hr v-motion-fade :delay="350" class="border-brand/50" />

    <section v-motion-fade :delay="400" class="py-8 space-y-10">
      <div class="space-y-2">
        <h2 class="text-2xl font-bold">What is it?</h2>

        <p class="text-white/50">
          D-Suite is a business toolkit that aims for easing the life of the ERP operators in GCC & MENA region and the way they use the Daftra ERP by providing a set of tools, utilities, apps, and browser extensions to help make their experience more convenient and save time effectively.  
        </p>
      </div>

      <div class="space-y-2">
        <h2 class="text-2xl font-bold">How does it work?</h2>

        <p class="text-white/50">
          Most of the products in the toolkit works out of the box using an API connector.
          See the <Link href="/products" external blank class="underline">list of all the products</Link>.
          We will soon provide a connection wrapper for the whole toolkit where you will be able to connect once and use all the products without much configuration.
          See the guide on <Link href="/connect" external blank class="underline">How to connect using the API Key</Link>.
        </p>
      </div>
    </section>
<!-- 



    <hr v-motion-fade-visible-once class="border-brand/50 mb-0" />
<section class="flex items-center justify-center w-full m-auto space-x-4">
    <Button
          href="/connect"
          :icon="IconLogin"
          label="Pick and Connect .. Try it now!"
          blank
          class="bc"
        />

        <Button
          href="tutorial"
          label="Learn More"
          class="bc"
          blank
        />
</section>

    <section v-motion-fade-visible-once class="py-8 space-y-4">
      <h2 class="text-2xl font-bold leading-tight">Try It Yourself</h2>

      <div class="grid gap-4 lg:grid-cols-2">
        <div class="flex flex-col space-y-4">
          <input
            v-model="playgroundInput"
            type="text"
            class="w-full px-4 py-2 transition-all rounded-lg outline-none appearance-none ring-white/30 focus:ring-1 bg-brand/40"
            placeholder="Enter user ID..."
            @keyup.capture="handleSearch"
          />

          <div class="space-y-2">
            <div class="flex items-center space-x-2">
              <span class="text-white/50">User</span>
              <span>
                {{ result.lanyard.data?.discord_user?.username || "Unknown" }}
              </span>
            </div>

            <div class="flex items-center space-x-2">
              <span class="text-white/50">User is</span>
              <div
                class="w-3 h-3 transition-colors rounded-full"
                :class="getStatus.color"
              />
              <span>{{ getStatus.name }}</span>
            </div>

            <div class="flex items-center space-x-2">
              <span class="text-white/50">Listening to Spotify</span>
              <span>
                {{ result.lanyard.data?.listening_to_spotify ? "Yes" : "No" }}
              </span>
            </div>
          </div>

          <div
            v-motion-fade
            v-if="result.lanyard.error?.code === 'user_not_monitored'"
            class="flex flex-col space-y-2"
          >
            <Button
              :href="DISCORD"
              :icon="IconLogin"
              label="Join Discord Server"
              blank
            />

            <span class="text-xs text-brand">
              Did you join the Discord server?
            </span>
          </div>
        </div>

        <div class="overflow-hidden">
          <Highlight :code="JSON.stringify(result.lanyard, null, 2)" />
        </div>
      </div>
    </section>

    <hr v-motion-fade-visible-once class="border-brand/50" />

    <section
      v-motion-fade-visible-once
      class="grid py-8 gap-y-6 gap-x-10 lg:grid-cols-2 lg:justify-between"
    >
      <div class="space-y-4 lg:pb-4">
        <h2 class="text-2xl font-bold leading-tight">The magic</h2>

        <p class="text-white/50">
          Lanyard API is meant to create whatever you want using the data it
          provides. People have already started creating amazing projects. Let's
          preview one of them,
          <Link
            href="https://github.com/cnrad/lanyard-profile-readme"
            external
            blank
            >lanyard-profile-readme</Link
          >. You can embed the result in your website or GitHub-like readme.
        </p>

        <div class="space-y-1">
          <Button
            href="/api/introduction"
            label="Read more about the API"
            :icon="IconApi"
          />

          <p class="text-xs text-white/50">
            {{
              playgroundInput && magicPreviewError === false
                ? "🤯 Now, isn't that cool?"
                : "✨ Enter user ID to see the magic"
            }}
          </p>
        </div>
      </div>

      <div class="space-y-4">
        <input
          v-model="playgroundInput"
          type="text"
          class="w-full px-4 py-2 transition-all rounded-lg outline-none appearance-none ring-white/30 focus:ring-1 bg-brand/40"
          placeholder="Enter user ID to see the magic"
          @keyup.capture="handleSearch"
        />

        <img
          v-show="playgroundInput && magicPreviewError === false"
          v-motion-fade
          :src="`https://lanyard.cnrad.dev/api/${playgroundInput}`"
          alt="lanyard profile readme"
          @error="magicPreviewError = true"
          @load="magicPreviewError = false"
        />

        <p
          v-if="magicPreviewError && playgroundInput !== ''"
          v-motion-fade
          class="text-sm leading-tight text-white/50"
        >
          Make sure you put the right ID and you joined Lanyard's Discord
          server.
        </p>
      </div>
    </section>

    <hr v-motion-fade-visible-once class="border-brand/50" />

    <section v-motion-fade-visible-once class="py-8 space-y-4">
      <div
        class="flex flex-col justify-between leading-tight lg:items-center lg:flex-row"
      >
        <h2 class="text-2xl font-bold leading-tight">Community Projects</h2>

        <div class="flex items-center space-x-2">
          <p class="text-sm text-white/50">
            {{ !pageData.loading && `${pageData.projects.length} in total` }}
          </p>

          <div class="items-center hidden space-x-1 lg:flex">
            <button
              type="button"
              class="p-1 transition-colors rounded-full bg-brand hover:bg-brand/50"
              @click="handleClick('prev')"
            >
              <IconChevronLeft />
            </button>

            <button
              type="button"
              class="p-1 transition-colors rounded-full bg-brand hover:bg-brand/50"
              @click="handleClick('next')"
            >
              <IconChevronRight />
            </button>
          </div>
        </div>
      </div>

      <div
        ref="scrollContainer"
        class="grid grid-flow-col overflow-x-auto no-scrollbar snap-x snap-mandatory gap-x-4"
      >
        <Loader v-if="pageData.loading" class="w-full h-24" />

        <p v-else-if="pageData.error" class="text-white/50">
          An error occured.
        </p>

        <CardCommunityProject
          v-else
          v-for="(project, index) in pageData.projects"
          :key="`community-project-${index}`"
          v-bind="project"
        />
      </div>
    </section>

    <hr v-motion-fade-visible-once class="border-brand/50" />

    <section v-motion-fade-visible-once class="py-8 space-y-4">
      <h2 class="text-2xl font-bold leading-tight">Used By</h2>

      <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/50">
        <Loader v-if="pageData.loading" class="w-full h-40" />

        <p v-else-if="pageData.error" class="text-white/50">
          An error occured.
        </p>

        <Link
          v-else
          v-for="website in pageData.websites"
          :key="`used-by-${website}`"
          :href="`https://${website}`"
          external
          blank
        >
          {{ website }}
        </Link>
      </div>
    </section>

    <hr v-motion-fade-visible-once class="border-brand/50" />

    <Stargazers /> -->
  </main>
</template>
<style>

.anim{
  color: #fff;
  font-size: 10vw;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 6px;
  display: inline-block;
  position: relative;
  font-family: 'Merriweather', serif;
  mask-image: linear-gradient(-75deg, rgba(187, 49, 49, 0.6) 30%, #000 50%, rgba(0,0,0,.6) 70%);
  -webkit-mask-image: linear-gradient(-75deg, rgba(187, 49, 49, 0.6) 30%, #000 50%, rgba(0,0,0,.6) 70%);
  mask-size: 200%;
  -webkit-mask-size: 200%;
  animation: shine 2s linear infinite;
}

@keyframes shine {
  from { -webkit-mask-position: 150%; }
  to { -webkit-mask-position: -50%; }
}
.tc{
@apply bg-gradient-to-bl from-[#4a3c71] to-[#afa6c1]
}
.bc{
@apply bg-[#4a3c71] hover:bg-[#4a3c71]/80
}

</style>

<script lang="ts" setup>

const avatar = ref("https://www.thesamuraination.com/_next/image?url=%2Fstatic%2Fimages%2Fme.jpeg&w=256&q=75")
useHead({
  title: "Author",
});

</script>

<template>
  <main class="flex flex-col gap-y-10">
    <div class="mb-2">
      <div class="container flex justify-center mx-auto pt-16">
        <div>
          <p class="text-6xl text-center font-bold pb-1">Author</p>
          <h1
            class="text-md text-center pb-4 mx-auto text-slate-100/50 capitalize"
          >
            About the project author and a background
          </h1>
        </div>
      </div>
      <div class="w-full px-10 pt-10">
        <div class="container mx-auto">
          <div
            role="block"
            aria-label="about the author..."
            class="flex items-center justify-center"
          >
            <div
              role="listitem"
              class=" relative mt-16"
            >
              <div class="rounded overflow-hidden shadow-md hover:shadow-xl transition duration-200">
                <div class="absolute -mt-20 w-full flex justify-center">
                  <div class="h-32 w-32">
                    <img
                      :src="avatar"
                      alt="Taric Ov's personal image"
                      role="img"
                      class="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div class="px-6 mt-16">
                  <h1 class="font-bold text-3xl text-center mb-1">Taric Ov</h1>
                  <p class="mx-auto text-sm text-center shadow px-3 py-1 bg-slate-300/5 rounded w-fit">Software Engineer</p>
                  <p class="text-center  text-base pt-3 font-normal">
                    Software Eng. 🎧 I build something new every week 💪 Samurai 🥷 Radio-ist @thesamuraination.com 🎙️ content creator ✏️ AI hassler 🤖
                  </p>
                  <div class="w-full flex justify-center pt-5 pb-5">
                    <a target="_blank" href="https://github.com/taricov"  class="mx-5 hover:opacity-70 transition duration-300">
                      <div aria-label="Github" role="img">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-github"
                        >
                          <path
                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                          ></path>
                        </svg>
                      </div>
                    </a>
                    <a target="_blank" href="https://linkedin.com/in/taricov"  class="mx-5 hover:opacity-70 transition duration-300">
                      <div aria-label="Twitter" role="img">
                        
<svg xmlns="http://www.w3.org/2000/svg"   width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-github"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      </div>
                    </a>
                   
                    <a target="_blank" href="https://instagram.com/taric.ov"  class="mx-5 hover:opacity-70 transition duration-300">
                      <div aria-label="Instagram" role="img">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-instagram"
                        >
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path
                            d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                          ></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style>
.tc {
  @apply bg-gradient-to-bl from-amber-200 to-lime-600;
}
.bc {
  @apply bg-lime-500/60 hover:bg-lime-500/80;
}
</style>

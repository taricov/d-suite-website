<template>
  <div class="flex flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-32 md:px-0">
    <div class="flex flex-col items-center max-w-2xl md:px-8">
      <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider  uppercase rounded-full bg-teal-accent-400">
            Start Now
          </p>
        </div>
        <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight  sm:text-4xl md:mx-auto">
          <span class="relative inline-block">
           
            <!-- <span class="relative">The</span> -->
          </span>
          Connect Now and Start using right away!
        </h2>
        <p class="text-base  md:text-lg">
          This is a connector wrapper to connect your Daftra's account to D-Suite's ecosystem, then you would plug and play.
        </p>
      </div>
      <form class="flex flex-col items-center w-full mb-4 md:flex-row">
        <input
          placeholder="Subdomain"
          required=""
          type="text"
          class="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-[#4a3c71]/90 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:outline-none focus:shadow-outline"
        />
        <input
          placeholder="API Key"
          required=""
          type="text"
          class="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-[#4a3c71]/90 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:outline-none focus:shadow-outline"
        />
        <button
          type="submit"
          class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto focus:shadow-outline focus:outline-none bc"
        >
          Connect
        </button>
      </form>
      <a href="/tutorial" target="_blank" class="hover:opacity-70 transition duration-300 mb-10 text-sm text-center capitalize underline">
        need any help with how to connect...?
      </a>
      <p class="mb-10 text-sm text-center">
        When registered, you will be able to pick the tools/apps you want to use without any further configuration steps! When You Connect, You aleady Connected!
      </p>
    </div>
    <img src="https://kitwind.io/assets/kometa/half-browser.png" class="w-full max-w-screen-sm mx-auto rounded shadow-2xl md:w-auto lg:max-w-screen-md" alt="" />
  </div>
</template>



<style scoped>
.tc{
  @apply bg-gradient-to-bl from-[#4a3c71] to-[#afa6c1]
  }
  .bc{
  @apply bg-[#4a3c71] hover:bg-[#4a3c71]/80
  }
  
  </style>
  

<template>
    <div class="min-h-screen px-6 py-10 text-white lg:px-0">
  <!-- <Navbar /> -->
  <slot />
  <!-- <NuxtPage class="container py-16 mx-auto lg:w-7/12" /> -->
  <Footer />

  <!-- Absolute items -->
  <!-- <FloatingButton /> -->
  <NuxtLoadingIndicator color="#fff" />
  <GradientBackgroundCustom />
  
</div>
</template>
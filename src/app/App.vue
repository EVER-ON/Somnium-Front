<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from '@/shared/ui/Header.vue';
import Footer from '@/shared/ui/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the app takes at least the full viewport height */
}

header {
  /* Styling for the header if needed */
}

main {
   /* Allow the main content area to grow and take available space */
}

footer {
  /* Styling for the footer if needed */
}
</style>

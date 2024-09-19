<template>
  <div id="app">
    <!-- Используем v-show, чтобы только скрыть элемент, оставляя его в DOM -->
    <div v-show="isMainRoute" class="background-image"></div>
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/shared/ui/Header.vue';
import Footer from '@/shared/ui/Footer.vue';
import {computed} from 'vue';
import {useRoute} from 'vue-router';

export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    const route = useRoute();

    const isMainRoute = computed(() => route.path === '/main');

    return {
      isMainRoute,
    };
  }
};
</script>

<style scoped>

html, body{
  min-width: 100%;
  margin: 0;
}
#app {

  min-width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the app takes at least the full viewport height */


  overflow-x: hidden/* Ensure the background image is positioned relative to this container */

}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh; /* Cover the whole viewport height */
  background-image: url("@/resources/images/backgroundIce.png"); /* Укажите путь к вашему изображению */
  background-repeat: no-repeat;
  background-position: center; /* Центрирование изображения */
  background-size: cover; /* Сделать изображение адаптивным */
  z-index: -1; /* Поместить фоновое изображение под другими элементами */
}

header {
  /* Styling for the header if needed */
}

main {
  position: relative;
  min-height: 100vh;
}

footer {
  /* Styling for the footer if needed */
}
</style>

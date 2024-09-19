<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();

    const isWikiRoute = computed(() => route.path === '/wiki');

    return {
      isWikiRoute
    };
  }
};
</script>

<template>
  <header>
    <a href="/main" class="logo">
      <div class="logo-img">
        <img v-if="isWikiRoute" src="@resources/images/CatHead24_nerd.svg" draggable="false"/>
        <img v-else src="../../resources/images/CatHead24.svg" draggable="false"/>
      </div>
    </a>

    <input type="checkbox" name="menu" id="menu">
    <label for="menu">
      <font-awesome-icon :icon="['fas', 'bars']" />
    </label>

    <nav class="navbar">

      <router-link to="/main">Главная</router-link>
      <router-link to="/wiki">Вики</router-link>
      <router-link to="/dynamic-map">Карта</router-link>
      <router-link to="/main">Правила</router-link>
      <router-link to="/wiki">Прочее</router-link>

    </nav>
    <div class="container">
      <div class="avatar">
        <img src="@resources/images/steve.png" draggable="false"/>
      </div>
      <div class="info">
        <span>Приветствуем, Незнакомец</span>
        <div class="buttons">
          <button>Войти</button>
          <button>Зарегистрироваться</button>
        </div>
      </div>
    </div>
  </header>
</template>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-style: normal;
  border: none;
  outline: none;
  text-decoration: none;
  list-style:none;
  text-transform: capitalize;
}



html{
  font-size: 62.5%;


}
body{


  height: 100vh; /* Sets the height to full viewport height */
  margin: 0; /* Removes default margin */


}
header {

  position:fixed;
  width: 100%;
  height: 7rem;
  top: 0;
  left: 0;
  background: var(--background);
  box-shadow: var(--box-shadow);
  padding: 2rem 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  opacity: 80%;
  border-bottom: 2px solid rgba(255,255,255, 0.1); /* Параметры линии внизу */

}
header .logo {
  font-size: 3rem;
  color: var(--white);
  transition: 0.5s;


}
header .logo span{
  color: var(--white);
  cursor: pointer;
  visibility: hidden;
  opacity: 0;


}


header .logo-img:hover img {
  -webkit-filter: brightness(70%);
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
}

header .logo-img {
  width: 8rem;
  height: 8rem;
  border-radius: 2rem;

}
header .logo-img img{
  -webkit-filter: brightness(100%);
  width: 100%;
  height: auto;
  padding: 0.5rem;
  transition: transform 0.5s ease; /* Плавная анимация */ /* Анимация для изменения размера */


}
header .navbar a{
  margin-right: auto;
  font-size: 2rem;
  margin-left: 2rem;
  color: var(--white);
  transition: 0.5s;
}

header .navbar a:hover{
  color: var(--pastel-blauw);
}

header input{
  display: none;
}
header label {
  font-size: 3rem;
  color: var(--white);
  cursor: pointer;
  visibility: hidden;
  opacity: 0;
}

.container {
  display: flex;
  align-items: center;

}

.avatar img {
  width: 5rem;
  height: 5rem;
  border-radius: 1rem;
  margin-right: 1rem;
  border: 2px solid rgba(255,255,255, 0.1);
}
.info{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.info span {
  font-size: 1.6rem;
  color: white;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.buttons {
  display: flex;
  gap: 1rem;
}

.buttons button {
  padding: 0.5rem 1.5rem;
  border: 1px solid rgba(255,255,255, 0.1);
  background: transparent;
  color: white;
  font-size: 1.4rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.3s;
}

.buttons button:hover {
  background-color: var(--pastel-blauw);
  backdrop-opacity: 0.1;

}


/*media queries */
@media (max-width: 1200px) {
  html {
    font-size: 55%;
  }
}

@media (max-width: 770px) {
  header label{
    visibility: visible;
    opacity:1;

  }


  header .navbar {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: var(--background);
    background-opacity: 0.7;
    padding: 1rem 2rem;
    border-top: .1rem solid rgba(0,0,0, 0.1);
    box-shadow: var(--box-shadow);
    transform-origin: top;
    transform: scale(0);
    opacity: 0;

  }
  header .navbar a {
    display: block;
    margin: 2rem 0;
    font-silent: 1.8rem;

  }
  header input:checked ~ .navbar {
    transform: scale(1);
    opacity: 1;
  }
  .info p{
    display: none;
    visibility:hidden;
    opacity: 0;
  }

  .avatar {
    display: none;
    visibility:hidden;
    opacity: 0;
  }

}

@media (max-width: 450px) {
  html {
    font-size: 50%;
  }
}



</style>

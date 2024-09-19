<script>
export default {
  data() {
    return {
      showNotification: false
    };
  },
  methods: {
    copyIP() {
      // Копируем текст в буфер обмена
      navigator.clipboard.writeText('play.somnium-craft.su')
          .then(() => {
            // Показать уведомление
            this.showNotification = true;

            // Убрать уведомление через 2 секунды с анимацией
            setTimeout(() => {
              const toast = document.querySelector('.custom-toast');
              if (toast) {
                toast.classList.add('fade-out');
              }
            }, 1500);

            // Скрыть уведомление после анимации
            setTimeout(() => {
              this.showNotification = false;
            }, 2000);
          })
          .catch(err => {
            console.error('Failed to copy: ', err);
          });
    }
  }
}
</script>

<template>
  <main>
    <div class="top-content">
      <span>SomniumCraft</span>
      <div class="button-container">
        <button id="start-play">Начать играть</button>
        <button id="ip-server" @click="copyIP">ip:play.somnium-craft.su</button>
      </div>
    </div>
    <div class="features-content"></div>
    <!-- Кастомное уведомление -->
    <div v-if="showNotification" class="custom-toast">
      IP адрес скопирован!
    </div>
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  border: none;
  outline: none;
  text-decoration: none;
  list-style:none;
  text-transform: none;
}
html{
  height: 100%;
  margin: 0;
}
body {

}
main {
  background-image: url("@resources/images/backgroundIce.png"); /* Фон для основного контейнера */
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;
  position: relative;
  min-height: 100vh;
  padding-top: 7rem;
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
  width: 100vw;
  flex-direction: column;
  flex-grow: 1;
}

.top-content {
  position: static;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.9);
  font-size: calc(var(--font-size-button) * 4);
  width: 100vw;
  z-index: 10;
  min-height: 60vh;
  background-color: rgba(4, 4, 4, 0.4);
  backdrop-filter: blur(4px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: var(--box-shadow);
}

.button-container {
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 2rem;
}

:root {
  --font-size-button: 2rem;
}

.button-container button {
  font-style: normal;
  text-decoration: none;
  font-size: calc(var(--font-size-button));
  font-weight: 600;
  padding: calc(var(--font-size-button) * 0.7) calc(var(--font-size-button) * 1.5);
  border: 0rem solid #000;
  border-radius: 30px;
  display: inline-block;
  box-shadow: inset 0px -2px 15px -9px #2D2D2D;
  cursor: pointer;
}

.button-container button:hover {
  -webkit-filter: brightness(115%);
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
}

#start-play {
  background: #649bff linear-gradient(to right, #649bff, #3f6bbb);
  color: #fff;
}

#ip-server {
  background: #1a1c25 linear-gradient(to right, #1a1c25, #222532);
  color: #fff;
}

.features-content {
  background-color: var(--background);
  min-height: 20vh;
  width: 100%;

}

.custom-toast {
  position: fixed;
  bottom: var(--font-size-button);
  left: 50%;
  transform: translateX(-50%) translateY(50px);
  background-color: rgba(29, 30, 38, 0.7);
  color: white;
  padding: calc(var(--font-size-button) / 2) calc(var(--font-size-button) * 2);
  border-radius: calc(var(--font-size-button) * 2);
  box-shadow: var(--box-shadow);
  opacity: 0;
  transition: opacity 0.5s ease, transform 0.5s ease;
  z-index: 9999;
  animation: fadeIn 0.5s ease forwards;
  backdrop-filter: blur(5px);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

.custom-toast.fade-out {
  opacity: 0;
  transform: translateX(-50%) translateY(50px);
}

@media (max-width: 1200px) {
  :root {
    --font-size-button: 1.5rem;
  }

  .custom-toast {
    font-size: 60%;
  }
}

@media (max-width: 770px) {
  :root {
    --font-size-button: 1rem;
  }

  .custom-toast {
    font-size: 40%;
  }
}
</style>
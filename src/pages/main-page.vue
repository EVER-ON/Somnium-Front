<template>
  <main>
    <div class="top-content">
      <span>SomniumCraft</span>
      <div class="button-container">
        <button id="start-play">Начать играть</button>
        <button id="ip-server" >ip:play.somnium-craft.su</button>
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
  background-repeat:no-repeat;
  background-size:cover;
  position: relative;
  min-height: 100vh;
  padding-bottom: 0rem;
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
  padding-top: 10rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(255,255,255, 0.9);
  font-size: calc(var(--font-size-button)*4);
  width: 100vw;
  z-index: 10;
  min-height: 60vh;
  background-color: rgba(4,4,4, 0.4);
  backdrop-filter: blur(3px);
  border-bottom: 1px solid rgba(255,255,255, 0.1);
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
  padding: calc(var(--font-size-button)*0.7) calc(var(--font-size-button) * 1.5);
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
#start-play{
  background: linear-gradient(to right,#649bff ,#3f6bbb);
  background-color: #649bff;
  color: #fff;
}
#ip-server{
  background: linear-gradient(to right,#1a1c25 ,#222532);
  background-color: #1a1c25;
  color: #fff;
}
.features-content {
  background-color: var(--background);
  min-height: 30vh;
  width: 100%;

}
@media (max-width: 1200px) {
  :root {
    --font-size-button: 0.7rem;
  }
}
@media (max-width: 770px) {
  :root {
    --font-size-button: 0.5rem;
  }
}
</style>
<script>
export default {}
</script>

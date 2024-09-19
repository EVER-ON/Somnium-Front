<script setup>

</script>

<template>

  <div class="avatar">
    <img src="@resources/images/steve.png" draggable="false"/>
  </div>
  <div class="info">
    <p>Приветствуем, Незнакомец</p>
    <div class="buttons">
      <button>Войти</button>
      <button>Зарегистрироваться</button>
    </div>
  </div>

</template>

<style scoped>


.avatar img {
  width: 5rem;
  height: 5rem;
  border-radius: 1rem;
  margin-right: 1rem;
  border: 2px solid rgba(255,255,255, 0.1);
}

.info p {
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




</style>
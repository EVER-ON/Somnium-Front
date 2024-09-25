<template>
  <div class="newsSection">
    <div class="newsBar">
      <font-awesome-icon :icon="['fas', 'rotate-right']" />
      <span>Новости</span>
    </div>
    <div class="news">
      <div v-for="newsItem in news" :key="newsItem.id" class="news-item">
        <img v-if="newsItem.img" :src="newsItem.img" alt="" class="news-image" />
        <div class="text">
          <div class="title">{{ newsItem.title }}</div>
          <div class="description">
            <p>{{ truncatedDescription(newsItem.description) }}</p>
          </div>
          <div class="date_and_time">
            <span class="date">{{ newsItem.date }}</span>
            <span class="time">{{ newsItem.time }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      news: [
        {
          id: 1,
          title: 'Обновление Minecraft 1.20: Новые биомы и существа',
          description: 'С последним обновлением в Minecraft появились новые биомы, включая загадочные леса и ледяные равнины. Игроки теперь могут столкнуться с новыми существами и предметами.',
          img: 'src/resources/images/image.png',
          date: "10.02.2024",
          time: "18:00"
        },
        {
          id: 2,
          title: 'Как построить замок в Minecraft: пошаговое руководство',
          description: 'В этой статье мы расскажем, как построить величественный замок, используя различные блоки и техники строительства. Следуйте нашему руководству!',
          img: 'src/resources/images/image.png',
          date: "11.02.2024",
          time: "10:30"
        },
        {
          id: 3,
          title: 'Новые мобы в Minecraft: чего ожидать в следующем обновлении',
          description: 'В новом обновлении разработчики добавят несколько новых мобов, каждый из которых будет обладать уникальными способностями и поведением.',
          img: 'src/resources/images/image.png',
          date: "12.02.2024",
          time: "14:15"
        },
        {
          id: 4,
          title: 'Лучшие моды для Minecraft в 2024 году',
          description: 'Собрали для вас топовые моды, которые сделают вашу игру еще более увлекательной. Узнайте, как их установить и какие функции они добавляют.',
          img: 'src/resources/images/image.png',
          date: "13.02.2024",
          time: "09:00"
        },
        {
          id: 5,
          title: 'Топ-10 самых креативных построек в Minecraft',
          description: 'Посмотрите на самые удивительные постройки, созданные игроками по всему миру. Возможно, они вдохновят вас на создание собственного шедевра.',
          img: 'src/resources/images/image.png',
          date: "14.02.2024",
          time: "11:45"
        },
        {
          id: 6,
          title: 'Как приручить животных в Minecraft: советы и трюки',
          description: 'Научитесь, как приручать различных животных в Minecraft и использовать их в своих приключениях. Пошаговые инструкции и советы.',
          img: 'src/resources/images/image.png',
          date: "15.02.2024",
          time: "16:20"
        },
        {
          id: 7,
          title: 'Стратегии выживания в Minecraft: от новичка до мастера',
          description: 'Обзор эффективных стратегий, которые помогут вам выжить в жестоком мире Minecraft. От простых до сложных методов.',
          img: 'src/resources/images/image.png',
          date: "16.02.2024",
          time: "12:00"
        },
        {
          id: 8,
          title: 'Обзор новых предметов в Minecraft 1.20',
          description: 'В последнем обновлении добавлены новые предметы, которые обогатят игровой процесс. Узнайте, как их использовать!',
          img: 'src/resources/images/image.png',
          date: "17.02.2024",
          time: "08:30"
        },
        {
          id: 9,
          title: 'Как создать автоматические фермы в Minecraft',
          description: 'Изучите, как построить автоматические фермы для получения ресурсов с минимальными затратами. Полезные советы для игроков.',
          img: '',
          date: "18.02.2024",
          time: "15:00"
        },
        {
          id: 10,
          title: 'Советы по игре в Minecraft: улучшите свои навыки',
          description: 'Собрали лучшие советы от опытных игроков, которые помогут вам стать мастером Minecraft. Применяйте их на практике!',
          img: 'src/resources/images/image.png',
          date: "19.02.2024",
          time: "19:45"
        }
      ]
    }
  },
  mounted() {
    this.sortNews();
  },
  methods: {
    truncatedDescription(description) {
      if (description.length > 380) {
        return description.slice(0, 380) + '...';
      }
      return description;
    },
    sortNews() {
      this.news.sort((a, b) => {
        const dateA = new Date(`${a.date.split('.').reverse().join('-')}T${a.time}`);
        const dateB = new Date(`${b.date.split('.').reverse().join('-')}T${b.time}`);
        return dateB - dateA;
      });
    }

  }
}
</script>


<style scoped>
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
  list-style: none;
  text-transform: capitalize;
}

.newsSection {
  width: 60%;
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem;

}

.newsBar {
  color: white;
  display: flex;
  align-items: center;
  background-color: #191C25;
  width: 100%;
  margin-bottom: 2rem;
  font-size: 3rem;
  border-radius: 30px;
  padding: 0.5rem 2rem;
  gap: 2rem;
}

.news {
  padding: 0 1rem;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 30%; /* Устанавливаем максимальную высоту */
  overflow-y: auto; /* Добавляем прокрутку */


}






.news-item {
  display: flex;
  align-items: stretch;
  width: 100%;
  gap: 1rem;
  height: 200px; /* Фиксированная высота для новостей */
}

.news-image {
  width: 30%;
  height: auto;/* Фиксированная ширина для изображения */
  object-fit: cover; /* Обрезка изображения */
  border-radius: 30px;
}

.text {

  display: grid;
  grid-template-areas:
    "A A A A   A A A A   A A A A"
    "B B B B   B B B B   B B B B"
    "B B B B   B B B B   B B B B"
    "B B B B   B B B B   B B B B"
    "B B B B   B B B B   B B B B"
    "B B B B   B B B B   B B B B"
    "B B B B   B B B B   B B B B"
    "C C C C   C C C C   C C C C";
  padding: 1.5rem;
  height: auto;
  width: 100%;
  background-color: #191C25;
  border-radius: 30px;
}

.title {
  grid-area: A;
  font-size: 110%;
  color: rgba(255, 255, 255, 0.8);
}

.description {
  grid-area: B;
  color: rgba(255, 255, 255, 0.5);
  max-height: 15rem; /* Ограничиваем высоту для description */
  overflow: hidden; /* Скрываем переполнение */
}

.date_and_time{
  grid-area: C;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>

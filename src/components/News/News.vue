<template>
  <section class="diva md:pt-10 pb-5">
    <div
      class="lg:w-[72%] md:w-full w-11/12 m-auto lg:flex justify-between py-5"
    >
      <img
        src="https://mykaleidoscope.ru/uploads/posts/2022-08/1659584419_36-mykaleidoscope-ru-p-musulmanskie-oboi-dizain-krasivo-foto-38.jpg"
        alt=""
        class="lg:w-3/6 md:w-[95%] md:h-[28rem] m-auto rounded-lg"
      />
      <p
        class="text-color1 font-serif lg:px-5 md:px-4 px-2 lg:text-left md:text-center lg:py-0 py-5 md:text-[1rem] leading-normal text-sm l"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi mollitia
        aliquid asperiores voluptate laudantium magnam illum doloremque ratione
        possimus reiciendis! Corporis fugiat atque, rem vel maiores suscipit
        unde? Doloremque, debitis! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Magni unde, quam fuga dolorum praesentium modi
        incidunt rerum culpa? Magni perferendis provident distinctio a tempora
        illum dolores odit hic sit quasi! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Fugiat iusto corrupti ipsa aperiam ipsum veniam ut ex
        officiis nobis! Cumque veniam architecto deleniti dolore provident autem
        ut hic consequuntur maiores. illum doloremque ratione possimus
        adipisicing elit. Fugiat iusto corrupti ipsa aperiam ipsum veniam ut ex
        officiis nobis! Cumque veniam architecto deleniti dolore provident autem
        ut hic consequuntur
      </p>
    </div>

    <p class="text-color1 font-serif text-center md:py-10 py-4  md:text-xl text-lg">Марузалар</p>
    <!-- news1 -->
    <div class="lg:w-9/12 w-full m-auto md:flex flex-wrap">
      <div
        class="kard lg:w-[22%] md:w-2/5 w-11/12 m-auto lg:my-3 md:my-3 my-5 py-2 rounded-lg hover:-translate-y-1 cursor-pointer lg:shadow-xl shadow-2xl"
        v-for="item of news1.News"
      >
        <iframe
          :src="item.vedio"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          class="w-[95%] h-[12rem] m-auto rounded-lg"
        ></iframe>
        <!--    -->
        <p class="px-3 py-2 text-color1 font-serif lg:text-sm text-[0.8rem]">
          {{ item.title }}
        </p>
      </div>
      <!-- news1 -->
    </div>
  </section>
</template>

<script setup>
import { News } from "../../useStore/store.js";
let news1 = News();
</script>

<style lang="scss" scoped>
.diva {
  // background: linear-gradient(360deg, rgb(1, 90, 1), #14c061);
  background-image: url(https://nasafziyo.uz/templates/themeone/images/logo-fon2.png);
}
.kard:hover p {
  color: rgb(47, 47, 245);
}
</style>

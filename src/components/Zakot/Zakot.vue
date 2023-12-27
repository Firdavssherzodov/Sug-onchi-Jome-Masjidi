<template>
  <Header1></Header1>

  <div class="diva py-32">
    <div class="lg:w-9/12 w-full m-auto md:flex flex-wrap">
      <div
        class="kard lg:w-[22%] md:w-2/5 w-11/12 m-auto lg:my-3 md:my-3 my-5 py-2 rounded-lg hover:-translate-y-1 cursor-pointer lg:shadow-xl shadow-2xl"
        v-for="item of data.Zakot"
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
    </div>
  </div>
  <footer1></footer1>
</template>

<script setup>
import Header1 from "../Header/Header.vue";
import footer1 from "../Footer/Footer.vue";

import { News } from "../../useStore/store.js";

let data = News();
</script>
<style lang="scss" scoped>
.diva {
  background-image: url(https://nasafziyo.uz/templates/themeone/images/logo-fon2.png);
}
.div2 {
  background-image: url(https://nasafziyo.uz/templates/themeone/images/pr_pattern22.svg);
}
</style>

<template>
  <footer class="diva">
    <ul
      class="lg:w-2/5 w-10/12 m-auto lg:flex justify-around text-white font-serif lg:pt-16 pt-8 lg:pb-10 pb-8"
    >
      <router-link to="/">
        <li class="py-1 dark:text-white">Aсосий саҳифа</li>
      </router-link>
      <router-link to="/Namoz">
        <li class="py-1 dark:text-white">Намоз</li>
      </router-link>
      <router-link to="/Hadis"
        ><li class="py-1 dark:text-white">Ҳадислар</li>
      </router-link>
      <router-link to="/Zakot">
        <li class="py-1 dark:text-white">Закот</li>
      </router-link>
      <li class="py-1 dark:text-white">Тарих</li>
      <!-- <li class="py-1 dark:text-white">Admin</li> -->
    </ul>

    <div class="lg:w-1/5 w-9/12 m-auto flex justify-evenly pb-5">
      <a href="https://t.me/@Sugonchi_jome_masjidi_rasmiy" target="_blank">
        <i class="fa-brands fa-telegram text-white text-3xl dark:text-white"></i
      ></a>
      <a href="http://">
        <i class="fa-brands fa-facebook text-white text-3xl dark:text-white"></i
      ></a>
      <a href="http://">
        <i
          class="fa-brands fa-instagram text-white text-3xl dark:text-white"
        ></i
      ></a>
      <a href="">
        <i class="fa-brands fa-twitter text-white text-3xl dark:text-white"></i
      ></a>
    </div>
    
    <p
      class="p1 text-center py-10 text-white font-sans text-sm dark:text-white"
    >
      © 2024 Creator™ All Rights Reserved.
    </p>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.diva {
  // background: linear-gradient(-90deg, rgb(1, 90, 1), #14c061);
  // background-image: url(https://nasafziyo.uz/templates/themeone/images/logo-fon2.png);
  background: #1b9085;
}
ul li:hover {
  color: rgb(47, 47, 245);
  text-decoration: underline;
  cursor: pointer;
}
.p1 {
  background: #126159;
}
</style>

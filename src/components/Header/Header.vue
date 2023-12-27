<template>
  <header class="diva fixed w-full z-10">
    <fwb-navbar>
      <template #logo>
        <router-link to="/">
          <div class="flex items-center cursor-pointer">
            <img
              src="https://png.monster/wp-content/uploads/2022/03/png.monster-934.png"
              alt=""
              class="md:w-24 w-16"
            />
            <span
              class="font-serif font-semibold px-1 md:text-xl text-lg text-white  dark:text-white"
            >
              Sug'onchi Jome Majsidi</span
            >
          </div>
        </router-link>
      </template>
      <template #default="{ isShowMenu }">
        <fwb-navbar-collapse :is-show-menu="isShowMenu">
          <router-link to="/"
            ><fwb-navbar-link link="#">
              Aсосий саҳифа
            </fwb-navbar-link></router-link
          >
          <router-link to="/Namoz">
            <fwb-navbar-link link="#"> Намоз </fwb-navbar-link></router-link
          >
          <router-link to="/Hadis">
            <fwb-navbar-link link="#"> Ҳадислар </fwb-navbar-link></router-link
          >
          <router-link to="/Zakot"
            ><fwb-navbar-link link="#"> Закот </fwb-navbar-link></router-link
          >
          <fwb-navbar-link link="#"> Ходимлар </fwb-navbar-link>
        </fwb-navbar-collapse>
      </template>
      <template #menu-icon>
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
      </template>
    </fwb-navbar>
  </header>
</template>

<script setup>
import { FwbNavbar, FwbNavbarCollapse, FwbNavbarLink } from "flowbite-vue";
</script>
<style scoped>
:deep nav {
  background: #1b9085;
}
:deep button {
  color: #fff;
}
:deep button:active {
  color: #070707 !important;
}

@media (min-width: 768px) {
  :deep a {
    color: #fff !important;
    font-family: serif !important;
  }
}
:deep a {
  color: #000000;
}
</style>

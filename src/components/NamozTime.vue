<template>
  <section class="diva md:py-20 py-10" href="#Home">
    <p class="font-serif text-white text-center md:text-xl py-4">
      Namoz vaqtlari : Samarqand
    </p>
    <section
      class="lg:w-[60%] w-full m-auto py-5 flex lg:justify-around flex-wrap gap-5"
    >
      <section
        class="border w-36 h-36 rounded-lg m-auto"
        v-for="item of NamozTime"
      >
        <img
          :src="item.Image"
          alt=""
          class="w-full h-4/5 rounded-lg rounded-b-none"
        />
        <p class="text-white text-center font-serif font-semibold">
          {{ item.time }}
        </p>
      </section>
    </section>
    <Vue3Marquee :clone="false" :duration="10" :direction="''" class="">
      <p
        v-for="srt of NamozSurah"
        class="text-white py-5 font-serif md:text-xl"
      >
        {{ srt }}
      </p>
    </Vue3Marquee>
  </section>
</template>

<script setup>
const NamozTime = [
  {
    id: 1,
    time: "06:33",
    Image: "https://nasafziyo.uz/templates/themeone/images/time/Fajr.png",
  },
  {
    id: 2,
    time: "07:54",
    Image: "	https://nasafziyo.uz/templates/themeone/images/time/Sunrise.png",
  },
  {
    id: 3,
    time: "12:37",
    Image: "https://nasafziyo.uz/templates/themeone/images/time/Dhuhr.png",
  },
  {
    id: 4,
    time: "15:41",
    Image: "	https://nasafziyo.uz/templates/themeone/images/time/Asr.png",
  },
  {
    id: 5,
    time: "17:21",
    Image: "	https://nasafziyo.uz/templates/themeone/images/time/Maghrib.png",
  },
  {
    id: 6,
    time: "18:42",
    Image: "	https://nasafziyo.uz/templates/themeone/images/time/Isha.png",
  },
];

let NamozSurah = [
  "Namozni to‘liq ado eting. Albatta, namoz mo‘minlarga vaqtida farz qilingandir (Niso surasi 103-oyat)",
];
</script>

<style lang="scss" scoped>
.diva {
  background: linear-gradient(45deg, rgb(1, 90, 1), #14c061);
  //   background-image: url(https://celes.club/uploads/posts/2022-05/1653108694_73-celes-club-p-zelenii-islamskii-fon-krasivie-75.jpg);
  //   background-size: cover;
  //   background-repeat: no-repeat;
  //   background-position: 60%;
}

@media (min-width: 1024px) {
  :deep .vue3-marquee {
    margin: auto;
    width: 57% !important;
  }
}
:deep .vue3-marquee {
  margin: auto;
  width: 95%;
}
</style>

<template>

  <section class="diva md:pt-28 pt-20 md:pb-0 pb-5" href="#Home">
    <p class="font-serif text-white text-center md:text-xl py-4">
      Намоз вақтлари : Самарқанд
    </p>
    <section
      class="lg:w-[60%] w-full m-auto py-5 flex lg:justify-around flex-wrap gap-5"
    >
      <div class="border w-36 h-36 rounded-lg m-auto" v-for="item of NamozTime">
        <img
          :src="item.Image"
          alt=""
          class="w-full h-4/5 rounded-lg rounded-b-none"
        />
        <p class="text-white text-center font-serif font-semibold">
          {{ item.time }}
        </p>
      </div>
    </section>
    <Vue3Marquee :clone="false" :duration="10" :direction="''" class="">
      <p
        v-for="srt of NamozSurah"
        class="text-white py-5 font-serif md:text-[1.3rem] text-[1rem]"
      >
        {{ srt }}
      </p>
    </Vue3Marquee>
  </section>
  <div class="div2 h-6"></div>
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
  "Намозни тўлиқ адо етинг. Aлбатта, намоз мўминларга вақтида фарз қилингандир (Нисо сураси 103-оят)",
];
</script>

<style lang="scss" scoped>
.diva {
  background-image: url(https://nasafziyo.uz/templates/themeone/images/fon.png);
  background-size: cover;
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
.div2{
  background-image: url(https://nasafziyo.uz/templates/themeone/images/pr_pattern22.svg);
}
</style>

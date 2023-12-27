<template>
  <div class="card lg:w-3/4 w-full m-auto">
    <Carousel
      :value="products"
      :numVisible="5"
      :numScroll="1"
      :responsiveOptions="responsiveOptions"
      circular
      :autoplayInterval="3000"
    >
      <template #item="slotProps">

        <div
          class="border-1 surface-border border-round text-center py-5 px-3 lg:w-[90%] w-[100%] lg:h-full h-72    lg:ml-5 "
        >
          <img :src="slotProps.data.image" alt="" class="shadow-2 w-full h-full rounded-xl" />
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import Carousel from "primevue/carousel";

import { News } from "../../useStore/store.js";
let ProductService = News();

onMounted(() => {
  products.value = ProductService.HistoreImage;

  console.log(ProductService.HistoreImage);
});

const products = ref();
const responsiveOptions = ref([
  {
    breakpoint: "1400px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
    numScroll: 1,
  },
]);

const getSeverity = (status) => {
  switch (status) {
    case "INSTOCK":
      return "success";

    case "LOWSTOCK":
      return "warning";

    case "OUTOFSTOCK":
      return "danger";

    default:
      return null;
  }
};
</script>

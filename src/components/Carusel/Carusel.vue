<template>
  <div class="card lg:w-3/4 w-full m-auto lg:h-full h-[17rem]  ">
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
          class="kard border-1 surface-border border-round text-center py-3 px-3 lg:w-[90%] w-[100%] lg:h-[70%] h-[50%] lg:mt-16 h-72x lg:ml-5 hover:cursor-pointer  "
        >
          <img
            :src="slotProps.data.image"
            alt=""
            class="shadow-2 w-full h-[95%] rounded-xl"
          />
          <p
            class="text-color1 font-serif pt-1 text-left px-2 lg:text-sm text-[0.9rem]"
          >
            Batafsil...
          </p>
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

 
</script>
<style scoped>
.kard:hover p {
  transform: scale(1);
  cursor: pointer;
  color: rgb(47, 47, 245);
}
</style>

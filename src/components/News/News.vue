<template>
  <section class="diva">
    <div
      class="lg:w-9/12 md:w-full w-11/12 m-auto lg:flex justify-between py-5"
    >
      <img
        src="https://mykaleidoscope.ru/uploads/posts/2022-08/1659584419_36-mykaleidoscope-ru-p-musulmanskie-oboi-dizain-krasivo-foto-38.jpg"
        alt=""
        class="lg:w-3/6 md:w-[95%] md:h-[28rem] m-auto rounded-lg"
      />
      <p
        class="text-white font-serif lg:px-5 md:px-4 px-2 lg:text-left md:text-center lg:py-0 py-5"
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
        reiciendis! Corporis fugiat atque, rem vel maiores suscipit unde?
        Doloremque, debitis! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Magni unde, quam fuga dolorum praesentium modi incidunt rerum
        culpa? Magni perferendis provident distinctio a tempora illum dolores
        odit hic sit quasi! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Fugiat iusto corrupti ipsa aperiam ipsum veniam ut ex officiis
        nobis! Cumque veniam architecto deleniti dolore provident autem ut hic
        consequuntur maiores.illum doloremque ratione possimus reiciendis!
        Corporis fugiat atque, rem vel maiores suscipit unde? Doloremque,
        debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
        unde, quam fuga dolorum praesentium modi incidunt rerum culpa? Magni
        perferendis provident distinctio a tempora illum dolores odit hic sit
        quasi!
      </p>
    </div>

    <div class="lg:w-9/12 w-full m-auto md:flex flex-wrap">
      <div
        class="lg:w-[22%] md:w-2/5 w-11/12 m-auto lg:my-3 md:my-3 my-5 py-2 lg:m-5 rounded-lg hover:-translate-y-1 cursor-pointer shadow hover:shadow-2xl lg:shadow-xl shadow-2xl"
        v-for="item of News"
      >
        <img
          :src="item.Image"
          alt="loading"
          class="w-[95%] h-[12rem] m-auto rounded-lg"
        />
        <p class="px-3 py-2 text-white font-serif lg:text-sm">
          {{ item.title }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const News = [
  {
    id: 1,
    Image:
      "https://mykaleidoscope.ru/x/uploads/posts/2023-05/1684747848_mykaleidoscope-ru-p-krasivie-oboi-v-stile-islam-instagram-63.jpg",
    title:
      " perferendis provident distinctio a tempora illum dolores odit hic si ",
  },
  {
    id: 2,
    Image:
      "https://islamdag.ru/sites/default/files/img/2019/vseobislame/milost003.jpg",
    title:
      " perferendis provident distinctio a tempora illum dolores odit hic si ",
  },
  {
    id: 3,
    Image:
      "https://bogatyr.club/uploads/posts/2023-03/1677868535_bogatyr-club-p-polumesyats-v-dubae-foni-oboi-68.jpg",
    title:
      " perferendis provident distinctio a tempora illum dolores odit hic si ",
  },
  {
    id: 4,
    Image:
      "https://catherineasquithgallery.com/uploads/posts/2023-02/1676728481_catherineasquithgallery-com-p-fon-zelenii-musulmanskii-27.jpg",
    title:
      " perferendis provident distinctio a tempora illum dolores odit hic si ",
  },
  {
    id: 5,
    Image:
      "https://i.pinimg.com/originals/9b/1f/fa/9b1ffa8c83a971a1524e9730379a15cc.jpg",
    title:
      " perferendis provident distinctio a tempora illum dolores odit hic si ",
  },
  {
    id: 6,
    Image:
      "https://avatars.mds.yandex.net/get-mpic/4356316/img_id4123574928639054541.jpeg/orig",
    title:
      " perferendis provident distinctio a tempora illum dolores odit hic si ",
  },
  {
    id: 7,
    Image:
      "https://mykaleidoscope.ru/x/uploads/posts/2023-05/1684747848_mykaleidoscope-ru-p-krasivie-oboi-v-stile-islam-instagram-63.jpg",
    title:
      " perferendis provident distinctio a tempora illum dolores odit hic si ",
  },
  {
    id: 8,
    Image:
      "https://islamdag.ru/sites/default/files/img/2019/vseobislame/milost003.jpg",
    title:
      " perferendis provident distinctio a tempora illum dolores odit hic si ",
  },
  {
    id: 9,
    Image:
      "https://bogatyr.club/uploads/posts/2023-03/1677868535_bogatyr-club-p-polumesyats-v-dubae-foni-oboi-68.jpg",
    title:
      " perferendis provident distinctio a tempora illum dolores odit hic si ",
  },
  {
    id: 10,
    Image:
      "https://catherineasquithgallery.com/uploads/posts/2023-02/1676728481_catherineasquithgallery-com-p-fon-zelenii-musulmanskii-27.jpg",
    title:
      " perferendis provident distinctio a tempora illum dolores odit hic si ",
  },
  {
    id: 11,
    Image:
      "https://i.pinimg.com/originals/9b/1f/fa/9b1ffa8c83a971a1524e9730379a15cc.jpg",
    title:
      " perferendis provident distinctio a tempora illum dolores odit hic si ",
  },
  {
    id: 12,
    Image:
      "https://avatars.mds.yandex.net/get-mpic/4356316/img_id4123574928639054541.jpeg/orig",
    title:
      " perferendis provident distinctio a tempora illum dolores odit hic si ",
  },
];
</script>

<style lang="scss" scoped>
.diva {
  background: linear-gradient(50deg, rgb(1, 90, 1), #14c061);
}
</style>

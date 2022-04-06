<template>
  <div class="">
    <div class="mb-5">
      <p class="font-bold">Daily Trending Menu</p>
      <p>Lorem Ipsum</p>
    </div>

    <div class="flex items-center border-b border-gray-400 pb-4" v-for="(menuItem, i) in trendingMenu" :key="i">
      <div class="text-gray-400">
        {{ menuItem.serial }}
      </div>
      <div class="flex ml-4 flex-col">
        <p class="font-medium">{{ menuItem.foodName }}</p>
        <div class="flex">
          <p class="font-medium">{{ menuItem.price }}</p>
          <p class="text-text-200 ml-4">{{ menuItem.order }}</p>
        </div>
      </div>
      <div class="ml-auto">
        <img :src="menuItem.imgUrl" class="h-16 w-16 rounded-full" alt="">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      trendingMenu: [
        {
          serial: "#1",
          foodName: "Chicken curry special with cucumber",
          price: "$5.45",
          order: "order",
          imgUrl: "/images/menu/menu-1.jpg",
        },
        {
          serial: "#2",
          foodName: "Waterlemon juice with ice",
          price: "$4.45",
          order: "order",
          imgUrl: "/images/menu/menu-2.jpg",
        },
        {
          serial: "#3",
          foodName: "Chicken curry special with cucumber",
          price: "$5.30",
          order: "order",
          imgUrl: "/images/menu/menu-3.jpg",
        },
        {
          serial: "#4",
          foodName: "Italian Pizza with qarlic",
          price: "$4.50",
          order: "order",
          imgUrl: "/images/menu/menu-4.jpg",
        },
        {
          serial: "#4",
          foodName: "Tuna soup spanish with himaloya salt",
          price: "$6.50",
          order: "order",
          imgUrl: "/images/menu/menu-1.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-4 py-5">
      <!-- Daily Trending Menu -->
      <div class="py-4 bg-white">
        <div>
          <TrendingMenu></TrendingMenu>
        </div>
      </div>
      <!-- End Daily Trending Menu -->

      <!-- Best Seller Menu -->
      <div class="py-4 ml-4 bg-white">
        <div class="flex items-center p-4">
          <div class="bg-primary-500 h-8 w-2">

          </div>
          <div class="ml-4">
            <p class="font-bold">Daily Trending Menu</p>
            <p>Lorem Ipsum</p>
          </div>
        </div>

        <div v-for="(bestSeller, i) in bestSellers" :key="i" class="px-4 pb-4 border-b border-gray-100">
          <img src="/images/seller-menu/seller-menu-1.jpg" class="mt-5 w-full" alt="">
          <p class="mt-5 font-semibold">{{ bestSeller.foodName }}</p>
          <div class="flex mt-3">
            <p class="font-bold">{{ bestSeller.price }}</p>
            <div class="flex ml-48">
              <Heart class="text-red-500"></Heart>
              <p class="ml-1 font-bold">{{ bestSeller.heartNumber }}</p>
            </div>
            <p class="font-bold ml-auto">{{ bestSeller.review }}</p>
          </div>
        </div>
        <div class="flex items-center justify-center text-primary-500 mt-3 cursor-pointer">
          <p class="font-semibold">View More</p>
          <ChevronDoubleRight></ChevronDoubleRight>
        </div>
      </div>
      <!-- Best Seller Menu -->
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      bestSellers: [
        {
          imgUrl: "/images/seller-menu/seller-menu-1.jpg",
          foodName: "Medium Spicy Pizza with Kemangi Leaf",
          price: "$6.53",
          heartNumber: "256K",
          review: "6700",
        },
        {
          imgUrl: "/images/seller-menu/seller-menu-2.jpg",
          foodName: "Medium Spicy Pizza with Kemangi Leaf",
          price: "$7.65",
          heartNumber: "200K",
          review: "7500",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
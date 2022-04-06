<template>
  <div>
    <div class="flex">
      <!-- Daily Trending Menu -->
      <div class="p-4 w-1/3 bg-white">
        <div class="flex items-center">
          <div class="bg-primary-500 h-8 w-2">

          </div>
          <div class="ml-4">
            <p>Daily Trending Menu</p>
            <p>Lorem Ipsum</p>
          </div>
        </div>
        <div class="mt-5">
          <TrendingMenu></TrendingMenu>
        </div>
      </div>
      <!-- End Daily Trending Menu -->

      <!-- Customer Map -->
      <div class="p-4 ml-4 w-2/3 bg-white">
        <p>Customer Map</p>
      </div>
      <!-- End Customer Map -->
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin",
};
</script>

<style lang="scss" scoped>
</style>
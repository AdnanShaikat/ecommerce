<template>
  <div class="flex items-center p-4">
    <div class="w-2/3">
      <form class="example" action="/action_page.php">
        <input class="p-3 w-full rounded-full py-3 px-6 bg-gray-100" type="text" placeholder="Search.." name="search">
      </form>
    </div>
    <div class="bg-gray-100 ml-10 rounded-full h-8 w-8 flex justify-center items-center">
      <notification></notification>
    </div>
    <div class="bg-gray-100 ml-4 rounded-full h-8 w-8 flex justify-center items-center">
      <envelope></envelope>
    </div>
    <div class="bg-gray-100 ml-4 rounded-full h-8 w-8 flex justify-center items-center">
      <setting></setting>
    </div>
    <div class="ml-4 flex-grow rounded-full h-8 w-8 flex justify-center items-center">
      <div class="flex flex-col justify-center items-center">
        <p class="font-bold">Tony Shop</p>
        <p class="text-gray-400">Admin</p>
      </div>
      <div class="ml-2" style="border-radius: 500px; height: 50px; width: 50px">
        <img src="/images/profile-1.jpg" alt="profile" style="height: 100%; width: 100%; object-fit: cover; border-radius: 500px">
      </div>
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
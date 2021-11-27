<template>
  <div class="flex h-screen">
    <div class="w-60 p-4 bg-white">
      <nuxt-link to="/">
        <div class="flex items-center">
          <logo class="w-10 h-10">
          </logo>
          <p class="font-medium text-lg ml-2">Ecommerce</p>
        </div>
      </nuxt-link>

      <div class="mt-10">
        <div class="flex">
          <div>
            <dashboard class="w-4 h-4 text-gray-400 hover:text-green-400 cursor-pointer"></dashboard>
          </div>
          <p class="ml-4 text-gray-400 hover:text-green-400 cursor-pointer">Dashboard</p>
        </div>
      </div>

      <div class="mt-6">
        <div class="flex">
          <div>
            <wallet class="w-4 h-4 text-gray-400 hover:text-green-400 cursor-pointer"></wallet>
          </div>
          <p class="ml-4 text-gray-400 hover:text-green-400 cursor-pointer">Wallet</p>
        </div>
      </div>

      <div class="mt-6">
        <div class="flex">
          <div>
            <invoice class="w-4 h-4 text-gray-400 hover:text-green-400 cursor-pointer"></invoice>
          </div>
          <p class="ml-4 text-gray-400 hover:text-green-400 cursor-pointer">Invoice</p>
        </div>
      </div>

      <div class="mt-6">
        <div class="flex">
          <div>
            <createinvoice class="w-4 h-4 text-gray-400 hover:text-green-400 cursor-pointer"></createinvoice>
          </div>
          <p class="ml-4 text-gray-400 hover:text-green-400 cursor-pointer">Create Invoice</p>
        </div>
      </div>

      <div class="mt-6">
        <div class="flex">
          <div>
            <card class="w-4 h-4 text-gray-400 hover:text-green-400 cursor-pointer"></card>
          </div>
          <p class="ml-4 text-gray-400 hover:text-green-400 cursor-pointer">Card</p>
        </div>
      </div>

      <div class="mt-6">
        <div class="flex">
          <div>
            <transaction class="w-4 h-4 text-gray-400 hover:text-green-400 cursor-pointer"></transaction>
          </div>
          <p class="ml-4 text-gray-400 hover:text-green-400 cursor-pointer">Transaction</p>
        </div>
      </div>

      <div class="mt-6">
        <div class="flex">
          <div>
            <clients class="w-4 h-4 text-gray-400 hover:text-green-400 cursor-pointer"></clients>
          </div>
          <p class="ml-4 text-gray-400 hover:text-green-400 cursor-pointer">Clients</p>
        </div>
      </div>
    </div>

    <div class="flex-grow bg-gray-100">
      <div class="flex items-center p-4">
        <div class="w-2/3">
          <form class="example" action="/action_page.php">
            <input class="p-3 w-full rounded-full py-3 px-6" type="text" placeholder="Search.." name="search">
          </form>
        </div>
        <div class="bg-white ml-10 rounded-full h-8 w-8 flex justify-center items-center">
          <notification></notification>
        </div>
        <div class="bg-white ml-4 rounded-full h-8 w-8 flex justify-center items-center">
          <envelope></envelope>
        </div>
        <div class="bg-white ml-4 rounded-full h-8 w-8 flex justify-center items-center">
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
      <Nuxt></Nuxt>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
<template>
  <div class="bg-gray-100 p-4">
    <p class="text-3xl my-4">Card Center</p>
    <div class="flex">
      <div class="card flex-auto bg-green-400 text-white p-4 rounded-xl">
        <p class="text-xs">Balance</p>
        <p class="text-lg mt-2">$4811,21</p>
        <p class="text-xm text-green-100 mt-10">valid till</p>
        <p class="font-bold text-xm">3/21</p>
      </div>

      <div class="card flex-auto bg-green-400 text-white p-4 rounded-xl ml-2">
        <p class="text-xs">Balance</p>
        <p class="text-lg mt-2">$4811,21</p>
        <p class="text-xm text-green-100 mt-10">valid till</p>
        <p class="font-bold text-xm">3/21</p>
      </div>

      <div class="card flex-auto bg-green-400 text-white p-4 rounded-xl ml-2">
        <p class="text-xs">Balance</p>
        <p class="text-lg mt-2">$4811,21</p>
        <p class="text-xm text-green-100 mt-10">valid till</p>
        <p class="font-bold text-xm">3/21</p>
      </div>

      <div class="card flex-auto bg-green-400 text-white p-4 rounded-xl ml-2">
        <p class="text-xs">Balance</p>
        <p class="text-lg mt-2">$4811,21</p>
        <p class="text-xm text-green-100 mt-10">valid till</p>
        <p class="font-bold text-xm">3/21</p>
      </div>
    </div>
    <!-- Card List -->
    <div class="flex py-5">
      <div class="flex-grow bg-white mr-4 p-4">
        <p class="text-2xl font-bold mb-4">Card List</p>
        <div class="flex text-gray-500 border-b-2 border-gray-400 pb-4">
          <p class="flex-auto">Card</p>
          <p class="flex-auto">Card Type</p>
          <p class="flex-auto">Bank</p>
          <p class="flex-auto">Card Number</p>
          <p class="flex-auto">Number Card</p>
        </div>
        <!-- Card 1 -->
        <div class="flex items-center mt-5">
          <div class="card flex-auto bg-green-400 text-white p-4 mr-4 rounded h-14">
          </div>

          <div class="flex-auto">
            <p>Primary</p>
          </div>

          <div class="flex-auto">
            <p>ABC Bank</p>
          </div>

          <div class="flex-auto">
            <p>.............1234</p>
          </div>

          <div class="flex-auto">
            <p>Tony Soap</p>
          </div>

          <dots class="text-gray-400"></dots>

        </div>
        <!-- Card 2 -->
        <div class="flex items-center mt-5">
          <div class="card flex-auto bg-green-400 text-white p-4 mr-4 rounded h-14">
          </div>

          <div class="flex-auto">
            <p>Primary</p>
          </div>

          <div class="flex-auto">
            <p>ABC Bank</p>
          </div>

          <div class="flex-auto">
            <p>.............1234</p>
          </div>

          <div class="flex-auto">
            <p>Tony Soap</p>
          </div>

          <dots class="text-gray-400"></dots>

        </div>
        <!-- Card 3 -->
        <div class="flex items-center mt-5">
          <div class="card flex-auto bg-green-400 text-white p-4 mr-4 rounded h-14">
          </div>

          <div class="flex-auto">
            <p>Primary</p>
          </div>

          <div class="flex-auto">
            <p>ABC Bank</p>
          </div>

          <div class="flex-auto">
            <p>.............1234</p>
          </div>

          <div class="flex-auto">
            <p>Tony Soap</p>
          </div>

          <dots class="text-gray-400"></dots>

        </div>
        <!-- Card 4 -->
        <div class="flex items-center mt-5">
          <div class="card flex-auto bg-green-400 text-white p-4 mr-4 rounded h-14">
          </div>

          <div class="flex-auto">
            <p>Primary</p>
          </div>

          <div class="flex-auto">
            <p>ABC Bank</p>
          </div>

          <div class="flex-auto">
            <p>.............1234</p>
          </div>

          <div class="flex-auto">
            <p>Tony Soap</p>
          </div>

          <dots class="text-gray-400"></dots>

        </div>
      </div>
      <!-- Add Card -->
      <div class="w-60 bg-white p-4">
        <div>
          <p class="font-bold">Add Card</p>
          <p class="mt-3 mb-2 text-gray-400">Card Number</p>
          <form class="example" action="/action_page.php">
            <input class="p-3 w-full rounded bg-gray-200" type="text" placeholder="Card Number" name="search">
          </form>
        </div>

        <div class="mt-4">
          <p class="mt-3 mb-2 text-gray-400">Bank</p>
          <form class="example" action="/action_page.php">
            <input class="p-3 w-full rounded bg-gray-200" type="text" placeholder="Bank" name="search">
          </form>
        </div>

        <div class="mt-4">
          <p class="mt-3 mb-2 text-gray-400">Card Number</p>
          <form class="example" action="/action_page.php">
            <input class="p-3 w-full rounded bg-gray-200" type="text" placeholder="Namien Card" name="search">
          </form>
        </div>

      </div>
    </div>

    <!-- End Card List -->
  </div>
</template>

<script>
export default {
  layout: "admin",
};
</script>

<style>
</style>
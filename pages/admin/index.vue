<template>
  <div class="bg-gray-100 pl-4">
    <p class="text-3xl mt-4">Dashboard</p>
    <div class="flex py-5">
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
    <!-- Transaction -->
    <div class="flex py-5">
      <div class="w-1/2 p-4 bg-white">
        <div class="flex">
          <p class="font-bold">Transaction Overview</p>
          <dots class="ml-auto text-gray-400"></dots>
        </div>
        <div class="flex items-center mt-4">
          <p class="text-xs text-gray-400">This Week</p>
          <chevron class="text-gray-400 ml-1"></chevron>
          <div class="flex ml-auto items-center">
            <div class="bg-green-500 rounded h-2 w-2">
            </div>
            <p class="ml-2 mr-4 text-xs text-gray-400">income</p>
            <div class="bg-green-500 rounded h-2 w-2 ml-2">
            </div>
            <p class="ml-2 text-xs text-gray-400">outcome</p>
          </div>
        </div>
        <div class="flex items-center mt-4">
          <p class="text-gray-400">2000</p>
          <p class="ml-4 text-gray-400">.......................................</p>
        </div>
        <div class="flex items-center mt-5">
          <p class="text-gray-400">1500</p>
          <p class="ml-4 text-gray-400">.......................................</p>
        </div>
        <div class="flex items-center mt-5">
          <p class="text-gray-400">1000</p>
          <p class="ml-4 text-gray-400">.......................................</p>
        </div>
        <div class="flex items-center mt-5">
          <p class="ml-2 text-gray-400">500</p>
          <p class="ml-4 text-gray-400">.......................................</p>
        </div>
        <div class="flex items-center mt-5">
          <p class="ml-6 text-gray-400">0</p>
          <p class="ml-4 text-gray-400">........................................</p>
        </div>
      </div>

      <div class="w-1/2 bg-white ml-4 p-4">
        <p class="font-bold ml-4 mb-4">Spending</p>
        <div class="flex">
          <div class="card flex-1 bg-green-400 text-white p-4 rounded-xl ml-4">
            <p class="text-xs">Balance</p>
            <p class="text-lg mt-2">$4811,21</p>
            <p class="text-xm text-green-100 mt-10">valid till</p>
            <p class="font-bold text-xm">3/21</p>
          </div>

          <div class="card flex-1 bg-green-400 text-white p-4 rounded-xl ml-4">
            <p class="text-xs">Balance</p>
            <p class="text-lg mt-2">$4811,21</p>
            <p class="text-xm text-green-100 mt-10">valid till</p>
            <p class="font-bold text-xm">3/21</p>
          </div>
        </div>

        <div class="flex mt-4">
          <div class="card flex-1 bg-green-400 text-white p-4 rounded-xl ml-4">
            <p class="text-xs">Balance</p>
            <p class="text-lg mt-2">$4811,21</p>
            <p class="text-xm text-green-100 mt-10">valid till</p>
            <p class="font-bold text-xm">3/21</p>
          </div>

          <div class="card flex-1 bg-green-400 text-white p-4 rounded-xl ml-4">
            <p class="text-xs">Balance</p>
            <p class="text-lg mt-2">$4811,21</p>
            <p class="text-xm text-green-100 mt-10">valid till</p>
            <p class="font-bold text-xm">3/21</p>
          </div>
        </div>
      </div>
    </div>
    <!-- End Transaction -->

    <!-- Latest Invoice -->

    <div class="flex py-5">
      <div class="w-1/2 p-4 bg-white">
        <div class="flex mb-5">
          <p class="font-bold">Latest Invoice</p>
          <dots class="ml-auto text-gray-400"></dots>
        </div>
        <div class="flex">
          <form action="/action_page.php" class="flex-auto">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
            <label for="vehicle1" class="text-sm"> Invoice</label><br>
          </form>
          <p class="flex-auto text-sm">recepient</p>
          <p class="flex-auto text-sm">date</p>
          <p class="flex-auto text-sm">status</p>
        </div>

        <div class="flex mt-5">
          <form action="/action_page.php" class="flex-auto">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
            <label for="vehicle1" class="text-sm">INV-001-123</label><br>
          </form>
          <p class="flex-auto text-sm">Rob B.</p>
          <p class="flex-auto text-sm">Mon 10, 2021</p>
          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 ml-10 border border-blue-500 hover:border-transparent rounded text-sm flex-auto">
            Paid
          </button>
        </div>

        <div class="flex mt-5">
          <form action="/action_page.php" class="flex-auto">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
            <label for="vehicle1" class="text-sm">INV-001-123</label><br>
          </form>
          <p class="flex-auto text-sm">Rob B.</p>
          <p class="flex-auto text-sm">Mon 10, 2021</p>
          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 ml-10 border border-blue-500 hover:border-transparent rounded text-sm flex-auto">
            Paid
          </button>
        </div>

        <div class="flex mt-5">
          <form action="/action_page.php" class="flex-auto">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
            <label for="vehicle1" class="text-sm">INV-001-123</label><br>
          </form>
          <p class="flex-auto text-sm">Rob B.</p>
          <p class="flex-auto text-sm">Mon 10, 2021</p>
          <button class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 ml-10 border border-red-500 hover:border-transparent rounded text-sm flex-auto">
            Unpaid
          </button>
        </div>

        <div class="flex mt-5">
          <form action="/action_page.php" class="flex-auto">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
            <label for="vehicle1" class="text-sm">INV-001-123</label><br>
          </form>
          <p class="flex-auto text-sm">Rob B.</p>
          <p class="flex-auto text-sm">Mon 10, 2021</p>
          <button class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 ml-10 border border-red-500 hover:border-transparent rounded text-sm flex-auto">
            Unpaid
          </button>
        </div>

        <div class="flex mt-5">
          <form action="/action_page.php" class="flex-auto">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
            <label for="vehicle1" class="text-sm">INV-001-123</label><br>
          </form>
          <p class="flex-auto text-sm">Rob B.</p>
          <p class="flex-auto text-sm">Mon 10, 2021</p>
          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 ml-10 border border-blue-500 hover:border-transparent rounded text-sm flex-auto">
            Paid
          </button>
        </div>
      </div>

      <div class="w-1/2 p-4 ml-4 bg-white">
        <div class="flex mb-5">
          <p class="font-bold">Latest Invoice</p>
          <dots class="ml-auto text-gray-400"></dots>
        </div>
        <div class="flex items-center">
          <p class="text-xs text-gray-400">This Week</p>
          <chevron class="text-gray-400 ml-1"></chevron>
        </div>

        <div class="flex items-center pb-5">
          <div class="bg-green-500 text-white rounded p-1 mr-4">
            <share class="flex-auto rounded"></share>
          </div>
          <p class="flex-auto">Netflix Subscription</p>
          <p class="flex-auto text-gray-400">March 2,2021</p>
          <p class="flex-auto font-bold">+$45</p>
          <button class="flex-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Complate
          </button>
        </div>
        <hr>

        <div class="flex items-center mt-5 pb-5">
          <div class="bg-green-500 text-white rounded p-1 mr-4">
            <share class="flex-auto rounded"></share>
          </div>
          <p class="flex-auto">Netflix Subscription</p>
          <p class="flex-auto text-gray-400">March 2,2021</p>
          <p class="flex-auto font-bold">+$45</p>
          <button class="flex-auto bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Canceled
          </button>
        </div>
        <hr>

        <div class="flex items-center mt-5 pb-5">
          <div class="bg-green-500 text-white rounded p-1 mr-4">
            <share class="flex-auto rounded"></share>
          </div>
          <p class="flex-auto">Netflix Subscription</p>
          <p class="flex-auto text-gray-400">March 2,2021</p>
          <p class="flex-auto font-bold">+$45</p>
          <button class="flex-auto bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
            Complate
          </button>
        </div>
        <hr>

      </div>
    </div>

    <!-- End Latest Invoice -->
  </div>
</template>

<script>
export default {
  layout: "admin",
};
</script>

<style>
</style>
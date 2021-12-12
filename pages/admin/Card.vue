<template>
  <div class="bg-gray-100 p-4">
    <p class="text-3xl my-4">Card Center</p>
    <div class="">
      <statment-cards />
    </div>
    <!-- Card List -->
    <div class="flex py-5">
      <div class="flex-grow bg-white mr-4 p-4">
        <p class="text-2xl font-bold mb-4">Card List</p>
        <!-- component -->
        <table class="text-left w-full border-collapse">
          <!--Border collapse doesn't work on this site yet but it's available in newer tailwind versions -->
          <thead>
            <tr>
              <th class="py-4 px-6  font-bold uppercase text-sm text-gray-500 border-b border-gray-500">City</th>
              <th class="py-4 px-6  font-bold uppercase text-sm text-gray-500 border-b border-gray-500">Name</th>
              <th class="py-4 px-6  font-bold uppercase text-sm text-gray-500 border-b border-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr class="">
              <td class="py-4 px-6 border-b border-grey-light">New York</td>
              <td class="py-4 px-6 border-b border-grey-light">USA</td>

              <td class="py-4 px-6 border-b border-grey-light">
                <a href="#" class="text-gray-500 font-bold py-1 px-3 rounded text-xs bg-green-500 hover:bg-green-200">Edit</a>
                <a href="#" class="text-gray-500 font-bold py-1 px-3 rounded text-xs bg-blue-500 hover:bg-blue-200">View</a>
              </td>
            </tr>
          </tbody>
        </table>
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
import StatmentCards from "~/components/StatmentCards.vue";
export default {
  components: { StatmentCards },
  layout: "admin",
  data() {
    return {
      cardList: [{}],
    };
  },
};
</script>

<style>
</style>
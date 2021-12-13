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
              <th class="py-4 px-6  font-bold uppercase text-sm text-gray-500 border-b border-gray-500">product</th>
              <th class="py-4 px-6  font-bold uppercase text-sm text-gray-500 border-b border-gray-500">product type</th>
              <th class="py-4 px-6  font-bold uppercase text-sm text-gray-500 border-b border-gray-500">customer</th>
              <th class="py-4 px-6  font-bold uppercase text-sm text-gray-500 border-b border-gray-500">customer number</th>
            </tr>
          </thead>
          <tbody>
            <tr class="" v-for="(cardListItem, i) in cardList" :key="i">
              <td class="py-4 px-6 border-b border-grey-light"><img src="/images/foods/food-1.jpg" class="h-20 w-full" alt=""></td>
              <td class="py-4 px-6 border-b border-grey-light">{{ cardListItem.productType }}</td>
              <td class="py-4 px-6 border-b border-grey-light">{{ cardListItem.customerName}}</td>
              <td class="py-4 px-6 border-b border-grey-light">{{ cardListItem.customerNumber}}</td>

              <td class="py-4 px-6 border-b border-grey-light">
                <dots />
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
import Dots from "~/components/icons/Dots.vue";
import StatmentCards from "~/components/StatmentCards.vue";
export default {
  components: { StatmentCards, Dots },
  layout: "admin",
  data() {
    return {
      cardList: [
        {
          imgUrl: "/images/foods/food-1.jpg",
          productType: "Vagetable",
          customerName: "Adnan Shaikat",
          customerNumber: "01627125430",
        },

        {
          imgUrl: "/images/foods/food-2.jpg",
          productType: "Vagetable",
          customerName: "Adnan Shaikat",
          customerNumber: "01627125430",
        },

        {
          imgUrl: "/images/foods/food-3.jpg",
          productType: "Vagetable",
          customerName: "Adnan Shaikat",
          customerNumber: "01627125430",
        },

        {
          imgUrl: "/images/foods/food-4.jpg",
          productType: "Vagetable",
          customerName: "Adnan Shaikat",
          customerNumber: "01627125430",
        },
      ],
    };
  },
};
</script>

<style>
</style>
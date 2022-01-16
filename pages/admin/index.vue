<template>
  <div class="bg-gray-100 p-4">
    <p class="text-3xl mt-4 text-text-500">Dashboard</p>
    <div class="py-5">
      <statment-cards />
    </div>
    <!-- Customar Map -->
    <div class="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-4 py-5">
      <div class="bg-white p-4">
        <div class="flex">
          <div>
            <p class="font-bold">Customer Map</p>
            <p>Lorem Ipsum</p>
          </div>
          <div class="flex items-center border px-4 ml-auto">
            <p class="text-xs text-gray-400">This Week</p>
            <chevron class="text-gray-400"></chevron>
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

      <div class="bg-white p-4">
        <p class="font-bold mb-4">Spending</p>
        <div class="">
          <spending-cards />
        </div>
      </div>
    </div>
    <!-- End Transaction -->

    <!-- Recent Order -->

    <div class="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-4 py-5">

      <div class="p-4 bg-white">
        <div class="flex">
          <div>
            <p class="font-bold">Recent Order Request</p>
            <p>Lorem Ipsum</p>
          </div>
          <button class="flex items-center rounded-full border py-1 px-4 ml-auto">
            <p class="text-xs text-gray-400">Newest</p>
            <chevron class="text-gray-400"></chevron>
          </button>
        </div>

        <table class="text-left w-full border-collapse">
          <thead>

          </thead>

          <tbody>
            <tr class="border-b text-sm border-gray-400" v-for="(orderRequest, i) in orderRequests" :key="i">
              <td class="py-2">
                <img :src="orderRequest.imgUrl" class="h-14 w-14 rounded-full" alt="">
              </td>
              <td class="py-2">{{ orderRequest.foodName }}</td>
              <td class="py-2">{{ orderRequest.customarName }}</td>
              <td class="py-2">{{ orderRequest.price }}</td>
              <td class="py-2">{{ orderRequest.quantity }}</td>
              <td class="py-2">
                <button class="rounded py-2 px-4" :class="{'bg-blue-200':orderRequest.status=='Delivered' , 'bg-red-200' :orderRequest.status=='Pending' , 'bg-gray-200' :orderRequest.status=='Complate' }">
                  {{ orderRequest.status }}
                </button>
              </td>
              <td class="py-2">
                <dots />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Prviius Transaction -->
      <div class="p-4 bg-white">
        <div class="mb-5">
          <p class="font-bold">Recent Order Request</p>
          <p>Lorem Ipsum</p>
        </div>

        <div class="flex items-center">
          <div class="flex-1">
            #1
          </div>
          <div class="flex flex-1 flex-col">
            <p>Chicken curry special with cucumber</p>
            <div class="flex">
              <p>5.56</p>
              <p class="text-text-500 ml-4">Order</p>
            </div>
          </div>
          <div class="flex-1">
            <img src="/images/foods/food-1.jpg" class="w-14 h-14 rounded-full" alt="">
          </div>
        </div>

      </div>
    </div>

    <!-- End Latest Invoice -->
  </div>
</template>

<script>
import Dots from "~/components/icons/Dots.vue";
import SpendingCard from "~/components/SpendingCards.vue";
import StatmentCards from "~/components/StatmentCards.vue";
export default {
  components: { SpendingCard, Dots },
  layout: "admin",
  data() {
    return {
      orderRequests: [
        {
          imgUrl: "/images/foods/food-1.jpg",
          foodName: "Family Pizza",
          customarName: "Ahemed Asif",
          customarId: "#0010235",
          price: "$7.5",
          quantity: "x 3",
          status: "Pending",
        },
        {
          imgUrl: "/images/foods/food-2.jpg",
          foodName: "Family Pizza",
          customarName: "Ahmed Shakil",
          customarId: "#0010235",
          price: "$7.5",
          quantity: "x 3",
          status: "Complate",
        },
        {
          imgUrl: "/images/foods/food-3.jpg",
          foodName: "Family Pizza",
          customarName: "Tanvir Hasan",
          customarId: "#0010235",
          price: "$7.5",
          quantity: "x 3",
          status: "Delivered",
        },
        {
          imgUrl: "/images/foods/food-4.jpg",
          foodName: "Family Pizza",
          customarName: "Motasiam Fuad",
          customarId: "#0010235",
          price: "$7.5",
          quantity: "x 3",
          status: "Pending",
        },
        {
          imgUrl: "/images/foods/food-5.jpg",
          foodName: "Family Pizza",
          customarName: "Adnan Shaikat",
          customarId: "#0010235",
          price: "$7.5",
          quantity: "x 3",
          status: "Delivered",
        },
      ],
    };
  },
};
</script>
<style scoped>
tbody:before {
  content: "-";
  display: block;
  line-height: 0.5rem;
  color: transparent;
}
</style>
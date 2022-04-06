<template>
  <div>
    <p class="text-3xl text-text-500 my-4">Order</p>
    <div>
      <Input></Input>
    </div>
    <!-- Order Table -->
    <div class="mt-10 py-5">
      <table class="w-full">
        <thead class="pt-5">
          <tr class="bg-gray-50 border-b border-gray-200">
            <th class="py-6">Order Id</th>
            <th class="py-6">Date</th>
            <th class="py-6">Customer Name</th>
            <th class="py-6">Location</th>
            <th class="py-6">Amount</th>
            <th class="py-6">Status Order</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(orderItem, i) in orderList" :key="i" class="border-b border-gray-200 bg-gray-50 hover:bg-white">
            <td class="py-6 pl-10">{{ orderItem.orderId }}</td>
            <td class="py-6 pl-16">{{ orderItem.date}}</td>
            <td class="py-6 pl-10">{{ orderItem.customerName}}</td>
            <td class="py-6 pl-16">{{ orderItem.location}}</td>
            <td class="py-6 pl-10">{{ orderItem.amount}}</td>
            <td class="py-6 pl-10">
              <button class="rounded py-2 px-4" :class="{'bg-blue-200':orderItem.statusOrder=='Delivered' , 'bg-red-200' :orderItem.statusOrder=='Pending' , 'bg-gray-200' :orderItem.statusOrder=='Complate' }">
                {{ orderItem.statusOrder }}
              </button>
            </td>
            <td class="py-2">
              <dots />
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Pagination -->
      <div class="flex mt-5 items-center">
        <p>Showing 1 to 8 of 8 entries</p>
        <div class="ml-auto flex items-center">
          <nav aria-label="Page navigation example">
            <ul class="inline-flex items-center -space-x-px">
              <li>
                <a href="#" class="block py-3 px-3 mr-2 hover:translate-y-3">
                  <ChevronDouble-Left></ChevronDouble-Left>
                </a>
              </li>
              <li>
                <nuxt-link to="#" class="py-2 px-4 text-white bg-primary-500 mr-2">1</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#" class="py-2 px-4 bg-gray-300">2</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#" class="block py-3 px-3 ml-2 hover:bg-primary-500">
                  <ChevronDoubleRight></ChevronDoubleRight>
                </nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <!-- End Pagination  -->
    </div>

    <!-- End Customer Table -->
  </div>
</template>

<script>
import Dots from "~/components/icons/Dots.vue";
export default {
  components: { Dots },
  layout: "admin",
  data() {
    return {
      orderList: [
        {
          orderId: "#0001234",
          date: "26 March 2020, 12:42 AM",
          customerName: "Olivia Shine",
          location: "35 Station Road London",
          amount: "$82.46",
          statusOrder: "Pending",
        },

        {
          orderId: "#0001234",
          date: "26 March 2020, 12:42 AM",
          customerName: "James WItcwicky",
          location: "Corner Street 5th London",
          amount: "$82.46",
          statusOrder: "Delivered",
        },

        {
          orderId: "#0001234",
          date: "26 March 2020, 12:42 AM",
          customerName: "Olivia Shine",
          location: "35 Station Road London",
          amount: "$82.46",
          statusOrder: "Pending",
        },

        {
          orderId: "#0001234",
          date: "26 March 2020, 12:42 AM",
          customerName: "Olivia Shine",
          location: "35 Station Road London",
          amount: "$82.46",
          statusOrder: "Pending",
        },

        {
          orderId: "#0001234",
          date: "26 March 2020, 12:42 AM",
          customerName: "Veronica",
          location: "	21 King Street London",
          amount: "$82.46",
          statusOrder: "Delivered",
        },

        {
          orderId: "#0001234",
          date: "26 March 2020, 12:42 AM",
          customerName: "	Emilia Johanson",
          location: "	67 St. Johns Road London",
          amount: "$82.46",
          statusOrder: "Delivered",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
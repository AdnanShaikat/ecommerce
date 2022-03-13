<template>
  <div class="bg-gray-100 p-4">
    <p class="text-3xl text-text-500 my-4">Order</p>
    <div class="">
      <form class="example" action="/action_page.php">
        <input class="p-3 rounded-full py-3 px-6 bg-white" type="text" placeholder="Search here.." name="search">
      </form>
    </div>
    <!-- Customer Table -->
    <div class="bg-white mt-10 py-5">
      <table class="w-full">
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Date</th>
            <th>Customer Name</th>
            <th>Location</th>
            <th>Amount</th>
            <th>Status Order</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(orderItem, i) in orderList" :key="i" class="border-b border-gray-200">
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
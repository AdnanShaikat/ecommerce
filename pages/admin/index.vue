<template>
  <div class="bg-gray-100 p-4">
    <p class="text-3xl mt-4">Dashboard</p>
    <div class="py-5">
      <statment-cards />
    </div>
    <!-- Transaction -->
    <div class="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-4 py-5">
      <div class="bg-white p-4">
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

      <div class="bg-white p-4">
        <p class="font-bold mb-4">Spending</p>
        <div class="">
          <spending-cards />
        </div>
      </div>
    </div>
    <!-- End Transaction -->

    <!-- Latest Invoice -->

    <div class="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-4 py-5">

      <div class="p-4 bg-white">
        <div class="flex mb-5">
          <p class="font-bold">Latest Invoice</p>
          <dots class="ml-auto text-gray-400"></dots>
        </div>

        <table class="text-left w-full border-collapse">
          <thead>
            <tr class="border-b border-gray-400 p-0">
              <th class="text-sm">
                <label class="inline-flex items-center">
                  <input type="checkbox" class="form-checkbox h-3 w-3"><span class="ml-2">ID Invoice</span>
                </label>
              </th>
              <th class="text-sm">Recepiant</th>
              <th class="text-sm">Date</th>
              <th class="text-sm">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr class="text-sm" v-for="(invoice, i) in invoices" :key="i">
              <td class="py-1">
                <label class=" items-center">
                  <input type="checkbox" class="form-checkbox h-3 w-3"><span class="ml-2 text-gray-500">{{ invoice.id }}</span>
                </label>
              </td>
              <td class="py-1">{{ invoice.rescepiant }}</td>
              <td class="py-1">{{ invoice.date }}</td>
              <td class="py-1">
                <button class="rounded py-2 px-4 text-white" :class="{'bg-blue-500 ':invoice.status=='Paid' , 'bg-red-500' :invoice.status=='Unpaid'}">
                  {{ invoice.status }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Prviius Transaction -->
      <div class="p-4 bg-white">
        <div class="flex mb-5">
          <p class="font-bold">Prviius Transaction</p>
          <dots class="ml-auto text-gray-400"></dots>
        </div>
        <div class="flex items-center">
          <p class="text-xs text-gray-400">This Week</p>
          <chevron class="text-gray-400 ml-1"></chevron>
        </div>

        <table class="text-left w-full border-collapse">
          <thead>

          </thead>

          <tbody>
            <tr class="border-b border-gray-400 text-sm mt-4" v-for="(transaction, i) in transactions" :key="i">
              <td class="py-2">
                <img :src="transaction.imgUrl" class="h-14 w-14" alt="">
              </td>
              <td class="py-2">{{ transaction.subcribtion }}</td>
              <td class="py-2">{{ transaction.date }}</td>
              <td class="py-2">{{ transaction.doller }}</td>
              <td class="py-2">
                <button class="rounded py-2 px-4 text-white" :class="{'bg-blue-500 ':transaction.status=='Complate' , 'bg-red-500' :transaction.status=='Incomplate'}">
                  {{ transaction.status }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>

    <!-- End Latest Invoice -->
  </div>
</template>

<script>
import SpendingCard from "~/components/SpendingCards.vue";
import StatmentCards from "~/components/StatmentCards.vue";
export default {
  components: { SpendingCard },
  layout: "admin",
  data() {
    return {
      invoices: [
        {
          id: "Id Invoice",
          rescepiant: "Adnan B",
          date: "21 may 2021",
          status: "Paid",
        },

        {
          id: "Id Invoice",
          rescepiant: "Adnan B",
          date: "21 may 2021",
          status: "Paid",
        },

        {
          id: "Id Invoice",
          rescepiant: "Adnan B",
          date: "18 july 2021",
          status: "Unpaid",
        },

        {
          id: "Id Invoice",
          rescepiant: "Adnan B",
          date: "10 dec 2021",
          status: "Unpaid",
        },

        {
          id: "Id Invoice",
          rescepiant: "Adnan B",
          date: "28 feb 2021",
          status: "Paid",
        },
      ],

      transactions: [
        {
          imgUrl: "/images/foods/food-1.jpg",
          subcribtion: "Netfelx Subcription",
          date: "12 may 2020",
          doller: "+$45",
          status: "Complate",
        },

        {
          imgUrl: "/images/foods/food-2.jpg",
          subcribtion: "Netfelx Subcription",
          date: "12 may 2020",
          doller: "+$45",
          status: "Complate",
        },

        {
          imgUrl: "/images/foods/food-3.jpg",
          subcribtion: "Netfelx Subcription",
          date: "12 may 2020",
          doller: "+$45",
          status: "Incomplate",
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
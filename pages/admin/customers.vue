<template>
  <div>
    <p class="text-3xl text-text-500 my-4">Customers</p>
    <div class="flex">
      <Input></Input>
      <button class="ml-auto bg-primary-500 hover:bg-primary-700 text-white py-3 px-6">Add New Member</button>
    </div>

    <!-- Customer Table -->
    <div class="mt-10 py-5">
      <table class="w-full">
        <thead class="pt-5">
          <tr class="bg-gray-50 border-b border-gray-200">
            <th class="py-6">
              <Checkbox></Checkbox>
            </th>
            <th class="py-6">
              <div class="flex items-center">
                <div>
                  <ChevronUp class=""></ChevronUp>
                  <ChevronDown class="m-0 p-0"></ChevronDown>
                </div>
                <div>Customer Id</div>
              </div>
            </th>
            <th class="py-6">Join Date</th>
            <th class="py-6">Customer Name</th>
            <th class="py-6">Location</th>
            <th class="py-6">Total Spent</th>
            <th class="py-6">Last Order</th>
            <th class="py-6">
              <ChevronDown></ChevronDown>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(customer, i) in customers" :key="i">
            <td class="py-6">
              <Checkbox></Checkbox>
            </td>
            <td class="py-6 pl-10">{{ customer.customerId }}</td>
            <td class="py-6 pl-10">{{ customer.date }}</td>
            <td class="py-6 pl-10">{{ customer.name }}</td>
            <td class="py-6 pl-10">{{ customer.location }}</td>
            <td class="py-6 pl-10">{{ customer.totalSpent }}</td>
            <td class="font-bold py-6 pl-10">{{ customer.lastOrder }}</td>
            <td class="py-6">
              <Dots></Dots>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- End Customer Table -->
  </div>
</template>

<script>
import Input from "~/components/form/Input.vue";
export default {
  components: { Input },
  layout: "admin",
  data() {
    return {
      customers: [
        {
          customerId: "#0001234",
          date: "26 March 2020, 12:42 AM",
          name: "James WItcwicky",
          location: "Corner Street 5th London",
          totalSpent: "$82.46",
          lastOrder: "$8.13",
        },

        {
          customerId: "#0001234",
          date: "26 March 2020, 12:42 AM",
          name: "Olivia Shine",
          location: "35 Station Road London",
          totalSpent: "$82.46",
          lastOrder: "$8.13",
        },

        {
          customerId: "#0001234",
          date: "26 March 2020, 12:42 AM",
          name: "Veronica",
          location: "21 King Street London",
          totalSpent: "$82.46",
          lastOrder: "$18.13",
        },

        {
          customerId: "#0001234",
          date: "26 March 2020, 12:42 AM",
          name: "James WItcwicky",
          location: "Corner Street 5th London",
          totalSpent: "$82.46",
          lastOrder: "$8.13",
        },

        {
          customerId: "#0001234",
          date: "26 March 2020, 12:42 AM",
          name: "Emilia Johanson",
          location: "67 St. John’s Road London",
          totalSpent: "$82.46",
          lastOrder: "$108.13",
        },

        {
          customerId: "#0001234",
          date: "26 March 2020, 12:42 AM",
          name: "Jessica Wong",
          location: "11 Church Road London",
          totalSpent: "$62.46",
          lastOrder: "$28.13",
        },

        {
          customerId: "#0001234",
          date: "26 March 2020, 12:42 AM",
          name: "	David Horison",
          location: "	981 St. John’s Road London",
          totalSpent: "$222.46",
          lastOrder: "$80.13",
        },

        {
          customerId: "#0001234",
          date: "26 March 2020, 12:42 AM",
          name: "Roberto Carlo",
          location: "	544 Manor Road London",
          totalSpent: "$42.46",
          lastOrder: "$328.13",
        },

        {
          customerId: "#0001234",
          date: "26 March 2020, 12:42 AM",
          name: "Franky Sihotang",
          location: "6 The Avenue London",
          totalSpent: "$162.46",
          lastOrder: "$280.13",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>

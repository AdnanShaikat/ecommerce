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
            <th class="pl-6 py-6">
              <Checkbox></Checkbox>
            </th>
            <th class="py-6">Customer Id</th>
            <th class="py-6">Join Date</th>
            <th class="py-6">Customer Name</th>
            <th class="py-6">Location</th>
            <th class="py-6">Total Spent</th>
            <th class="py-6">Last Order</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td class="py-6 pl-6">
              <Checkbox></Checkbox>
            </td>
            <td class="py-6 pl-10">#0001234</td>
            <td class="py-6 pl-10">26 March 2020, 12:42 AM</td>
            <td class="py-6 pl-10">James WItcwicky</td>
            <td class="py-6 pl-10">Corner Street 5th London</td>
            <td class="py-6 pl-10">$82.46</td>
            <td class="font-bold py-6 pl-10">$8.13</td>
            <td class="py-6 pl-10">
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
};
</script>

<style lang="scss" scoped>
</style>

<template>
  <div class="bg-gray-100 p-4">
    <div class="flex mb-10">
      <p>#INV-0012456</p>
      <p class="ml-auto">Order/</p>
      <p>Order Details</p>
    </div>

    <div class="flex">

      <div class="w-1/3">
        <!-- Customers -->
        <div class="bg-white px-6 py-8">
          <div class="flex flex-col items-center">
            <img src="/images/customers/customer.jpg" alt="customer" class="w-30 h-30">
            <p class="font-bold mt-3">Adam Smith</p>
            <button class="px-6 py-3 border border-primary-500 hover:bg-primary-500 text-text-500 font-bold mt-3">Customer</button>
          </div>
          <div class="flex items-center mt-4">
            <phone></phone>
            <p class="ml-4 font-bold">+51 5125 626 77</p>
          </div>

          <div class="flex items-center mt-4">
            <location></location>
            <p class="ml-4 font-bold">
              Franklin Avenue St.
              London, ABC 12345
              United Kingdom</p>
          </div>
        </div>
        <!-- Note Order -->
        <div class="bg-white p-6 text-justify border-t border-gray-200">
          <p class="font-bold mt-2">Note Order</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem eum ipsam architecto assumenda atque quisquam quaerat aliquid similique enim!</p>
        </div>
        <!-- End Not Order -->
        <!-- Delevery Guy -->
        <div class="bg-white mt-5 px-6 py-8">
          <p class="mt-4">Delivery Guy</p>
          <div class="flex flex-col items-center">
            <img src="/images/deliverymans/deliveryman.jpg" class="w-30 h-30 mt-3" alt="Delevery Man">
            <p class="mt-4">Michael Phelp</p>
            <p class="text-gray-400 mt-4">Join since June 20, 2012s</p>
          </div>
          <div class="flex items-center justify-center mt-3">
            <div class="bg-primary-500 text-white w-14 h-14 rounded-full flex items-center justify-center">
              <phone></phone>
            </div>
            <div class="bg-primary-500 text-white ml-4 w-14 h-14 rounded-full flex items-center justify-center">
              <location></location>
            </div>
          </div>
        </div>
        <!-- End Delevery Guy -->
      </div>

      <div class="w-2/3 ml-4">
        <!-- Order -->
        <div class="bg-white">
          <table class="w-full">
            <thead class=" border-b border-gray-100">
              <tr>
                <th class="p-3 font-semibold tracking-wide text-left">Items</th>
                <th class="p-3 font-semibold tracking-wide text-left">Qty</th>
                <th class="p-3 font-semibold tracking-wide text-left">Price</th>
                <th class="p-3 font-semibold tracking-wide text-left">Total Price</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(customerOrder, i) in customerOrders" :key="i">
                <td class="p-3 text-gray-700">
                  <div class="flex items-center">
                    <img :src="customerOrder.imgUrl" alt="food-1" class="w-20 h-20">
                    <div class="flex-1 pl-4">
                      <small class="font-bold text-red-700">{{ customerOrder.mainCourse }}</small>
                      <p class="font-bold">{{ customerOrder.fruitName }}</p>
                      <div class="flex items-center">
                        <star class="w-5 h-5" style="color: #ff9900 "></star>
                        <star class="w-5 h-5" style="color: #ff9900 "></star>
                        <star class="w-5 h-5" style="color: #ff9900 "></star>
                        <star class="w-5 h-5 text-gray-400"></star>
                        <star class="w-5 h-5 text-gray-400"></star>
                      </div>
                    </div>
                  </div>

                </td>
                <td class="p-3 text-gray-700 font-bold">{{ customerOrder.qty }}</td>
                <td class="p-3 text-gray-700 font-bold">{{ customerOrder.price }}</td>
                <td class="p-3 text-gray-700 font-bold">{{ customerOrder.totalPrice }}</td>
                <td class="p-3 text-red-500 font-bold">
                  <close></close>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
        <!-- End Order -->
        <!-- Map -->
        <div class="bg-white mt-5">
          <img src="/images/maps/map.jpg" class="w-full max-w-full p-6" alt="map">
        </div>
        <!-- End Map -->
        <!-- Customer Favourite -->
        <div class="bg-white mt-5 p-4">
          <p class="font-bold">Customer Favourite</p>
        </div>
        <!-- End Customer Favourite -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      customerOrders: [
        {
          imgUrl: "/images/foods/food-1.jpg",
          mainCourse: "Main Course",
          itemName: "Chicken curry special with cucumber",
          qty: "1",
          price: "$4.12",
          totalPrice: "$4.12",
        },

        {
          imgUrl: "/images/foods/food-2.jpg",
          mainCourse: "Main Course",
          itemName: "Watermelon juice with ice",
          qty: "3",
          price: "$14.99",
          totalPrice: "$44.97",
        },

        {
          imgUrl: "/images/foods/food-3.jpg",
          mainCourse: "Main Course",
          itemName: "Italiano pizza with garlic",
          qty: "1",
          price: "$15.12",
          totalPrice: "$15.12",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
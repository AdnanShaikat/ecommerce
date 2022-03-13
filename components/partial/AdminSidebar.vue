<template>
  <div class="p-4" style="width: 250px; min-width: 250px">
    <nuxt-link to="/admin">
      <div class="flex items-center">
        <logo class="w-10 h-10">
        </logo>
        <p class="font-medium text-lg ml-2 text-text-500">Ecommerce</p>
      </div>
    </nuxt-link>

    <div class="menu">
      <nuxt-link v-for="(menuListItem, i) in menuList" :key="i" :to="menuListItem.href" class="">
        <div class="mt-10">
          <div class="flex">
            <div>
              <component :is="menuListItem.icon" class="w-4 h-4 text-gray-600 hover:text-primary-500 cursor-pointer"></component>
            </div>
            <p class="ml-4 text-gray-600 hover:text-primary-500 cursor-pointer">{{ menuListItem.title }}</p>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          title: "Dashboard",
          href: "/admin",
          icon: "Dashboard",
        },
        {
          title: "Order",
          href: "/admin/order",
          icon: "Wallet",
        },
        {
          title: "Order Details",
          href: "/admin/orderdetails",
          icon: "Invoice",
        },
        {
          title: "Customers",
          href: "/admin/customers",
          icon: "Createinvoice",
        },
        {
          title: "Card",
          href: "/admin/card",
          icon: "Card",
        },
        {
          title: "Revenue",
          href: "/admin/revenue",
          icon: "Transaction",
        },
        {
          title: "Clients",
          href: "/admin/client",
          icon: "Clients",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.menu {
  .nuxt-link-exact-active {
    @apply bg-primary-500 font-semibold text-gray-700;
  }
}
</style>
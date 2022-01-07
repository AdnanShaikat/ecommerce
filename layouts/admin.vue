<template>
  <div class="flex h-screen top">
    <div class="w-60 p-4 bg-white">
      <nuxt-link to="/admin">
        <div class="flex items-center">
          <logo class="w-10 h-10">
          </logo>
          <p class="font-medium text-lg ml-2 text-text-500">Ecommerce</p>
        </div>
      </nuxt-link>

      <nuxt-link v-for="(menuListItem, i) in menuList" :key="i" :to="menuListItem.href">
        <div class="mt-10">
          <div class="flex">
            <div>
              <component :is="menuListItem.icon" class="w-4 h-4 text-secondary-500 hover:text-primary-500 cursor-pointer"></component>
            </div>
            <p class="ml-4 text-secondary-500 hover:text-primary-500 cursor-pointer">{{ menuListItem.title }}</p>
          </div>
        </div>
      </nuxt-link>
    </div>

    <div class="flex-grow bg-gray-100">
      <adminHeader />
      <div class="mt-16">
        <Nuxt></Nuxt>
      </div>
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
          title: "Wallet",
          href: "/admin/wallet",
          icon: "Wallet",
        },
        {
          title: "Invoice",
          href: "/admin/invoice",
          icon: "Invoice",
        },
        {
          title: "Createinvoice",
          href: "/admin/createinvoice",
          icon: "Createinvoice",
        },
        {
          title: "Card",
          href: "/admin/card",
          icon: "Card",
        },
        {
          title: "Transaction",
          href: "/admin/transaction",
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

<style>
</style>
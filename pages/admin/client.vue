<template>
  <div class="bg-gray-100 p-4">
    <p class="text-3xl my-4">Client</p>

    <div class="grid grid-cols-3 grid-rows-2 gap-4">
      <div class="bg-white p-4" v-for="(client, i) in clients" :key="i">
        <div class="flex">
          <div>
            <img :src="client.imgUrl" class="h-20 w-20 rounded-full" alt="">
            <p class="mt-1 text-lg font-bold">{{ client.Name}}</p>
            <p class="text-gray-500 text-sm">{{ client.Company}}</p>
          </div>
          <dots class="ml-auto" />
        </div>

        <div class="flex mt-3">
          <div>
            <p class="text-gray-500 text-sm">{{ client.Contact}}</p>
            <p class="flex mt-2">
              <phone class="text-gray-500" />
              <span class="ml-1 text-sm font-bold">{{ client.Number}}</span>
            </p>

            <p class="flex mt-2">
              <envelope class="text-gray-500" />
              <span class="ml-1 text-sm font-bold">{{ client.Mail}}</span>
            </p>
          </div>

          <div class="ml-auto">
            <p class="text-gray-500 text-sm">{{ client.Payment}}</p>
            <p class="flex mt-2">
              <calender class="text-gray-500" />
              <span class="ml-1 text-sm font-bold">{{ client.Date}}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dots from "~/components/icons/Dots.vue";
import Envelope from "~/components/icons/Envelope.vue";
export default {
  components: { Dots, Envelope },
  layout: "admin",
  data() {
    return {
      clients: [
        {
          imgUrl: "/images/clients/client-1.jpg",
          Name: "Jony Ahmed",
          Company: "Lorem Company",
          Contact: "Contact",
          Number: "+0998765553",
          Mail: "email@mail.com",
          Payment: "Payment Due",
          Date: "21 December 2020",
        },

        {
          imgUrl: "/images/clients/client-2.jpg",
          Name: "Ahmed Jony",
          Company: "Lorem Company",
          Contact: "Contact",
          Number: "+0998765553",
          Mail: "email@mail.com",
          Payment: "Payment Due",
          Date: "12 Jun 2021",
        },

        {
          imgUrl: "/images/clients/client-3.jpg",
          Name: "Kayser Ahmed",
          Company: "888 Company",
          Contact: "Contact",
          Number: "+0998765553",
          Mail: "email@mail.com",
          Payment: "Payment Due",
          Date: "24 August 2021",
        },

        {
          imgUrl: "/images/clients/client-4.jpg",
          Name: "Jony Ahmed",
          Company: "Lorem Company",
          Contact: "Contact",
          Number: "+0998765553",
          Mail: "email@mail.com",
          Payment: "Payment Due",
          Date: "28 April 2020",
        },

        {
          imgUrl: "/images/clients/client-5.jpg",
          Name: "Jony Ahmed",
          Company: "Lorem Company",
          Contact: "Contact",
          Number: "+0998765553",
          Mail: "email@mail.com",
          Payment: "Payment Due",
          Date: "18 September 2020",
        },

        {
          imgUrl: "/images/clients/client-6.jpg",
          Name: "Jony Ahmed",
          Company: "Lorem Company",
          Contact: "Contact",
          Number: "+0998765553",
          Mail: "email@mail.com",
          Payment: "Payment Due",
          Date: "20 October 2020",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
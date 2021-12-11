<template>
  <div>
    <div class="card flex-auto bg-green-400 text-white p-4 rounded-xl" v-for="(statmentCard, i) in statmentCards" :key="i">
      <p class="text-xs">{{ statmentCard.name }}</p>
      <p class="text-lg mt-2">{{ statmentCard.amount }}</p>
      <p class="text-xm text-green-100 mt-10">{{ statmentCard.valid }}</p>
      <p class="font-bold text-xm">{{ statmentCard.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      statmentCards: [
        {
          name: "Balance",
          amount: "45000",
          valid: "valid till",
          date: "3/21",
        },
        {
          name: "Balance",
          amount: "44000",
          valid: "valid till",
          date: "3/21",
        },
        {
          name: "Balance",
          amount: "47000",
          valid: "valid till",
          date: "3/21",
        },
        {
          name: "Balance",
          amount: "46000",
          valid: "valid till",
          date: "3/21",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
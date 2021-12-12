<template>
  <div>
    <div class="grid grid-cols-2 grid-rows-2 gap-4">
      <div class="card bg-green-400 text-white p-4 rounded-xl" v-for="(spendingCard, i) in spendingCards" :key="i">
        <p class="text-xs">{{ spendingCard.name }}</p>
        <p class="text-lg mt-2">{{ spendingCard.amount }}</p>
        <p class="text-xm text-green-100 mt-10">{{ spendingCard.valid }}</p>
        <p class="font-bold text-xm">{{ spendingCard.date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spendingCards: [
        {
          name: "Balance",
          amount: "45000",
          valid: "valid till",
          date: "3/21",
        },
        {
          name: "Balance",
          amount: "45000",
          valid: "valid till",
          date: "3/21",
        },
        {
          name: "Balance",
          amount: "45000",
          valid: "valid till",
          date: "3/21",
        },
        {
          name: "Balance",
          amount: "45000",
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
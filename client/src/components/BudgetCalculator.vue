<template>
<div>
  <BudgetTable/>
  </div>
</template>

<script>
import BudgetTable from './BudgetTable.vue'


export default {
  name: 'BudgetCalculator',
  components: {
    BudgetTable,
  }
}
</script>

<style scoped>

div{
  padding: 10px;
}

</style>
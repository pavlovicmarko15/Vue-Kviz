<template>
  <div class="results d-flex align-items-center">
    <div class="card w-75 animated bounce text-center py-4 mb-3 mx-auto">
      <doughnut></doughnut>
      <div class="container">
        
  
        <router-link to="/">
          <button class="action-button animate blue w-100">Igraj ponovo</button>
        </router-link>
  
      </div>
    </div>
  
  </div>
</template>

<script>
  import Doughnut from './Doughnut'
  export default {
    name: 'results',
    data() {
      return {
  
      }
    },
    components: {
      "doughnut": Doughnut
    }
  }
</script>

<style>
  .results {
    min-height: 100vh
  }
</style>
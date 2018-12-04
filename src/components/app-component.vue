// app-component.vue

<template>
   <div @click.prevent="handleClick" class="button">{{ greetings }}</div>
</template>
<script>
   export default {
      data() {
         return {
            greetings: 'Hello from the AppComponent',
            count: 10
         }
      },

      methods: {
         handleClick: function(event) {
            alert(this.greetings)
         }
      }
   }
</script>

<style scoped>
   .button {
      width: 250px;      
      border: 1px solid black;
      padding: 10px;
      text-align: center;
      border-radius: 3px;
      cursor: pointer;
   }
</style>

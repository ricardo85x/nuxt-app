<template>
  <div>

    <div v-if="$fetchState.pending">
      Loading...
    </div>

    <div v-else>
 <h1 class="text-lg font-bold">Services: {{ service_name }}</h1>

   
    
    

    <ul style="list-style-type: circle" v-for="service in services" :key="service.id">
        <li>
          <NuxtLink :to="`/services/${service.name}`">{{service.name}}</NuxtLink>
        </li>
    </ul>

    </div>
   

 
    <div class="pt-4">
      <NuxtChild />
    </div>
  </div>
</template>

<script>
import { faker } from "@faker-js/faker"
export default {
  name: "services",

  data() {
    return {
      services: [],
      service_name: ""
    }
  },

  // after the component is created
  async fetch() {
    
    
    this.services = await this.$axios.$get("https://jsonplaceholder.typicode.com/users?_limit=3")

    this.service_name = faker.animal.dog()

    //console.log(this)
  }
  

};
</script>
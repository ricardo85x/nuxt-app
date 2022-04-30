<template>
  <div>
    <h1 class="text-lg font-bold">Products</h1>
    <NuxtLink to="/products/product-a"> Product A</NuxtLink>

    <ul style="list-style-type: circle;" v-for="product in products" :key="product.id">
      <li>{{ product.title }}</li>
    </ul>
    
   
  </div>
</template>

<script>
export default {
  name: "products",
  data() {
    return {};
  },
  async asyncData({$axios}) {
    
    const products = await $axios.$get("https://jsonplaceholder.typicode.com/posts?_limit=3")
    return {
      products
    };
  },
};
</script>
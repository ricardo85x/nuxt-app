<template>
  <div>
    <div class="bg-gray-100">
      <div class="container p-5 mx-auto space-x-4 flex items-center">
        <NuxtLink :to="{ name: 'company' }">About Company</NuxtLink>
        <NuxtLink :to="{ name: 'services' }">Serviços</NuxtLink>
        <NuxtLink :to="{ name: 'products' }">Products</NuxtLink>
      </div>
    </div>

    <div class="p-5">
      <div class="container mx-auto">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  

};
</script>
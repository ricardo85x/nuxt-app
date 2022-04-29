<template>
  <div>
    <h1 class="text-lg font-bold">Services</h1>

    <NuxtLink to="/services/website-development">WebSite development</NuxtLink>
    <NuxtLink to="/services/marketing-digital">Marketing digital</NuxtLink>

    <div class="pt-4">
      <NuxtChild />
    </div>
  </div>
</template>

<script>
export default {
  name: "services",
};
</script>
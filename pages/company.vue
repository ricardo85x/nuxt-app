<template>
    <div>
       
        <div class="bg-gray-100">
            <div class="container mx-auto space-x-4 flex items-center h-10 mb-10">
                <NuxtLink to="/services">Services</NuxtLink>
                <NuxtLink to="/company">About Company</NuxtLink>
                <NuxtLink  :to="{ name: 'products' }">Products</NuxtLink>

            </div>
        </div>

        <div>
            <div class="container mx-auto ">
               <h1 class="text-lg font-bold">
                    The company
               </h1>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati facilis ea iure esse minima nobis id, ipsa tempore dolor dolorem expedita qui laudantium delectus, at culpa laboriosam quis tenetur necessitatibus?</p>
            </div>
        </div>
        
    </div>
</template>

<script>

    export default {
        name: 'company'
    }

</script>
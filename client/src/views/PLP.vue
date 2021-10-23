<template>
    <div>
        <h1>Products</h1>
        <div v-for="product in products" :key="product.id">
            <hr>
            <h4>{{product.id}}</h4>
            <h4>{{product.name}}</h4>
            <h4>{{product.price}}€</h4>  
        </div>
        <hr>

    </div>
</template>

<script>
import { inject ,onMounted, ref} from '@vue/runtime-core';

export default {
    setup(){
        let ProductMgr = inject('ProductMgr');
        const products = ref([])

        onMounted(async() => {
            products.value = await ProductMgr.getAllProductsList()
        })
        
        return { products}
    }
}

</script>

<style>

</style>
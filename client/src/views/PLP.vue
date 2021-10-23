<template>
    <div>
        <h1>Products</h1>
        <div v-for="product in products" :key="product.id">
            <hr>
            <h4>{{product.id}}</h4>
            <h4>{{product.title}}</h4>
            <h4>{{product.description}}</h4>
            <h4>{{product.price}}€</h4>  
        </div>
        <hr>

    </div>
</template>

<script>
import { inject } from '@vue/runtime-core';

export default {
    setup(){
        let ProductMgr = inject('ProductMgr');

        return { products:ProductMgr.getAllProductsList() }
    }
}

</script>

<style>

</style>
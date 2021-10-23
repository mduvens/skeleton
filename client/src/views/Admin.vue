<template>
    <div>
        <section id="SECTION_ADD_PRODUCT">
            <form autocomplete="off" @submit.prevent="ProductMgr.addProduct(product)">
                <fieldset>
                    <legend>NEW PRODUCT</legend>
                     <label for="id">ID</label><br>
                    <input type="text" id="id" name="id" v-model="product.id" required><br>
                    <label for="title">Title</label><br>
                    <input type="text" id="title" name="title" v-model="product.title" required><br>
                    <label for="description">Description</label><br>
                    <input type="text" id="description" name="description" v-model="product.description"><br>
                    <label for="price">Price</label><br>
                    <input type="text" id="price" name="price" v-model="product.price"><br>
                    <button type="submit" >ADD</button>
                </fieldset>
            </form>
        </section>
        <h4>{{ProductMgr.getAllProductsList()}}</h4>
        <section id="SECTION_REMOVE_PRODUCT">
            <form autocomplete="off" @submit.prevent="ProductMgr.removeProduct(removeID)">
                <fieldset>
                    <legend>REMOVE PRODUCT</legend>
                    <label for="id">ID</label><br>
                    <input type="text" id="id" name="id" v-model="removeID" required><br>
                    <button type="submit">REMOVE</button>
                </fieldset>
            </form>
        </section>
    </div>
</template>

<script>
import { inject, ref } from '@vue/runtime-core'

export default {
    setup(){
        const Product = inject('Product')
        const ProductMgr = inject('ProductMgr')
        
        const product = ref(new Product());
        const removeID = ref('');

        return {ProductMgr,product,removeID}
    }
}
</script>

<style>

</style>
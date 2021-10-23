<template>
    <div>
        <section id="SECTION_PRODUCTS_LIST">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                <tr v-for="product in products" :key="product.name" >
                    <td class="text-uppercase">{{product.name}}</td>
                    <td class="text-left">{{product.price}}</td>
                </tr>
            </table>
            
        </section>
        <section id="SECTION_PRODUCTS_ADD">
            <form autocomplete="off" @submit.prevent="ProductMgr.addProduct(product)">
                <fieldset>
                    <legend>NEW PRODUCT</legend>
                    <label for="name">Name</label><br>
                    <input type="text" id="name" name="name" v-model="product.name" required><br>
                    <label for="price">Price</label><br>
                    <input type="text" id="price" name="price" v-model="product.price"><br>
                    <button type="submit" >ADD</button>
                </fieldset>
            </form>
        </section>
        <section id="SECTION_PRODUCTS_REMOVE">
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
import { inject,onMounted, ref } from '@vue/runtime-core'

export default {
    setup(){
        const ProductMgr = inject('ProductMgr')
        const products = ref([])
        const product = ref({
            name:'',
            price: ''
        });

        const removeID = ref('');
        onMounted(async () => {
                products.value = await ProductMgr.getAllProductsList()

        })
        
    
        return {ProductMgr,product,removeID,products}
    },
   
}
</script>

<style>

</style>
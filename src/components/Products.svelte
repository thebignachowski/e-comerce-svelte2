<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import Product from '../components/Product.svelte';
    import { db } from '../models/db';
    import { products } from '../store/productStore';

    onMount(() => {
        products.set(db);
    });
    
</script>

<div class="row mt-3">
    {#each $products as product}
        <div class="col-12 col-md-4">
            <Product {product} />
        </div>
    {/each}
</div>
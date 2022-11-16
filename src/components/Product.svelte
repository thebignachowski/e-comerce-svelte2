<script lang="ts">
  import { cart } from "../store/productStore";

  export let product: any;

  const handleAddCart = () => {
    cart.set([...$cart, product]);
  };
</script>

<div class="card mt-3" style="width: 18rem;">
  <img
    src={product.img}
    class="card-img-top"
    alt={product.nombre}
    loading="lazy"
  />
  <div class="card-body">
    <h5 class="card-title">{product.nombre}</h5>
    <p class="card-text">
      ${product.precio} €
    </p>
    <button on:click={handleAddCart} class="btn btn-primary"
      >Agregar al Carrito</button
    >
  </div>
</div>

<style>
  div {
    margin: 0 auto;
  }
</style>

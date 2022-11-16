<script lang="ts">
  import { link, replace } from "svelte-spa-router";
  import { user } from "../store/authStore";
  import { cart } from "../store/productStore";

  let price: number = 0;

  $cart.map((product) => (price += product.precio));

  const handlePaid = () => {
    replace("/paid");
  };
</script>

{#if $user}
  <div class="container row">
    <div class="col-12 col-md-8">
      <h4>Subtotal: {(price - price * 0.21).toFixed(2)} €</h4>
      <h4>IVA: {(price * 0.21).toFixed(2)} €</h4>
      <h4>Envio: {(price * 0.1).toFixed(2)} €</h4>
      <h3>Total a pagar: {(price + price * 0.1).toFixed(2)} €</h3>
      <button class="btn btn-success" on:click={handlePaid}
        >Realizar pago</button
      >
    </div>
  </div>
{:else}
  <div class="container text-center my-5">
    <h2>Login required</h2>
    <div class="row mt-5">
      <div class="col-12 col-md-6">
        <a class="btn btn-outline-success w-100" use:link href="/login">Login</a
        >
      </div>
      <div class="separacion col-12 col-md-6">
        <a class="btn btn-outline-warning w-100" use:link href="/register"
          >Register</a
        >
      </div>
    </div>
  </div>
{/if}

<style>
  h3 {
    border-top: 1px solid #000;
    margin-top: 0.5rem;
  }
  .separacion {
    margin-top: 1rem;
  }
  @media (min-width: 768px) {
    .separacion {
      margin-top: 0;
    }
  }
</style>

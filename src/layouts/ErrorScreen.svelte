<script lang="ts">
  import { replace } from "svelte-spa-router";
  const handleBack = () => {
    replace("/");
  };
</script>

<div class="text-center container">
  <h1 class="text-danger mt-5">404 Not Found Pages</h1>
  <button class="btn btn-outline-warning" on:click={handleBack}>Go Home</button>
</div>

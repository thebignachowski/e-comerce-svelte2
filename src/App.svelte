<script lang="ts">
  import { onMount } from "svelte";
  import Router from "svelte-spa-router";
  import Cart from "./components/Cart.svelte";
  import Navbar from "./components/Navbar.svelte";
  import { firebase } from "./firebase/config";
  import { routes } from "./router/router";
  import { user } from "./store/authStore";

  onMount(() => {
    firebase.auth().onAuthStateChanged((userlog) => {
      console.log(userlog);
      if (!userlog) user.set(null);
      user.set(userlog);
    });
  });
</script>

<div>
  <Navbar />
  <div class="container text-center">
    <Cart />
  </div>

  <Router {routes} />
</div>

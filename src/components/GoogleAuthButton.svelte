<script>
  export let handleLogin;
</script>

<button
  class="btn btn-outline-dark w-100 mt-3"
  role="button"
  style="text-transform:none"
  on:click={handleLogin}
>
  <img
    width="20px"
    style="margin-bottom:3px; margin-right:5px"
    alt="Google sign-in"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
  />
  Login with Google
</button>

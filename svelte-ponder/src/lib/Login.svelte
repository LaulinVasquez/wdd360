<script lang="ts">
  let email = $state("");
  let password = $state("");
  let error = $state("");

  function loginHandler(event: SubmitEvent) {
    event.preventDefault();
    // Your login logic goes here
    console.log(email);
    if (password.length < 6) {
        error = "Password must be at least 6 characters";
        return
    } else {
        error = "";
    }
    
  }
</script>

<form onsubmit={loginHandler}>
  <h2>Login</h2>

  <!-- Add your email input here -->
   <label for="email">Email</label>
   <input type="email" id="email" bind:value={email} required />
  <!-- Add your password input here -->
   <label for="password">Password</label>
   <input type="password" id="password" bind:value={password} required />
   {#if error}
    <p class="error">{error}</p>
   {/if}

  <button type="submit">Log In</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 350px;
    margin: 40px auto;
  }
  .error{
    color: red;
    font-size: large;
  }
</style>

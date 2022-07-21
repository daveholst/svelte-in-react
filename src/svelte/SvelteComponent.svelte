<script lang="ts">
  export let animal: string;
  let count = 0;

  function handleClick() {
    count += 1;
  }
</script>

<div class="svelte-container">
  <p>Hi, I'm a svelte component.</p>
  <p>The current value for the variable animal is: <span>"{animal}"</span></p>
  <button on:click={handleClick}>
    click to go up! clicked {count} times
  </button>
</div>

<style>
  p,
  button {
    color: pink;
  }

  .svelte-container {
    border: solid 1px pink;
    border-radius: 10px;
    padding-bottom: 20px;
  }
</style>

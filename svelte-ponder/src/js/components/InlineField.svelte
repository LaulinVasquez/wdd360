<script lang="ts">
  let buttonRef: HTMLButtonElement;
  let isEditing = $state(false);
  let {
    label,
    value,
    type = "text",
  }: { label: string; value: string; type?: string } = $props();
  let currentValue = $state(value);
  let draft = $state(value);

  function startEdit() {
    draft = currentValue;
    isEditing = true;
  }

  function saveEdit() {
    currentValue = draft;
    isEditing = false;
  }

  function cancelEdit() {
    draft = currentValue;
    isEditing = false;
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      event.preventDefault();
      cancelEdit();
    }

    if (event.key === "Enter" && type !== "textarea") {
      event.preventDefault();
      saveEdit();
    }
  }
</script>

<h2>{label}</h2>

{#if isEditing}
  {#if type === "textarea"}
    <textarea bind:value={draft} onkeydown={handleKeyDown}></textarea>
  {:else}
    <input {type} bind:value={draft} onkeydown={handleKeyDown} />
  {/if}

  <button onclick={saveEdit}>Save</button>
  <button onclick={cancelEdit}>Cancel</button>
{:else}
  <button bind:this={buttonRef} onclick={startEdit} aria-label={`Edit ${label}`}>
    {currentValue}
  </button>
{/if}

<style>
  input {
    padding: 8px;
  }

  button {
    margin: 5px;
    padding: 8px 12px;
    cursor: pointer;
  }
</style>

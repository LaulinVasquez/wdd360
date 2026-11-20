<script lang="ts">
    let count: number = $state(0)

    const increment = () => {
        count++;
    }

    const decrease = () => {
        if (count > 0)
        count--;
    }
</script>

<section>
    <h2>Total likes {count}</h2>
    {#if count <= 9 && count > 0}
        <p>Keep the likes coming!</p>
    {:else if count > 9}
        <p>Wow! you are popular</p>
    {:else}
        <p>No likes yet</p>
    {/if}
    <button type="button" class="likes" onclick={increment}> Like</button>
    <button type="button" class="likes" onclick={decrease}> Dislike</button>
</section>

<style>
    .likes{
        padding: 0.5rem;
        margin: 0.5rem;
        background-color: brown;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    .likes:hover{
        background-color: darkred;
        transition: background-color 0.3s ease;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        transition: color 0.3s ease;
        transition: border-radius 0.3s ease;
        transition: cursor 0.3s ease;
        transition: border 0.3s ease;
        transition: padding 0.3s ease;
        transition: margin 0.3s ease;
        transition: font-size 0.3s ease;
        transition: line-height 0.3s ease;
        transition: letter-spacing 0.3s ease;
        transition: text-align 0.3s ease;
        transition: vertical-align 0.3s ease;
        transition: display 0.3s ease;
    }
    p{
        transition: color 0.3s ease;
        transition: font-size 0.3s ease;
    }
</style>
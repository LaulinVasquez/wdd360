<script lang="ts">
    import InlineField from "./InlineField.svelte";

    const user = {
        name: "Laurin",
        email: "laurin171125@gmail.com",
        bio: "I love full Stack"
    }
</script>
<section class="profile">
<h1> User Profile </h1>
    <InlineField label="name" value={user.name} type="text"/>
    <!-- Email: Use InlineField with user.email and type="email" -->
    <InlineField label="email" value={user.email} type="email"/>
    
    <!-- Bio: Use InlineField with user.bio and type="textarea" We'll add textarea -->
    <InlineField label="bio" value={user.bio} type="textarea"/>
</section>

<style>
  .profile {
    max-width: 500px;
    margin: 40px auto;
    padding: 24px;
    border: 1px solid #ddd;
    border-radius: 12px;
  }

  h1 {
    margin-bottom: 24px;
    color: green;
  }
</style>
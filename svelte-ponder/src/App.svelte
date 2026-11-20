<script> 
  import Login from './lib/Login.svelte';
  import InlineField from './js/components/InlineField.svelte';
  import UserProfile from './js/components/UserProfile.svelte';
  import Likes from './js/components/Likes.svelte';
</script>

<section id="center">
<Login/>

<UserProfile />

<h2>Profile views and likes</h2>
<Likes />
</section>



<section id="spacer"></section>

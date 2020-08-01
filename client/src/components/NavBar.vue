<template>
<div>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item href="/">Home</b-nav-item>
      <b-nav-item router-link to="/ping">Ping</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</div>
</template>

<script>

export default {
  name: 'NavBar',
  props: {
  },
  components: {
  }
}

</script>

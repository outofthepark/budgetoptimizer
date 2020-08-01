<template>
    <div>
        <p>Some page one text.</p>
    </div>
</template>

<script>
  export default {
    name: 'ApplicationInfo',
    computed: {
      username() {
        return this.$route.params.username
      }
    },
    methods: {
      goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      }
    }
  }
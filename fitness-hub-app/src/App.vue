<template>
  <v-fade-transition appear>
    <router-view/>
  </v-fade-transition>
</template>

<script>
  export default {
    name: 'App',
    computed: {
      didAutoLogout() {
        return this.$store.getters["didAutoLogout"];
      }
    },
    watch: {
      didAutoLogout(curValue, oldValue) {
        if (curValue && curValue !== oldValue) {
          this.$router.replace('/');
        }
      }
    },
  }
</script>

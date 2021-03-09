<template>
  <navBar/>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  setup() {
    return {

    }
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
#app
  font-family: Lato, Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  margin: 0px
</style>

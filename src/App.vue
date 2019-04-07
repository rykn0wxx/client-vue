<template>
  <div class="app layout-row">
    <div class="sidenav">
      <router-link to="/">Home</router-link>
      <br />
      <router-link to="/about">About</router-link>
    </div>
    <div class="layout-column flex" tabindex="-1" role="main">
      <div class="toolbar">
        Toolbar goes here
      </div>
      <md-content content-class="md-scroll-y layout-column flex">
        <md-view />
      </md-content>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  metaInfo () {
    return {
      title: 'Dashboard by rykn0wxx'
    }
  }
}
</script>

<style lang="scss">
.app {
  overflow: hidden;
  max-width: 100%;
  max-height: 100%;
}
</style>

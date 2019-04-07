<template>
  <div>
    <div>
      <md-icon icon-name="dashboard" class="md-primary" />
    </div>
    <button class="btn">demo btn</button>
    <p v-cloak>{{ msg }}</p>
    <div>
      <md-card />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'aaaa'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

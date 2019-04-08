<template>
  <div class="about">
    <div>
      <md-input type="email"></md-input>
    </div>
    <div>
      <md-button class="md-primary">Primary</md-button>
      <md-button class="md-raised md-primary">Primary</md-button>
      <md-button class="md-raised md-accent">Accent</md-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>
.myinput {
  &::-webkit-input-placeholder {
    color: red;
  }
}
</style>

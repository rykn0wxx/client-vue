<template>
  <md-card class="core-card">
    <md-card-header class="core-card__header md-whiteframe-5dp">
      <h4 class="core-card__header--title">{{ headerTitle || 'Default Title' }}</h4>
      <p class="core-card__header--subhead">{{ headerSubhead || 'Default Subhead' }}</p>
    </md-card-header>
    <md-card-content class="core-card__content">
      <slot />
    </md-card-content>
  </md-card>
</template>

<script>
export default {
  name: 'CoreCard',
  props: [
    'headerTitle',
    'headerSubhead'
  ]
}
</script>

<style lang="scss" scoped>
.core-card {
  margin: 25px 0;
  overflow: unset;
  display: inline-block;
  .core-card {
    padding: 0;
    &__header {
      margin: -20px 15px 0;
      border-radius: 4px;
      padding: 15px;
      background-color: #4c5667;
      &--title {
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 0.005em;
        margin-top: 0;
        margin-bottom: 5px;
      }
      &--subhead {
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        letter-spacing: .01em;
        margin: 0;
      }
    }
    &__content {
      padding: 0 20px 8px;
    }
  }
}
</style>

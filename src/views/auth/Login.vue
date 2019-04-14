<template>
  <div class="login base-container container">
    <div class="layout-column layout-align-center-center">
      <form class="login-form" novalidate>
        <core-card class="login-form__card" headerStyle="rgba(#4c5667, 0.5)">
          <template v-slot:cardHeader>
            <router-link class="login-form__logo" to="/">
              <core-anon-logo />
            </router-link>
          </template>
          <template v-slot:cardSubhead>
            <small class="text-white">Sign in to start your session</small>
          </template>
          <template v-slot:cardContent>
            <md-field>
              <md-icon>email</md-icon>
              <label for="login">Login</label>
              <md-input id="login" name="login" type="text" autocomplete="off" autofocus="true" required />
            </md-field>
            <md-field>
              <md-icon>lock</md-icon>
              <label for="password">Password</label>
              <md-input id="password" name="password" type="password" autocomplete="off" autofocus="false" required />
            </md-field>
          </template>
          <template v-slot:cardAction>
            <md-button class="md-primary">Login</md-button>
          </template>
        </core-card>
      </form>
      <div class="base-footer">
        <h6 class="md-caption">
          Don't have an account? <router-link to="/register" class="auth-link">Register</router-link>
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="scss" scoped>
.base {
  &-container {
    padding-top: 10vh;
    z-index: 2;
    position: relative;
    .md-caption {
      margin-top: 0;
    }
  }
}
.login {
  .base-footer, .login-form {
    width: 400px;
  }
  .login-form {
    &__logo {
      display: block;
      text-align: center;
      > svg {
        height: 48px;
        width: auto;
        fill: rgba(0, 0, 0, 0.7);
      }
    }
    &__card {
      background-color: rgba(#2f323e, 0.5);
      color: #b2b9bf;
      width: 100%;
      margin-bottom: 0;
      &-header {
        background-color: rgba(#4c5667, 0.5);
      }
    }
  }
  .auth-link {
    text-decoration: none;
  }
}
</style>

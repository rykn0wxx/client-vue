<template>
  <div class="flex-40">
    <form novalidate class="md-layout">
      <md-card class="md-card-plain">
        <md-card-header>
          <router-link to="/" class="md-title">Login</router-link>
        </md-card-header>
        <md-card-content>
          <div class="md-layout">
            <div class="md-layout-item">
              <md-field>
                <md-icon class="md-accent">person</md-icon>
                <label for="login">Login</label>
                <md-input name="login" id="login" autocomplete="off" v-model="user.login" />
              </md-field>
            </div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item">
              <md-field>
                <md-icon class="md-accent">lock</md-icon>
                <label for="password">Password</label>
                <md-input name="password" id="password" autocomplete="off" v-model="user.password" />
              </md-field>
            </div>
          </div>
        </md-card-content>
        <md-card-actions>
          <md-button>Action</md-button>
        </md-card-actions>
      </md-card>
    </form>
    <div class="page-foooter layout-row layout-align-start-none">
      <router-link to="/register" class="auth-link md-body-1">Create an Account</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      user: {
        login: '',
        password: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.authentication .md-card-plain {
  background-color: transparent;
  box-shadow: none;
  border: 0;
  width: 100%;
  .md-card-header, .md-card-content {
    padding-left: 5px;
    padding-right: 5px;
  }
  .md-field > .md-icon::after {
    background-color: transparent;
  }
}
</style>

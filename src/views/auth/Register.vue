<template>
  <div class="flex-40">
    <form novalidate class="md-layout">
      <md-card class="md-card-plain">
        <md-card-header>
          <router-link to="/" class="md-title">Register</router-link>
        </md-card-header>
        <md-card-content>
          <div class="md-layout">
            <div class="md-layout-item">
              <md-field>
                <md-icon class="md-accent">email</md-icon>
                <label for="email">Email</label>
                <md-input name="email" id="email" autocomplete="off" v-model="user.email" />
              </md-field>
            </div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item">
              <md-field>
                <md-icon class="md-accent">person</md-icon>
                <label for="username">Username</label>
                <md-input name="username" id="username" autocomplete="off" v-model="user.username" />
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
          <div class="md-layout">
            <div class="md-layout-item">
              <md-field>
                <md-icon class="md-accent">lock</md-icon>
                <label for="password_confirmation">Password Confirmation</label>
                <md-input name="password_confirmation" id="password_confirmation" autocomplete="off" v-model="user.password_confirmation" />
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
      <router-link to="/login" class="auth-link md-body-1">Sign in</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      user: {
        email: '',
        username: '',
        password: '',
        password_confirmation: ''
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

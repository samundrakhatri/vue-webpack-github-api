<template>
  <div class="row">
    <div class="col-sm-6 col-sm-offset-3">
      <div class="panel panel-default">
        <div class="panel-body">
          <form @submit.prevent="storeGithubUsername">
            <div class="form-group">
              <label class="control-label">Username</label>
              <input type="text" v-model="login.username" class="form-control">
            </div>
            <div v-if="error.message"> {{ error.message }}</div>
            <button class="btn btn-info">Enter</button>
        </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        error: {
          message: '',
        },
        login: {
          username: '',
          password: '',
        },
      };
    },
    methods: {
      storeGithubUsername() {
        if (!this.login.username) {
          this.error.message = 'Please! Please!! Please!!!';
          return false;
        }
        this.$root.isLoggedIn = true;
        this.$router.push({ path: '/me' });
        this.$root.session.github.username = this.login.username;
        return false;
      },
    },
  };
</script>

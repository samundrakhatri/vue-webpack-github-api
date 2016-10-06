<template>
  <div class=" fade in active">
    <div class="row">
      <div  v-for="profile in profiles">
        <profile :user="profile.login"></profile>
      </div>
    </div>
  </div>
</template>
<script>
  /*
   global _
   */
  import Profile from './Profile.vue';
  export default {
    props: ['api'],
    components: {
      Profile,
    },
    created() {
      this.fetchProfiles();
    },
    data() {
      return {
        profiles: [],
      };
    },
    methods: {
      fetchProfiles() {
        this.resource({
          url: this.api,
          onSuccess: response => {
            this.profiles = _.take(response, 10);
          },
        });
      },
    },
  };
</script>

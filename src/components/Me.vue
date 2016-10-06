<template>
  <div>
    <div class="card hovercard">
      <div class="card-background">
        <img class="card-bkimg" alt="" :src="github.avatar_url">
        <!-- http://lorempixel.com/850/280/people/9/ -->
      </div>
      <div class="useravatar">
        <img alt="" :src="github.avatar_url">
      </div>
      <div class="card-info"><span class="card-title">
       {{ github.name }}
        <a :href="github.login">
          <span v-text="' <' + github.login + ' />'"></span>
        </a>
      </span>

      </div>
    </div>
    <div class="btn-pref btn-group btn-group-justified btn-group-lg" role="group" aria-label="...">
      <div class="btn-group" role="group">
        <button type="button" id="stars" class="btn btn-default"
                :class="{'btn-primary' : isActive('stars')}"
                @click="showTab('stars')" data-toggle="tab"><span
          class="glyphicon glyphicon-star" aria-hidden="true"></span>
          <div class="hidden-xs">Stars</div>
        </button>
      </div>
      <div class="btn-group" role="group">
        <button type="button" id="favorites" class="btn btn-default"
                :class="{'btn-primary' : isActive('followings')}"
                @click="showTab('followings')"
                data-toggle="tab"><span
          class="glyphicon glyphicon-heart" aria-hidden="true"></span>
          <div class="hidden-xs">Followings</div>
        </button>
      </div>
      <div class="btn-group" role="group">
        <button type="button" id="following" class="btn btn-default"
                :class="{'btn-primary' : isActive('followers')}"
                @click="showTab('followers')"
                data-toggle="tab"><span
          class="glyphicon glyphicon-user" aria-hidden="true"></span>
          <div class="hidden-xs">Followers</div>
        </button>
      </div>
    </div>

    <div class="well">
      <div class="tab-content">
        <stars v-if="isActive('stars')"></stars>
        <followers :api="github.followers_url" v-if="isActive('followers')"></followers>
        <followings :api="github.following_url" v-if="isActive('followings')"></followings>
      </div>
    </div>

  </div>


</template>

<script>
  import Stars from './Me/Stars.vue';
  import Followers from './Me/Followers.vue';
  import Followings from './Me/Followings.vue';
  export default {
    components: {
      Stars,
      Followers,
      Followings,
    },
    data() {
      return {
        github: {},
        tab: 'stars',
      };
    },
    created() {
      this.fetchUserDetails(this.getUsername());
    },
    methods: {
      isActive(tab) {
        return this.tab === tab;
      },
      showTab(tab) {
        this.tab = tab;
      },
      getUsername() {
//        return 'samundrak';
        return this.$root.session.github.username;
      },
    },
  };
</script>

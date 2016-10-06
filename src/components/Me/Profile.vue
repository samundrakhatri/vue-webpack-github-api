<template>
  <div>
    <div class="col-sm-2 col-md-2">
      <img :src="github.avatar_url"
           alt="" class="img-rounded img-responsive"/>
    </div>
    <div class="col-sm-2 col-md-4">
      <blockquote>
        <p>
          <a :href="github.html_url" target="_blank" >{{ github.name }}</a>
        </p>
        <small><cite title="Source Title">{{ github.location }}<i class="glyphicon glyphicon-map-marker"></i></cite>
        </small>
      </blockquote>
      <p><i class="glyphicon glyphicon-envelope"></i> {{ github.email }}
        <br/>
        <i class="glyphicon glyphicon-globe"></i>
        <a :href="github.blog" target="_blank" >{{ github.blog }}</a>
        <br/>
        <i class="glyphicon glyphicon-gift"></i> {{ github.bio || '-' }}
        <br>
        Company: {{ github.company || '-'}}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['user'],
    data() {
      return {
        github: {},
      };
    },
    created() {
      this.fetchUserDetails(this.user);
    },
    methods: {},
  };
</script>

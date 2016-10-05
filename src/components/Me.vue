<template>
  <div>
    <div class="panel panel-default">
      <h3>
        Welcome {{ name }}
      </h3>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        name: 'samundra',
      };
    },
    ready() {

    },
    methods: {
      fetchUserDetails() {
      },
    },
  };
</script>

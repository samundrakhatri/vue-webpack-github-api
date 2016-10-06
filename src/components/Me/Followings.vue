<template>
  <Profiles :api="api"></Profiles>
</template>
<script>
  /*
   global _
   */
  import Profiles from './Profiles.vue';
  export default {
    props: ['api'],
    components: {
      Profiles,
    },
  };
</script>

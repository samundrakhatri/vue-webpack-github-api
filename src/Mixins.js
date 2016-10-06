const globalMixins = {
  methods: {
    resource(options) {
      return this.$http[options.method || 'get'](options.url || '/', options.data || {})
        .then(response => {
          if (options.onSuccess && typeof options.onSuccess === 'function') {
            return options.onSuccess(response.data);
          }

          return false;
        }, error => {
          if (options.onError && typeof options.onError === 'function') {
            return options.onError(error);
          }

          return false;
        });
    },
    fetchUserDetails(username) {
      this.$http.get(`https://api.github.com/users/${username}`)
        .then(data => {
          this.github = data.body;
        });
    },
  },
};

export { globalMixins };

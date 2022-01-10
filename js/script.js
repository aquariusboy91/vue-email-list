var app = new Vue({
    el: '#app',
    data: {
     email: '',
    },
    created(){
        const self = this;
        axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail", {
            params: {
            items: 10
        },
      })
        .then(function (response) {
        self.email = response.data.response
        });
      }
  })
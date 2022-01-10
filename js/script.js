var app = new Vue({
    el: '#app',
    data: {
     email: [],
    },
    created(){
        for (i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
              this.email.push({ text : response.data.response});
            });
          }
      }
  })
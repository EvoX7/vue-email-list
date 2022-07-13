const app = new Vue({
  el: "#app",

  data: {
    emailResponse: "",
    emailsArray: [],
  },


  methods: {

  },


  created() {
    for (let i = 0; i < 10; i++) {
      axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          this.emailResponse = response.data.response;
          this.emailsArray.push(this.emailResponse);
          console.log(this.emailResponse);
        })
        }
        

    
  },


});

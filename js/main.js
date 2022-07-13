const app = new Vue({
  el: "#app",

  data: {
    emailResponse: "",
  },

  created() {
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response) => {
        this.emailResponse = response.data.response;
      }

      )
  },

});

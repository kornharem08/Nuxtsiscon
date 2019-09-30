<template>
  <form>
    <div>
      <img src="./logo.png" class="img-fluid center" alt="Responsive image" />
    </div>
    <h3>{{id}}</h3>
    <div class="ptext">
      <p>Please input your passport account name and your Password กรุณากรอกบัญชี PSU Passport และรหัสผ่าน</p>
    </div>
       <div class="form-group">
      <label for></label>
      <div class="inputus">
        <input
          type="text"
          class="form-control"
          name="username"
          id="username"
          aria-describedby="helpId"
          placeholder
          v-model="username"
        />
      </div>

      <div class="inputus">
        <input
          type="password"
          class="form-control"
          name="password"
          id="password"
          aria-describedby="helpId"
          placeholder
          v-model="password"
        />
      </div>
    </div>
    <div class="text-center mt-4">
      <button type="button" name id v-on:click="getid()" class="btn btn-primary" btn-lg>Sign in</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.hook,
      username: "",
      password: "",
      type: ""
    };

  },
   methods: {
       
    async getid() {
      let res = await this.$http.post("/student/authenticate/",
      { username: this.username, password: this.password },
          {
            headers: {
              "Content-type": "application/json"
            }
          }).then(res => {
                this.getPosts();
          alert("Login Sucess1");
        })
        .catch(error => {
          alert("Login Faile");
          // console.log('error: ' + error);
        });

    },
     async getPosts() {
            let res = await this.$http.post("https://chatbot-sis-botv1.herokuapp.com/webhook",
      {  username: this.username,
            senderid: this.$route.params.hook,
            type: "authenticate"},
          {
            headers: {
              "Content-type": "application/json"
            }
          }).then(res => {
     
          alert("Login Sucess1");
        })
        .catch(error => {
          alert("Login Faile");
          // console.log('error: ' + error);
        });

      }

}
}
</script>   

<style scope>
.ptext{
    text-align: center;
    font-size: 1em;
}
</style>
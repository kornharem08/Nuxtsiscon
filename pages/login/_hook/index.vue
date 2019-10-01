<template>
  <!-- <form> -->
  <!-- <div>
      <img src="./logo.png" class="img-fluid center" alt="Responsive image" />
    </div>
  <h3>{{id}}</h3>-->
  <!-- <div class="ptext">
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
      <button type="button" v-on:click="getid()" class="btn btn-primary" btn-lg>SIGN IN</button>
    </div>
  </form>-->

  <div>
    <form class="login-form">
    <img src="./logo.png" class="img-fluid center" alt="Responsive image" />
      <div class="txtb">
        <input
          type="text"
          class="form-control"
          name="username"
          id="username"
           placeholder="PSU Passport Account Name"
          v-model="username"
        />
      
      </div>
      <div class="txtb">
        <input
          type="password"
          class="form-control"
          name="password"
          id="password"
          v-model="password"
          placeholder="Password"
        />
        
      </div>

       <input type="button" class="bottom-text" value="Sign in">




    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Work+Sans&display=swap' }
      ],
      id: this.$route.params.hook,
      username: "",
      password: "",
      type: ""
    };
  },
  methods: {
    async getid() {
      let res = await this.$http
        .post(
          "/student/authenticate/",
          { username: this.username, password: this.password },
          {
            headers: {
              "Content-type": "application/json"
            }
          }
        )
        .then(res => {
          this.getPosts();
          alert("Login Sucess1");
        })
        .catch(error => {
          alert("Login Faile");
          // console.log('error: ' + error);
        });
    },
    async getPosts() {
      let res = await this.$http
        .post(
          "https://chatbot-sis-botv1.herokuapp.com/webhook",
          {
            username: this.username,
            senderid: this.$route.params.hook,
            type: "authenticate"
          },
          {
            headers: {
              "Content-type": "application/json"
            }
          }
        )
        .then(res => {
          alert("Login Sucess1");
        })
        .catch(error => {
          alert("Login Faile");
          // console.log('error: ' + error);
        });
    },
    
  }
};
</script>   

<style scope>
*{
  margin: 0;
  padding: 0;
  text-decoration: none;

}

body{
  min-height: 100vh;
  background-image: linear-gradient(120deg,#7E57C2,#5C6BC0);
  font-family: 'Work Sans', sans-serif;
}

.login-form{

  width: 360px;
  background:white;
  height: 580px;
  padding: 80px 40px;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}

.login-form h1{
  text-align: center;
  margin-bottom:60px; 
}

.txtb{

  position: relative;
  margin: 30px ,0;

}

.txtb input{
  font-size: 15px;
  width: 100%;
  padding: 0 5px;
  height: 40px;
  margin-top: 25px;
}

.bottom-text{
  display: block;
  width: 100%;
   margin: 0 auto;
  height: 50px;
  border: none;
  color: #fff;
  outline: none;
  cursor: pointer;
  transition: .5s;
  margin-top: 40px;
  background-color: #2E86C1;
  border-radius: 10px;

  

}




</style>
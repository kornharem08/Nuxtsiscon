<template>

  <div >


    <div id="loder">
    <form class="login-form">
    <img src="./logo.png" class="img-fluid center" alt="Responsive image" />
 
      <div class="txtb">
        <label for="username">PSU Passport Account Name</label>
        <input
          type="text"
          class="form-control"
          name="username"
          id="username"
           placeholder=""
          v-model="username"
        />
      
      </div>
      <div class="txtb">
        <label for="username">Password</label>
        <input
          type="password"
          class="form-control"
          name="password"
          id="password"
          v-model="password"
          placeholder=""
        />
        
      </div>

       <input type="button" class="bottom-text" v-on:click="getid(),alert()" value="SIGN IN">




    </form>

    </div>


    <div id="show" style="display : none;" >
    <form class="login-form">
      <img src="./sisconnect2.jpg" class="img-fluid center" alt="Responsive image" style="weight:150px; height:100px;" />
        <h1 style="color:green;">Sign in Success</h1>
         </form>
      </div>





   
    </div>
 
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
          console.log(res.data);
          
          if(res.data.status == "success" && res.data.authenticated == true ){

              this.getPosts();
          }else{
            this.error1();
          }
          
        })
        .catch(error => {
          this.error1();
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
      
          this.finish();
           document.getElementById("show").setAttribute("style", "display:block , weight:100%");
            document.getElementById("loder").setAttribute("style", "display:none");
         
        })
        .catch(error => {
          this.error1();
       
        });
    },
     alert() {
     this.$swal({
  title: "Checking....",
  text: "Please wait a moment",
  icon: "http://loadinggif.com/images/image-selection/3.gif",
  buttons: false,
  closeOnClickOutside: false,
});
    },
    finish() {
     this.$swal({
  title: "Sign in Success",
  text: "Please close your browser" ,
  icon: "success",
  buttons: false,
  closeOnClickOutside: false,
});
    },error1(){
      this.$swal({
  title: "Sign In failed",
  text: "Please Sign in agian",
  icon: "error",
})
    }
    
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
  background-image: linear-gradient(120deg,#000080,	 #1F95B2);
  
}

.login-form{

  width: 360px;
  background:white;
  height: 580px;
  padding: 50px 40px;
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
  border-radius: 0px;
  

}

.bottom-text{
  display: block;
  width: 50%;
   margin: 0 auto;
  height: 40px;
  border: none;
  color: #fff;
  outline: none;
  cursor: pointer;
  transition: .5s;
  margin-top: 40px;
  background: linear-gradient(120deg,#1F95B2,#000080);
  background-size: 150%;
  border-radius: 0px;
  font-weight: 400;


/* border: none;
background: linear-gradient(120deg,#000080,#1F95B2);
color: #ffffff !important;
font-weight: 400;
height: 40px;
text-transform: uppercase;
border-radius: 0px;
transition: all 0.3s ease 0s;
margin: 0 auto;
width: 50%; */

}

.bottom-text:hover {
  border: 1px solid;
  box-shadow: inset 0 0 20px rgba(20, 208, 241, 0.5), 0 0 20px rgba(26, 134, 223, 0.2);
  outline-color: #1F95B2;
  outline-offset: 15px;
  text-shadow: 1px 1px 2px #427388; 
}

p{
  color: #adadad;
  text-align: center;
  font-size: 11px;
 
}
label{
  font-weight: 600;
  margin-top: 15px;
  
}

</style>
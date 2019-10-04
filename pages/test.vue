<template>
    <div class="container">
   <button @click="alert()">OK</button>


<div>

<!-- <dialog>
	  <div class="spinner" id="loder"> 
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
      <div class="rect5"></div>
      <p>Loading</p>
	  </div>
	</dialog> -->

  <b-modal id="my-modal"><div class="spinner" id="loder" style="display:block;"> 
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
      <div class="rect5"></div>
      <p>Loading</p>

  </div></b-modal>

<button id="show" @click="hide()">Hide Dialog!</button>
  
			    </div>

   
</div>
    
</template>


<script>
export default {
  methods: {
    
  show(){
  document.getElementById("dialog").setAttribute("style", "display:block");
  },
  hide(){
    document.getElementById("dialog").setAttribute("style", "display:none");
  },
  alert() {
     this.$swal("Login success", "You are ready to start!", "success")
    }
}
}
</script>




<style  scoped>

.spinner {
  margin: 50px auto;
  width: 180px;
  height: 40px;
  text-align: center;
  font-size: 10px;
  position: relative;
  resize: vertical;
}

.spinner > div {
  background-color: #333;
  height: 100%;
  width: 6px;
  display: inline-block;

  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
  animation: sk-stretchdelay 1.2s infinite ease-in-out;
}

.spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.spinner .rect3 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

.spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

.spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

@-webkit-keyframes sk-stretchdelay {
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
  }
}

@keyframes sk-stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
}



</style>
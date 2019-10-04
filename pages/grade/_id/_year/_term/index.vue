<template>


  <div>
    

    <div class="spinner" id="loder">
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
      <div class="rect5"></div>
      <p>Loading</p>
    </div>

<div  style="display : none;"  id="myDiv" >
  <div style="background-color:#00386b; color:white; height:40px; font-size:18px; font-weight:700;  margin: 0 auto;  display: block; padding:5px;"> Grade Result : {{term+"/"+year}}</div>
<table class="table table-striped"> 

    <tr >
        <td class="aaa1" style="color : black;" >SUBJECTNAME</td>
        <td class="aaa" style="color : black;">SUBJECTCODE</td>
        <td class="aaa" style="color : black;">GRADE</td>
    </tr>


  <tbody v-if="this.year == 0 &&  this.term == 0">

    <template v-for="(v,index) in grade2">
      <tr  :key="index" class ="texttd" id="test1">
        <td  class="text1" cols="7">{{v.SubjectNameEN}}</td>
        <td class="text" cols="3">{{v.EduYearTH}}</td>
        <td class="text" cols="2">{{v.EduTerm}}</td>
      </tr>
       </template>
    </tbody>


    <tbody v-else>
      <template v-for="(v ,index) in grade2">
      <tr v-if="(v.EduYearTH == year && v.EduTerm == term)" :key="index" class ="texttd" id="test1">
        <td  class="text1" cols="7">{{v.SubjectNameEN}}</td>
        <td class="text" cols="3">{{v.EduYearTH}}</td>
        <td class="text" cols="2">{{v.EduTerm}}</td>
      </tr>
       </template>
       
         </tbody>
         

      

    
   

  
</table>
</div>

  </div>


</template>

<script scope>
export default {
  components: {},
  data() {
    return {
      id: this.$route.params.id,
      year: this.$route.params.year,
      term: this.$route.params.term,
      grade: [],
      grade2 :''
    };
  },
  async created() {
    console.log("created");
   
    
    this.getStudent();
  },

  methods: {
    async getStudent() {
      let res = await this.$http.get("/grade/" + this.id);

      document.getElementById("myDiv").setAttribute("style", "display:block , weight:100%");
      document.getElementById("loder").setAttribute("style", "display:none");

      this.grade = res.data.data;
      this.grade2 = this.grade.sort((a,b) =>(a.EduYearTH > b.EduYearTH ? 1:-1));
      

   
      console.log();
    },
   
  }
};
</script>

<style scoped>
body {
  font-family: "Open Sans", sans-serif;
}
.spinner {
  margin: 310px auto;
  width: 50px;
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
p {
  font-size: 15px;
}
.aaa{
   font-weight: 700;
   text-align: center;
   
}
.text{
  text-align: center;
  font-size: 16px;
}
.text1{
  
  font-size: 15px;
}
.texthd{
  font-weight: bolder;
  
}
.aaa1{
   font-weight: 700;
}


</style>

<template>
  <div>
    <div id="loder">
      <center>
        <img
          src="./sisconnect2.jpg"
          class="img-fluid center"
          style="width: 230px; height:100px; margin-top: 200px;
  text-align: center;
  position: relative;"
        />
      </center>
      <center>
        <P>Loading data please wait a moment</P>
      </center>
      <div class="spinner">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
      </div>
    </div>

    <div style="display : none; " id="myDiv">

       <div
        style="background-color:#00386b; color:white; height:40px; font-size:18px; font-weight:700;  margin: 0 auto;  display: block; padding:5px;"
      >Grade Result : {{showyear}}</div>


      <table class="table table-striped">
        <tr>
          <td class="aaa1" style="color : black;">SUBJECTNAME</td>
          <td class="aaa" style="color : black;">SUBJECTCODE</td>
          <td class="aaa" style="color : black;">GRADE</td>
        </tr>



         <template v-if="this.year == 0 &&  this.term == 0">
           
     
       <template v-for="(x,index1) in checkterm" >
       
        <tbody :key="index1">
            <tr style="background-color:#00386b; margin-top:10px;">
            <td style="color:white">Grade Result : {{x.slice(5)+"/"+x.slice(0,4)}}</td>
            <td></td>
            <td></td>

        </tr>
          <!-- <div v-if="x.slice(0,4) && x.slice(5)" :key="index1"> -->
          <template v-for="(v,index) in grade2" >
            <tr :key="index" class="texttd" id="test1" v-if="v.EduYearTH == x.slice(0,4) && v.EduTerm == x.slice(5)">
              <td class="text1" cols="7">{{v.SubjectNameEN}}</td>
              <td class="text" cols="3">{{v.SubjectCode}}</td>
              <td class="text" cols="2">{{v.Grade}}</td>
            </tr>

          </template>
          
         
        

        </tbody> 
        
         <template   v-for="(v,index) in gpa">
            <tbody :key="index"  v-if="v.EduYearTH == x.slice(0,4) && v.EduTerm == x.slice(5)">
              <tr  style="margin:0">
                <td class="col-10" style="background-color:#00386b; font-size: 13px; color:white">SEMESTER CREDITS:</td>
                <td class="col-1" style="background-color:#00386b; font-size: 13px;"> </td>
                <td class="col-1" style="background-color:#00386b; font-size: 13px; color:white">{{v.SemesterCredit}}</td>
              </tr>
              <tr >
                <td class="col-10" style="background-color:#00386b; font-size: 13px; color:white">CUMULATIVE CREDITS:</td>
                <td class="col-1" style="background-color:#00386b; font-size: 13px;"> </td>
                <td class="col-1" style="background-color:#00386b; font-size: 13px; color:white">{{v.CumulativeCredit}}</td>
              </tr>
               <tr >
                <td class="col-10" style="background-color:#00386b; font-size: 13px; color:white">SEMESTER GRADE POINT AVERAGE CREDITS:</td>
                <td class="col-1" style="background-color:#00386b; font-size: 13px;"> </td>
                <td class="col-1" style="background-color:#00386b; font-size: 13px; color:white">{{v.SemesterPoint}}</td>
              </tr>
               <tr >
                <td class="col-10" style="background-color:#00386b; font-size: 13px; color:white">CUMULATIVE GRADE POINT AVERAGE CREDITS:</td>
                <td class="col-1" style="background-color:#00386b; font-size: 13px;"> </td>
                <td class="col-1" style="background-color:#00386b; font-size: 13px; color:white">{{v.CumulativePoint}}</td>
              </tr>
               <tr >
                <td class="col-10" style="background-color:#00386b; font-size: 13px; color:white">SEMESTER GRADE POINT AVERAGE:</td>
                <td class="col-1" style="background-color:#00386b; font-size: 13px;"> </td>
                <td class="col-1" style="background-color:#00386b; font-size: 13px; color:white">{{v.SemesterGPA}}</td>
              </tr>
               <tr >
                <td class="col-10" style="background-color:#00386b; font-size: 13px; color:white">CUMULATIVE GRADE POINT AVERAGE:</td>
                <td class="col-1" style="background-color:#00386b; font-size: 13px;"> </td>
                <td class="col-1" style="background-color:#00386b; font-size: 13px; color:white">{{v.CumulativeGPA}}</td>
              </tr>
               <tr >
                <td class="col-10" style="background-color:#00386b; font-size: 13px; color:white">ACADEMIC STATUS: </td>
                <td class="col-1" style="background-color:#00386b; font-size: 13px;"> </td>
                <td class="col-1" style="background-color:#00386b; font-size: 13px; color:LightSeaGreen">{{v.Status}}</td>
              </tr>
              
            </tbody>
            
          </template>
        </template>

         
           </template>


<template v-else>
        
        <tbody >
          <template v-for="(v ,index) in grade2">
            <tr
              v-if="(v.EduYearTH == year && v.EduTerm == term)"
              :key="index"
              class="texttd"
              id="test1"
            >
              <td class="text1" cols="7">{{v.SubjectNameEN}}</td>
              <td class="text" cols="3">{{v.SubjectCode}}</td>
              <td class="text" cols="2">{{v.Grade}}</td>
            </tr>
          </template>
        </tbody>
        
        </template>
        </table>  
    







  <template   v-for="(v,index) in gpa">

      <div  class="textdown" v-if="(v.EduYearTH == year && v.EduTerm == term)" :key="index"> 
     
        <div class="row">
          <div class="col-10" style="margin-left:10px; margin-top:10px; font-size: 13px;">SEMESTER CREDITS:</div>
          <div lass="col-2" style="margin-top:10px">{{v.SemesterCredit}}</div>
        </div>
        <div class="row">
          <div class="col-10" style="margin-left:10px; margin-top:5px; font-size: 13px;">CUMULATIVE CREDITS:</div>
          <div style="margin-top:5px">{{v.CumulativeCredit}}</div>
        </div>

        <div class="row">
          <div class="col-10" style="margin-left:10px; margin-top:5px; font-size: 13px;">SEMESTER GRADE POINT AVERAGE CREDITS:</div>
          <div style="margin-top:5px">{{v.SemesterPoint}}</div>
        </div>

        <div class="row">
          <div class="col-10" style="margin-left:10px; margin-top:5px; font-size: 13px;">CUMULATIVE GRADE POINT AVERAGE CREDITS:</div>
          <div style="margin-top:5px">{{v.CumulativePoint}}</div>
        </div>
        <div class="row">
          <div class="col-10" style="margin-left:10px; margin-top:5px; font-size: 13px;">SEMESTER GRADE POINT AVERAGE:</div>
          <div style="margin-top:5px">{{v.SemesterGPA}}</div>
        </div>
        <div class="row">
          <div class="col-10" style="margin-left:10px; margin-top:5px; font-size: 13px;">CUMULATIVE GRADE POINT AVERAGE:</div>
          <div style="margin-top:5px">{{v.CumulativeGPA}}</div>
        </div>

        <div class="row">
          <div class="col-10" style="margin-left:10px; margin-top:5px ;  font-size: 13px;">ACADEMIC STATUS: </div>
          <div  style="color:LightSeaGreen; margin-top:5px">{{v.Status}}</div>
        </div> 

      </div>
</template>



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
      grade2: "",
      showyear: "",
      gpa:"",
      text: [],
      outputArray :[],
      checkterm:[]
    };
  },
  async created() {
    console.log("created");
   
    this.getStudent();
  },

  methods: {
    async getStudent() {
      let res = await this.$http.get("/grade/" + this.id);
       let res2 = await this.$http.get("/gpa/" + this.id);

      document
        .getElementById("myDiv")
        .setAttribute("style", "display:block , weight:100%");
      document.getElementById("loder").setAttribute("style", "display:none");


    this.gpa = res2.data.data;
    this.grade = res.data.data;

      this.grade2 = this.grade.sort((a, b) =>
        a.EduYearTH > b.EduYearTH ? 1 : -1
      );
      if (this.year == 0 && this.term == 0) {
        this.showyear = "All Semester/Year";
      } else {
        this.showyear = this.term + "/" + this.year;
      }

      console.log();
       this.setQuickreply();
    },

    groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
        var key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
},
async  setQuickreply() {
    var eduyear = this.groupBy(this.grade, 'EduYearTH');
   

    for (var i = 0; i < Object.keys(eduyear).length; i++) {
        var eduterm = this.groupBy(eduyear[`${Object.keys(eduyear)[i]}`], 'EduTerm');
        // console.log(`${Object.keys(eduyear)[i]}/`+Object.keys(eduterm))
        if (Object.keys(eduterm)[0] == 1) {
            console.log(`${Object.keys(eduyear)[i]}/${Object.keys(eduterm)[0]}`)
            this.text.push(`${Object.keys(eduyear)[i]}/${Object.keys(eduterm)[0]}`)
        }
        if (Object.keys(eduterm)[1] == 2) {
            console.log(`${Object.keys(eduyear)[i]}/` + Object.keys(eduterm)[1])
            this.text.push(`${Object.keys(eduyear)[i]}/${Object.keys(eduterm)[1]}`)
        }
        if (Object.keys(eduterm)[2] == 3) {
            console.log(`${Object.keys(eduyear)[i]}/` + Object.keys(eduterm)[2])
            this.text.push(`${Object.keys(eduyear)[i]}/${Object.keys(eduterm)[2]}`)
        }
    }

  
    this.text.forEach(element => {
        console.log(element)
    });
    this.checkterm = this.removewithfilter(this.text)
     console.log("check term",this.checkterm )
        // for(let i=0;i<text.length;i++){
        //     console.log("text:"+text[i])
        // }

},
       removewithfilter(arr) { 
            let outputArray = arr.filter(function(v, i, self) 
            { 
                  
                // It returns the index of the first 
                // instance of each value 
                return i == self.indexOf(v); 
            }); 
              
            return outputArray; 
        } 
  }
};
</script>

<style scoped>
p {
  font-size: 15px;
  font-weight: 500;
}
body {
  font-family: "Open Sans", sans-serif;
}
.spinner {
  margin: 0 auto;
  width: 50px;
  height: 40px;
  text-align: center;
  font-size: 10px;
  position: relative;
  resize: vertical;
}

.spinner > div {
  background-color: #00386b;
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
.aaa {
  font-weight: 700;
  text-align: center;
}
.text {
  text-align: center;
  font-size: 16px;
}
.text1 {
  font-size: 15px;
}
.texthd {
  font-weight: bolder;
}
.aaa1 {
  font-weight: 700;
}
.textdown{
  background-color:#00386b;
  color: white;
 padding-bottom: 20px;

}
.table{
  margin: 0;
}
</style>

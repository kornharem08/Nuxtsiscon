<template>
  <div>
   <div id="loder">
 <center><img src="./sisconnect2.jpg" class="img-fluid center"  style="width: 230px; height:100px; margin-top: 200px;
  text-align: center;
  position: relative;" /></center>
    <center><P>Loading data please wait a moment</P></center>
    <div class="spinner" >
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
      <div class="rect5"></div>
   
    </div>
  
</div>


    <div style="display:none;" id="myDiv">
        <div style="background-color:#00386b; color:white; height:40px; font-size:18px; font-weight:700; text-align: center; margin: 0 auto;  display: block; padding:5px;">{{showyear}}</div>
      <div v-for="(v) in data2" :key="v.Examdata">
      
        <div class="card-wrapper" >
          <div class="zodasa">  

            <div class="sje">{{v.SubjectNameEN}}</div>
            <center>
              <hr style=";width: 80%; background:#00386b; height:3px;" /> 
            </center>
            <div style=" font-weight: 700; font-size:30px; margin-top:15px; text-align: center;">
             
              {{v.From}}-{{v.To}}
            </div>
             <div style=" font-weight: 400; font-size:18px; margin-top:5px; text-align: center; color:orange;">
             
              {{v.ExamRooms.toString()}}
            </div>
  

            <center>
              <hr style=";width: 80%;" />
            </center>
<div class="row">
    <div class="col" style="text-align: left; color:#1fb3e0; font-weight: 700; ">
     {{v.SubjectCode}}
    </div>
    <div class="col" style="text-align: right;" >
      <div class="row">
    <div class="col" style="text-align: ">
      <span style="color:#ce1141; font-size:20px;   font-weight: 700;">{{(moment(v.ExamDate,'DD/MM/YYYY').format("DD"))}} </span>{{(moment(v.ExamDate,'DD/MM/YYYY').format("MMMM YYYY"))}}
    </div>

    </div>
  </div>
   </div>


<!-- 
            <div class="card__footer">
              <div class="card__footer-section">
                <div class="footer-section__data">{{(moment(v.ExamDate,'DD/MM/YYYY').format("DD"))}}</div>
                <div
                  class="footer-section__label"
                >{{(moment(v.ExamDate,'DD/MM/YYYY').format("MMMM"))}}</div>
              </div>
              <div class="card__footer-section">
                <div class="footer-section__data">{{v.SectionCode}}</div>
                <div class="footer-section__label">Section</div>
              </div>
              <div class="card__footer-section">
                <div class="footer-section__data">{{v.SubjectCode}}</div>
                <div class="footer-section__label">SubjectCode</div>
              </div>
            </div> -->


          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
var moment = require("moment");

export default {
  data() {
    return {
      moment: moment,
      id: this.$route.params.id,
      year: this.$route.params.year,
      term: this.$route.params.term,
      ex: this.$route.params.ex,
      data: [],
      showyear:"",
      showterm:"",
      data2: "",
      hex: [
        "aqua",
        "orangered",
        "blue",
        "fuchsia",
        "salmon",
        "green",
        "lime",
        "maroon",
        "navy",
        "deeppink",
        "orange",
        "purple",
        "red",
        "turquoise",
        "gold",
        "yellow"
      ],
      date: ""
    };
  },
  async created() {
    console.log("created");
    this.getData();
  },
  methods: {
    async getData() {
      let res = await this.$http.get(
        "/examschedule/" +
          this.id +
          "/" +
          this.year +
          "/" +
          this.term +
          "/" +
          this.ex
      );
      console.log(res, "res");

      document.getElementById("myDiv").setAttribute("style", "display:block");
      document.getElementById("loder").setAttribute("style", "display:none");

      this.data = res.data.data;

      this.data2 = this.data.sort((a, b) =>
        moment(a.ExamDate, "DD/MM/YYYY").format("DD MMMM YYYY") >
        moment(b.ExamDate, "DD/MM/YYYY").format("DD MMMM YYYY")
          ? 1
          : -1
      );
      if(this.ex == "M"){
        this.showterm ="Examination Schedule Midterm"
      }else{
        this.showterm = "Examination Schedule Final"
      }
      
      this.showyear = this.showterm+" "+this.term+"/"+this.year;
      
      console.log(this.data2);
    },
    randomcolor() {
      // alert("border-right:" + "5px solid "+this.hex[Math.floor(Math.random() * this.hex.length)])

      return (
        "border-left:" +
        "10px solid " +
        this.hex[Math.floor(Math.random() * this.hex.length)]
      );
    },
    randomcolor1() {
      // alert("border-right:" + "5px solid "+this.hex[Math.floor(Math.random() * this.hex.length)])
      return (
        "background:" + this.hex[Math.floor(Math.random() * this.hex.length)]
      );
    }
  }
};
</script>

<style scoped>
p{
  font-size: 15px;
  font-weight: 500;
}
.sje{
  text-align: center;
}
.card-wrapper {

 
  margin-top: 25px;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.1);
}
.zodasa {
  padding: 20px;
}

.card__footer {
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.card__footer-section {
  text-align: center;
  width: 33%;
  border-right: 1px solid gray;
}

.card__footer-section:nth-child(3) {
  border-right: none;
}

.footer-section__data {
  font-size: 1.5rem;

  color: #EB9486;
  font-weight: 700;
}

.footer-section__label {
  text-transform: uppercase;
  color: rgb(26, 20, 20);
  font-size: 1rem;
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
</style>
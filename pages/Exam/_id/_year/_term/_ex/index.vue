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



<div style="display:none;"  id="myDiv">
    <div  v-for="(v) in data" :key="v.Examdata" > 

      <div class="head">
        <div class="sjname">{{(v.SubjectNameEN)}}</div>

        <b-row class="date">
          <img
            src="https://img.icons8.com/cute-clipart/64/000000/calendar.png"
            style="width:25px; height:25px;"
          />
          &nbsp;&nbsp;{{moment(v.ExamDate,'DD/MM/YYYY').format("DD MMMM YYYY")}}
        </b-row>
        <div class="row justify-content-center">
          <div class="sjtime col">{{(v.From)}} - {{(v.To)}}</div>
        </div>
        <div class="row" style="margin-top:10px;">
          <div class="texts" style="margin-left: 20px;">
            <b-badge variant="info">{{(v.ExamRooms.toString())}}</b-badge>
          </div>
          <div class="texts">
            <b-badge variant="warning">{{(v.SubjectCode)}}</b-badge>
          </div>
          <div class="texts">
            <b-badge variant="danger">Section : {{(v.SectionCode)}}</b-badge>
          </div>
        </div>
      </div>

      <hr align="center" width="100%" />
      <!-- <hr style="height:1px; border:none;  background-color:#E5E7E9; width:50%; margin-top:10px; align:center; width:50%; "> -->
      <!-- 
      <b-row class="table1">
        <b-col cols="4" class="col1" id="col1" :style="randomcolor()">
          <b-row>
            <b-col class="datetime1">
              <div class="sjtime">{{(v.From)}}</div>
              <div class="sjtime">{{(v.To)}}</div>
            </b-col>
          </b-row>
        </b-col>

        <b-col cols="8">
          <b-row>
            <b-col class="subject1">
     
              <div class="sjroom">Room : {{(v.ExamRooms.toString())}}</div>
              <div class="sjcode">SubjectCode : {{(v.SubjectCode)}}</div>
              <div class="sjsection">Section : {{(v.SectionCode)}}</div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>-->
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
      data2 :[],
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
      date: "",
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
            console.log(res,"res")

      document.getElementById('myDiv').setAttribute("style", "display:block");
      document.getElementById('loder').setAttribute("style", "display:none");
   


      this.data = res.data.data
    



   
    },
    randomcolor() {
      // alert("border-right:" + "5px solid "+this.hex[Math.floor(Math.random() * this.hex.length)])
      return (
        "border-left:" +
        "5px solid " +
        this.hex[Math.floor(Math.random() * this.hex.length)]
      );
    },
  
  }


};
</script>

<style scoped>
body {
  font-family: "Open Sans", sans-serif;
}
.sjname {
  font-size: 16px;
  font-weight: bolder;
  text-align: center;
  color: #58D68D;
   /* #ff686b */
}
.date {
  /* background-color: rgb(127, 214, 185,0.4); */
  /* color: white; */
  font-size: 15px;
  font-weight: bolder;
  margin-left: 10px;
}
.datetime1 {
  margin: 30px auto;
  /* margin-top: 40px; */
  text-align: center;
}
.table1 {
  /* background-color: rgba(103, 117, 103, 0.2) ; */
}
.sjtime1 {
  text-align: center;
  margin-top: 5px;
  font-size: 25px;
  font-weight: bolder;
}
.sjtime {
  text-align: center;
  margin-top: 5px;
  font-size: 20px;
  font-weight: bolder;
}
.icon {
  margin-top: 10px;
  text-align: center;
}
.box {
  border: solid;
  text-align: center;
}
.texts {
  margin-top: 2px;
  font-size: 15px;

  margin-left: 10px;
}
.head {
  margin-top: 13px;
  /* box-shadow: 4px 4px 4px 4px rgba(0,0,0,0.2); */

  border-radius: 5px;
}
.all {
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
</style>
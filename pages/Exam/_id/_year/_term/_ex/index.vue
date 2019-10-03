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

    <div style="display:none;" id="myDiv">
      <div v-for="(v) in data2" :key="v.Examdata">
        <div class="card-wrapper" :style="randomcolor()">
          <div class="zodasa">
      
            <div
              class="sjn"
              style="text-align: center; font-weight: bold; margin-top: 10px; padding:0; "
            >{{v.SubjectNameEN}}</div>

             <div style=" font-weight: 550; font-size:18px; margin-top:15px;"><img src="https://img.icons8.com/color/35/000000/clock.png"> {{v.From}}-{{v.To}} </div>
                  <div style=" font-weight: 550; font-size:18px; margin-top:15px;"><img src="https://img.icons8.com/flat_round/35/000000/home--v5.png"> {{v.ExamRooms.toString()}} </div>


            <center>
              <hr style=";width: 80%;" />
            </center>
         
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
                <div class="footer-section__label">Code</div>
              </div>
            </div>
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
        "background:" +
        this.hex[Math.floor(Math.random() * this.hex.length)]
      );
    
    }
  }
};
</script>

<style scoped>
.card-wrapper{
  border-bottom: 0.5px solid;
  border-bottom-color: #adadad;
   border-top: 0.5px solid;
  border-top-color: #adadad;
  margin-top: 15px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.zodasa {
 padding: 15px;
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
  font-size: 1.2rem;
  
  color: crimson;
  font-weight: 700;
}

.footer-section__label {
  text-transform: uppercase;
  color: rgb(26, 20, 20);
  font-size: 1rem;
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
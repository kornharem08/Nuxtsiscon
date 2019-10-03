<template>
    <div class="container">
         <div class="calendar-base">
             <div class="name">"SOFTWARE AND COMPUTER PROGRAMMING"</div>
              <div class="code">"976-140"</div>
         </div>
          <div class="calendar-left">
                <div class="num-date">27</div>
    <!--num-date -->
    <div class="day">THURSDAY</div>
          </div>
           <div class="calendar-base">

         </div>
          <div class="calendar-left">

          </div>
    </div>
</template>



<style  scoped>
.calendar-base {
  width: 900px;
  height: 500px;
  border-radius: 20px;
  background-color: beige;
  position: relative;
  z-index: -1;
  color: black;
}
.calendar-left {
  width: 400px;
  height: 500px;
  border-radius: 20px 0px 0px 20px;
  background-color: #2ECC71;
  position: relative;
  z-index: -1;
  bottom: 500px;
  color: white;
}
.day {
  width: 50%;
  margin: 0px auto;
  font-size: 30px;
  position: relative;
  bottom: 60px;
}
.num-date {
  font-size: 150px;
  width: 50%;
  margin: 0 auto;
  font-weight: 700;
}
.name{
   color: #AAAAAA;
  position: relative;
  font-size: 18px;
  left: 450px;
  top: 80px;

  font-weight: 600;
}
.code{
   color: #AAAAAA;
  position: relative;
  font-size: 18px;
  left: 450px;
  top: 80px;
text-align: center;
  font-weight: 600;
}

</style>
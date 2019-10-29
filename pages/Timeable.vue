
<template>
  <div class="scheduleView">
    <div class="schedule">
      <table border="1">
        <tr class="Timetable__time">
          <th class="Timetable__room"></th>
          <th>08:00-09:00</th>
          <th>09:00-10:00</th>
          <th>10.00-11.00</th>
          <th>11.00-12.00</th>
          <th>12.00-13.00</th>
          <th>13.00-14.00</th>
          <th>14.00-15.00</th>
          <th>15.00-16.00</th>
          <th>16.00-17.00</th>
          <th>17.00-18.00</th>
          <th>18.00-19.00</th>
          <th>19.00-20.00</th>
        </tr>
        <tr>
          <td>Mon</td>
          <td v-for="index in SubjectMon" :key="index" :colspan="index.colspan" :style="index.style" ></td>
        </tr>
        <tr>
          <td>TUE</td>
          <td v-for="index in SubjectTue" :key="index" :colspan="index.colspan" :style="index.style"></td>
        </tr>
        <tr>
          <td>WED</td>
          <td v-for="index in SubjectWed" :key="index" :colspan="index.colspan" :style="index.style"></td>
        </tr>
        <tr>
          <td>THU</td>
          <td v-for="index in SubjectThu" :key="index" :colspan="index.colspan" :style="index.style"></td>
        </tr>
        <tr>
          <td>FRI</td>
          <td v-for="index in SubjectFri" :key="index" :colspan="index.colspan" :style="index.style"></td>
        </tr>
        <tr>
          <td>SAT</td>
          <td v-for="index in SubjectSat" :key="index" :colspan="index.colspan" :style="index.style"></td>
        </tr>
      </table>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      DayArr: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
      dayTime: [
        {
          Day: "MON",
          TimeStart: "08.30",
          TimeEnd: "10.30",
          SubjectCode: "976-120",
          SubjectName: "FINANCE",
          ClassRoom: "5210"
        },
        {
          Day: "MON",
          TimeStart: "11.00",
          TimeEnd: "12.30",
          SubjectCode: "976-120",
          SubjectName: "FINANCE",
          ClassRoom: "5210"
        },
        {
          Day: "MON",
          TimeStart: "15.00",
          TimeEnd: "17.00",
          SubjectCode: "976-120",
          SubjectName: "FINANCE",
          ClassRoom: "5210"
        },
        {
          Day: "TUE",
          TimeStart: "09.00",
          TimeEnd: "10.30",
          SubjectCode: "976-120",
          SubjectName: "FINANCE",
          ClassRoom: "5210"
        },

        {
          Day: "TUE",
          TimeStart: "11.30",
          TimeEnd: "13.30",
          SubjectCode: "976-120",
          SubjectName: "FINANCE",
          ClassRoom: "5210"
        },

        {
          Day: "WED",
          TimeStart: "08.00",
          TimeEnd: "10.30",
          SubjectCode: "976-120",
          SubjectName: "FINANCE",
          ClassRoom: "5210"
        },

        {
          Day: "WED",
          TimeStart: "14.00",
          TimeEnd: "16.30",
          SubjectCode: "976-120",
          SubjectName: "FINANCE",
          ClassRoom: "5210"
        },
        {
          Day: "THU",
          TimeStart: "10.30",
          TimeEnd: "12.30",
          SubjectCode: "976-120",
          SubjectName: "FINANCE",
          ClassRoom: "5210"
        },

        {
          Day: "THU",
          TimeStart: "13.30",
          TimeEnd: "14.30",
          SubjectCode: "976-120",
          SubjectName: "FINANCE",
          ClassRoom: "5210"
        },
        {
          Day: "FRI",
          TimeStart: "11.30",
          TimeEnd: "12.30",
          SubjectCode: "976-120",
          SubjectName: "FINANCE",
          ClassRoom: "5210"
        },

        {
          Day: "FRI",
          TimeStart: "12.30",
          TimeEnd: "13.30",
          SubjectCode: "976-120",
          SubjectName: "FINANCE",
          ClassRoom: "5210"
        },
        {
          Day: "SAT",
          TimeStart: "08.30",
          TimeEnd: "10.30",
          SubjectCode: "976-120",
          SubjectName: "FINANCE",
          ClassRoom: "5210"
        },

        {
          Day: "SAT",
          TimeStart: "13.30",
          TimeEnd: "16.30",
          SubjectCode: "976-120",
          SubjectName: "FINANCE",
          ClassRoom: "5210"
        },  {
          Day: "SAT",
          TimeStart: "17.30",
          TimeEnd: "19.30",
          SubjectCode: "976-120",
          SubjectName: "FINANCE",
          ClassRoom: "5210"
        }
      ],
      SubjectMon: ["", "", "", "", "", "", "", "", "", "", "", ""],
      SubjectTue: ["", "", "", "", "", "", "", "", "", "", "", ""],
      SubjectWed: ["", "", "", "", "", "", "", "", "", "", "", ""],
      SubjectThu: ["", "", "", "", "", "", "", "", "", "", "", ""],
      SubjectFri: ["", "", "", "", "", "", "", "", "", "", "", ""],
      SubjectSat: ["", "", "", "", "", "", "", "", "", "", "", ""],

      prevetimeEnd: "",
      preveDay: "",
      preveColspan: 0,
      prevecount: "",
      indexuse: 0,
      indexpos: 0,
      SaveDay: ""
    };
  },
  methods: {
    checktimestart() {
      let num = 0;

      this.dayTime.forEach(element => {
        if (element.TimeStart >= 8.0 && element.TimeStart < 9.0) {
          num = 0;
        } else if (element.TimeStart >= 9.0 && element.TimeStart < 10.0) {
          num = 1;
        } else if (element.TimeStart >= 10.0 && element.TimeStart < 11.0) {
          num = 2;
        } else if (element.TimeStart >= 11.0 && element.TimeStart < 12.0) {
          num = 3;
        } else if (element.TimeStart >= 12.0 && element.TimeStart < 13.0) {
          num = 4;
        } else if (element.TimeStart >= 13.0 && element.TimeStart < 14.0) {
          num = 5;
        } else if (element.TimeStart >= 14.0 && element.TimeStart < 15.0) {
          num = 6;
        } else if (element.TimeStart >= 15.0 && element.TimeStart < 16.0) {
          num = 7;
        } else if (element.TimeStart >= 16.0 && element.TimeStart < 17.0) {
          num = 8;
        } else if (element.TimeStart >= 17.0 && element.TimeStart < 18.0) {
          num = 9;
        } else if (element.TimeStart >= 18.0 && element.TimeStart < 19.0) {
          num = 10;
        } else if (element.TimeStart >= 19.0 && element.TimeStart < 20.0) {
          num = 11;
        }

        this.checktimeend(num, element.TimeEnd, element.TimeStart, element.Day);

        // console.log(num,element.TimeEnd);
      });
    },

    checktimeend(count, TimeEnd, TimeStart, Day) {
      let num = 0;
      let colspan = 0;

      if (TimeEnd > 8.0 && TimeEnd <= 9.0) {
        num = 0;
      } else if (TimeEnd > 9.0 && TimeEnd <= 10.0) {
        num = 1;
      } else if (TimeEnd > 10.0 && TimeEnd <= 11.0) {
        num = 2;
      } else if (TimeEnd > 11.0 && TimeEnd <= 12.0) {
        num = 3;
      } else if (TimeEnd > 12.0 && TimeEnd <= 13.0) {
        num = 4;
      } else if (TimeEnd > 13.0 && TimeEnd <= 14.0) {
        num = 5;
      } else if (TimeEnd > 14.0 && TimeEnd <= 15.0) {
        num = 6;
      } else if (TimeEnd > 15.0 && TimeEnd <= 16.0) {
        num = 7;
      } else if (TimeEnd > 16.0 && TimeEnd <= 17.0) {
        num = 8;
      } else if (TimeEnd > 17.0 && TimeEnd <= 18.0) {
        num = 9;
      } else if (TimeEnd > 18.0 && TimeEnd <= 19.0) {
        num = 10;
      } else if (TimeEnd > 19.0 && TimeEnd <= 20.0) {
        num = 11;
      }

      colspan = num - count;
      this.checksubject(colspan, TimeStart, TimeEnd, Day, count);
    },

    checksubject(colspan, TimeStart, TimeEnd, Day, count) {
      let result = null;
      if (this.prevetimeEnd == TimeStart && this.preveDay == Day) {
        result = this.preveColspan + colspan + 1;
      } else {
        result = colspan + 1;
      }

      if (this.preveDay != Day) {
        this.indexpos = 0;
        this.indexuse = 0;
      }

      //  if(count == 0){

      //  }
      this.indexpos += count - this.indexuse;

      // let preveCol = 0

      // if(this.preveColspan > 0){
      //   preveCol = this.preveColspan
      // }

      if (Day == "MON") {
        let color = this.createstyle(TimeStart, TimeEnd,colspan)

        this.SubjectMon[this.indexpos] = {
          colspan: result,
          style:color
        };
        console.log(this.SubjectMon[this.indexpos]);
        console.log(this.indexpos);
      } else if (Day == "TUE") {
        let color = this.createstyle(TimeStart, TimeEnd,colspan)
        this.SubjectTue[this.indexpos] = {
         colspan: result,
          style:color
        };
        console.log(this.SubjectTue[this.indexpos]);
        console.log(this.indexpos);
      } else if (Day == "WED") {
        let color = this.createstyle(TimeStart, TimeEnd,colspan)
        this.SubjectWed[this.indexpos] = {
         colspan: result,
          style:color
        };
        console.log(this.SubjectWed[this.indexpos]);
        console.log(this.indexpos);
      } else if (Day == "THU") {
        let color = this.createstyle(TimeStart, TimeEnd,colspan)
        this.SubjectThu[this.indexpos] = {
          colspan: result,
          style:color
        };
        console.log(this.SubjectWed[this.indexpos]);
        console.log(this.indexpos);
      } else if (Day == "FRI") {
        let color = this.createstyle(TimeStart, TimeEnd,colspan)
        this.SubjectFri[this.indexpos] = {
          colspan: result,
          style:color
        };
        console.log(this.SubjectWed[this.indexpos]);
        console.log(this.indexpos);
      } else if (Day == "SAT") {
        let color = this.createstyle(TimeStart, TimeEnd,colspan)
        this.SubjectSat[this.indexpos] = {
          colspan: result,
          style:color
        };
        console.log(this.SubjectWed[this.indexpos]);
        console.log(this.indexpos);
      }
      this.indexuse = count + colspan;
      this.prevetimeEnd = TimeEnd;
      this.preveDay = Day;
      this.preveColspan = colspan;

      // console.log(
      //   "Colspan" + colspan,
      //   "Start " + TimeStart,
      //   "End" + TimeEnd,
      //   "day" + Day
      // );
    },
    createstyle(Timestart, Timeend ,colspan ) {
      let timestart = Timestart.slice(-2);
      let timeend = Timeend.slice(-2);
        let style
      if (timestart == 30 && timeend == 30) {
         let halfF = 50/(colspan+1)
            let halfs = 100-halfF
        style = `  background: linear-gradient(to right, white  ${halfF}%, red ${halfF}%, red ${halfs}%, white  ${halfF}%);  ` 
      } else if (timestart == 30) {
         let halfF = 50/(colspan+1)
        style = `background-color:red; background: linear-gradient(to right, white ${halfF}%, red ${halfF}%); `;
      } else if (timeend == 30) {
        let halfF = 50/(colspan+1)
        style = ` background-color:red; background: linear-gradient(to left, white ${halfF}%, red ${halfF}%); `;
      } else {
        style = `background-color: red;`;
      }

      return style
    },

  },
  async created() {
    this.checktimestart();
  }
};
</script>



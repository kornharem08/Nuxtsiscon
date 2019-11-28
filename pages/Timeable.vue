<template>
  <div class="scheduleView">
    <div class="schedule">
      <table border="1">
        <tr class="Timetable__time">
          <th class="Timetable__room"></th>
          <th style="width:195px; text-align: center; ">08:00-09:00</th>
          <th style="width:195px; text-align: center; ">09:00-10:00</th>
          <th style="width:195px; text-align: center; ">10.00-11.00</th>
          <th style="width:195px; text-align: center; ">11.00-12.00</th>
          <th style="width:195px; text-align: center; ">12.00-13.00</th>
          <th style="width:195px; text-align: center; ">13.00-14.00</th>
          <th style="width:195px; text-align: center; ">14.00-15.00</th>
          <th style="width:195px; text-align: center; ">15.00-16.00</th>
          <th style="width:195px; text-align: center; ">16.00-17.00</th>
          <th style="width:195px; text-align: center; ">17.00-18.00</th>
          <th style="width:195px; text-align: center; ">18.00-19.00</th>
          <th style="width:195px; text-align: center; ">19.00-20.00</th>
        </tr>
        <tr>
          <td>Mon</td>
          <td
            v-for="index in SubjectMon"
            :key="index"
            :colspan="index.colspan"
            :style="index.style"
            
          >
            <div>
              <div :style="index.styletext2" :class="index.row">
                <div :style="index.divWidth"></div>
                <div :style="index.divLeft"><p>{{index.subjectname}}</p><p>{{index.subjectcode}}</p>{{index.subjectroom}}</div>
                <div :style="index.divRight"><p>{{index.subjectname2}}</p><p>{{index.subjectcode2}}</p>{{index.subjectroom2}}</div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>TUE</td>
          <td
            v-for="index in SubjectTue"
            :key="index"
            :colspan="index.colspan"
            :style="index.style"
            style="height:120px; width:195px ;"
          >
            <div :style="index.styletext2" :class="index.row">
              <div  :style="index.divWidth"></div>
                <div :style="index.divLeft"><p>{{index.subjectname}}</p><p>{{index.subjectcode}}</p>{{index.subjectroom}}</div>
                <div :style="index.divRight"><p>{{index.subjectname2}}</p><p>{{index.subjectcode2}}</p>{{index.subjectroom2}}</div>
            </div>
          </td>
        </tr>
        <tr>
          <td>WED</td>
          <td
            v-for="index in SubjectWed"
            :key="index"
            :colspan="index.colspan"
            :style="index.style"
            style="height:120px; width:195px ;"
          >
            <div :style="index.styletext2" :class="index.row">
                 <div :style="index.divWidth"></div>
                <div :style="index.divLeft"><p>{{index.subjectname}}</p><p>{{index.subjectcode}}</p>{{index.subjectroom}}</div>
                <div :style="index.divRight"><p>{{index.subjectname2}}</p><p>{{index.subjectcode2}}</p>{{index.subjectroom2}}</div>
            </div>
          </td>
        </tr>
        <tr>
          <td>THU</td>
          <td
            v-for="index in SubjectThu"
            :key="index"
            :colspan="index.colspan"
            :style="index.style"
            style="height:120px; width:195px ;"
          >
            <div :style="index.styletext2" :class="index.row">
                <div :style="index.divWidth"></div>
                <div :style="index.divLeft"><p>{{index.subjectname}}</p><p>{{index.subjectcode}}</p>{{index.subjectroom}}</div>
                <div :style="index.divRight"><p>{{index.subjectname2}}</p><p>{{index.subjectcode2}}</p>{{index.subjectroom2}}</div>
            </div>
          </td>
        </tr>
        <tr>
          <td>FRI</td>
          <td
            v-for="index in SubjectFri"
            :key="index"
            :colspan="index.colspan"
            :style="index.style"
            style="height:120px; width:195px ;"
          >
            <div :style="index.styletext2" :class="index.row">
             <div :style="index.divWidth"></div>
             <div :style="index.divLeft"><p>{{index.subjectname}}</p><p>{{index.subjectcode}}</p>{{index.subjectroom}}</div>
             <div :style="index.divRight"><p>{{index.subjectname2}}</p><p>{{index.subjectcode2}}</p>{{index.subjectroom2}}</div>
            </div>
          </td>
        </tr>
        <tr>
          <td>SAT</td>
          <td
            v-for="index in SubjectSat"
            :key="index"
            :colspan="index.colspan"
            :style="index.style"
            style="height:120px; width:195px ;"
          >
            <div :style="index.styletext2" :class="index.row">
             <div :style="index.divWidth"></div>
             <div :style="index.divLeft"><p>{{index.subjectname}}</p><p>{{index.subjectcode}}</p>{{index.subjectroom}}</div>
             <div :style="index.divRight"><p>{{index.subjectname2}}</p><p>{{index.subjectcode2}}</p>{{index.subjectroom2}}</div>
            </div>
          </td>
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
          TimeEnd: "11.30",
          SubjectCode: "140-461",
          SubjectName: "LEGAL AND ETHICAL CONSIDERATIONS",
          ClassRoom: "5210"
        },
        {
          Day: "MON",
          TimeStart: "11.30",
          TimeEnd: "13.30",
          SubjectCode: "140-461",
          SubjectName: "INTRO TO GAME",
          ClassRoom: "5210"
        },
        {
          Day: "WED",
          TimeStart: "08.00",
          TimeEnd: "10.30",
          SubjectCode: "975-300",
          SubjectName: "ASEAN STUDIES",
          ClassRoom: "5210"
        },
        {
          Day: "THU",
          TimeStart: "08.30",
          TimeEnd: "10.30",
          SubjectCode: "140-452",
          SubjectName: "DATA MINING",
          ClassRoom: "5210"
        },
        {
          Day: "THU",
          TimeStart: "13.00",
          TimeEnd: "15.00",
          SubjectCode: "977-375",
          SubjectName: "SOFTWARE CONSTRUCTION&MAIN",
          ClassRoom: "5210"
        },
        {
          Day: "THU",
          TimeStart: "15.00",
          TimeEnd: "17.30",
          SubjectCode: "977-372",
          SubjectName: "SOFTWARE CONSTRUCTION&MAIN",
          ClassRoom: "5211"
        },
        {
          Day: "FRI",
          TimeStart: "08.30",
          TimeEnd: "10.30",
          SubjectCode: "975-300",
          SubjectName: "ASEAN STUDIES",
          ClassRoom: "5210"
        },
        {
          Day: "FRI",
          TimeStart: "13.30",
          TimeEnd: "15.30",
          SubjectCode: "140-461",
          SubjectName: "INTRO TO GAME DESIGN&DEVELOP",
          ClassRoom: "5210"
        },
        {
          Day: "SAT",
          TimeStart: "09.00",
          TimeEnd: "12.00",
          SubjectCode: "976-241",
          SubjectName: "SOFTWARE PROCESS IMPROVE",
          ClassRoom: "5210"
        },
        {
          Day: "SAT",
          TimeStart: "13.00",
          TimeEnd: "16.00",
          SubjectCode: "976-241",
          SubjectName: "SOFTWARE PROCESS IMPROVE",
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
      prevetimeStart: 0,
      prevSubjectElement: null,
      sumtime: 0,
      indexuse: 0,
      indexpos: 0,
      SaveDay: "",
      codeColourList: [],
      colLeft: "3"
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
        let timeends;
        if (element.TimeEnd > "20.00") {
          timeends = "20.00";
        } else {
          timeends = element.TimeEnd;
        }
        this.checktimeend(
          num,
          timeends,
          element.TimeStart,
          element.Day,
          element.SubjectNameEN,
          element.SubjectCode,
          element
        );
        console.log(num, element.TimeEnd);
      });
    },
    checktimeend(count, TimeEnd, TimeStart, Day, SubjectName, SubjectCode, subjectElement) {
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
      console.log("timeend" + num + "-" + count);
      colspan = num - count;
      this.checksubject(
        colspan,
        TimeStart,
        TimeEnd,
        Day,
        count,
        SubjectName,
        SubjectCode,
        subjectElement
      );
    },
    checksubject(
      colspan,
      TimeStart,
      TimeEnd,
      Day,
      count,
      SubjectName,
      SubjectCode,
      subjectElement
    ) {
      let result = null;
      console.log("Precolspan" + this.preveColspan + Day);
      let sumtimez = TimeEnd - TimeStart;
      let timestart = TimeStart.slice(-2);
      let subject2 = null
      let row = null
      // let timeend = Timeend.slice(-2);
      if (this.prevetimeEnd == TimeStart &&this.preveDay == Day &&timestart == 30) {
        result = this.preveColspan + colspan + 1;
        subject2 = this.prevSubjectElement
        row = "row"
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
      if (Day == "MON") {
        let namesj = SubjectName;
        let styletext = this.createstyle(
          TimeStart,
          TimeEnd,
          colspan,
          this.prevetimeEnd,
          this.preveColspan,
          this.prevetimeStart,
          sumtimez,
          SubjectCode
        );
       this.inputInfoToSubject(this.SubjectMon,this.indexpos,result,row,styletext,subjectElement,subject2)
       this.popArray(this.SubjectMon,colspan)
      } else if (Day == "TUE") {
        let namesj = SubjectName;
        let styletext = this.createstyle(
          TimeStart,
          TimeEnd,
          colspan,
          this.prevetimeEnd,
          this.preveColspan,
          this.prevetimeStart,
          sumtimez,
          SubjectCode
        );
        console.log("styletext:"+styletext.style)
        this.inputInfoToSubject(this.SubjectTue,this.indexpos,result,row,styletext,subjectElement,subject2)
        this.popArray(this.SubjectTue,colspan)
      } else if (Day == "WED") {
        let namesj = SubjectName;
        let styletext = this.createstyle(
          TimeStart,
          TimeEnd,
          colspan,
          this.prevetimeEnd,
          this.preveColspan,
          this.prevetimeStart,
          sumtimez,
          SubjectCode
        );
        this.inputInfoToSubject(this.SubjectWed,this.indexpos,result,row,styletext,subjectElement,subject2)
        this.popArray(this.SubjectWed,colspan)
      } else if (Day == "THU") {
        let namesj = SubjectName;
        let styletext = this.createstyle(
          TimeStart,
          TimeEnd,
          colspan,
          this.prevetimeEnd,
          this.preveColspan,
          this.prevetimeStart,
          sumtimez,
          SubjectCode
        );
        this.inputInfoToSubject(this.SubjectThu,this.indexpos,result,row,styletext,subjectElement,subject2)
        this.popArray(this.SubjectThu,colspan)
      } else if (Day == "FRI") {
        let namesj = SubjectName;
        let styletext = this.createstyle(
          TimeStart,
          TimeEnd,
          colspan,
          this.prevetimeEnd,
          this.preveColspan,
          this.prevetimeStart,
          sumtimez,
          SubjectCode
        );
         this.inputInfoToSubject(this.SubjectFri,this.indexpos,result,row,styletext,subjectElement,subject2)
         this.popArray(this.SubjectFri,colspan)
      } else if (Day == "SAT") {
        let namesj = SubjectName;
        let styletext = this.createstyle(
          TimeStart,
          TimeEnd,
          colspan,
          this.prevetimeEnd,
          this.preveColspan,
          this.prevetimeStart,
          sumtimez,
          SubjectCode
        );
         this.inputInfoToSubject(this.SubjectSat,this.indexpos,result,row,styletext,subjectElement,subject2)
         this.popArray(this.SubjectSat,colspan)
      }
      this.indexuse = count + colspan;
      this.prevetimeEnd = TimeEnd;
      this.preveDay = Day;
      this.preveColspan = colspan;
      this.prevetimeStart = TimeStart;
      this.prevSubjectElement = subjectElement
      this.sumtime = sumtimez;
    },
    inputInfoToSubject(SubjectDay,indexpos,result,row,styletext,subjectElement,subject2){
      let subjectName = null
      let subjectCode = null
      let subjectClassRoom = null
      let subject2Name = null
      let subject2Code = null
      let subject2ClassRoom = null
      if(subject2){
          subjectName = subject2.SubjectName
          subjectCode = subject2.SubjectCode
          subjectClassRoom = subject2.ClassRoom
          subject2Name = subjectElement.SubjectName
          subject2Code = subjectElement.SubjectCode
          subject2ClassRoom = subjectElement.ClassRoom
      }else{
          subjectName = subjectElement.SubjectName
          subjectCode = subjectElement.SubjectCode
          subjectClassRoom = subjectElement.ClassRoom
          subject2Name = null
          subject2Code = null
          subject2ClassRoom = null
      }
      SubjectDay[indexpos] = {
          colspan: result,
          style: styletext.style,
          styletext2: styletext.text,
          subjectname: subjectName,
          subjectcode: subjectCode,
          subjectroom: subjectClassRoom,
          subjectname2: subject2Name,
          subjectcode2: subject2Code,
          subjectroom2: subject2ClassRoom,
          divLeft: styletext.divLeft,
          divRight: styletext.divRight,
          divWidth:styletext.divWidth,
          row:row
      }
    },
    popArray(nameArray,colspan){
      let array = nameArray
      for(let i =0;i<colspan;i++){
        array.pop();
      }
    },
    createstyle(
      Timestart,
      Timeend,
      colspan,
      pretimeend,
      preveColspan,
      prevetimeStart,
      sumtime1,
      SubjectCode
    ) {
      let timestart = Timestart.slice(-2);
      let timeend = Timeend.slice(-2);
      let style;
      let text;
      let divWidth = "wdith:0px;"
      let divLeft = `text-align: center;`;
      let divRight = `text-align: center;`;
      let time
      let colors 
      let culcet
      let sssaa
      let widthLeft = (preveColspan * 150) -50
      let widthRight = (colspan * 150) -70
      let halfF = 50 / (colspan + 1);
      let halfs = 100 - halfF;
      // let row = "null";
      let color = null;
      this.codeColourList.forEach(element => {
        if (element.SubjectCode == SubjectCode) {
          color = element.color;
        }
      });
      if (color == null) {
        color = this.getRandomColor();
        this.codeColourList.push({ SubjectCode: SubjectCode, color: color });
      }
      console.log("codeColourList:" + JSON.stringify(this.codeColourList));
          if (pretimeend == Timestart && timestart == 30) {
          time = Timeend - prevetimeStart;
          
          colors = (this.sumtime * 100) / time;
          culcet = colors % 10;
          sssaa = colors - culcet;
        
          halfF = 50 / (colspan + preveColspan + 1);
          halfs = 100 - halfF + 0.1;
          
            if(prevetimeStart.slice(-2) == 30 && timeend == 30){
            style = `background: linear-gradient(to right, white  ${halfF}%, ${color}  ${halfF}%, ${color} ${sssaa+colspan}% ,yellow ${sssaa}% ,yellow ${halfs}%,white ${halfF}%);  height: 120px;`;
            text = ` text-align: center; font-size: 12px;`
            divLeft = ` text-align: center; width:${widthLeft}px;`
            divRight = ` text-align: center; width:${widthRight}px;`
            divWidth = "width:75px;"
            }else if(prevetimeStart.slice(-2) == 30){
            style = `background: linear-gradient(to right, white  ${halfF}%, ${color}  ${halfF}%, ${color} ${sssaa+colspan+halfF}% ,yellow ${sssaa}%;  height: 120px;`;
            text = ` text-align: center; font-size: 12px;`
            divLeft = ` text-align: center; width:${widthLeft}px;`
            divRight = ` text-align: center; width:${widthRight}px; margin-left:${sssaa+colspan}px;`
            divWidth = "width:75px;"
            }else{
            style = `background: linear-gradient(to right,${color}  ${halfF}%, ${color} ${sssaa+colspan+halfF}% ,yellow ${sssaa}%;  height: 120px;`;
            text = ` text-align: center; font-size: 12px;`
            divLeft = ` text-align: center; width:${widthLeft}px;  margin-left:${sssaa+colspan}px;`
            divRight = ` text-align: center; width:${widthRight}px; margin-left:${sssaa+colspan+halfF*3}px;`
            divWidth = "width:0px;"
            }
            
        }else if (timestart == 30 && timeend == 30) {
      
          style = ` background: linear-gradient(to right, white  ${halfF}%, ${color} ${halfF}%, ${color} ${halfs}%, white  ${halfF}%); height: 50px; `;
          text = ` text-align: center; font-size: 12px;`;
        
      } else if (timestart == 30) {
        style = `background-color:red; background: linear-gradient(to right, white ${halfF}%,  ${color} ${halfF}%); height: 120px; `;
        text = ` text-align: center; font-size: 12px;`;
        
      } else if (timeend == 30) {
        style = ` background-color:${color}; background: linear-gradient(to left, white ${halfF}%,  ${color} ${halfF}%); height: 120px;`;
        text = `margin-left:65px; width:130px; text-align: center; font-size: 12px;`;
        
      } else if (timestart == 30 && timeend == 30) {
        style = `  background: linear-gradient(to right, white  ${halfF}%,  ${color} ${halfF}%,  ${color} ${halfs}%, white  ${halfF}%);  height: 120px; `;
      } else {
        style = `background-color: ${color}; height:120px; width:195px `;
        text = `text-align: center; font-size: 12px;`;
      }
      return { style, text ,divLeft,divRight,divWidth };
    },
    getRandomColor() {
      var letters = "0123456789ABCDEF".split("");
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  },
  async created() {
    this.checktimestart();
  }
};
</script>
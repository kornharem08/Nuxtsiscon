
<template>
    <div class="scheduleView">
      <div class="schedule">
        <h1>{{ prop1 }}</h1>
    <table>
      <tr>
        <th class="color1">Day</th>
        <th>8.00-9.00</th>
        <th>9.00-10.00</th>
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

   <tr v-for="(day,index) in DayArr" :key="day">
        <td>{{day}}</td>

       <td v-for="(column,colIndex) in colArr[index].length" :key="column" :colspan="colArr[index][colIndex]" :style="styleList[index][colIndex]" ><div class = "text" style="font-size: 12px;" >{{subjectList[index][colIndex].name}}</div>
       <div class = "text" style="font-size: 12px;" >{{subjectList[index][colIndex].code}}</div>
       <div class = "text" style="font-size: 12px;" >{{subjectList[index][colIndex].room}}</div>
       
       </td> 
        <!-- {{colArr[index]}} -->
     
      </tr>
       
    </table>
    </div>
     <div class="buttom">
         <button class="btn btn-primary pl-5 pr-5"  v-on:click="download()">Download PDF</button>
          <button v-on:click="randomColor()">Random Color</button>
          <input type="file" name="" id="file-field" value="Click" v-on:change="updatePreview">
     </div>
   
  </div>

 
</template>
<script>
/* eslint-disable */
function myFunction() {
  var x = document.getElementById("myFile").value;
  document.getElementById("demo").innerHTML = x;
}
/* eslint-disable */
</script>


<script>

import axios from 'axios'
import FormData from 'form-data'
import htmlToImage from 'html-to-image';

export default {
    
/* eslint-disable */
    data(){
        return {
            colArr,
            DayArr,
            styleList,
            subjectList
        }
    },
    methods:{

      randomColor: function(){
        window.location.reload()
      },
      download: function(){
          let data = new FormData();
          
          html2canvas(document.querySelector(".schedule")).then(function (canvas){

             // Generate the base64 representation of the canvas
            var base64image = canvas.toDataURL("image/่jpeg");

            // Split the base64 string in data and contentType
            var block = base64image.split(";");
            // Get the content type
            var mimeType = block[0].split(":")[1];// In this case "image/png"
            // get the real base64 content of the file
            var realData = block[1].split(",")[1];// For example:  iVBORw0KGgouqw23....

            // Convert b64 to blob and store it into a variable (with real base64 as value)
            var canvasBlob = b64toBlob(realData, mimeType);

            // 
              data.append('file',canvasBlob,'scheduleSIS')

                     axios.post('https://sisconnect-db.herokuapp.com/upload',
                          data).then(function (response) {
                              console.log('SUCCESS!!:'+JSON.stringify(response));
                            })
                            .catch(function (response) {
                              console.log('FAILURE!!'+response);
                            });

          })
 
          
      },updatePreview(e){
      document.getElementById('file-field').click()
      var reader , files = e.target.files
      if(files.length === 0){
        console.log('Empty')
      }
      reader = new FileReader()
      reader.onload = (e) =>{
        // this.imagePreview = e.target.result
        document.querySelector(".schedule").style.backgroundImage = 'url(' + e.target.result + ')';
        console.log(document.body.style.backgroundimage = 'url(' + e.target.result + ')' )
      }
      reader.readAsDataURL(files[0])
      // console.log(reader.readAsDataURL(files[0]))
    },

    },
    props: {
      prop1: {
        type: Object,
        required: true
      }
    }

}


function b64toBlob(b64Data, contentType, sliceSize) {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;

        var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

      var blob = new Blob(byteArrays, {type: contentType});
      return blob;
}


 function saveAs(uri, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
      link.href = uri;
      link.download = filename;

      //Firefox requires the link to be in the body
      document.body.appendChild(link);

      //simulate click
      link.click();

      //remove the link when done
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  }


var dayTime = [
  {
    Day: "TUE",
    TimeStart: "13.30",
    TimeEnd: "16.30",
    SubjectCode: "976-394",
    SubjectName: "LEGAL&ETHICAL CONSIDER IN IT",
    ClassRoom: "6310"
	
  },
   {
    Day: "THU",
    TimeStart: "09.00",
    TimeEnd: "12.00",
    SubjectCode: "976-392",
    SubjectName: "PRE-COOP EDUCATION",
    ClassRoom: "6310"
	
  },
  {
    Day: "FRI",
    TimeStart: "08.30",
    TimeEnd: "10.30",
    SubjectCode: "977-393",
    SubjectName: "SEMINAR",
    ClassRoom: "6310"
	
  },
  {
    Day: "FRI",
    TimeStart: "15.30",
    TimeEnd: "18.30",
    SubjectCode: "977-491",
    SubjectName: "PROJECT IN SE",
    ClassRoom: "6310"
	
  },
];
var posdayTime = 0;
var DayArr = ['MON','TUE','WED','THU','FRI','SAT','SUN']
var TimeStart = dayTime[posdayTime].TimeStart;
var TimeEnd = dayTime[posdayTime].TimeEnd;
var dayTimeLength = dayTime.length
let colArr =[[],[],[],[],[],[],[]]
let styleList =[[],[],[],[],[],[],[]]
let subjectList = [[],[],[],[],[],[],[]]
let codeColourList = []

initCreate();

function initCreate(){
    let checkstarttime 
    let endtime
    let checkHalf
    for(let i =0 ;i< 7;i++){

        
         for(let j =1;j<13;j++){
             checkstarttime = checkStartTime()
             
            if(checkstarttime == j && dayTimeLength != 0){
           
            if(dayTime[posdayTime].Day == DayArr[i]){
             endtime = checkEndTime(checkstarttime)
             checkHalf = checkHalfTime(endtime)
             colArr[i].push(endtime+1)
             styleList[i].push(checkHalf)
             subjectList[i].push({name:dayTime[posdayTime].SubjectName,code:dayTime[posdayTime].SubjectCode,room:dayTime[posdayTime].ClassRoom})
             dayTimeLength--
             j += endtime

              if(posdayTime < dayTime.length - 1){

                posdayTime += 1
                TimeStart = dayTime[posdayTime].TimeStart
                TimeEnd = dayTime[posdayTime].TimeEnd

              }

            }else{
              posdayTime = 0
            }

            }else{
               colArr[i].push(0)
               styleList[i].push(`border:solid; background-color:rgba(0,0,0,.5); border:solid; height: 100px;width:150px ;`)
               subjectList[i].push("")
            }


         }
    }
   
    return "Somthing"
    console.log(colArr)
}



 function checkHalfTime(col){
        let color = null
        codeColourList.forEach(element => {

               if(element.SubjectCode == dayTime[posdayTime].SubjectCode){
                  color = element.color 
                  
               }
              

        });

        if(color == null){
          color = getRandomColor()
          codeColourList.push({SubjectCode:dayTime[posdayTime].SubjectCode,color:color})
        }

         console.log("codeColourList:"+JSON.stringify(codeColourList))

        // codeColourList.push({test:"test"})
        // console.log("codeColourList:"+codeColourList)
        let timeStart = TimeStart.slice(-2)
        let timeEnd = TimeEnd.slice(-2)
        let style
        if(timeStart == 30 && timeEnd == 30){
            let halfF = 50/(col+1)
            let halfs = 100-halfF
            style = ` border:solid; background: linear-gradient(to right, rgba(0,0,0,.5)  ${halfF}%, ${color} ${halfF}%, ${color} ${halfs}%, rgba(0,0,0,.5)  ${halfF}%); height: 50px; `
            
        }
        else if(timeStart == 30){
            let halfF = 50/(col+1)
            style = `border:solid; background-color:red; background: linear-gradient(to right, rgba(0,0,0,.5) ${halfF}%, red ${halfF}%); `;
        }else if(timeEnd == 30){
            let halfF = 50/(col+1)
            style = `border:solid; background-color:red; background: linear-gradient(to left, rgba(0,0,0,.5) ${halfF}%, red ${halfF}%); `;
        }
        else{
            style = `border:solid; background-color:${color}; border:solid;`;
        }

      return style

    }

function checkStartTime() {
  let num;

  if (TimeStart >= 8.0 && TimeStart < 9.0) {
    num = 1;
  } else if (TimeStart >= 9.0 && TimeStart < 10.0) {
    num = 2;
  } else if (TimeStart >= 10.0 && TimeStart < 11.0) {
    num = 3;
  } else if (TimeStart >= 11.0 && TimeStart < 12.0) {
    num = 4;
  } else if (TimeStart >= 12.0 && TimeStart < 13.0) {
    num = 5;
  } else if (TimeStart >= 13.0 && TimeStart < 14.0) {
    num = 6;
  } else if (TimeStart >= 14.0 && TimeStart < 15.0) {
    num = 7;
  } else if (TimeStart >= 15.0 && TimeStart < 16.0) {
    num = 8;
    } else if (TimeStart >= 16.0 && TimeStart < 17.0) {
    num = 9;
     } else if (TimeStart >= 17.0 && TimeStart < 18.0) {
    num = 10;
     } else if (TimeStart >= 18.0 && TimeStart < 19.0) {
    num = 11;
    } else if (TimeStart >= 19.0 && TimeStart < 20.0) {
    num = 12;
    }
  return num;
}

function checkEndTime(col) {
  let num;
  let col2 = 0;
  if (TimeEnd > 8.0 && TimeEnd <= 9.0) {
    num = 1;
  } else if (TimeEnd > 9.0 && TimeEnd <= 10.0) {
    num = 2;
  } else if (TimeEnd > 10.0 && TimeEnd <= 11.0) {
    num = 3;
  } else if (TimeEnd > 11.0 && TimeEnd <= 12.0) {
    num = 4;
  } else if (TimeEnd > 12.0 && TimeEnd <= 13.0) {
    num = 5;
  } else if (TimeEnd > 13.0 && TimeEnd <= 14.0) {
    num = 6;
  } else if (TimeEnd > 14.0 && TimeEnd <= 15.0) {
    num = 7;
  } else if (TimeEnd > 15.0 && TimeEnd <= 16.0) {
    num = 8;
  } else if (TimeEnd > 16.0 && TimeEnd <= 17.0) {
    num = 9;
  } else if (TimeEnd > 17.0 && TimeEnd <= 18.0) {
    num = 10;
  } else if (TimeEnd > 18.0 && TimeEnd <= 19.0) {
    num = 11;
  } else if (TimeEnd > 19.0 && TimeEnd <= 20.0) {
    num = 12;
  }
  col2 = num - col;

  return col2;
}



 function getRandomColor() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++ ) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
  }


</script>


<style  scoped>
.text{
  font-size: 15px;
  text-align: center;
}
</style>
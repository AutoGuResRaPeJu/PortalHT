//Enter path to mid file to play
function sivamtime() {
	now=new Date();
	hour=now.getHours();
	min=now.getMinutes();
	sec=now.getSeconds();

if (min<=9) {
	min="0"+min;
 }
if (sec<=9) {
	sec="0"+sec;
 }
if (hour>12) {
	hour=hour-12;
	add="pm";
 }
else {
	hour=hour;
	add="am";
 }
if (hour==12) {
	add="pm";
 }
if (hour==00) {
	hour="12";
 }

  document.hours.clock.value = (hour<=9) ? "0"+hour : hour;
  document.minutes.clock.value = min;
  document.seconds.clock.value = sec;
  document.ampm.clock.value= add;
 setTimeout("sivamtime()", 1000);

}

playit=false
function playLED(){
    checar=document.getElementById('LED').value
if(checar=="off"){
    LED.setAttribute('value','on');
    firebase.database().ref('LED').set('on');
}
else{
    firebase.database().ref('LED').set('on');
}
}

function Stop(){
    LED.setAttribute('value','off');
    firebase.database().ref('LED').set('off');
}

function soundcheck(cbox){
playit=cbox.checked
}

function alarm() {
    note = document.arlm.message.value;
    if (note == '') {note = 'ALARM!!';}

    hrs = document.arlm.hr.value;
    min = document.arlm.mts.value;
    apm = document.arlm.am_pm.value;

 if ((document.hours.clock.value == hrs) &&
    (document.minutes.clock.value == min) &&
    (document.ampm.clock.value == apm)) {
     if (playit)
     playLED()
     else
     alert(note);
     return false}

 if (hrs == '') {alert('The Hour field is empty'); return false}
 if (min == '') {alert('The Minute field is empty'); return false}
 if (apm == '') {alert('The am/pm field is empty'); return false}

 if (hrs.length == 1) {document.arlm.hr.value = '0' + hrs}
 if (min.length == 1) {document.arlm.mts.value = '0' + min}
 if (hrs.length > 2) {alert('The Hour is wrongly typed.'); return false}
 if (min.length > 2) {alert('The Minute is wrongly typed.'); return false}
 if (apm != 'am' && apm != 'pm' ) {alert('The am/pm is wrongly typed.'); return false}

 setTimeout("alarm()", 1000);}
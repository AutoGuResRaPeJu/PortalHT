//var firebase = require("firebase/app");
var firebase = require("firebase");
var five = require("johnny-five");
const { Board, Led } = require("johnny-five");
const board = new Board ({port: "COM3"});

board.on("ready", () => {
  var led = new Led(13);
  var relay = new five.Relay(10);


  // This will grant access to the led instance
  // from within the REPL that's created when
  // running this program.
  board.repl.inject({
    led:led,
    relay: relay
  });

  var firebaseConfig = {
    apiKey: "AIzaSyCBJ-xYSRgbSQLTswACH_RyA7qb5eRIGKI",
    authDomain: "iot2019-2047d.firebaseapp.com",
    databaseURL: "https://iot2019-2047d.firebaseio.com",
    projectId: "iot2019-2047d",
    storageBucket: "iot2019-2047d.appspot.com",
  };
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  
  var starCountRef = firebase.database().ref('LED/').on('value', function(snapshot) {
    let LED=snapshot.val();
    if(LED=="on"){
      led.blink();
    }
    else{
      led.stop();
      led.off();
    }
   
});
});
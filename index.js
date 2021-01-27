    let data={
      hh:[],
      sd:[],
      bd:[],
      ride:[]
    }
    let _step=0;
    let timer=null;
    document.getElementById("play").onclick=function(){
      if (timer!=null){
        clearInterval(timer);
      }
      let i=0;
      timer = setInterval(function() {
        if (data.sd[i]==true){
          playSD();
        }
        if (data.bd[i]==true){
          playBD();
        }
        if (data.ride[i]==true){
          playRide();
        }
        if (data.hh[i]==true){
          playHH();
        }
        i=i+1;
        if (i>=_step){
          i=0;
        }
      }, (1000*document.getElementById('sps').value));// plays 
    }//onclick
    function createSequenceGUI(){
      data={
      hh:[],
      sd:[],
      bd:[],
      ride:[]
    }
      _step=0;
      timer=null;
      document.getElementById("_hh").innerHTML="HH";
      document.getElementById("_sd").innerHTML="SD";
      document.getElementById("_bd").innerHTML="BD";
      document.getElementById("_ride").innerHTML="RD";
      _step=document.getElementById("stepam").value;
      if (_step >75){
        _step=75;
      }
      for (i=0; i<_step; i++){
        document.getElementById("_hh").innerHTML=document.getElementById("_hh").innerHTML+"<button class='sequencerItem' id='hh"+i+"' onclick='activateStep(0,"+i+")'></button>";
        data.hh[i]=false;
        document.getElementById("_sd").innerHTML=document.getElementById("_sd").innerHTML+"<button class='sequencerItem' id='sd"+i+"' onclick='activateStep(1,"+i+")'></button>";
        data.sd[i]=false;
        document.getElementById("_bd").innerHTML=document.getElementById("_bd").innerHTML+"<button class='sequencerItem' id='bd"+i+"' onclick='activateStep(2,"+i+")'></button>";
        data.bd[i]=false;
        document.getElementById("_ride").innerHTML=document.getElementById("_ride").innerHTML+"<button class='sequencerItem' id='ride"+i+"' onclick='activateStep(3,"+i+")'></button>";
        data.ride[i]=false;
      }  
    }
    function activateStep(type,step){
      if (type==0){//HighHat
        button_clicked=document.getElementById("hh"+step);
        if (data.hh[step]==false){
            playHH();
            button_clicked.style.background='#000000';
            data.hh[step]=true;
        }
        else {
          button_clicked.style.background='';
          data.hh[step]=false;
        }
      }
      else if (type==1){//Snare Drum
        button_clicked=document.getElementById("sd"+step);
        if (data.sd[step]==false){
            playSD();
            button_clicked.style.background='#000000';
            data.sd[step]=true;
        }
        else {
          button_clicked.style.background='';
          data.sd[step]=false;
        }
      }
      else if (type==2){//Bass Drum
        button_clicked=document.getElementById("bd"+step);
        if (data.bd[step]==false){
            playBD();
            button_clicked.style.background='#000000';
            data.bd[step]=true;
        }
        else {
          button_clicked.style.background='';
          data.bd[step]=false;
        }
      }
      else if (type==3){//Ride
        button_clicked=document.getElementById("ride"+step);
        if (data.ride[step]==false){
          playRide();
            button_clicked.style.background='#000000';
            data.ride[step]=true;
        }
        else {
          button_clicked.style.background='';
          data.ride[step]=false;
        }
      }
    }
    function playHH() {
      const sound = new Audio()
      sound.src = "sounds/hh.wav";
      sound.play();
      return;
    }//playHH()
    function playBD() {
      const sound = new Audio()
      sound.src = "sounds/bd.wav";
      sound.play();
      return;
    }//playBD()
    function playSD(){
      const sound = new Audio()
      sound.src = "sounds/snare.wav";
      sound.play();
      return;
    }//playSD()
    function playRide() {
      const sound = new Audio()
      sound.src = "sounds/ride.wav";
      sound.play();
      return;
    }//playRide()
    let data={};//contains sequencer information (which steps are active)
    const soundList=document.querySelectorAll(".sound");
    const stepsPerSecond=document.querySelector("#sps");
    const stepAm=document.querySelector("#stepam");
    soundList.forEach(x=>{
      data[x.id]=[];
    });
    let steps=0;
    let timer=null;

    document.querySelector("#play").addEventListener("click",()=>{
      if (timer!=null){
        clearInterval(timer);
      }
      let i=0;
      timer = setInterval(function() {
        soundList.forEach(x=>{
          if (data[x.id][i]){
            playSound(x.id)
          }
        })
        i++;
        if (i>=steps){
          i=0;
        }
      }, (1000*stepsPerSecond.value));// plays 
    })

    function createSequenceGUI(){
      soundList.forEach(x=>{ //clear
        data[x.id]=[];
      });
      steps=0;
      timer=null;
      steps=stepAm.value;
      soundList.forEach(x=>{
              let name=x.id.substring(0,x.id.lastIndexOf('.'));
              for (i=0; i<steps; i++){
                x.innerHTML=x.innerHTML+"<button class='sequencerItem' id='sq"+name+i+"' onclick=activateStep('"+x.id+"',"+i+")></button>";
                data[x.id][i]=false;
              }
      } );
    }//createSequenceGUI()

    function activateStep(id,step){
      console.log("I be clicking")
      let name=id.substring(0,id.lastIndexOf('.'));
      let button_clicked=document.getElementById("sq"+name+step);
      if (!data[id][step]){
        playSound(id);
        button_clicked.style.background='#000000';
      }
      else {
          button_clicked.style.background='';
      }
      data[id][step]=!data[id][step];
    }//activateStep(id,step)

    function playSound(val){
      const sound = new Audio();
      sound.src = "sounds/"+val;
      sound.play();
      return;
    }//playSound(val)
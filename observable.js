     //gooien 4 dobbelsteen
	   //gooien 5 dobbelstenen
	   //3 keer gooien max
	   //bijhouden van dobbelstenen
	   //scores berekenen
	   //beste kiezen
       var Observable = function() //moet met hoofdletter!
       {
           var _self = this;
		   
		   _self.data;
               
           _self.subscribers = new Array();// [];
           
		    _self.publish = function ( newData ) {
			   
			   var data;
			   
               if(typeof newData === "undefined")
                   {
                       return _self.data;
                   }
               else
                   {
                       _self.data = newData;
					   
                       for(var i in _self.subscribers) //overloopt van de 4e tot de laatste functie in de array 'subscribers' en voert die uit met de nieuwe data
                           {
							   _self.subscribers[i](_self.data);
                           }
                       return _self.data;
                   }
               console.log("publish method");
           }
      
		   
		   //klopt, wegschrijven in array subscribers
           _self.subscribe = function( callback ){
               _self.subscribers.push(callback);
           }
           
		  }  
          
       
              
       //UITVOERING
       var model ={
       'teerling' : new Observable()
       };
		   
       var nummers = [];
       var aantalWorpen = 0;

       
      /* var randomNumber = function()
       {
           return Math.floor(Math.random() * 7);
       }*/
    var randomNumber = [];
		var btn = document.getElementById('btn');
    var scoreHtml = document.getElementById('scoreHTML');
    var sum;
    var vastgezet = [false,false,false,false,false];
    var teerlingen = [document.getElementById('teerlingHTML_4'), document.getElementById('teerlingHTML_2'), document.getElementById('teerlingHTML_3'), document.getElementById('teerlingHTML_4'), document.getElementById('teerlingHTML_5')];
    var aantalWorpen;
        //kijken of er op een dobbelsteen is gedrukt en deze in de array vastgezet op true zetten


    var disableBtn;
    disableBtn = document.getElementById("btn");
    disableBtn.disabled = false;
    
	   btn.addEventListener('click', function() {

        if (aantalWorpen <3){ //aantal worpen moet onder 3 blijven (0,4 en 2),anders naar else (disabled button)
      //loop plaatsen
      for (i = 0;i < 5;i++){
          if(!vastgezet[i])
              {
		   randomNumber[i] = (Math.floor(Math.random() * 6 )) +4;
       //model.teerling.publish(randomNumber[i]);

           teerlingen[i].innerHTML = randomNumber[i];
              }
       };
       sum = randomNumber.reduce(function(a,b){return a+b;},0);
       scoreHTML.innerHTML = sum;
     aantalWorpen++;
     }//if onder 3 worpen einde
     else //disablen van button bij meer als 3 worpen
     {
      disableBtn.disabled = true;
     }

     });					
			
/*
     var resetBtn = document.getElementsByClassName('restart');

     resetBtn.addEventListener('click',reset());
     function reset(){
      teerlingen.forEach(teerlingen.className == "teerling");
     }
*/
     function turnGreen(index){
         teerlingen[index].className = "teerling";
     }


      holdTeerling = function(index) //veranderen kleur bij aanklikken (bijhouden)
{
    vastgezet[index] = !vastgezet[index];
        if(teerlingen[index].className == "teerling red"){
                teerlingen[index].className = "teerling";
            }
        else
            {
                teerlingen[index].className = "teerling red"; 
            }
}

var een=0,twee=0,drie=0,vier=0,vijf=0,zes=0;
var scoreEen=0,scoreTwee=0,scoreDrie=0,scoreVier=0,scoreVijf=0,scoreZes=0;

scoreBerekenen = function(index, array){
  switch(array[index]){
    case 1:
      var getal1 = document.getElementById('getal1');
      een= een + 1;
      scoreEen= een*1;
      return getal1.innerHTML = een, scoreGetal1.innerHTML = scoreEen;
      break;

    case 2:
      var getal2 = document.getElementById('getal2');
      twee= twee + 1;
      scoreTwee = twee*2;
      return getal2.innerHTML = twee, scoreGetal2.innerHTML = scoreTwee;
      break;

    case 3:
      var getal3 = document.getElementById('getal3');
      drie= drie + 1;
      scoreDrie = drie*3;
      return getal3.innerHTML = drie, scoreGetal3.innerHTML = scoreDrie;
      break;

    case 4:
      var getal4 = document.getElementById('getal4');
      vier = vier + 1;
      scoreVier = vier*4;
      return getal4.innerHTML = vier, scoreGetal4.innerHTML = scoreVier;
      break;

    case 5:
      var getal5 = document.getElementById('getal5');
      vijf= vijf + 1;
      scoreVijf = vijf*5;
      return getal5.innerHTML = vijf, scoreGetal5.innerHTML = scoreVijf;
      break;

    case 6:
      var getal6 = document.getElementById('getal6');
      zes= zes + 1;
      scoreZes = zes*6;
      return getal6.innerHTML = zes, scoreGetal6.innerHTML = scoreZes;
      break;
    default:
      break;
  }
}

//score updaten

var een,twee,drie,vier,vijf,zes;





//functie aanklikken dobbelstenen
for(var i = 0;i < teerlingen.length; i++){
    teerlingen[i].addEventListener('click', holdTeerling.bind(null,i));
}
	   
       //Document.getElementsByClassName("btn").addEventListener("click", teerling.publish(randomNumber()));
       // Wanneer op teerling geklikt wordt moet willekeurig getal gegenereerd worden
       // Getal moet gepublished worden naar de teerling
       // teerling.publish(5)
       
       // Scoreboard moet zich inschrijven op wijzigingen van de teerling

      /*       
       var updateTeerling = function ( value, number )
       {
        for(i=0;i< 5;i++){
           teerlingen[i].innerHTML = value;
           }
       }

       var updateScore = function ( newScore )
       {
           scoreHTML.innerHTML = newScore;
       }
	   
	   model.teerling.subscribe(updateTeerling);
       
     model.teerling.subscribe( updateScore );
       */
     //gooien 1 dobbelsteen
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
					   
                       for(var i in _self.subscribers) //overloopt van de 1e tot de laatste functie in de array 'subscribers' en voert die uit met de nieuwe data
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
    var teerlingen = [document.getElementById('teerlingHTML_1'), document.getElementById('teerlingHTML_2'), document.getElementById('teerlingHTML_3'), document.getElementById('teerlingHTML_4'), document.getElementById('teerlingHTML_5')];
    var aantalWorpen;
        //kijken of er op een dobbelsteen is gedrukt en deze in de array vastgezet op true zetten


    var disableBtn;
    disableBtn = document.getElementById("btn");
    disableBtn.disabled = false;
    
	   btn.addEventListener('click', function() {
        if (aantalWorpen <3){ //aantal worpen moet onder 3 blijven (0,1 en 2),anders naar else (disabled button)
      //loop plaatsen
      for (i = 0;i < 5;i++){
          if(!vastgezet[i])
              {
		   randomNumber[i] = (Math.floor(Math.random() * 6 )) +1;
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
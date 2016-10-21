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
		   

       
      /* var randomNumber = function()
       {
           return Math.floor(Math.random() * 7);
       }*/
       
		var btn = document.getElementById('btn');

	   btn.addEventListener('click', function() {
		   var randomNumber = (Math.floor(Math.random() * 6 )) +1;
		   model.teerling.publish(randomNumber);
	   });
					
							
	   
       //Document.getElementsByClassName("btn").addEventListener("click", teerling.publish(randomNumber()));
       // Wanneer op teerling geklikt wordt moet willekeurig getal gegenereerd worden
       // Getal moet gepublished worden naar de teerling
       // teerling.publish(5)
       
       // Scoreboard moet zich inschrijven op wijzigingen van de teerling
       var teerlingHtml = document.getElementById('dobbelsteen');
       
       var updateTeerling = function ( value )
       {
           teerlingHtml.innerHTML = value;
       }
       
       var updateScore = function ( newScore )
       {
           dobbelsteen.innerHTML = newScore;
       }
	   
	   model.teerling.subscribe(updateTeerling);
       
        model.teerling.subscribe( updateScore );
       
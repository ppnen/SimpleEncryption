var x;
//var j=parseInt(prompt("J taso"),10);
function ok(){ 
    if(j+avain>=29){
        y=(j+avain);
        x=y-29;
        
    }
    else{
        x=(j+avain);
    }
}

var avain=("");

//var ok =["A","B","C"];
var output=("");
var tietokanta=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Å","Ä","Ö"];
var salaus=["0","1","2","3","4","5","6","7","8","9",
"§","#","¤","%","&","/","(",")","=","½","*",";",":","_","@","£","$","+","."];

var change =function (){
  var input= prompt("Syötä viesti","Tähän selväkieli").toUpperCase();
  var ristikko = [];
  avain= parseInt(prompt("Syötä avain"),10);
  ristikko = input.split("");  
     for (i=0;i<ristikko.length;i++){
        for (j=0;j<tietokanta.length;j++){
		ok();
            if(ristikko[i]=== tietokanta[j]){
                
                ristikko[i]=salaus[x];
     }
   }

            
  }
  output=ristikko.join("");
  
  alert(output);
  return output;
 };
 
//change();



/*for(var i = 0; i < ristikko2.length; i++)
{
    ristikko2[i] = parseInt(ristikko2[i], 10);
}
*/
var r;
//var j=parseInt(prompt("J taso"),10);

//console.log(j);

//console.log(avain2)
function ok2(){ 
    if(j-avain2<0){
       
        r=29-avain2+j;
        
        
    }
    else{
        r=(j-avain2);
        
    }
}


var output2=("");
//var ristikko2=[0,1,0];
//ristikko2= ristikko2.join("%");
//alert(ristikko2);
var avain2=("");
var changeInv =function (){
var input2= prompt("Syötä salaviesti","Tähän salakieli").toUpperCase();
var ristikko2=[];
avain2= parseInt(prompt("Syötä avain"),10);
ristikko2= input2.split("");
    
     for (i=0;i<ristikko2.length;i++){
        for (j=0;j<salaus.length;j++){
		ok2();
            if(ristikko2[i]=== salaus[j]){
                
                ristikko2[i]=tietokanta[r];
     }
   }

            
  }
  output2=ristikko2.join("");
  alert(output2);
  return output2;
 };
 
//changeInv();

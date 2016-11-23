 var point = 0; //initial the value of point
 var text;
function handleClick() 
{
   var i = 0; 
   while(i<=6) //while loop
   {
     var radios = document.getElementsByName('group' + i);
     for (var j = 0; j < radios.length; j++) //for loop
     {
       var radio = radios[j];
       if (radio.checked) 
       {
         if (radio.value == "Never")
           point += 0; //update the value of point
           else if (radio.value == "Occasionally")
             point += 1; //update the value of point
           else if (radio.value == "Often")
             point += 2; //update the value of point
           else
             point += 3; //update the value of point     
       }
     }
     i++;
     result()
   }
   alert("You get " + point + " point(s) totally. \n" + text); //display an alert dialog about the total points and the diagnosis of the quiz
 }

function result()
{
  switch(point)
    {
      case 0:
      case 1:
      case 2:
      case 3:
        text = "Your online window-shopping is well-controlled and far from a problem.";
        break;
      case 4:
      case 5:
      case 6:
      case 7:
        text = "You occasionally lose yourself in an online window-shopping session, but remain in control of your habit. The activity is likely much more pleasurable than harmful for you.";
        break;
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
        text = "You could be treading towards a harmful compulsion.  Be thoughtful about your online window shopping habit and how it impacts your work and family life.";
        break;
      case 13:
      case 14:
      case 15:
        text = "Your online window shopping is compulsive and negatively affecting your life.";
        break;
      default: 
        text = "You demonstrate the signs of a serious addiction.";        
    }  
}

function displayDiv()
{
  document.getElementById("showResult").style.visibility = "visible";
}





//array is going to have a list of items versus single variables
var colorList = ["Red", "Black", "White", "Firebrick", "Magenta", "Blue", "Yellow"];

  var imageListA = new Array();
  imageListA[0] = "images/drawing/thumbs/artwork_1.jpg";
  imageListA[1] = "images/drawing/thumbs/artwork_2.jpg";
  imageListA[2] = "images/drawing/thumbs/artwork_3.jpg";
  imageListA[3] = "images/drawing/thumbs/artwork_4.jpg";
  imageListA[4] = "images/drawing/thumbs/artwork_5.jpg";
  imageListA[5] = "images/drawing/thumbs/artwork_6.jpg";
  imageListA[6] = "images/drawing/thumbs/artwork_7.jpg";
  imageListA[7] = "images/drawing/thumbs/artwork_8.jpg";
  imageListA[8] = "images/drawing/thumbs/artwork_9.jpg";
  imageListA[9] = "images/drawing/thumbs/artwork_10.jpg";
  imageListA[10] = "images/drawing/thumbs/artwork_11.jpg";
  imageListA[11] = "images/drawing/thumbs/artwork_12.jpg";
  imageListA[12] = "images/drawing/thumbs/artwork_13.jpg";
  imageListA[13] = "images/drawing/thumbs/artwork_14.jpg";
  imageListA[14] = "images/drawing/thumbs/artwork_15.jpg";
  imageListA[15] = "images/drawing/thumbs/artwork_16.jpg";

//Oil color art
  var imageListB = new Array();
  imageListB[0] = "images/oil/thumbs/artwork_1.jpg";
  imageListB[1] = "images/oil/thumbs/artwork_2.jpg";
  imageListB[2] = "images/oil/thumbs/artwork_3.jpg";
  imageListB[3] = "images/oil/thumbs/artwork_4.jpg";
  imageListB[4] = "images/oil/thumbs/artwork_5.jpg";
  imageListB[5] = "images/oil/thumbs/artwork_6.jpg";
  imageListB[6] = "images/oil/thumbs/artwork_7.jpg";
  imageListB[7] = "images/oil/thumbs/artwork_8.jpg";

//Water color art
  var imageListC = new Array();
  imageListC[0] = "images/watercolor/thumbs/artwork_1.jpg";
  imageListC[0] = "images/watercolor/thumbs/artwork_2.jpg";
  imageListC[0] = "images/watercolor/thumbs/artwork_3.jpg";
  imageListC[0] = "images/watercolor/thumbs/artwork_4.jpg";
  imageListC[0] = "images/watercolor/thumbs/artwork_5.jpg";
  imageListC[0] = "images/watercolor/thumbs/artwork_6.jpg";
  imageListC[0] = "images/watercolor/thumbs/artwork_7.jpg";
  imageListC[0] = "images/watercolor/thumbs/artwork_8.jpg";
  imageListC[0] = "images/watercolor/thumbs/artwork_9.jpg";
  imageListC[0] = "images/watercolor/thumbs/artwork_10.jpg";

function buildThumbnails(){
  //hook onto the thumbs div
  var thumbsDiv = document.getElementById("thumbs");
  //create an output variable
  var output = "";
  for(var i=0; i < imageListA.length; i++)
  {
    output += '<img src="' + imageListA[i] + '" />';
    //concatenation assignment operator
  }
    for(var j=0; j < imageListB.length; j++)
  {
    output += '<img src="' + imageListB[j] + '" />';
    //concatenation assignment operator
  }
    for(var k=0; k < imageListC.length; k++)
  {
     output += '<img src="' + imageListC[k] + '" />';
    //concatenation assignment operator
  }   
  thumbsDiv.innerHTML = output;}
window.onload = function(){
  buildThumbnails();//use or "fire off" this function
  //or invoke the function
};

function parsingProjectsForIndex() {

    var projectNumber =0;
    var htm = "";
    var numberOfArray = $.parseJSON(projects).length; 
    $.each($.parseJSON(projects), function () {
   
    var item="";
  var slideName = "projects"+projectNumber;
    htm+="<div class='col-lg-12 row' id='imageCaptionDiv'><div class='col-lg-6'><div id='"+slideName+"'class='carousel slide' data-ride='carousel'><ol class='carousel-indicators'>";

    for(i in this.imgurl) {
      if(i==0){
        htm +=  "<li data-target='#"+slideName+"' data-slide-to='"+i+"' class='active'></li>";
        item +="<div class='carousel-item active'><img  class='d-block w-100' src='" + this.imgurl[i] + "' alt ='projects image' height = "+this.height+" width="+this.width+"></div>";/*+this.height+"width="+this.width+"></div>"*/
        }
      else{
        htm += "<li data-target='#"+slideName+"' data-slide-to='"+i+"'></li>";
        item+="<div class='carousel-item'>"+
      "<img class='d-block w-100' src='"+this.imgurl[i]+"' alt='Second slide'  height ="+this.height+" width="+this.width+"></div>";
      }  
}
  htm += "</ol><div class='carousel-inner'>"+item;
 htm += "</div><a class='carousel-control-prev' href='#"+slideName+"' role='button' data-slide='prev'>"+
    "<span class='carousel-control-prev-icon' aria-hidden='true'></span>"+
    "<span class='sr-only'>Previous</span>"+
  "</a>"+
  "<a class='right carousel-control-next' href='#"+slideName+"' role='button' data-slide='next'>"+
    "<span class='carousel-control-next-icon' aria-hidden='true'></span>"+
    "<span class='sr-only'>Next</span>"+"</a></div></div><br>"+
    "<div class='col-lg-6'><div class='caption'><h4>" +this.caption+"</h4><p>"+this.description+"</p></div>";
    
    for(j in this.tools){
      htm += "<button type='button' class='btn btn-primary' id='buttonsForTools'>"+this.tools[j]+"</button>";
    }
    
    htm +="</div></div>";

  if(projectNumber!=numberOfArray-1)
{
   htm += "<hr>";
}

    projectNumber++;
    });
     
    document.getElementById("rowProjectsDiv").innerHTML = htm;
}
function ShowSlides(slides){

}
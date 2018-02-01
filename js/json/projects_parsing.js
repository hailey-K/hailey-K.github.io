function parsingProjectsForIndex() {
    var htm = "";
    $.each($.parseJSON(projects), function () {

 /*  htm += "<div class='col-lg-12' id='imageCaptionDiv'>"+
   "<div class='thumbnail'>" +
            "<img src=" + this.imgurl + " alt ='projects image' height ="+this.height+"width="+this.width+">" +
            "</div> <div class='caption'><h4>" +this.caption+"</h4><p>"+this.description+"</p></div></div>";

*/
htm+="<div id='myCarousel' class='carousel slide' data-ride='carousel'>"+
  "<ol class='carousel-indicators'>"+
    "<li data-target='#myCarousel' data-slide-to='0' class='active'></li>"+
    "<li data-target='#myCarousel' data-slide-to='1'></li>"+
  "</ol>";
htm += "<div class='carousel-inner'>" +
            "<div class='carousel-item active'><img  class='d-block w-100' src=" + this.imgurl + " alt ='projects image' height ="+this.height+"width="+this.width+"></div>"
            +"<div class='carousel-item'>"+
      "<img class='d-block w-100' src='Images/header.jpg' alt='Second slide'>"
         /*   "</div> <div class='caption'><h4>" +this.caption+"</h4><p>"+this.description+"</p>*/+"</div></div>";

                htm +=  "<a class='carousel-control-prev' href='#myCarousel' role='button' data-slide='prev'>"+
    "<span class='carousel-control-prev-icon' aria-hidden='true'></span>"+
    "<span class='sr-only'>Previous</span>"+
  "</a>"+
  "<a class='right carousel-control-next' href='#myCarousel' role='button' data-slide='next'>"+
    "<span class='carousel-control-next-icon' aria-hidden='true'></span>"+
    "<span class='sr-only'>Next</span>"+"</a></div>";

            if(this.imgurl != "js/json/img/4.png")
                {
 htm += "<hr>";
                }

        });
     
    document.getElementById("rowProjectsDiv").innerHTML = htm;
}
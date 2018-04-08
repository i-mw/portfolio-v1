// var wrap = $("main");

// $(window).on("scroll", function(e) { 
//   console.log($(this).scrollTop());
//   console.log($(".lower-activities").css("height"));

//   if ($(this).scrollTop() > 343 && $(this).scrollTop() < 2327){
//     $(".main-inner").removeClass("main-inner-scroll-down");
//     $(".left").removeClass("left-scroll-down");
    
//     $(".upper-activities").addClass("upper-activities-fixed");
//     $(".lower-activities").addClass("lower-activities-fixed");    

//     if ($(this).scrollTop() > 1291) {
//       $(".projects").addClass("projects-fixed");
//     } 
//     else {
//     $(".projects").removeClass("projects-fixed");
//     }
//   }

//   else if ($(this).scrollTop() > 2327){
//     $(".upper-activities").removeClass("upper-activities-fixed");
//     $(".lower-activities").removeClass("lower-activities-fixed");
//     $(".projects").removeClass("projects-fixed");
//     $(".main-inner").addClass("main-inner-scroll-down");
//     $(".left").addClass("left-scroll-down");

//   }

//   else {
//     $(".upper-activities").removeClass("upper-activities-fixed");
//     $(".lower-activities").removeClass("lower-activities-fixed");
//   }
  
// });



/*set left pane height to the height of projects pane*/

if ($(window).width() + 15 >= 600 ) {
  var projectsHeight = $(".projects").css("height");
  var heightNum = projectsHeight[0] + projectsHeight[1] + projectsHeight[2] + projectsHeight[3];
  heightNum = Number(heightNum);

  var projectsMarginBottom = $(".projects").css("margin-bottom");
  var marginNum = projectsMarginBottom[0] + projectsMarginBottom[1];
  marginNum = Number(marginNum);

  var leftHeight = heightNum + marginNum + "px";

  $(".left").css("height", leftHeight);
}
else {
  $(".left").css("height", "auto");
}


$(window).resize(function(){
  if ($(window).width() + 15 >= 600 ) {
    var projectsHeight = $(".projects").css("height");
    var heightNum = projectsHeight[0] + projectsHeight[1] + projectsHeight[2] + projectsHeight[3];
    heightNum = Number(heightNum);

    var projectsMarginBottom = $(".projects").css("margin-bottom");
    var marginNum = projectsMarginBottom[0] + projectsMarginBottom[1];
    marginNum = Number(marginNum);

    var leftHeight = heightNum + marginNum + "px";

    $(".left").css("height", leftHeight);
  }
  else {
    $(".left").css("height", "auto");
  }
});



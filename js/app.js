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





if ($(window).width() + 15 >= 600 ) {

  /*set left pane height to the height of projects pane*/
  var projectsHeight = $(".projects").css("height");
  var heightNum = projectsHeight[0] + projectsHeight[1] + projectsHeight[2] + projectsHeight[3];
  heightNum = Number(heightNum);

  var projectsMarginBottom = $(".projects").css("margin-bottom");
  var marginNum = projectsMarginBottom[0] + projectsMarginBottom[1];
  marginNum = Number(marginNum);

  var leftHeight = heightNum + marginNum + "px";

  $(".left").css("height", leftHeight);


  
  /*Set upper activities pane bottom to the height of lower activities pane*/
  var lowerActHeight = $(".lower-activities").css("height");
  var lowerActHeightNum = lowerActHeight[0] + lowerActHeight[1] + lowerActHeight[2];
  lowerActHeightNum = Number(lowerActHeightNum);
  
  var bottom = lowerActHeightNum + "px";

  $(".upper-activities").css("bottom", bottom);
  








    if ( $(window).scrollTop() + $(window).height() >= $(".projects").offset().top + $(".projects").height() ){
      console.log("scroll");
      $(".upper-activities").removeClass("upper-activities-fixed");
      $(".lower-activities").removeClass("lower-activities-fixed");
      $(".upper-activities").addClass("upper-activities-scroll");
      $(".lower-activities").addClass("lower-activities-scroll");
      $(".upper-activities").css("right", "0");
      $(".lower-activities").css("right", "0");
    }

    else if( $(window).scrollTop() + $(window).height() >= $(".lower-activities").offset().top + $(".lower-activities").height()  &&  $(".upper-activities").offset().top >= $(".projects").offset().top  /* &&   $('.projects').offset().top + $(".projects").height() >= $(".lower-activities").offset().top + $(".lower-activities").height()*/ ){
      console.log("fixed");
      $(".upper-activities").removeClass("upper-activities-scroll");
      $(".lower-activities").removeClass("lower-activities-scroll");       
      $(".upper-activities").addClass("upper-activities-fixed");
      $(".lower-activities").addClass("lower-activities-fixed");
      if ($(window).width() + 15 >= 920 ){
        $(".upper-activities").css("right", $(".inner").css("margin-left"));
        $(".lower-activities").css("right", $(".inner").css("margin-left"));
      }
      else {
        $(".upper-activities").css("right", "4%");
        $(".lower-activities").css("right", "4%");
      }      
    }

    else {
      console.log("above");

      console.log($(window).scrollTop() + $(window).height() >= $(".lower-activities").offset().top + $(".lower-activities").height());
      console.log($(".upper-activities").offset().top >= $(".projects").offset().top);
//       console.log($('.projects').offset().top + $(".projects").height() >= $(".lower-activities").offset().top + $(".lower-activities").height());

      $(".upper-activities").removeClass("upper-activities-fixed");
      $(".lower-activities").removeClass("lower-activities-fixed");      
      $(".upper-activities").removeClass("upper-activities-scroll");
      $(".lower-activities").removeClass("lower-activities-scroll");       
    }



  $(window).scroll(function(){

// console.log($(window).scrollTop() + $(window).height() >= $(".lower-activities").offset().top + $(".lower-activities").height());
// console.log($(".upper-activities").offset().top >= $(".projects").offset().top );
// console.log($('.projects').offset().top + $(".projects").height() > $(".lower-activities").offset().top + $(".lower-activities").height());

// console.log($('.projects').offset().top + $(".projects").height());
// console.log($(".lower-activities").offset().top + $(".lower-activities").height());


    if ( $(window).scrollTop() + $(window).height() >= $(".projects").offset().top + $(".projects").height() ){
      console.log("scroll");
      $(".upper-activities").removeClass("upper-activities-fixed");
      $(".lower-activities").removeClass("lower-activities-fixed");
      $(".upper-activities").addClass("upper-activities-scroll");
      $(".lower-activities").addClass("lower-activities-scroll");
      $(".upper-activities").css("right", "0");
      $(".lower-activities").css("right", "0");
    }

    else if( $(window).scrollTop() + $(window).height() >= $(".lower-activities").offset().top + $(".lower-activities").height()  &&  $(".upper-activities").offset().top >= $(".projects").offset().top  /* &&   $('.projects').offset().top + $(".projects").height() >= $(".lower-activities").offset().top + $(".lower-activities").height()*/ ){
      console.log("fixed");
      $(".upper-activities").removeClass("upper-activities-scroll");
      $(".lower-activities").removeClass("lower-activities-scroll");       
      $(".upper-activities").addClass("upper-activities-fixed");
      $(".lower-activities").addClass("lower-activities-fixed");
      if ($(window).width() + 15 >= 920 ){
        $(".upper-activities").css("right", $(".inner").css("margin-left"));
        $(".lower-activities").css("right", $(".inner").css("margin-left"));
      }
      else {
        $(".upper-activities").css("right", "4%");
        $(".lower-activities").css("right", "4%");
      }      
    }

    else {
      console.log("above");

      console.log($(window).scrollTop() + $(window).height() >= $(".lower-activities").offset().top + $(".lower-activities").height());
      console.log($(".upper-activities").offset().top >= $(".projects").offset().top);
//       console.log($('.projects').offset().top + $(".projects").height() >= $(".lower-activities").offset().top + $(".lower-activities").height());

      $(".upper-activities").removeClass("upper-activities-fixed");
      $(".lower-activities").removeClass("lower-activities-fixed");      
      $(".upper-activities").removeClass("upper-activities-scroll");
      $(".lower-activities").removeClass("lower-activities-scroll");       
    }



});




}
else {
  $(".left").css("height", "auto");
}



/* activities panes fixation .. 2nd state */
// if ($(window).width() + 15 >= 920 ){
//   $(".upper-activities").css("right", $(".inner").css("margin-left"));
//   $(".lower-activities").css("right", $(".inner").css("margin-left"));
// }
// else {}




$(window).resize(function(){
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



    /*Set upper activities pane bottom to the height of lower activities pane*/
    var lowerActHeight = $(".lower-activities").css("height");
    var lowerActHeightNum = lowerActHeight[0] + lowerActHeight[1] + lowerActHeight[2];
    lowerActHeightNum = Number(lowerActHeightNum);
  
    var bottom = lowerActHeightNum + "px";

    $(".upper-activities").css("bottom", bottom);





    console.log($(window).scrollTop() + $(window).height());
    console.log($(".lower-activities").offset().top + $(".lower-activities").height());
  

//     if( $(window).scrollTop() + $(window).height() == $(".lower-activities").offset().top + $(".lower-activities").height()){
//       $(".upper-activities").addClass("upper-activities-fixed");
//       $(".lower-activities").addClass("lower-activities-fixed");
//     }
//     else {}



  }
  else {
    $(".left").css("height", "auto");
  }
});



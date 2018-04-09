

if ($(window).width() + 15 >= 600 ) {

  /*set left pane height to the height of projects pane*/
  var projectsHeight = $(".projects").css("height");
  var heightNum = projectsHeight[0] + projectsHeight[1] + projectsHeight[2] + projectsHeight[3];
  heightNum = Number(heightNum);

  var projectsMarginBottom = $(".projects").css("margin-bottom");
  var marginNum = projectsMarginBottom[0] + projectsMarginBottom[1];
  marginNum = Number(marginNum);

  var leftHeight = heightNum + marginNum + "px";
  console.log("left height = " + leftHeight);
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










$(window).resize(function(){
  

if ($(window).width() + 15 >= 600 ) {

  /*set left pane height to the height of projects pane*/
  var projectsHeight = $(".projects").css("height");
  var heightNum = projectsHeight[0] + projectsHeight[1] + projectsHeight[2] + projectsHeight[3];
  heightNum = Number(heightNum);

  var projectsMarginBottom = $(".projects").css("margin-bottom");
  var marginNum = projectsMarginBottom[0] + projectsMarginBottom[1];
  marginNum = Number(marginNum);

  var leftHeight = heightNum + marginNum + "px";
  console.log("left height = " + leftHeight);
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



  
});



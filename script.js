$(window).load(function() {
  //remove that loading bar
  $('#overlay').fadeOut();



  var $replay = $('#replay');
  var $goToWechat = $('#go-to-wechat');
  $replay.click(function(){
    //first remove animation on section 6
    toggleP6Animation();
    //then go back to section1
    window.location.href = "#section1";
    //load section1 animation
    toggleP1Animation();
  });

  $goToWechat.click(function(){
    //first remove animation on section6
    toggleP6Animation();
    //then go to wechat section
    window.location.href = "#section7";
    //load section7 animation
    toggleP7Animation();
  });

  //let's first grab all the dom elements needed for animation
  var $p1Title1 = $('.p1-title1');
  var $p1Title2 = $('.p1-title2');
  var $p1Globe = $('.p1-globe');
  var $p1TextFulltime = $('.p1-text-fulltime');
  var $p1TextOutsource = $('.p1-text-outsource');
  var $p1TextRealtime = $('.p1-text-realtime');
  var $p1Superman = $('.p1-superman');
  var $p1SupermanAside = $('.p1-superman-aside');
  var $p1BottomBall = $('.p1-bottom-ball');
  var $p1FindingJobText = $('.p1-finding-job-text');

  var toggleP1Animation = function(){
    $p1Title1.toggleClass('rotateInDownLeft');
    $p1Title2.toggleClass('rotateInDownLeft');
    $p1Globe.toggleClass('rollIn animated1');
    $p1TextFulltime.toggleClass('rollIn animated2');
    $p1TextOutsource.toggleClass('zoomIn animated2');
    $p1TextRealtime.toggleClass('zoomIn animated2');
    $p1Superman.toggleClass('bounceInLeft');
    $p1SupermanAside.toggleClass('bounceInLeft');
    $p1BottomBall.toggleClass('fadeInUp animated1');
    $p1FindingJobText.toggleClass('slideInUp animated1');
  }

  // active first section ainimation
    toggleP1Animation();

  //grab elements for second page animation
    $p2BottomText = $('.p2-bottom-text');
    $p2Human = $('.p2-human');
    $p2AllInOne = $('.p2-all-in-one');
    $p2Title1 = $('.p2-title1');
    $p2Title2 = $('.p2-title2');

    var toggleP2Animation = function(){
      $p2BottomText.toggleClass('bounceInUp');
      $p2Title1.toggleClass('fadeInDownBig');
      $p2Title2.toggleClass('fadeInDownBig');
      $p2AllInOne.toggleClass('flipInX animated1');
      $p2Human.toggleClass('lightSpeedIn animated2');
    }

  //section3
    var $p38hourlyRate = $('.p3-8hourly-rate');
    var $p315hourlyRate = $('.p3-15hourly-rate');
    var $p3GgStone = $('.p3-bg-stone');
    var $p3Earth = $('.p3-earth');
    var $p3Knockle = $('.p3-knockle');
    var $p3Title1 = $('.p3-title1');
    var $p3Title2 = $('.p3-title2');
    var $p3UFOTarget = $('.p3-UFO-target');
    var $p3UFO = $('.p3-UFO');

  var toggleP3Animation = function(){
    $p3Title1.toggleClass('zoomInDown');
    $p3Title2.toggleClass('fadeIn');
    $p315hourlyRate.toggleClass('fadeIn animated1');
    $p38hourlyRate.toggleClass('fadeIn animated1');
    $p3Knockle.toggleClass('bounceInUp animated2');
    $p3UFOTarget.toggleClass('bounce animated25');
    $p3Earth.toggleClass('pulse animated25');
  }

  //section3.5/4
  var $p3270yuanBackground = $('.p3-2-70yuan-background');
  var $p3270yuan = $('.p3-2-70yuan');
  var $p32Airplane1 = $('.p3-2-airplane1');
  var $p32Airplane2 = $('.p3-2-airplane2');
  var $p32People = $('.p3-2-people');


  var toggleP4Animation = function(){
    $p3270yuanBackground.toggleClass('wobble');
    $p3270yuan.toggleClass('wobble');
    $p32People.toggleClass('bounceInUp animated1');
  }

  //section5
  var $p4Title = $('.p4-title');
  var $p4Skywalker = $('.p4-skywalker');
  var $p4BottomText = $('.p4-bottom-text');
  var $p4BgImg = $('.p4-bg-img');
  var $p4Ball = $('.p4-ball');
  var $p4TimeHolding = $('.p4-time-holding');

  var toggleP5Animation = function(){
    $p4Title.toggleClass('bounceInDown');
    $p4BottomText.toggleClass('bounceInUp');
    $p4Ball.toggleClass('swing animated1');
    $p4Skywalker.toggleClass('bounceInRight animated25');
    $p4TimeHolding.toggleClass('fadeInLeft animated2');
  }

  //section6
  var $p5Title = $('.p5-title');
  var $p5StarsText = $('.p5-stars-text');
  var $p5SkyBackground = $('.p5-sky-background');
  var $p5ShootingStars = $('.p5-shooting-stars');
  var $p5RightBotton = $('.p5-right-botton');
  var $p5LeftBotton = $('.p5-left-botton');

  var toggleP6Animation = function(){
    $p5Title.toggleClass('bounceInDown animated2');
    $p5StarsText.toggleClass('shake');
    $p5RightBotton.toggleClass('fadeInUp animated3');
    $p5LeftBotton.toggleClass('fadeInUp animated3');
  }

  //section7
  var $p6Title = $('.p6-title');
  var $p6CodeMan = $('.p6-code-man');
  var $p6BackgroundSky = $('.p6-background-sky');

  var toggleP7Animation = function(){
    $p6Title.toggleClass('fadeInDown');
    $p6CodeMan.toggleClass('fadeInUp animated1');
    $p6BackgroundSky.toggleClass('swing');
  }

//Let's activate fullpage
$('#fullpage').fullpage({
  anchors: ['section1', 'section2', 'section3', 'section4','section5','section6','section7'],
  onLeave: function(index,nextIndex,direction){


    if( index == 1 && direction == 'down' ){
      console.log("you're on second page");
      toggleP1Animation();
      toggleP2Animation();
    }

    else if( index == 2 && direction == 'up' ){
      console.log("you're on first page");
      toggleP1Animation();
      toggleP2Animation();
    }

    else if( index == 2 && direction == 'down' ){
      console.log("you're on third page");
      toggleP2Animation();
      toggleP3Animation();
    }

    else if( index == 3 && direction == 'up' ){
      console.log("you're on second page");
      //off
      toggleP3Animation();
      //on
      toggleP2Animation();
    }

    else if( index == 3 && direction == 'down' ){
      console.log("you're on third-5 page");
      //on
      toggleP4Animation();
      //off
      toggleP3Animation();
    }
    //go back to 3 section from 4 section, I call 3.5 section
    else if( index == 4 && direction == 'up' ){
      console.log("you're on third page");
      //off
      toggleP4Animation();
      //on
      toggleP3Animation();
    }

    else if( index == 4 && direction == 'down' ){
      console.log("you're on fifth page");
      //off
      toggleP4Animation();
      //on
      toggleP5Animation();
    }

    //from 5 to 4
    else if( index == 5 && direction == 'up' ){
      console.log("you're on fourth page");
      //off
      toggleP5Animation();
      //on
      toggleP4Animation();
    }

    //from 5 to 6
    else if( index == 5 && direction == 'down' ){
      console.log("you're on sixth page");
      //on
      toggleP6Animation();
      //off
      toggleP5Animation();
    }

    //from 6 to 5
    else if( index == 6 && direction == 'up' ){
      console.log("you're on fifth page");
      //off
      toggleP6Animation();
      //on
      toggleP5Animation();
    }


    //from 6 to 7
    else if( index == 6 && direction == 'down' ){
      console.log("you're on seventh page");
      //off
      toggleP6Animation();
      //on
      toggleP7Animation();
    }

    //from 7 to 6
    else if( index == 7 && direction == 'up' ){
      console.log("you're on sixth page");
      //off
      toggleP7Animation();
      //on
      toggleP6Animation();
    }

  }
});




});

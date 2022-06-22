$(function() {

  
  // star
  $(".star").rateYo({
    // rating: 3.6,
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true
  });
  
  // фильтр кнопок
  $('.shop-content__filter-btn').on('click', function() {
    $('.shop-content__filter-btn').toggleClass('shop-content__filter-btn--active');
  });

  $('.button-list').on('click', function() {
    $('.product-item').addClass('product-item--list');
      
  })

  $('.button-grid').on('click', function() {
    $('.product-item').removeClass('product-item--list');

    $('.header__burger').on('click', function(event){
    $('.menu__list').toggleClass('.menu__list--active');
  });  
      
  })

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

});

$(function() {
	$('.select-style').styler();
});

// Стилизация <select>
$(function() {
  var mixer = mixitup('.categories__items');
});


// filter price catalog

$(function() {
 $('.filter-price__input').ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 100,
    to: 500,
    step: 5,
    prefix: "$",
     onStart: function (data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
     },
      onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
        },
    });


    // timer

  function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.querySelector('.lighting__clock');
  const daysSpan = clock.querySelector('.lighting__days');
  const hoursSpan = clock.querySelector('.lighting__hours');
  const minutesSpan = clock.querySelector('.lighting__minutes');
  const secondsSpan = clock.querySelector('.lighting__seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = '2022-07-05';
initializeClock('lighting__clock', deadline);  
});


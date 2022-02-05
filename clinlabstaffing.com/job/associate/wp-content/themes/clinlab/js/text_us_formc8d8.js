jQuery_3_3_1(document).ready( function() {
  jQuery_3_3_1('div#text-us span.close').on('click', function(){
      jQuery_3_3_1('div#text-us').removeClass("open");
      jQuery_3_3_1('div#text-us').removeClass("high");
  })

  jQuery_3_3_1('img.text-us-img').on('click', function(){
    jQuery_3_3_1('div#text-us').addClass("open");
  })

  jQuery_3_3_1('.phone.icon.sms').on('click', function(){
    jQuery_3_3_1('div#text-us').addClass("open");
    jQuery_3_3_1('div#text-us').addClass("high");
  })
})
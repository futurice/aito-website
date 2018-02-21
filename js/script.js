$( window ).on( "load", function() {

  // loader
  setTimeout(function(){
    $('#loader-wrapper').hide();
  }, 1000);

  // menu
  $(function() {
    function slideMenu() {
      var activeState = $("#menu-container .menu-list").hasClass("active");
      $("#menu-container .menu-list").animate(
        {
          right: activeState ? "0%" : "-100%"
        },
        400
      );
    }
    $("#menu-wrapper").click(function(event) {
      event.stopPropagation();
      $("#hamburger-menu").toggleClass("open");
      $("#menu-container .menu-list").toggleClass("active");
      slideMenu();

      $("body").toggleClass("overflow-hidden");
    });

    $(".menu-link").click(function(){
      $("#hamburger-menu").toggleClass("open");
      $("#menu-container .menu-list").toggleClass("active");
      slideMenu();

      $("body").toggleClass("overflow-hidden");
    });
    
  }); // jQuery load

  // submit form data
  $("#submit_form").click(function(){
    $.ajax({
      method: "POST",
      url: "https://at3jkc3ps2.execute-api.eu-central-1.amazonaws.com/production/form",
      data: { 
        "Name": $("#Name").val(), 
        "Email": $("#Email").val(),
        "Company": $("#Company").val(),
        "Industry": $("#Industry").val(),
        "Number of employees": $("#NumberOfEmployees").val(),
        "Thoughts/Requests": $("#ThoughtsRequests").val()
      }
    })
    .done(function( msg ) {
      alert( "Data Saved: " + msg );
    });
  });
  

  //form validation
  $('#form').parsley().on('field:validated', function() { 
    var ok = $('.parsley-error').length === 0;
    if($("#Name").val() == '' || $("#Email").val() == '' || $("#ThoughtsRequests").val() == '') {
      $('#submit_form').prop("disabled",true);
    } else {
      $('#submit_form').prop("disabled",false);
    }
  });
});
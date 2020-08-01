
  $(document).ready(function(){
  //  selectores dinámicos
  $('select').formSelect();
  //  Carousel
    $('.carousel').carousel({
      duration:1000,
      dist:-150,
    });
    autoplay();
    // mueve el carousel cada tres segundos
    function autoplay(){
      $('.carousel').carousel('next');
      setTimeout(autoplay,5000);      
    }
    // Slider
    $('.slider').slider();
    // Inputs
    M.updateTextFields();
    $('input#input_text, textarea#textarea2').characterCounter();
    // Dropdown
    $(".dropdown-trigger").dropdown();
    $('.modal').modal({endingTop: 35});

  });

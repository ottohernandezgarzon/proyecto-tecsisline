$(document).ready(function(){
  M.AutoInit();
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
    $(".dropdown-trigger").dropdown(
      {
        hover: true,
        autoTrigger :false
      });
    $('.modal').modal({endingTop: 35});
  });
      function tarjeta(){
        M.toast({
            html:'Se agrego su tarjeta con éxito.',
            classes:'green'
          });
      }
      function efecty(){
        M.toast({
            html:'Selecciono efecty',
            classes:'green'
          });
      }
      function baloto(){
        M.toast({
            html:'Selecciono Via Baloto',
            classes:'green'
          });
      }
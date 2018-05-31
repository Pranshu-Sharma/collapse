$(document).ready(()=>{
  $('.div2').hide();

  $('.div1').click(()=>{

      $('.div2').slideToggle({height: "100px"});

  });
});

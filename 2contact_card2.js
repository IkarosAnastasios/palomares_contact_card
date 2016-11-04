$(document).ready(function(){
  $('#btn').on('click',function(){
    $('#cards').append('<div id=store><div class=show1><h1>'+$('#fname').val()+' '+$('#lname').val()+'</h1><h5>(Click for description)</h5></div><div class=show2><p>'+$('#descr').val()+'</p></div></div>');
    $('.show1').show();
    $('.show2').hide();
    $('#fname').val('');
    $('#lname').val('');
    $('#descr').val('');
    return false;
  });
  $('#cards').on('click','.show1',function(){
    $(this).hide();
    $(this).siblings('.show2').show();
  });
  $('#cards').on('click','.show2',function(event){
    $(this).hide();
    $(this).siblings('.show1').show();
  });
});

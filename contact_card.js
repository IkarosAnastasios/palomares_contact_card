var i=0;
function clickythingie(){
  $('#cards').children().on('click',function(){
    console.log('#a'+$('id2').val());
    console.log('#b'+$('id2').val());
    console.log('#c'+$('id2').val());
    $('#c'+$('id2').val()).val('#a'+$('id2').val());
    $('#a'+$('id2').val()).val('#b'+$('id2').val());
    $('#b'+$('id2').val()).val('#c'+$('id2').val());
  });
};
$(document).ready(function(){
  $('#btn').on('click', function(){
    $('#cards').append('<div id='+('a'+i)+' alt='+('b'+i)+' temp='+('c'+i)+' id2='+i+'>','</div>');
    $('#a'+i).html('<h1>'+$('#fname').val()+' '+$('#lname').val()+'</h1>'+'<h5>(Click for description)</h5>');
    $('#b'+i).val('<p>'+$('#descr')+'</p>');
    $('#cards').html()
    console.log('a'+i);
    $('#fname').val('');
    $('#lname').val('');
    $('#descr').val('');
    i++;
    clickythingie();
    return false;
  });

  // $('#cards').children().on('click', function(){
  //   console.log('#a'+$('id2').val());
  //   console.log('#b'+$('id2').val());
  //   console.log('#c'+$('id2').val());
  //   $('#c'+$('id2').val()).val('#a'+$('id2').val());
  //   $('#a'+$('id2').val()).val('#b'+$('id2').val());
  //   $('#b'+$('id2').val()).val('#c'+$('id2').val());
  //
  // });
});

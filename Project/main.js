console.log('heello')
$('div').css('background-color','pink')
var btn = $('#button')
btn.click(function(){
    $('.box').css('background-color','green')
})

var add = $('#method')
add.click(function(){
    var div = $('<div> <p> I am a happy div </p> </div>');
    $('body').append(div )
    
})

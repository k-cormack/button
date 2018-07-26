$(document).ready(function() {
    //This code will run after your page loads
    $('button').click(function(){
        if ($('body').hasClass('black')) {
        $('body').removeClass('black').addClass('white');
        }
        else {
            $('body').removeClass('white').addClass('black');
        }
    });
    $('#orb').click(function(){
        if ($('#orb').hasClass('sun')) {
            $('#orb').removeClass('sun').addClass('moon');
        }
        else {
            $('#orb').removeClass('moon').addClass('sun');
        }
    })
});
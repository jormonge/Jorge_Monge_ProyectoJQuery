$(document).ready(function() { // you will get $ is not defined by quokka but that is fine, as long as $(document).ready() is set it will run
    $('.notice-close').on('click', function(event){
        $('.notice-warning').remove();
        }); // jQuery code goes here
    });
    


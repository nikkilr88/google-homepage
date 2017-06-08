/* global $ */

$(document).ready(function(){
    $('#searchTerm').on('click', function(){
        var searchTerm = $('#searchbar').val();
        if(searchTerm !== ''){
        window.open('https://www.google.com.mx/search?q='+searchTerm, '_self');
        }
    });
    $('#searchbar').keypress(function(e){
        if(e.which === 13){
           $('#searchTerm').click();  
        }
    });
    
    $('#lucky').on('click', function(){
        window.open('https://www.google.com/doodles', '_self');
    });
});
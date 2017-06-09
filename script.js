/* global $ */
/* global webkitSpeechRecognition */

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
    
    $('#mic').on('click', startDictation);
    
    function startDictation() {

    if (window.hasOwnProperty('webkitSpeechRecognition')) {

      var recognition = new webkitSpeechRecognition();

      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.lang = "en-US";
      recognition.start();

      recognition.onresult = function(e) {
        document.getElementById('searchbar').value
                                 = e.results[0][0].transcript;
        recognition.stop();
      };

      recognition.onerror = function(e) {
        recognition.stop();
      }

    }
  }
});
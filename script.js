$(document).ready(function() {
//Quote 
$("#button").on("click", function(){
  $.getJSON("http://quotes.stormconsultancy.co.uk/random.json",function(json){
       $(".message").html((json.quote));
});
$.getJSON("http://quotes.stormconsultancy.co.uk/random.json",function(json){
       $("i.author").html((json.author));

$(".twitter-share-button").attr("href" , 'https://twitter.com/intent/tweet?text=' + json.quote +' ' + 'Author:' + json.author + '@tabinotebook.com');
    });
 
   });  
});

$(document).ready(function(){
    var scrollLink = $('.Scroll');
    // ... Scrolling sections
    
    scrollLink.click(function(e){
        
        e.preventDefault();
        $("html , body").animate({scrollTop:$(this.hash).offset().top;} ,2000)
        
        
    })
    
})

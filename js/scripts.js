

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("fullpage").style.display = "block";

        $('#fullpage').fullpage({
            dragAndMove:"fingersonly",
            sectionsColor: ['#e8e3c7', '#ffd200','#f2f2f2','#67BCDB', '#c1c1c1'],
            anchors:['home','aboutme', 'skills', 'qual','contactme','followme'],
            menu: '.main-nav ul',
            onLeave:function (index,nextIndex,direction) {
                if(index==1){
                    document.getElementById("head").style.display = "block";
                }
                if(nextIndex==1){
                    document.getElementById("head").style.display = "none";
                }
                if(nextIndex == 3){
                    $('.progress-bar').each(function() {
                        $(this).find('.progress-content').animate({
                            width:$(this).attr('data-percentage')
                        },2000);

                        $(this).find('.progress-number-mark').animate(
                            {left:$(this).attr('data-percentage')},
                            {
                                duration: 2000,
                                step: function(now, fx) {
                                    var data = Math.round(now);
                                    $(this).find('.percent').html(data + '%');
                                }
                            });
                    });
                }
                    if(nextIndex==5){
                        $( '.js-input' ).keyup(function() {
                            if( $(this).val() ) {
                                $(this).addClass('not-empty');
                            } else {
                                $(this).removeClass('not-empty');
                            }
                        });
                    }

                if(index==3){
                    $('.progress-bar').each(function() {
                        $(this).find('.progress-content').animate({
                            width:0
                        },500);

                        $(this).find('.progress-number-mark').animate(
                            {left:50},
                            {
                                duration: 500,
                                step: function(now, fx) {
                                    $(this).find('.percent').html(0 + '%');
                                }
                            });
                    });
                }
            }
		});

}
function myFunction() {
    myVar = setTimeout(showPage, 2500);
}

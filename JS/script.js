function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

function check() {
    var $elem = $('nav');
    if (document.documentElement.scrollTop > 80) {
        $elem.addClass("fixed-top");
    } else{
        $elem.removeClass("fixed-top");
    }
}

$(window).scroll(function(){
    check();
});

function topFunction() {
    document.documentElement.scrollTop = 0;
  }

$(document).ready(function() {
    function incrementProgressBar() {
      var progressBar = document.getElementById('progressBar');
      var completionText = document.getElementById('completionText');
      var width = 0;
      var interval = setInterval(function() {
        if (width >= 100) {
          clearInterval(interval);
          progressBar.style.display = 'none';
          completionText.style.display = 'block';
        } else {
          width++;
          progressBar.style.width = width + '%';
          progressBar.setAttribute('aria-valuenow', width);
        }
      }, 50);
    }

    function resetModal() {
        var progressBar = document.getElementById('progressBar');
        var completionText = document.getElementById('completionText');
    
        progressBar.style.display = 'block';
        progressBar.style.width = '0%';
        progressBar.setAttribute('aria-valuenow', '0');
        completionText.style.display = 'none';
      }

  
    $('#contactModal').on('shown.bs.modal', function() {
      incrementProgressBar();
    });

    $('#contactModal').on('hidden.bs.modal', function() {
        resetModal();
      });
  });
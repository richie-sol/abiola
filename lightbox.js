function setupLightbox() {
    const isMobile = window.innerWidth <= 768 || 
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Remove lightbox functionality on mobile
      $('[data-lightbox]').each(function() {
        $(this).off('click.lightbox');
        $(this).click(function(e) {
           //Optional: open image in new tab instead
          window.open($(this).attr('href'), '_blank');
          e.preventDefault();
        });
      });
      
    } else {
      // Desktop lightbox options
      lightbox.option({
        'resizeDuration': 500,
        'wrapAround': true,
        'albumLabel': 'Image %1 of %2',
        'disableScrolling':true,
    'fadeDuration':300,
    'imageFadeDuration':400,
    'alwaysShowNavOnTouchDevices':true
      });
    }
  }
  
  // Run on page load
  $(document).ready(setupLightbox);
  
  // Re-run on window resize (for device orientation changes)
  $(window).resize(function() {
    setupLightbox();
  });
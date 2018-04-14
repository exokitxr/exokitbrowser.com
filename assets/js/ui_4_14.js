(function() {
  window.onload = function() {
    // let startedMlSectionAutoplay = false;
    let startedFpsSectionAutoplay = false;

    const installCode = document.getElementById('installCode');
    // const mlSection = document.getElementById('mlSection');
    const fpsSection = document.getElementById('fpsSection');
    // const mlVideo = document.getElementById('ml');
    // const overlay1 = document.getElementById('mlOverlay');
    const chromeOverlay = document.getElementById('chromeOverlay');
    const exoOverlay = document.getElementById('exoOverlay');
    const fpsChrome = document.getElementById('fpsChrome');
    const fpsExo = document.getElementById('fpsExo');

    function selectText(elementId, copyIt) {
      if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(elementId));
        range.select();
        if (copyIt) document.execCommand('Copy');
      } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(elementId));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        if (copyIt) document.execCommand('Copy');
      }
    }

    // overlay1.addEventListener('click', function() {
    //   if (mlVideo.paused) {
    //     mlVideo.play();
    //     overlay1.classList.add('hide');
    //   } else {
    //     mlVideo.pause();
    //     overlay1.classList.remove('hide');
    //   }
    // });

    function startStopFpsVideos() {
      if (fpsChrome.paused) {
        fpsChrome.play();
        fpsExo.play();
        chromeOverlay.classList.add('hide');
        exoOverlay.classList.add('hide');
      } else {
        fpsChrome.pause();
        fpsExo.pause();
        chromeOverlay.classList.remove('hide');
        exoOverlay.classList.remove('hide');
      }
    }

    chromeOverlay.addEventListener('click', function() {
      startStopFpsVideos();
    });

    exoOverlay.addEventListener('click', function() {
      startStopFpsVideos();
    });

    installCode.addEventListener('click', function() {
      selectText('installCode', true);
    });

    window.addEventListener('scroll', function () {
      const fpsSectionTop = fpsSection.getBoundingClientRect().top;
      // const mlSectionTop = mlSection.getBoundingClientRect().top;
      if (fpsSectionTop < 60 && !startedFpsSectionAutoplay) {
        // const fpsChrome = document.getElementById('fpsChrome');
        // const fpsExo = document.getElementById('fpsExo');
        fpsChrome.play();
        fpsExo.play();
        chromeOverlay.classList.add('hide');
        exoOverlay.classList.add('hide');
        startedFpsSectionAutoplay = true;
      }
      // else if (mlSectionTop < 60 && !startedMlSectionAutoplay) {
      //   mlVideo.play();
      //   overlay1.classList.add('hide');
      //   startedMlSectionAutoplay = true;
      // }
    });
  };
})();

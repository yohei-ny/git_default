const scrollEvent = function () {
        // スクロール量の取得

        
    const scrollValue = window.pageYOffset;

    const target = document.getElementsByClassName("about");


    const windowHeight = window.innerHeight;

    // console.log('画面の高さ', window.innerHeight);
    document.addEventListener('scroll',function(){


    for (let a = 0; a < target.length; a++) {
          // 取得した要素のtop値の取得 + スクロール量
          let scrollTop = target[a].getBoundingClientRect().top + scrollValue;
          if (scrollValue > scrollTop - windowHeight + value) {
              target[a].classList.add("js-fade");
          }
      }
    });
};

scrollEvent();
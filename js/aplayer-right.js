// APlayer 右下角定位 + 修复展开/收起
;(function(){
  var WIDE = 400, NARROW = 66;
  function init(){
    var body = document.querySelector('.aplayer-fixed .aplayer-body');
    if (!body) return;
    clearInterval(t);

    var switcher = document.querySelector('.aplayer-fixed .aplayer-miniswitcher');
    if (!switcher) return;

    var isWide = false;
    switcher.addEventListener('click', function(){
      setTimeout(function(){
        if (isWide) {
          body.style.width = NARROW + 'px';
          isWide = false;
        } else {
          body.style.width = WIDE + 'px';
          isWide = true;
        }
      }, 50);
    });
  }
  var t = setInterval(init, 300);
  setTimeout(function(){ clearInterval(t); }, 15000);
})();

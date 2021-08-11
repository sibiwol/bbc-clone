// "use strict";

// 전역변수 사용을 회피하기 위해 즉시 실행 익명함수를 만든다.
(() => {
  // 블럭 안은 내부, 즉 지역변수가 되어 외부에서 접근을 할 수 없다.
  const stepElems = document.querySelectorAll(".step");
  const graphicElems = document.querySelectorAll(".graphic-item");
  let currentItem = graphicElems[0]; // 현재 활성화된(visible 클래스가 붙은) .graphic-item을 지정
  let ioIndex;

  const io = new IntersectionObserver((entries, observer) => {
    ioIndex = entries[0].target.dataset.index * 1;
  });

  for (let i = 0; i < stepElems.length; i++) {
    //관찰 대상으로 등록이 된다.
    io.observe(stepElems[i]);

    stepElems[i].dataset.index = i;
    graphicElems[i].dataset.index = i;
  }

  function activate() {
    currentItem.classList.add("visible");
  }

  function inactivate() {
    currentItem.classList.remove("visible");
  }

  window.addEventListener("scroll", () => {
    let step;
    let boundingRect;
    let temp = 0;

    // 현재의 ioIndex 바로 전 것
    for (let i = ioIndex - 1; i < ioIndex + 2; i++) {
      step = stepElems[i];
      if (!step) continue;

      boundingRect = step.getBoundingClientRect();

      temp++;

      if (
        boundingRect.top > window.innerHeight * 0.1 &&
        boundingRect.top < window.innerHeight * 0.8
      ) {
        inactivate();
        currentItem = graphicElems[step.dataset.index];
        activate();
      }
    }
    console.log(temp);
  });

  activate();
})();

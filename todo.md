# CSS

`max-width` <br/>
`rem` `em` <br/>
`position: sticky` vs `fixed` <br/>
`position: relative` <br/>
`box-shadow` <br/>
상하단 margin 병합현상 https://youtu.be/c19Mjg-ivxc <br/>
`transition` duration, delay, leaner <br/>
`will-change` <br/>
`text-decoration` <br/>

# HTML

## `data-*`
레퍼런스: [MDN data-*](https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/data-*)<br/>
정의: 임의의 데이터를 스크립트로 HTML과 DOM 사이에서 교환할 수 있다. <br/><br/>
[HTMLElement인터페이스](https://developer.mozilla.org/ko/docs/Web/API/HTMLElement)와 [HTMLElement.dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset) 속성을 통해 사용할 수 있다.  <br/><br/>
DOMStringMap형식이다. 추가 속성에 대한 데이터를 표시하는 속성이다.<br/>예를 들어 HTML에서 `data-test-value` 라고 쳤다면 `HTMLElement.dataset.testValue`로 JS에 접근할 수 있다. <br/><br/>
용도: HTML 요소를 강력한 프로그램 객체로 사용할 수 있다. 
아래 링크에서 `data-*` 에 대해 연습할 수 있다. <br/>
https://developer.mozilla.org/ko/docs/Learn/HTML/Howto/Use_data_attributes

# JS

`.dataset`<br/>
`indersection observer` 참고블로그: https://heropy.blog/2019/10/27/intersection-observer/ <br/>
문자를 숫자로 바꾸는 방법

- 문자열 \* 1
- +문자열
  등 더 무슨 방법이 있는지 알아보고 포스팅하기

bird 애니메이션 오류 있음. 다시 확인해야 함.

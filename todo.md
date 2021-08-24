# CSS
## `max-width`
레퍼런스:
* [MDN - max-width](https://developer.mozilla.org/ko/docs/Web/CSS/max-width)

정의: element의 최대 너비를 설정한다.  

값:
* `fit-content`: 해당 element의 content만큼만 차지하도록 설정할 수 있다. 

## `rem` `em`
레퍼런스:
* [드림코딩 by 엘리 - 프론트엔드 필수 반응형 CSS 단위 em과 rem 예제프로젝트를 통해 정리 하세요](https://www.youtube.com/watch?v=xWMKz9NCD0k)
* [브런치 - 폰트 단위: em, rem(root em)](https://brunch.co.kr/@jihoonleeh9l6/32)
* [Whatcha](https://medium.com/watcha/watcha-%EA%B0%9C%EB%B0%9C-%EC%A7%80%EC%8B%9D-px-em-rem-f569c6e76e66)

## `position`: 
### `sticky` 
### `fixed` 
### `relative` 

## `box-shadow`
레퍼런스:
* [MDN - box-shadow](https://developer.mozilla.org/ko/docs/Web/CSS/box-shadow)

값:
* `inset`: 그림자가 내부에 그려진다. element가 움푹 들어간 효과
* `<offset-x>` `<offset-y>` : 그림자 위치 설정. `<blur-raidus>` `<spread-radius>`로 인해 흐려지는 효과 볼 수 있다. 
* `<blur-radius>`: 세 번째 값. 값이 클수록 그림자 테두리는 흐려지고, 크기는 더 커지고, 색은 더 밝아진다. 음수값은 사용할 수 없다. 
* `<spread-radius>`: 네 번째 값. 양수 값은 그림자가 더 커지고 확산, 음수 값은 그림자가 줄어든다
* `<color>`

statement
```
/* offset-x | offset-y | color */
box-shadow: 60px -16px teal;

/* offset-x | offset-y | blur-radius | color */
box-shadow: 10px 5px 5px black;

/* offset-x | offset-y | blur-radius | spread-radius | color */
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

/* inset | offset-x | offset-y | color */
box-shadow: inset 5em 1em gold;

/* Any number of shadows, separated by commas */
box-shadow: 3px 3px red, -1em 0 0.4em olive;
```
<br/>

## 상하단 margin 병합현상 
https://youtu.be/c19Mjg-ivxc <br/> 

마진 병합현상이란? <br/>
예시) <br/>
```
// HTML
<section class="section"> section 1 </section>
<section class="section"> section 2 </section>

// CSS
body {
  margin: 0;
  padding: 0;
}

.section {
  color: white;
  background-color:teal;
  border: 1px solid;
  padding: 20px;
  margin: 20px;
}
```
결과:
<img width="724" alt="Screen Shot 2021-08-24 at 11 21 49 PM" src="https://user-images.githubusercontent.com/69044941/130633956-3859152a-ba5e-4b73-a712-ba27304ba61b.png">

`.section1`과 `.section2` 사이 여백값은 40px이어야 한다. 하지만 실제 보여지는 것은 20px로 더 안정적이다. <br/> 
<br/>
마진병합현상의 조건
* 인접한 block 요소끼리만 일어난다. 
* 상하단만 해당한다. (좌우는 해당하지 않음)
<br/>
마진병합현상의 단점: <br/>
부모와 자식 요소가 딱 붙어 있으면 마진병합현상으로 부모마진과 자식마진이 합쳐질 수 있다.  <br/>
예시) 

```
// HTML
<div class='parent'>
  <div class="children">A</div>
  <div class="children">B</div>
</div>

// CSS
body {
  margin: 0;
  padding: 0;
}

.parent {
  background-color: gold;
  width: 300px;
  margin: 0 auto;
}

.children {
  width: 200px;
  height: 200px;
  background-color: teal;
  font-size: 200px;
  text-align: center;
  margin: 50px;
}
```
<img width="719" alt="Screen Shot 2021-08-25 at 12 17 15 AM" src="https://user-images.githubusercontent.com/69044941/130643375-836aa42d-bba4-4ed9-a703-b870510d50a8.png">

해결 방법
1. 부모와 자식 요소에 틈을 벌려 마진병합현상이 일어나는 조건을 없앤다. => 발생하는 문제: 부모 요소의 디자인인이 의도와 다르게 나올 수 있다. 
    * 부모 클래스에 `padding: 1px`을 넣는다. 
    * 부모 클래스에 `border: 1px solid transparent`를 넣는다. 
2. 자식 요소를 `display: inline-block`으로 만들어 마진병합현상이 일어나는 조건을 없앤다. => 발생하는 문제: `.childeren` 요소 사이 여백이 100px이 된다
3. (👍 best 👍) 부모 클래스에 `overflow:hidden`을 준다.

<img width="721" alt="Screen Shot 2021-08-25 at 12 18 19 AM" src="https://user-images.githubusercontent.com/69044941/130643521-ff353bf0-0b1a-4baa-a8f4-40498982fa3c.png">

(위 이미지는 해결방법 3번에 해당한다.) 


## `transition` duration, delay, leaner <br/>
## `will-change` 
레퍼런스:
* [MDN - will-change](https://developer.mozilla.org/ko/docs/Web/CSS/will-change)
<br/>
설명: element에 예상되는 변화에 대한 힌트를 브라우저에 제공해 실제 element가 변화되기 전에 미리 브라우저를 적절하게 최적화할 수 있다.<br/>
<br/>

주의할점:
* 너무 많은 요소에 `will-change`를 적용하지 않는다. 과하게 사용할 시 오히려 과도하게 메모리, 복잡한 렌더링을 사용하게 된다. 
* 페이지가 잘 동작한다면 `will-change` 속성을 추가하지 않는다. 당장의 성능 문제를 해결하기 위한 마지막 수단으로 사용하자
* 스크립트 코드를 사용하여 변화발생 전후로 `will-change`의 활성/비활성화를 바꿔주는 것이 좋다. (아래 예시)
```
//css
.sidebar {
  will-change: transform;
}
```
```javascript
// js
var el = document.getElementById('element');

// 요소가 hover 상태일 때 will-change 설정
el.addEventListener('mouseenter', hintBrowser);
el.addEventListener('animationEnd', removeHint);

function hintBrowser() {
  // 애니메이션 키프레임 단락 내에서
  // 변경될 예정인 최적화 가능한 속성들
  this.style.willChange = 'transform, opacity';
}

function removeHint() {
  this.style.willChange = 'auto';
}
```

statement
```
/* 키워드 값 */
will-change: auto
will-change: transform;        /* Example of <custom-ident> */
will-change: opacity;          /* Example of <custom-ident> */
will-change: left, top;        /* Example of two <animateable-feature> */
```


값:
* `auto`: `will-change` 없음
* `custom-ident>`: 해당 속성에 대한 기대


## `text-decoration` 
레퍼런스:
[MDN - text-decoration](https://developer.mozilla.org/ko/docs/Web/CSS/text-decoration)<br/>
<br/>
정의: 하위 텍스트 요소의 밑줄 색을 지정한다. <br/>
<br/>
값:
* `text-decoration-line`: `underline` `line-through` 등의 선 종류
* `text-decoration-color`: 색
* `text-decoration-sytle`: `solid` `wavy` `dashed` 등의 스타일
* `text-decoration-thickness` : 선 두께

# HTML

## `data-*`
레퍼런스: 
* [MDN data-*](https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/data-*)
* [MDN data 속성 사용하기](https://developer.mozilla.org/ko/docs/Learn/HTML/Howto/Use_data_attributes)
<br/>
정의: 임의의 데이터를 스크립트로 HTML과 DOM 사이에서 교환할 수 있다. <br/><br/>

[HTMLElement인터페이스](https://developer.mozilla.org/ko/docs/Web/API/HTMLElement) 와 [HTMLElement.dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset) 속성을 통해 사용할 수 있다.  <br/><br/>
DOMStringMap형식이다. 추가 속성에 대한 데이터를 표시하는 속성이다.<br/>예를 들어 HTML에서 `data-test-value` 라고 쳤다면 `HTMLElement.dataset.testValue`로 JS에 접근할 수 있다. <br/><br/>
용도: HTML 요소를 강력한 프로그램 객체로 사용할 수 있다. 



# JS

`.dataset`<br/>
`indersection observer` 참고블로그: https://heropy.blog/2019/10/27/intersection-observer/ <br/>
문자를 숫자로 바꾸는 방법

- 문자열 \* 1
- +문자열
  등 더 무슨 방법이 있는지 알아보고 포스팅하기

/* BADGE / TOP BUTTON */
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    // badgeEl.style.display = 'none';
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // TOP 버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    // 배지 보이기
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // TOP 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));
/*
  _.throttle(함수, 시간)
  lodash 라이브러리를 통해 사용
  스크롤 할 동안 수십개의 함수가 계속 실행되는 것을 막기 위해 일정시간에 한번씩만 실행하도록 제한하는 기능

  gsap.to(요소, 지속시간, 옵션);
  gsap 라이브러리를 통해 사용
  애니메이션 동작하는 기능

  opacity 속성처럼 값을 숫자로 입력하는 속성들은 전환 효과(transition 속성이나 GSAP 라이브러리 등)를 통해
  요소의 전/후 상태를 중간 숫자의 값으로 자연스럽게 만들어 줄 수 있지만,
  display 속성처럼 값이 숫자가 아닌 속성은 전/후 상태의 중간값이 존재하지 않기 때문에 자연스러운 전환 효과를 적용할 수 없다.
*/

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0 // gsap의 ScrollToPlugin을 통해 사용
  });
});


/* VISUAL */
const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .5,
    opacity: 1
  });
});


/* NOTICE */
// new Swiper(선택자, 옵션);
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 방향
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetwwn: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 2500 // 기본값 3000, 3초
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
const promotionToggleIcon = document.querySelector('.toggle-promotion .material-icons')
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion // ! : 반대 값으로 반환
  if (isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add('hide');
    promotionToggleIcon.textContent = 'arrow_circle_down';
  } else {
    // 보임 처리
    promotionEl.classList.remove('hide');
    promotionToggleIcon.textContent = 'arrow_circle_up';
  }
});


/* YOUTUBE */
function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
/*
  random(최솟값, 최댓값)
  범위 랜덤 함수(소수점 2자리까지)
  .toFixed()를 통해 반환된 문자 데이터를, parseFloat()을 통해 소수점을 가지는 숫자 데이터로 변환
*/

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size, // y축
    repeat: -1, // -1 : 무한반복
    yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생
    ease: Power1.easeInOut, // https://greensock.com/docs/v2/Easing 에서 효과 참고
    delay: random(0, delay) // 지연시간
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


/* ScrollMagic - 스크롤 할 경우 나타나는 효과 */
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수)
});


/* AWARDS */
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetwwn: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});
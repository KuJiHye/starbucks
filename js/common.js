/* SEARCH */
const searchEl = document.querySelector('.search');
const searchInput = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInput.focus();
});

searchInput.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInput.setAttribute('placeholder', '통합검색'); // setAttribute() : 속성을 지정
});

searchInput.addEventListener('blur', function () { // blur : focus 해제
  searchEl.classList.remove('focused');
  searchInput.setAttribute('placeholder', '');
});


/* FOOTER */
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 현재 연도의 정보가 숫자데이터로 변환
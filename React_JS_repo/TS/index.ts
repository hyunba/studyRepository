// .ts 파일들은 브라우저가 읽지 못한다. 브라우저는 무조건 js 파일만 읽을 수 있다.
// .ts 파일을 읽게 해주려면 우리는 js로 변환을 해주면된다.
// 자동으로 변환해주는 방법으로는 터미널에 'tsc -w' 를 해주면된다.

const title = document.querySelector('#title');
if (title instanceof Element) {
    title.innerHTML = '안녕하세요'
}

const link = document.querySelector('.link');
if (link instanceof HTMLAnchorElement) {
    link.href = 'https://hyunba.tistory.com'
}

const button = document.querySelector('#button');
if (button instanceof HTMLButtonElement) {
    button.addEventListener('click', () => {
        alert('버튼을 눌렀습니다')
    })
}
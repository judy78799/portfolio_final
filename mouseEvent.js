 //이미지 배열을 담는 변수를 넣는다.
 
 /*
 var imgArray = new Array();
 imgArray[0] = "./img_src/react_icon.png";
 imgArray[1] = "./img_src/ball.png";
 imgArray[2] = "./img_src/css_icon.png";
 imgArray[3] = "./img_src/js_icon.png";
 imgArray[4] = "./img_src/html_icon.png";


//5개의 이미지들을 무작위로 가져오는 변수
var imgNum = Math.round(Math.random()*4);
//도큐먼트와 자바스크립트를 이어준다 objImg = follow-image
var objImg = document.querySelector(".follow-images");
//주어진 ID("introImg")를 가진 이미지 요소의 src 속성을 무작위 이미지로 변경하는 역할을 합니다.

//도큐먼트 상의 박스를 연결한다.
const box = document.querySelector('.box');
//도큐먼트 상의 이미지와 연결한다.
const followImages = document.querySelector('.follow-images');






function letsgo (){

//도큐먼트 바디 영역에 마우스가 들어가면 이미지를 보이게 해주세요. 
//이것만 가리면 이미지가 사라짐 ㅜㅜ
document.body.addEventListener('mouseenter', () => {
 followImages.style.display = 'block';
 objImg.src = imgArray[imgNum];
});


//사용자의 마우스 이동에 반응하여 이미지를 이동시키는 역할.
//마우스가 움직이면 ~
//offsetX = 이벤트의 clientX - 박스의 왼쪽? - 따라오는이미지의 클라이언트 위드 / 5 //나누기 5를 왜하고 왜 빼는거지...
document.body.addEventListener('mousemove', (e) => {
 //clientWidth: 보더 값을 제외한
 //clientWidth이거를 offSetX로 바꾸면 이미지가 안움직임
 //Q.'e'가 마우스 커서를 가리키는 일인가?
 //문제: 왜 일정 화면을 벗어나면 마우스를 기준으로 거꾸로 보이는 걸까? --> 해결: 나누기 하는 숫자를 변경해줌 (5 -> 1050)
 //근데 왜 해결되었는지 모름...뭐지
 //clientWidth: 클라이언트 영역 내의 가로,세로 좌표를 제공합니다. 여기서 클라이언트 영역은 현재 보이는 브라우저 화면이 기준이 됩니다.
 //브라우저 페이지에서의 X좌표 위치를 반환하나 스크롤은 무시하고 해당 페이지의 상단을 0으로 측정합니다.
 //pageX: 전체 문서를 기준으로 x,y 좌표를 반환 합니다. 스크롤 화면을 포함해서 측정합니다.
 //마우스 이벤트이기 때문에 pageX,Y를 사용합니다.



 const offsetX = Math.round(e.pageX - document.documentElement.scrollTop / 1050);
 const offsetY = Math.round(e.pageY - document.documentElement.scrollLeft / 1050);


 //이미지 위치값 받아오는거? 이거 없애면 일정 위치에서 안움직임 
 //이미지 x값,y값(px) 받아와서 이미지 위치값을 받아오는 것 같음.
 followImages.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});
 var a = outerWidth
//나는 도큐먼트 전체에서 마우스 이미지 기능을 보여줄 것이니까 해당 기능은 주석 처리함.
// document.body.addEventListener('mouseleave', () => {
//     followImages.style.display = 'none';
// });

}

letsgo();

//유저 스크롤링 코드        
let scrolling = false;

// 스페이스바를 눌렀을 때 스크롤 시작
window.addEventListener('keydown', function (event) {
if (event.code === 'Space' && !scrolling) {
scrolling = true;
scrollDown();
}
});

// 스페이스바를 놓았을 때 스크롤 중지
window.addEventListener('keyup', function (event) {
if (event.code === 'Space') {
scrolling = false;
}
});

function scrollDown() {
if (scrolling) {
// 스크롤할 거리 (픽셀 단위)를 설정합니다.
const scrollDistance = 15; // 원하는 스크롤 거리로 변경 가능

// 페이지를 scrollDistance만큼 아래로 스크롤합니다.
window.scrollBy(0, scrollDistance);

// 다음 스크롤을 요청합니다. (재귀적으로 호출)
requestAnimationFrame(scrollDown);
}
}
*/

const dots = [];
        const cursor = {
            x:0,
            y:0,
        };

        for(let i =0; i<40; i++){
            const dot = document.createElement("div")
            dot.className = "dot"
            document.body.appendChild(dot);
            dots.push(dot);
        }
        document.addEventListener("mousemove",
        (e)=>{
            cursor.x = e.clientX;   
            cursor.y = e.clientY;
            console.log(cursor);
        })

        function draw() {
            let x = cursor.x;
            let y = cursor.y;

            dots.forEach((dot, index) => {
                const nextDot = dots[index +1] ||
                dots[0];

                dot.style.left = x + "px";
                dot.style.top = y + "px";

                x += (nextDot.offsetLeft - dot.offsetLeft) * 0.5;
                y += (nextDot.offsetTop - dot.offsetTop) * 0.5;
            })
        }

        setInterval(draw,20);
var arr1 = [
    "./img/block1/1_0001.png",                     
"./img/block1/1_0005.png",
"./img/block1/1_0009.png",
"./img/block1/1_0013.png",
"./img/block1/1_0017.png",
"./img/block1/1_0021.png",
"./img/block1/1_0025.png",
"./img/block1/1_0029.png",
"./img/block1/1_0033.png",
"./img/block1/1_0037.png",
"./img/block1/1_0041.png",
"./img/block1/1_0045.png",
"./img/block1/1_0049.png",
"./img/block1/1_0053.png",
"./img/block1/1_0057.png",
"./img/block1/1_0061.png",
"./img/block1/1_0065.png",
"./img/block1/1_0069.png",
"./img/block1/1_0073.png",
"./img/block1/1_0077.png",
"./img/block1/1_0081.png",
"./img/block1/1_0085.png",
"./img/block1/1_0089.png",
"./img/block1/1_0093.png",
"./img/block1/1_0097.png",
"./img/block1/1_0101.png",
"./img/block1/1_0105.png",
"./img/block1/1_0109.png",
"./img/block1/1_0113.png",
"./img/block1/1_0117.png",
"./img/block1/1_0121.png",
"./img/block1/1_0125.png",
"./img/block1/1_0129.png",
"./img/block1/1_0133.png",
"./img/block1/1_0137.png",
"./img/block1/1_0141.png",
"./img/block1/1_0145.png",
"./img/block1/1_0149.png",
"./img/block1/1_0153.png",
"./img/block1/1_0157.png",
"./img/block1/1_0161.png",
"./img/block1/1_0165.png",
"./img/block1/1_0169.png",
"./img/block1/1_0173.png",
"./img/block1/1_0177.png",
        ];
var arr2 = [
    "./img/block2/1_0027.png",
    "./img/block2/1_0031.png",
    "./img/block2/1_0035.png",
    "./img/block2/1_0039.png",
    "./img/block2/1_0043.png",
    "./img/block2/1_0047.png",
    "./img/block2/1_0051.png",
    "./img/block2/1_0055.png",
    "./img/block2/1_0059.png",
    "./img/block2/1_0063.png",
    "./img/block2/1_0067.png",
    "./img/block2/1_0071.png",
    "./img/block2/1_0075.png",
    "./img/block2/1_0079.png",
    "./img/block2/1_0083.png",
    "./img/block2/1_0087.png",
    "./img/block2/1_0091.png",
    "./img/block2/1_0095.png",
    "./img/block2/1_0099.png",
    "./img/block2/1_0103.png",
    "./img/block2/1_0107.png",
    "./img/block2/1_0111.png",
    "./img/block2/1_0115.png",
    "./img/block2/1_0119.png",
    "./img/block2/1_0123.png",
    "./img/block2/1_0127.png",
    "./img/block2/1_0131.png",
    "./img/block2/1_0135.png",
    "./img/block2/1_0139.png",
    "./img/block2/1_0143.png",
    "./img/block2/1_0147.png",
    "./img/block2/1_0151.png",
    "./img/block2/1_0155.png",
    "./img/block2/1_0159.png",
    "./img/block2/1_0163.png",
    "./img/block2/1_0167.png",
    "./img/block2/1_0171.png",
    "./img/block2/1_0175.png",
    "./img/block2/1_0179.png"
];
var main   = document.querySelector('.wrapper'),
    //Block1
    b1Anim = document.querySelector('.anim-block1'),
    b1Content = document.querySelector('.header__content'),
    //Block2
    b2Anim = document.querySelector('.about');
    b2Content1 = document.querySelector('.about__content1'),
    b2Content2 = document.querySelector('.about__content2'),

    bool = false;
    activeSlideAnim = 0,
    activeBlock = 0;
    window.onload = function () {
        document.body.classList.add('loaded_hiding');
        window.setTimeout(function () {
          document.body.classList.add('loaded');
          document.body.classList.remove('loaded_hiding');
          b1Content.classList.add('header__content-active');
          antiBager();
    }, 500);}

var objMain = {
    
    blocks:[ b1Anim ],
    breackpoints:[],
};


var last_scroll;
document.addEventListener("scroll", function() {
    if (last_scroll<=500 || last_scroll >=39500) {
        antiBager();
    }
    //console.log(activeSlideAnim);
    if (bool) {
        if(window.scrollY > last_scroll){
            last_scroll = window.scrollY;
            Down();
          }else{
            last_scroll = window.scrollY;
            Up();
          }
    }
      
});                                                              //?????????????????? ???????? ???????????????? ??????????

function Down() {
    
    if (activeSlideAnim<0) {activeSlideAnim = 0;}
    switch (activeBlock) {
        case 0:
            activeSlideAnim++;              
            AnimationSlide(b1Anim, arr1, 0, 45);
            if (activeSlideAnim >= 44) {
                activeSlideAnim = 0;
                activeBlock = 1;
                main.style.top = '-100vh';
            }
            break;
        case 1:
            if (activeSlideAnim < 75) {activeSlideAnim++;}
            AnimationSlide(b2Anim, arr2, 0, 39);
            if (activeSlideAnim>29 && activeSlideAnim<31) {
                b2Anim.style.backgroundPosition = '0 0vh';
                b2Content1.style.opacity = '0';
                b2Content2.style.opacity = '1';
            }            
            break;
        default:
            break;
    }
}

function Up() {
    
    if (activeSlideAnim<0) {activeSlideAnim = 0;}
    switch (activeBlock) {
        case 0:
            activeSlideAnim--;              
            AnimationSlide(b1Anim, arr1, 0, 45);
            if (last_scroll == 0) {
                activeSlideAnim = 0;
            }
            break;
        case 1:
            activeSlideAnim--;
            if (activeSlideAnim <= 0) {
                activeSlideAnim = 48;
                activeBlock = 0;
                main.style.top = '0vh';
            }
            AnimationSlide(b2Anim, arr2, 0, 31);
            if (activeSlideAnim>29 && activeSlideAnim<31) {
                b2Anim.style.backgroundPosition = '0 50vh';
                b2Content1.style.opacity = '1';
                b2Content2.style.opacity = '0';
            }
            break;
        default:
            break;
    }
}




function AnimationSlide(elem, arr, min, max) {
    if (activeSlideAnim < max && activeSlideAnim > min) {
        elem.style.backgroundImage = 'url("' + arr[activeSlideAnim] + '")';           
        console.log('url("' + arr[activeSlideAnim] + '")')
    }
}

function antiBager() {
    bool = false;
    document.body.scrollTop = 20000;
    bool = true;
}
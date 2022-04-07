/* eslint-disable */
import '../scss/main.scss';
import baguetteBox from 'baguettebox.js';
import Swiper from 'swiper/bundle';
import * as noUiSlider from 'nouislider';

const socials = new Swiper('.socials__slider', {
    speed: 800,
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.socials__arrow_next',
        prevEl: '.socials__arrow_prev',
    },
});

knowprice.onclick = function () {
    document.getElementById("body").classList.add('open-call');
};

closeOpen.onclick = function () {
    document.getElementById("body").classList.remove('open-call');
};

backdrop.onclick = function () {
    document.getElementById("body").classList.remove('open-call');
    document.getElementById("body").classList.remove('open-gift1');
    document.getElementById("body").classList.remove('open-gift2');
};

window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.js--mask'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});

document.querySelector('.open-footer').onclick = function (e) {
    var befot = document.querySelector('.befooter');
    befot.classList.toggle('active');
    var foot = document.querySelector('.footer');
    foot.classList.toggle('active');
    e.preventDefault();
}

document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = 0;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

document.querySelector('.fix__close').onclick = function (e) {
    var fix = document.querySelector('#fix');
    fix.classList.toggle('fix-hidden');
    var btn = document.querySelector('.fix__close');
    btn.classList.toggle('active');
    e.preventDefault();
}

const swiper = new Swiper('.swiper', {
    speed: 800,
    loop: true,
    slidesPerView: 2,
    spaceBetween: 60,
    pagination: {
        el: '.portfolio__pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.portfolio__arrow_next',
        prevEl: '.portfolio__arrow_prev',
    },
    breakpoints: {
        '375': {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        '991': {
            slidesPerView: 2,
            spaceBetween: 48,
        },
    },
});

const clients = new Swiper('.clients__slider', {
    speed: 800,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 29,
    centeredSlides: true,
    navigation: {
        nextEl: '.clients__arrow_next',
        prevEl: '.clients__arrow_prev',
    },
});

baguetteBox.run('.repair__item', {
    captions: function (element) {
        return element.getElementsByTagName('img')[0].alt;
    }
});


const repairSlider = new Swiper('.repair__slider', {
    speed: 800,
    loop: true,
    slidesPerView: 2,
    spaceBetween: 48,
    pagination: {
        el: '.repair__pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.repair__arrow_next',
        prevEl: '.repair__arrow_prev',
    },
    breakpoints: {
        '375': {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        '991': {
            slidesPerView: 2,
            spaceBetween: 48,
        },
    },
});


const rangeSlider = document.getElementById('slider');

noUiSlider.create(rangeSlider, {
    start: [140],
    connect: [true, false],
    range: {
        'min': 20,
        'max': 500
    },
});

var rangeSliderValueElement = document.getElementById('slider-range-value');

rangeSlider.noUiSlider.on('update', function (values, handle) {
    var value = values[handle];
    rangeSliderValueElement.value = Math.round(value);
});

rangeSliderValueElement.addEventListener('change', function () {
    rangeSlider.noUiSlider.set([this.value]);
});


next1.onclick = function () {
    document.getElementById("quiz1").classList.remove('active');
    document.getElementById("quiz2").classList.add('active');
    document.getElementById("bar").classList.add('bar-2');
    document.getElementById("progressPercent").innerHTML = "25";
};

next2.onclick = function () {
    document.getElementById("quiz2").classList.remove('active');
    document.getElementById("quiz3").classList.add('active');
    document.getElementById("bar").classList.add('bar-3');
    document.getElementById("progressPercent").innerHTML = "50";
};

next3.onclick = function () {
    document.getElementById("quiz3").classList.remove('active');
    document.getElementById("quiz4").classList.add('active');
    document.getElementById("bar").classList.add('bar-4');
    document.getElementById("progressPercent").innerHTML = "75";
};


next4.onclick = function () {
    document.getElementById("quiz4").classList.remove('active');
    document.getElementById("quiz5").classList.add('active');
    document.getElementById("bar").classList.add('bar-5');
    document.getElementById("progressPercent").innerHTML = "100";
    document.getElementById("aside").classList.add('last-step');
    document.getElementById("asideTitle").innerHTML = "ВАШИ ПОДАРКИ:";
};

back2.onclick = function () {
    document.getElementById("quiz2").classList.remove('active');
    document.getElementById("quiz1").classList.add('active');
    document.getElementById("bar").classList.remove('bar-2');
    document.getElementById("progressPercent").innerHTML = "0";
};

back3.onclick = function () {
    document.getElementById("quiz3").classList.remove('active');
    document.getElementById("quiz2").classList.add('active');
    document.getElementById("bar").classList.remove('bar-3');
    document.getElementById("progressPercent").innerHTML = "25";
};

var count = 0

window.addEventListener('mousemove', function(e) {
  if (e.clientY < 20 && !count) {
    count++
    document.getElementById("body").classList.add('open-gift1');
  }
})

back4.onclick = function () {
    document.getElementById("quiz4").classList.remove('active');
    document.getElementById("quiz3").classList.add('active');
    document.getElementById("bar").classList.remove('bar-4');
    document.getElementById("progressPercent").innerHTML = "50";
};

back5.onclick = function () {
    document.getElementById("quiz5").classList.remove('active');
    document.getElementById("quiz4").classList.add('active');
    document.getElementById("bar").classList.remove('bar-5');
    document.getElementById("progressPercent").innerHTML = "75";
    document.getElementById("aside").classList.remove('last-step');
    document.getElementById("asideTitle").innerHTML = "ПРОЙДЯ ТЕСТ НА ЭТОМ САЙТЕ <strong>ВЫ ПОЛУЧИТЕ 3 ПОДАРКА:</strong>";
};


gift2Close.onclick = function () {
    document.getElementById("body").classList.remove('open-gift2');
};

gift1Close.onclick = function () {
    document.getElementById("body").classList.remove('open-gift1');
};

openGift2.onclick = function () {
    document.getElementById("body").classList.add('open-gift2');
};

const videoTogglers = document.getElementsByClassName('open-player');

const videoObject = {
    video1: 'vGfGcED3bx1A',
    video2: 'vtOi-zIv8uG4',
    video3: 'vZaW_9xobvBA',
    video4: 'vysdxPO-INXE',
    video5: 'vEfde08baQ2s',
    video6: 'vOr4pQDh75Wk',
    video7: 'v84WTB3UM9Co',
    video8: 'vdUota7X4OC0',
    video9: 'v9W_aEoChEm4',
    video10: 'vlfWekVaFoAI',
    video11: 'v3yN9lUcj7nU',
    video12: 'vo6ecsLqXHSQ',
    video13: 'vk1RZDjZ30T8',
    video14: 'vMVrWJD4nSGA',
    video15: 'vrYMRVV2m8h0',
    video16: 'vnChtmB_77WE',
    video17: 'vvyJETlELx2E',
    video18: 'vOnsuKRusnEA',
    video19: 'vX3AwIfsY01U',
    video20: 'vc7FvmbuZhGg?',
    video21: 'vhJvucBXAHjY',
    video22: 'vOH2NgtqILxI',
};

for (var i=0; i < videoTogglers.length; i++) {
    videoTogglers[i].onclick = function(){
        const videoId = this.id;
        const IdFromData = videoObject[videoId];
        const videoFrame = document.getElementById('zenIframe');
        const newVideoSrc = 'https://frontend.vh.yandex.ru/player/' + IdFromData + '?from_block=partner&from=zen&mute=0&autoplay=1&tv=0';
        videoFrame.src = newVideoSrc;
        document.getElementById('videoPopup').classList.add('active');
        document.getElementById('backdrop').classList.add('active');
    }
};

closeVideo.onclick = function() {
    const videoFrame = document.getElementById('zenIframe');
    videoFrame.src = '';
    document.getElementById('videoPopup').classList.remove('active');
    document.getElementById('backdrop').classList.remove('active');
}

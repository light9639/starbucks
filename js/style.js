$(function() {
    //모바일 메뉴 전체화면
    $('header>.innerBox>.mobileheader>a>').on('click', function(){
        $('.app')
        .addClass("mobileActive")
        .siblings();
    });
    $('.app>.sidebar>div>i').on('click', function(){
        $('.app')
        .removeClass("mobileActive")
        .siblings();
    });

    //검색창 클릭시 검색창 나오게
    $("header>.innerBox>.main-menu>.headerIcon>a:first-child").click(function (e) {
        $("#search")
        .removeClass("active")
        .siblings();
    })
    $("#search>.search-header>.btn-close").click(function (e) {
        $("#search")
        .addClass("active")
            .siblings();
    })

    //모바일검색창 클릭시 검색창 나오게
    $("header>.innerBox>.mobileheader>.MobileIcon>a:first-child").click(function (e) {
        $("#search")
        .removeClass("active")
        .siblings();
    })
    $("#search>.search-header>.btn-close").click(function (e) {
        $("#search")
        .addClass("active")
            .siblings();
    })

    //모바일 사람 이미지 클릭시 메뉴 나오도록
    $(".Icon_last").hover(function(){
        $(".Mobile_UserBox").addClass("bg");
    }, function(){
        $(".Mobile_UserBox").removeClass("bg");
    })
    $(".Mobile_UserBox").hover(function(){
        $(this).addClass("bg");
    }, function(){
        $(this).removeClass("bg");
    })

    $('.mobileheader>a>i').click(function(){
        $('body').toggleClass('menu-open');
    })

    //헤더 사람 이미지 클릭시 메뉴 나오도록
    $(".headerIcon>.Icon_last").hover(function(){
        $(".header_UserBox").addClass("bg1");
    }, function(){
        $(".header_UserBox").removeClass("bg1");
    })
    $(".header_UserBox").hover(function(){
        $(this).addClass("bg1");
    }, function(){
        $(this).removeClass("bg1");
    })

    //검색창 클릭시 2자 이상 입력
    $('form[name="search_form"]').on('submit', function(e){
        var keyword = $('input[name="s"]', this).val();

        if ( keyword.split(' ').join('')  == '' || keyword.split(' ').join('').length < 2 ) {
            alert('검색어를 2자 이상 입력해주세요.');
            e.preventDefault();
            return false;
        }
    });

    $('#menu-item-57').css('font-weight', 900);

    //스크롤 탑 내리면 나오게
    const nav = document.querySelector('header');

    function stickMenu(){
        let winYPos = window.pageYOffset;
        let navElePos = nav.offsetTop;

        if(winYPos > navElePos) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    }

    window.addEventListener('scroll', stickMenu);

    //커피의 여정
    $('.journey>.innerBox').slick({
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    speed: 300,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //스타벅스 머신 슬라이드
    $('.machineBox').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    //스타벅스 메뉴 슬라이드
    $('.MenuBox').slick({
        infinite: false,
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    speed: 300,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    //스타벅스 메뉴 lightBox
    lightbox.option({
        resizeDuration: 750,
    })

    //스크롤 내릴 시 나타남
    $('.main_text1').fuwatto({duration: 1000})
    $('.main_text2').fuwatto({duration: 4000})
    $('.main_text3').fuwatto({duration: 6000})
    $('.main_text4').fuwatto({duration: 6000})
    $('#left-right').fuwatto({slide:'left-right'})
    $('#left-right1').fuwatto({slide:'left-right'})
    $('#left-right2').fuwatto({slide:'left-right'})
    $('#fade1').fuwatto({distance: 1000})
    $('#fade2').fuwatto({distance: 1000})
    $('#top-bottom1').fuwatto({
        duration: 2000,
        adjustment: {
            top: 0,
            left: 0,
        },
        slide: 'top-bottom'
    })
    $('#top-bottom2').fuwatto({
        duration: 3000,
        adjustment: {
            top: 0,
            left: 0,
        },
        slide: 'top-bottom'
    })
    $('#top-bottom3').fuwatto({
        duration: 4000,
        adjustment: {
            top: 0,
            left: 0,
        },
        slide: 'top-bottom'})
    $('.ma1').fuwatto({duration: 3000})
    $('.ma2').fuwatto({duration: 4000})
    $('.ma3').fuwatto({duration: 5000})
    $('.ma4').fuwatto({duration: 6000})
    $('.appear1').fuwatto({duration: 2000})
    $('.appear2').fuwatto({duration: 5000})
    $('.appear3').fuwatto({duration: 8000})
})
$(function() {
    //모바일 메뉴 전체화면
    $('header>.innerBox>.mobileheader>a').on('click', function(){
        $('.fullscreen_menu').fadeIn();
    });
    $('.close_btn>a').on('click', function(){
        $('.fullscreen_menu').hide();
    });

    //검색창 클릭시 검색창 나오게
    $("header>.innerBox>nav>#nav>li>a>i").click(function (e) {
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
    $("header>.innerBox>.mobileheader>a:last-child>i").click(function (e) {
        $("#search")
        .removeClass("active")
        .siblings();
    })
    $("#search>.search-header>.btn-close").click(function (e) {
        $("#search")
        .addClass("active")
            .siblings();
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
                breakpoint: 767,
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

    lightbox.option({
        resizeDuration: 750,
    })
})
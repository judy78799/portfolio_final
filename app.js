        //웹사이트 로드 시작하자마자 발생하는 자바스크립트
        $(document).ready(function(){
            //$('body').css({'background-color':'orange'});
            //mainTitle.addClass('left');
            
        });
        
        
        //스크롤 이벤트 시작
        //헤더 스크롤 이벤트
        $(function(){
        
        
        $(window).scroll(function() { 
        
         //현재 스크롤의 위치를 알 수 있습니다.
        var scrollValue = $(document).scrollTop();
        var introHeight = $(".header").height();
        
        //var sec1 = $('.sec1').offset().top;
        var sec3 = $('.sec3').offset().top;
        //var sec3_1 = $('.sec3-1').offset().top;
        var sec3_2 = $('.sec3-2').offset().top;
        var sec4 = $(".sec4");
        var sec4_1 = $(".sec4_1").offset().top;
        var sec5 = $(".sec5").offset().top;
        var sec6 = $(".sec6").offset().top;
        var sec8 = $(".sec8").offset().top;
        var title4 = $(".title4");
        
        var textWrapStart = $(".text-wrap").offset().top;
        var circle3 = $(".circle3");
        var mainTitle = $(".main-title");
        var mainTitle2 = $(".main-title2");
        var mainTitle3 = $(".main-title3");
        
            //console.log(introHeight);
        
        
            //만약 스크롤 값이 497 보다 크다면~ 로고의 크기를 줄이고 위치를 바꿔줘.
            if(scrollValue > introHeight){
                //console.log(introHeight);
                // $('.move_logo').addClass('move_logo_ani');
                $('.ul').css({
                    'width':'36%',
                    'height':'2vw',
                    // 'backdrop-filter':'blur(20px)',
                    'padding':'1.1rem',
                    'border-radius':'0.5rem',
                    // 'border':'2px solid white',
                    'justify-content':'space-between',
            });
            $('.ul-a').css({
                'color':'rgb(37, 37, 37)',
                'transition':'all 1s ease'
            });
            $('.header-logo').css('left','15vw');
            $('.copy-wrap').css('right','1vw');
        
            }else if(scrollValue < introHeight){
                // $('.move_logo').removeClass('move_logo_ani');
                $('.ul').css({
                    'width':'100%',
                    'backdrop-filter':'none',
                    'justify-content':'space-between',
                    'border':'none',
                    'backgroundColor':'rgba(#ffffff00)'
                });
                $('.ul-a').css('color','rgb(37, 37, 37)');
                $('.header-logo').css('left','-17vw');
                $('.copy-wrap').css('right','-15vw');
            }
        
        //헤더 이벤트 끝=============================================//



        //*=======================================================*//
        if(scrollValue > textWrapStart * 0.2){
            //console.log("가능합니다");
            $('.sec3').css({'background-color':'trasparent'});
        // $('.main-title').css({
        //     'left':'-80vw',
        //     'transition':'all 1s ease'
        // });
        $('.main-title3').css({
            'left':'80vw',
            'transition':'all 1s ease'
        });
        $('.main-title2').css({
            'color':'rgb(37, 37, 37)',
            'width':'90vw',
            'height':'8vw',
            //'top':'28.5vw',
            'left':'0vw',
            'font-size':'2vw',
            'opacity':'1',
            'transition':'all 1s ease',
            'z-index':'-5',
            //'background-color':'red'
            
        });
        
        }else if(scrollValue < textWrapStart * 0.2){
            $('.main-title').css({
            'left':'0vw',
            'transition':'all 1s ease'
        });
        $('.main-title3').css({
            'left':'0vw',
            'transition':'all 1s ease'
        });
        $('.main-title2').css({
            'width':'90vw',
            'top':'-1vw',
            'font-size':'1.3vw',
            'opacity':'1',
            'transition':'all 1s ease',
            'justify-content': 'center',
        });
        }
        
        //*=======================================================*//
            //sec3-1 스크롤 이벤트
        
           /* if(scrollValue > sec3_1 * 0.7){
                $('.sec3-1').css({
                    //'background-color':'orange',
                    'transition':'all 1s ease'
                });
                $('.main-title2').css({
                    'color':'white',
                    'left':'0',
                    //'-webkit-text-stroke':' 1px black',
                    'z-index':'-1'
                });
                $('.wider').css({
                    'font-size':'9vw',
                })
            }else if(scrollValue < sec3_1){
                $('.main-title2').css({
                    'justify-content':'center',
                    'left':'0vw',
                });
                $('.wider').css({
                    'font-size':'7vw',
                })
            }
            //중간 쯤 왔을 때 main-title2을 y축 만큼 더 옮겨 줍니다.
            //사려 ------- 깊은 글자 간격이 늘어 나는 곳
            if(scrollValue > sec3_1 * 0.8){
                $('.main-title2').css({
                    'display':'flex',
                    'left':'0vw',
                    'color':'white',
                    'background-color':'none',
                    'transition':'all 0.5s ease',
                    'z-index':'-1'
                });
                $('.wider').css({
                    'font-size':'9vw',
                    'width':'fit-content',
                    'display':'inline-block',
                    //'color':'blue',
                    'transition':'all 1s ease'
                })
            }else if(scrollValue < sec3_1 * 1.2 && scrollValue > sec3_1 * 1){
                $('.main-title2').css({
                    'position':'relative',
                    'width':'100vw', 
                    'display':'flex',
                    //'background-color':'orange',
                    //여기서 글자에 space-between 적용하면 일정한 간격이 생김
                    'justify-content':'center',
                    'transition':'all 1s ease',
                    'opacity':'0'
                });
                $('.wider').css({
                    'font-size':'9vw',
                    'width':'fit-content',
                    'display':'inline-block',
                    'justify-content':'initial',
                    'color':'black',
                })
            }
        
            if(scrollValue > sec3_1 * 1.2){
                console.log("여기야");
                $('.main-title2').css({
                    'opacity':'0'
                });
            }
        */
        //*=======================================================*//
            //sec3_2 부분 입니다.
            if(scrollValue > sec3_2 * 0.8){
                console.log("sec3_2")
                $('.text-line-wrap').css({
                    'width':'55vw',
                    'left':'22vw',
                    'transition':'all 1s ease',
                    'color':'black',
                    'backdrop-filter': 'blur(10vw)',
                });
                $('.left-content').css({
                   // 'background':'linear-gradient(rgba(255, 255, 255, 0.2),orange)',
                    'transition':'all 1s ease',
                })
            }else if(scrollValue < sec3_2 * 0.8){
                $('.text-line-wrap').css({
                    'width':'65vw',
                    'left':'100vw',
                    'transition':'all 1s ease',
                });
                $('.left-content').css({
                    'backdrop-filter': 'blur(10vw)',
                    'transition':'all 1s ease',
                })
            }
        
        //*=======================================================*//
            if(scrollValue > sec3_2  * 1.1){
                console.log("sec3_2")
                $('.title1').css({
                    'transition':'all 1s ease',
                    'color':'#171717'
                });
                $('.title2').css({
                    'transition':'all 1s ease',
                    'color':'#171717'
                });
                //텍스트가 올라옵니다.(사려깊은 이유)
                $('.con-left').css({
                    'color':'white',
                    'transition':'all 1s ease',
                    'line-height':'280%'
                });
                $('.con-right').css({
                    'color':'black',
                    'transition':'all 3s ease',
                    'line-height':'280%',
                });
                //
                $('.right-content').css({
                    'backdrop-filter':'blur(5vw)',
                    'transition':'all 3s ease',
                    'background':'linear-gradient(white,rgba(255, 255, 255, 0.2),rgba(255, 255, 255, 0.9))',
                })
            }else if(scrollValue < sec3_2  * 1.1){
                $('.con-left').css({
                    'color':'black',
                    'transition':'all 2s ease',
                    'line-height':'180%'
                });
                $('.con-right').css({
                    'color':'black',
                    'transition':'all 3s ease',
                    'line-height':'180%'
                });
            }
        //*=======================================================*//
            if(scrollValue > sec3_2  * 1.8){
                console.log("sec4")
                //텍스트가 올라옵니다.(사려깊은 이유)
                $('.sec4').css({
                    //'background-color':'black',
                    'top':'0vw',
                    'transition':'all 1s ease',
                });
                $('.right-content').css({
                    'backdrop-filter':'blur(5vw)',
                    'transition':'all 1.5s ease',
                    //'background':'linear-gradient(rgba(255, 255, 255, 0.2),orange)',
                })
                $('.con-right').css({
                    'color':'white',
                    'transition':'all 2s ease',
                });
                $('.left-content').css({
                    'background-color': '#ffffff',
                    'transition':'all 2s ease',
                });
                $('.con-left').css({
                    'color':'black',
                    'transition':'all 2s ease',
                });
            }else if(scrollValue < sec3_2  * 1.5){
                $('.sec4').css({
                    //'background-color':'black',
                    'top':'-6vw',
                    'transition':'all 1s ease',
                });
            }
        
        
        //*=======================================================*//
        //section 4-1 스크롤 이벤트 text fill 효과
        if(scrollValue > sec4_1 * 0.8){
            $('.sec6_title').css({
                'color':'black',
                'transition':'all 1s ease',
            })
        }else if(scrollValue < sec4_1 * 0.8){
            $('.sec6_title').css({
                'color':'white',
                'transition':'all 1s ease',
            })
        }
        //*=======================================================*//
        //sec5_title 스크롤 이벤트 text fill 효과
        if(scrollValue > sec5 * 1){
                $('.sec5_title').css({
                    'color':'black',
                    'transition':'all 1s ease',
                })
            }else if(scrollValue < sec5 * 1){
                $('.sec5_title').css({
                    'color':'white',
                    '-webkit-text-stroke':'1px black',
                    'transition':'all 1s ease',
                })
            }
        //*=======================================================*//
            //section06 스크롤 시 , skill box 우측에서 왼쪽으로 오는 이벤트 
            if(scrollValue > sec4_1 * 0.9){
            $('.skill_box').css({
                'left':'0vw',
                'transition':'all 1s ease',
            })
        
        }else if(scrollValue < sec4_1 * 0.7){
            $('.skill_box').css({
                'left':'90vw',
                'transition':'all 1s ease',
            })
        }
        //*=======================================================*//
        //section 6 스크롤 이벤트 text fill 효과
        if(scrollValue > sec6 * 0.8){
                $('.title6').css({
                    'color':'black',
                    'transition':'all 1s ease',
                })
        }else if(scrollValue < sec6 * 0.8){
            $('.title6').css({
                    'color':'white',
                    '-webkit-text-stroke':'1px black',
                    'transition':'all 1s ease',
                })
        }
        //*=======================================================*//
        //section 8 스크롤 이벤트 text fill 효과
        if(scrollValue > sec8 * 0.7){
                $('.sec8_title').css({
                    'top':'-10vw',
                    'color':'black',
                    '-webkit-text-stroke':'0px',
                    'transition':'all 1s ease',
                })
        }else if(scrollValue < sec8 * 0.7){
            $('.sec8_title').css({
                    'top':'-3vw',
                    'color':'transparent',
                    '-webkit-text-stroke':'2px black',
                    'transition':'all 1s ease',
                })
        }
        });//jquery scroll event 끝
        
        
        //만약 progress가 show 클래스를 가지고 있다면, content를 보여줘
        var progress = $('.progress');
        if(progress.hasClass('show') == true){
            console.log('해당 클래스를 가지고 있습니다.');
            $('.content').css({'display':'block'});
        }
        //*=======================================================*//
        //gif 호버 시 움직이도록 설정합니다.
        //마우스 오버 하면 움직임
        $(".hov-anim").mouseover(function() {
            console.log("마우스 인터");
          $(this).attr("src", $(this).data("animated"))
        }),
        //마우스 아웃 하면 멈춤
        $(".hov-anim").mouseout(function() {
          $(this).attr("src", $(this).data("static"))
        });
        
        //*=======================================================*//
        var skillImg = $('.skil_img');
        var skillContent = $('.content');
        
        skillImg.mouseenter(function(){
        
            skillImg.addClass('active')
        });
        //만약 skill-img에 active가 붙어있다면 div 내용을 보여줘
        if(skillImg.hasClass('active') == true){
            skillContent.show();
        }
        
        
        
        
        
        
        //텍스트가 스르륵 올라오는 애니메이션
        window.addEventListener('scroll', reveal);
        
        
        function reveal(){
            var reveals = document.querySelectorAll('.reveal');
            //reveal 이라는 변수를 만들어서 찾게 함.
        
            for(var i = 0; i < reveals.length; i++){
        
                var windowheight = window.innerHeight;
                var revealtop = reveals[i].getBoundingClientRect().top;
                var revealpoint = 50;
        
                if(revealtop < windowheight - revealpoint){
                    reveals[i].classList.add('active_ani');
                }else{
                    reveals[i].classList.remove('active_ani');
                }
            }
        }
        
        //텍스트 컬러 변경 이벤트=============================================//
        
        });
        //스크롤 할 때 같이 스크롤 할 수 있도록 원 굴러가는 
        
        window.addEventListener('scroll', function() {
            var element = document.querySelector('.circle3');
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          //element.style.transform = 'translateY(' + scrollTop + '0.0000000001px)';
        });
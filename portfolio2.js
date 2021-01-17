let docElim = document.documentElement,
    resumeHw = document.querySelector('.resume_article'),
    resumeTi = document.querySelector('.resume_h1'),
    listDate = document.querySelectorAll('.list'),
    introSub = document.querySelector('.intro_sub'),
    introH1 = introSub.querySelector('strong'),
    projectTl = document.querySelector('.project_title'),
    projectH1 = projectTl.querySelector('strong'),
    nav = document.querySelector('.nav_list'),
    fir = document.querySelector('.first'),
    sec = document.querySelector('.second'),
    thi = document.querySelector('.third'),
    four = document.querySelector('.fourth'),
    fif = document.querySelector('.fifth'),
    here = document.querySelector('.here_image'),
    rescent = document.querySelector('.rescent_image'),
    whole = document.querySelector('.whole_image'),
    here_in = document.querySelector('.here'),
    rescent_in = document.querySelector('.rescent'),
    whole_in = document.querySelector('.whole');
    

if(matchMedia('screen and (max-width:768px)').matches){
  window.addEventListener('scroll', function () {
    let scrollPos = docElim.scrollTop;
    if(scrollPos > 0){
      nav.style.top = '0';
    } else if(scrollPos == 0){
      nav.style.top = '-10%';
    } if (scrollPos > 250) { 
       resumeHw.style.animationPlayState = 'running';
       resumeTi.style.animationPlayState = 'running';
       } if(scrollPos > 750){
        for ( x = 0; x < listDate.length; x++){
          listDate[x].style.animationPlayState = 'running';
      }} else if(scrollPos < 850){
        function riseRatio(idx){
            var num = 0;
            var dateAt = listDate[idx].getAttribute('data-rate');
            var timer = setInterval(function(){
                ++num;
                listDate[idx].innerText = num;
                if(num == dateAt){
                    clearInterval(timer);
                }
            }, 40);
        }
        for ( i = 0; i < listDate.length; i++) {
            riseRatio(i);    
        }
      } if (scrollPos > 1000){
        introH1.style.animationPlayState = 'running';
        introSub.style.animationPlayState = 'running';
      }  if (scrollPos > 1200){
        fir.style.animationPlayState = 'running';
      } if (scrollPos > 1500){
        sec.style.animationPlayState = 'running';
      } if (scrollPos > 1700){
        thi.style.animationPlayState = 'running';
      } if (scrollPos > 2000){
        four.style.animationPlayState = 'running';
      } if (scrollPos > 2200){
        fif.style.animationPlayState = 'running';
      } if (scrollPos > 2400){
        projectH1.style.animationPlayState = 'running';
        projectTl.style.animationPlayState = 'running';
      } if (scrollPos > 2700){
        here.style.animationPlayState = 'running';
        here_in.style.animationPlayState = 'running';
      } if (scrollPos > 3400){
        rescent.style.animationPlayState = 'running';
        rescent_in.style.animationPlayState = 'running';
      } if (scrollPos > 4100){
        whole.style.animationPlayState = 'running';
        whole_in.style.animationPlayState = 'running';
      }
    });

} else if(matchMedia('sreen and(max-width:1600px)'.matches)){
  window.addEventListener('scroll', function () {
    let scrollPos = docElim.scrollTop;

        navOff = resumeHw.getBoundingClientRect();      
        navTop = window.pageYOffset + navOff.top;
        

        intOff = introSub.getBoundingClientRect();
        intTop = window.pageYOffset + intOff.top;

        firOff = fir.getBoundingClientRect();
        firTop = window.pageYOffset + firOff.top;
      

        secOff = sec.getBoundingClientRect();
        secTop = window.pageYOffset + secOff.top;
        
        thirOff = thi.getBoundingClientRect();
        thiTop = window.pageYOffset + thirOff.top;

     
        fourOff = four.getBoundingClientRect();
        fourTop = window.pageYOffset + fourOff.top;

        
        fifthOff = fif.getBoundingClientRect();
        fifthTop = window.pageYOffset + fifthOff.top;

     
        proOff = projectH1.getBoundingClientRect();
        proTop = window.pageYOffset + proOff.top;

        hereOff = here.getBoundingClientRect();
        hereTop = window.pageYOffset + hereOff.top;

        rescentOff = rescent.getBoundingClientRect();
        rescentTop = window.pageYOffset + rescentOff.top;

        wholeOff = whole.getBoundingClientRect();
        wholeTop = window.pageYOffset + wholeOff.top;

        

     if(scrollPos > 0){
      nav.style.top = '0';
    } else if(scrollPos == 0){
      nav.style.top = '-10%';
    } if (scrollPos > navTop - 400) { 
       resumeHw.style.animationPlayState = 'running';
       for ( x = 0; x < listDate.length; x++){
       listDate[x].style.animationPlayState = 'running';
       }
      } else if(scrollPos < navTop){
        function riseRatio(idx){
            var num = 0;
            var dateAt = listDate[idx].getAttribute('data-rate');
            var timer = setInterval(function(){
                ++num;
                listDate[idx].innerText = num;
                if(num == dateAt){
                    clearInterval(timer);
                }
            }, 40);
        }
        for ( i = 0; i < listDate.length; i++) {
            riseRatio(i);    
        }
      } if (scrollPos > intTop - 400){
        introSub.style.animationPlayState = 'running';
        introH1.style.animationPlayState = 'running';
      } if (scrollPos > firTop - 400){
        fir.style.animationPlayState = 'running';
      } if (scrollPos > secTop - 400){
        sec.style.animationPlayState = 'running';
      } if (scrollPos > thiTop - 400){
        thi.style.animationPlayState = 'running';
      } if (scrollPos > fourTop - 400){
        four.style.animationPlayState = 'running';
      } if (scrollPos > fifthTop - 400){
        fif.style.animationPlayState = 'running';
      } if (scrollPos > proTop - 400){
        projectH1.style.animationPlayState = 'running';
        projectTl.style.animationPlayState = 'running';
      } if (scrollPos > hereTop - 400){
        here.style.animationPlayState = 'running';
        here_in.style.animationPlayState = 'running';
      } if (scrollPos > rescentTop - 400){
        rescent.style.animationPlayState = 'running';
        rescent_in.style.animationPlayState = 'running';
      } if (scrollPos > wholeTop - 400){
        whole.style.animationPlayState = 'running';
        whole_in.style.animationPlayState = 'running';
      }
    });

}

   




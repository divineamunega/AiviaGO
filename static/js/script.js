const nav = document.querySelector("nav");
document.addEventListener("scroll", function () {
  // console.log(window.scrollY)
  if (window.scrollY > 174) {
    nav.style.backgroundColor = "rgba(0,0,0,0.89)";
    nav.style.width = "100%";
    // nav.style.backdropFilter = "blur(10px)";
    nav.style.height = "fit-content";
  } else {
    nav.style.width = "90%";
    nav.style.height = "13vh";
    // nav.style.backdropFilter = "blur(0)";
    nav.style.backgroundColor = "rgba(0,0,0,0)";
  }
});


// count animation
  const myNum = document.querySelectorAll('.counter')
  // console.log(myNum.innerText)
  const stats = document.querySelector('.stats')  
  console.log(stats.offsetTop)

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  
  myNum.forEach( (myCount) => {
    
    
    let speed = myCount.dataset.speed;
      let target_count = myCount.dataset.count;
      let init_count = +myCount.innerText;
      // console.log(target_count)
      
      let new_increment_num = Math.floor(target_count / speed);
      let value = 0;
      const updateNumber = () => {
        init_count +=  new_increment_num;
        myCount.innerText = init_count;
        
        if(init_count < target_count){
          setTimeout(() => {updateNumber()}, 5)
        }
        value++;
      }
      window.addEventListener('scroll',function(){
              if (isInViewport(stats) && value === 0) {
                updateNumber();
              }
      })
    })
    
    // console.log(stats.isInViewport())
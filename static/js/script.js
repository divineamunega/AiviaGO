const nav = document.querySelector('nav')
document.addEventListener('scroll',function(){
    console.log(window.scrollY)
    if(window.scrollY > 174){
        nav.style.backgroundColor = 'rgba(0,0,0,0.8)' 
        nav.style.width = '100%' 
    }else{
        nav.style.backgroundColor = 'rgba(0,0,0,0)' 
    }
})


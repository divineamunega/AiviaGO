const nav = document.querySelector('nav')
document.addEventListener('scroll',function(){
    console.log(window.scrollY)
    if(window.scrollY > 174){
        nav.style.backgroundColor = 'rgba(0,0,0,0.8)' 
        nav.style.width = '100%' 
        nav.style.backdropFilter = 'blur(10px)'
        nav.style.height = 'fit-content'
    }else{
        nav.style.width = '90%' 
        nav.style.height = '13vh'
        nav.style.backdropFilter = 'blur(0)'
        nav.style.backgroundColor = 'rgba(0,0,0,0)' 
    }
})


//scrollpath
let progress = document.getElementById('progressbar')
let totalHeight = document.body.scrollHeight - window.innerHeight

window.onscroll = () => {
  let progressHeight = (window.pageYOffset/totalHeight)*100
  progress.style.height = progressHeight+'%'
}


// Parallax on mouse move
if(window.outerWidth > 480){
  const mmParallax = (element, xDistance, yDistance, speed) => {
    let x = (window.innerWidth - xDistance*speed)/100
    let y = (window.innerHeight - yDistance*speed)/100
    
    element.style.transform = `translate(${-x}px,${y}px)`
  
  }
  document.addEventListener('mousemove', e => {
    document.querySelectorAll('.letter').forEach(letter => {
      const speed = letter.getAttribute('data-speed')
      
      mmParallax(letter, e.pageX, e.pageY, speed)    
    })
  })
}


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.style.opacity = '1'
    }
  })
}, {
  root: null,
  threshold: 0.3
})

observer.observe(document.querySelector('main'))
observer.observe(document.querySelector('.about-me-page'))
observer.observe(document.querySelector('.my-stack'))
observer.observe(document.querySelector('.my-projects-page .title'))
observer.observe(document.querySelector('.my-projects-page > p'))
document.querySelectorAll('.project').forEach((project) => {
  observer.observe(project)
})
observer.observe(document.querySelector('.work-page'))
observer.observe(document.querySelector('.contact-page'))
observer.observe(document.querySelector('footer'))


const sidebarIndicators = Array.from(document.querySelectorAll('.sidebar ul li'))

sidebarIndicators.forEach((item) => {
    const indicator = item.lastElementChild
    const p = item.firstElementChild
    const indicatorHref = indicator.attributes[0].nodeValue.substr(1)
    
    indicator.addEventListener('mouseover', ()=> {
        item.classList.add('sidebar-indicator-active')
    })

    indicator.addEventListener('mouseout', ()=> {
        item.classList.remove('sidebar-indicator-active')
    })

    //console.log(indicatorHref)
    
})

document.body.addEventListener('scroll', () => {
        const countdownTop = document.querySelector('.content-container').offsetTop - 100
        const windowTop = document.body.scrollTop
        const logo = document.querySelector('.trailhead-logo')

        if(windowTop > countdownTop) {
            logo.style.transform = 'translateY(-100px)'
            logo.style.transition = '.6s'
        } else {
            logo.style.transform = 'translateY(0)'
        }


        const isInViewport = (element) => {
            const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
        }
        
        const sections = Array.from(document.querySelectorAll('.scroll-section'))

        sections.forEach((item) => {
            if(isInViewport(item) || windowTop === item.offsetTop) {
                sidebarIndicators.forEach((sidebarItem) => {
                    if(item.id === sidebarItem.lastElementChild.attributes[0].nodeValue.slice(1)) {
                        sidebarItem.classList.add('sidebar-indicator-active')
                        setTimeout(()=>{
                            sidebarItem.classList.remove('sidebar-indicator-active')
                        }, 2000)
                    } else {
                        sidebarItem.classList.remove('sidebar-indicator-active')
                    }
                })
            }
        })
})

const countdown = () => {
    const daysText = document.querySelector('#days')
    const hoursText = document.querySelector('#hours')
    const minutesText = document.querySelector('#minutes')
    const secondsText = document.querySelector('#seconds')

    // Set the date we're counting down to
    const countDownDate = new Date("Apr 12, 2022 00:00:00").getTime();

    // Update the count down every 1 second
    const x = setInterval(() => {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the countdown HTML
    daysText.textContent = days
    hoursText.textContent = hours
    minutesText.textContent = minutes
    secondsText.textContent = seconds
    }, 1000);
}

countdown()

const date = new Date()
document.querySelector('#copyright-date').textContent = date.getFullYear()
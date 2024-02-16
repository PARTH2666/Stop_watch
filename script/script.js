let h=0,m=0,s=0,c = 0,timeout


let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')
let seconds = document.querySelector('.seconds')
let count = document.querySelector('.ms')
let start_btn = document.querySelector('.start')
let stop_btn = document.querySelector('.stop')
let restart_btn = document.querySelector('.restart')
let unit = document.querySelector('.unit')

start_btn.addEventListener('click',onstart)
stop_btn.addEventListener('click',onstop)
restart_btn.addEventListener('click',onrestart)

let time_status = false

//handle the start btn and calls time function
function onstart(){
    time_status = true
     time()
     start_btn.disabled = true
     start_btn.style.cursor= "not-allowed"
}
//handle the stop btn using clearTimeout()
function onstop(){
    console.log("stpop");
   clearTimeout(timeout)
   start_btn.disabled = false
   start_btn.style.cursor= "pointer"
}

//handle the restart btn for restart the watch
function onrestart(){
    h =0,m=0,s=0,c=0
    count.textContent = "00"
    seconds.textContent = "00"
    minutes.textContent = "00"
    hours.textContent = "00"
    start_btn.disabled = false
   start_btn.style.cursor= "pointer"
   clearTimeout(timeout)

}

//handles allover changes and display them in screen
function time(){
  if(time_status){
    c++
    count.textContent = c
    if(c == 100){
        c=0
        s++
        seconds.textContent = s

        if(s == 60){
            s=0
            m++
            minutes.textContent = m
            unit.textContent = "M"
            if(m ==60){
                m=0
                h++
                hours.textContent = h
                unit.textContent = "H"
            }
        }
    }
  }
   
  timeout = setTimeout(time,10)
}
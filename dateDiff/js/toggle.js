export default function toggle () {
    const form = document.getElementById('datecalc');
    const timer = document.getElementById('timerEvent');
    const calcBtn = document.getElementById('calcbtn')
    let flag = false;
    calcBtn.addEventListener('click', ()=> {
        if(flag){
          form.style.display = "block";
          timer.style.display = "none";
        }else{
          form.style.display = "none";
          timer.style.display = "block";
        }
        return flag=!flag;
      });
}

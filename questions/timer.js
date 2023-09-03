function parseQueryString(strQuery){
    let i,
        tmp     = [],
        tmp2    = [],
        objRes   = {};
    if (strQuery != '') {
        tmp = (strQuery.substr(1)).split('&');
        for (i = 0; i < tmp.length; i += 1) {
            tmp2 = tmp[i].split('=');
            if (tmp2[0]) {
                objRes[tmp2[0]] = tmp2[1];
            }
        }
    }
    return objRes;
}
let timer = document.getElementById("timer")
let timerId = setInterval(()=>{
    timer.innerHTML -=1
    if (timer.innerHTML == 0){
        clearInterval(timerId)
        timer.innerHTML = "Время вышло!"
    }

    }, 1000)
function on(){
    let add = "?"
    let query = parseQueryString(window.location.search)
    for(let i = 1; i <= 4; i++){
        let t = "t"+i
        let yes = document.getElementsByName(t)[0]
        let no = document.getElementsByName(t)[0]
        if (yes.checked){
            add+=t+"="+((query[t]-0)+(document.title-0))+"&"
        }else{
            add+=t+"="+query[t]+"&"
        }
    }
    add = add.substring(0, add.length-1)
    document.location.href="../index.html"+add
}

function answer() {
document.getElementById('Tanswer').style.color = "white";
}
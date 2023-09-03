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

let queryStr = parseQueryString(window.location.search),
    t1=queryStr['t1'],
    t2=queryStr['t2'],
    t3=queryStr['t3'],
    t4=queryStr['t4']
if (t1 === undefined){
    t1 = 0
}
if (t2 === undefined){
    t2 = 0
}
if (t3 === undefined){
    t3 = 0
}
if (t4 === undefined){
    t4 = 0
}
document.getElementById('t1').innerHTML=t1
document.getElementById('t2').innerHTML=t2
document.getElementById('t3').innerHTML=t3
document.getElementById('t4').innerHTML=t4
document.querySelectorAll('a').forEach(i => i.href+=("?t1="+t1+"&t2="+t2+"&t3="+t3+"&t4"+"="+t4))


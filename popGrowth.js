const nbYear = (p0,percent,aug,ps) =>{
    let nb = 0; 
    let calcps =p0;
    while(calcps< ps){
        
        calcps = calcps*(1+percent/100) + aug;
        nb++;

    }
    return console.log(nb);
}
nbYear(1000, 2, 50, 1200)

nbYear(1500000, 2.5, 10000, 2000000) 
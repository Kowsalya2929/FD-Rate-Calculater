function fdRate(){
    let months=Number(document.getElementById("input").value);
    
    //else if ladder
    let rate=5.8;
    if(months<3)
        rate=5.8
    else if(months>=3 && months<=6)
        rate=6.5
    else if(months>=7 && months<=9)
        rate=6.8
    else
        rate=7
    console.log(months);

    let result=document.querySelector("#result");
    result.innerHTML=`Your interest rate is ${rate} %`;
}
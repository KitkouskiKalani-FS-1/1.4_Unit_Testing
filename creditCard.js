const creditCard = (cardNum) => {
cardNum = String(cardNum);
obscuredNum = "";
if(cardNum.length<12||cardNum.length>16){
    return("Invalid Credit Card")
}
for(let i = 0; i < cardNum.length; i++){
    if(!(i>cardNum.length-5)){
        obscuredNum+="X"
    }
    else{
        obscuredNum+=cardNum[i]
    }
}
return obscuredNum;
}

module.exports = creditCard;
let prices = [7,1,3,4,5,0,1]

function bestTimeToSell(){
    let min=prices[0]
    let maxVal=0
    for(i=1;i<prices.length;i++){
        if(prices[i]-min>maxVal){
            maxVal = prices[i]-min
        }
        if(min>prices[i]){
            min=prices[i]
        }
    }
    return maxVal
}

console.log(bestTimeToSell());




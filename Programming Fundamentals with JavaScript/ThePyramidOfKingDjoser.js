function pyramid(baseSize, increment){
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;

    let hieght = 0;
    let floor = 1;

    for(let curSize = baseSize; curSize > 0; curSize -= 2){
        hieght += increment;
        let totalArea = curSize ** 2;
        
        if(curSize <= 2){
            gold =  totalArea * increment;
        }else {
           let stoneArea = (curSize - 2) ** 2;
        stone += stoneArea * increment;
        if(floor % 5 === 0){
            let lapisArea =  totalArea - stoneArea;
        lapisLazuli += lapisArea* increment;
        }else {
            let marbleArea =  totalArea - stoneArea;
        marble += marbleArea * increment;
        }

        
 
        }
        floor ++;

        

        
    }

console.log("Stone required: " + Math.ceil(stone))
console.log("Marble required: " + Math.ceil(marble))
console.log("Lapis Lazuli required: " + Math.ceil(lapisLazuli))
console.log("Gold required: " + Math.ceil(gold))
console.log("Final pyramid height: " +Math.floor(hieght))

}

pyramid(11,

    1)
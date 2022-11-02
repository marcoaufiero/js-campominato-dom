
const grid = document.getElementById('grid');
console.log(grid);

function squareGenerator(){
    const div = document.createElement('div');
    div.classList.add('square');
    return div;
}

let bombList = [];

function bombGenerator(x){
    for(k = 0; k < 16; k++){
    let bomb = Math.floor(Math.random()* x + 1);
    if (!bombList.includes(bomb)) {
        // ✅ only runs if value not in array
        bombList.push(bomb);
   }else{
        k--;
   }
}
}

function play(){

let difficultyLevel = parseInt(document.getElementById('difficulty').value);

console.log(difficultyLevel);

if(difficultyLevel === 1){

    grid.innerHTML = '';
    bombList = [];
    bombGenerator(100);
    console.log(bombList);

    for(let i = 0; i < 100; i++){

        let activeSquare = squareGenerator();
        


        activeSquare.classList.add('squareEasy');
        activeSquare.innerText = i + 1;
    
        activeSquare.addEventListener('click', function(){
            this.classList.add('active');
            
            console.log(`Quadrato numero: ${activeSquare.innerText}`)
        })

        grid.append( activeSquare);
    
    }

}else if(difficultyLevel === 2){
    
    grid.innerHTML = '';
    bombList = [];
    bombGenerator(81);
    console.log(bombList);

    for(let i = 0; i < 81; i++){

        let activeSquare = squareGenerator();

        activeSquare.classList.add('squareMedium');

        activeSquare.innerText = i + 1;
    
        activeSquare.addEventListener('click', function(){
            this.classList.add('active');
            console.log(`Quadrato numero: ${activeSquare.innerText}`)
        })
    


        grid.append( activeSquare);
    
    }
    
}else{

    grid.innerHTML = '';
    bombList = [];
    bombGenerator(49);
    console.log(bombList);

    for(let i = 0; i < 49; i++){

        let activeSquare = squareGenerator();

        activeSquare.classList.add('squareHard');

        activeSquare.innerText = i + 1;
    
        activeSquare.addEventListener('click', function(){
            this.classList.add('active');
            console.log(`Quadrato numero: ${activeSquare.innerText}`)
        })
        
    
        

        grid.append( activeSquare);
    
    }
}


}
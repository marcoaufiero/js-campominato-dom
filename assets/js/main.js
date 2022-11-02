
const grid = document.getElementById('grid');
console.log(grid);

function squareGenerator(){
    const div = document.createElement('div');
    div.classList.add('square');
    return div;
}


function play(){

let difficultyLevel = parseInt(document.getElementById('difficulty').value);

console.log(difficultyLevel);

if(difficultyLevel === 1){

    grid.innerHTML = '';

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
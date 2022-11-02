
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
    let bomb = parseInt(Math.floor(Math.random()* x + 1));
    if (!bombList.includes(bomb)){
        bombList.push(bomb);
   }else{
        k--;
   }   
}
    return bombList;
}



function play(){

document.getElementById('score').innerText = `Score: 0`
let score = 0;
document.getElementById('result').innerText = ''
let difficultyLevel = parseInt(document.getElementById('difficulty').value);

console.log(difficultyLevel);

if(difficultyLevel === 1){

    grid.innerHTML = '';
    bombList = [];
    bombGenerator(100);
    console.log(bombList);
    
    for(let i = 0; i < 100; i++){

        let square = squareGenerator();
        
        square.classList.add('squareEasy');
        square.innerText = i + 1;
        
        grid.append( square);
    
    }

}else if(difficultyLevel === 2){
    
    grid.innerHTML = '';
    bombList = [];
    bombGenerator(81);
    console.log(bombList);

    for(let i = 0; i < 81; i++){

        let square = squareGenerator();

        square.classList.add('squareMedium');
        square.innerText = i + 1;
    
        grid.append( square);
    
    }
    
}else{

    grid.innerHTML = '';
    bombList = [];
    bombGenerator(49);
    console.log(bombList);

    for(let i = 0; i < 49; i++){

        let square = squareGenerator();

        square.classList.add('squareHard');
        square.innerText = i + 1;
        
        grid.append( square);
    
    }
}

let squares = document.querySelectorAll('.square');


for(let i = 0; i < squares.length; i++){
    
    let activeSquare = squares[i]
    activeSquare.addEventListener('click', function(){
          
        if(bombList.includes(parseInt(activeSquare.innerText))){
            
            for(let y = 0; y < squares.length; y++){

                if(bombList.includes(parseInt(squares[y].innerText))){
                  squares[y].classList.add('red')
                }

            }

            document.getElementById('result').innerText = `Hai Perso`

        }else{
            this.classList.add('active');
            score = score + 1;
            document.getElementById('score').innerText = `Score: ${score}`
        }
        console.log(`Quadrato numero: ${activeSquare.innerText}`)
    })
}

}


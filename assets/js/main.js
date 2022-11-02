
const grid = document.getElementById('grid');
console.log(grid);

function squareGenerator(){
    const div = document.createElement('div');
    div.classList.add('square');
    return div;
}

function play(){

    grid.innerHTML = '';

    for(let i = 0; i < 100; i++){

        let activeSquare = squareGenerator();

        activeSquare.innerText = i + 1;
    
        activeSquare.addEventListener('click', function(){
            this.classList.add('active');
            console.log(`Quadrato numero: ${activeSquare.innerText}`)
        })
    


        grid.append( activeSquare);
    
    }
}



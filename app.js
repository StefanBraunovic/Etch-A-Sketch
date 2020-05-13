const container = document.querySelector('.container')

function makeGrid(cols, rows){
    container.style.setProperty('--grid-cols',cols);
    container.style.setProperty('--grid-rows',rows);
    for(i= 0; i<= (cols * rows); i++){
        const pixel = document.createElement('div');
        container.appendChild(pixel).classList.add('gridPixel');
       
    }}
    makeGrid(16,16)



   
    

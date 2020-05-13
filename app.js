let container = document.querySelector('.container')
const black = document.querySelector("#black");




function makeGrid(cols, rows){
    container.style.setProperty('--grid-cols',cols);
    container.style.setProperty('--grid-rows',rows);
    for(i= 0; i<= (cols * rows); i++){
        const pixel = document.createElement('div');
        container.appendChild(pixel).classList.add('gridPixel');
         }
        }

        function blackColor() {
            let cells = document.querySelectorAll('.gridPixel');
            
            cells.forEach(div => {

                div.addEventListener("mouseover", () => {
                    event.target.style.backgroundColor = "black";
                });
            });
            
        }
        
         
        black.addEventListener("click", blackColor)        
        
 makeGrid(16,16)







   
    

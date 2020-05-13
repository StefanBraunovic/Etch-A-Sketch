const container = document.querySelector('.container')
const black = document.querySelector("#black");
const reset = document.getElementById('reset')
const size = document.getElementById('size')
const rnb = document.getElementById('rnb')



function makeGrid(cols, rows){
    container.style.setProperty('--grid-cols',cols);
    container.style.setProperty('--grid-rows',rows);
    for(i= 0; i<= (cols * rows); i++){
        const pixel = document.createElement('div');
        container.appendChild(pixel).classList.add('gridPixel');
         }
        }
        makeGrid(16,16)

        function blackColor() {
            let cells = document.querySelectorAll('.gridPixel');
            
            cells.forEach(div => {

                div.addEventListener("mouseover", (e) => {
                    e.target.style.backgroundColor = "black";
                });
            });
            }

            function rnbColor(){
                let cells = document.querySelectorAll('.gridPixel');
            
            cells.forEach(div => {

                div.addEventListener("mouseover", (e) => {
                    e.target.style.backgroundColor = '#'+Math.random().toString(16).substr(-6);;
                });
            });
            }

    function grdiSize(){
             var x = parseFloat(prompt("Enter a Value", "0"));
            var y = parseFloat(prompt("Enter a Value", "0"));
        if(x&&y<=64){
            makeGrid(x,y)
        }else{
            alert("It's too big, Aaaah")
        }
     }
    function refresh(){
        location.reload();
return false;
    }


rnb.addEventListener("click",rnbColor);       
reset.addEventListener("click",refresh);        
black.addEventListener("click", blackColor)
size.addEventListener("click",grdiSize);         
        
 







   
    

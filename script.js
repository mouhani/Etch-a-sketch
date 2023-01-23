const container= document.querySelector('.container');


for (i=0;i<16;i++){ 
    const line=document.createElement('div');
    line.classList.add("line")
line.style.display='flex'
    container.appendChild(line);

const lines=document.querySelectorAll('.line');

for (index=0;index<16;index++){ 
    const square=document.createElement('div');
    square.classList.add('square');
    square.style.height="20px";
    square.style.width="20px";
    square.style.flex="1";
    lines[i].appendChild(square);
}
}
const squares=document.querySelectorAll(".square")
squares.forEach((square)=>{


  
    square.addEventListener('mouseover', function (e) {
       console.log(e) 
        e.target.style.background = 'blue';
      });
  });
  const button=document.querySelector(".btn")
  button.addEventListener('click',function(e){
    let a =prompt("how many squares per side ?");
    container.replaceChildren();
    for (i=0;i<a;i++){ 
        
        const line=document.createElement('div');
        line.classList.add("line")
        line.style.display='flex'
        container.appendChild(line);
    
    
    const lines=document.querySelectorAll('.line');
    
    for (index=0;index<a;index++){ 
        const square=document.createElement('div');
        square.classList.add('square');
        square.style.height="20px";
        square.style.width="20px";
        square.style.flex="1";
        lines[i].appendChild(square);
    }
    }
    const squares=document.querySelectorAll(".square")
squares.forEach((square)=>{


  
    square.addEventListener('mouseover', function (e) {
        e.target.style.background = 'blue';
      });
  });
    
      });
  
     


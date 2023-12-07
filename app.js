let b1 = document.querySelector("#b11");
let b2 = document.querySelector("#b12");
let b3 = document.querySelector("#b13");
let b4 = document.querySelector("#b21");
let b5 = document.querySelector("#b22");
let b6 = document.querySelector("#b23");
let b7 = document.querySelector("#b31");
let b8 = document.querySelector("#b32");
let b9 = document.querySelector("#b33");
let info = document.querySelector(".info");
let c=0;
let game_over = false;
let A = [[0,0,0],[0,0,0],[0,0,0]];
b1.addEventListener("click",()=>{
    if(A[0][0] == 0 && !(game_over))
    {
        if(c%2==0)
        {
            b1.innerHTML = 'X';
            A[0][0] = 1;
        }
        else
        {
            b1.innerHTML='O';
            A[0][0] = -1;
        }
        c++;
        check();
    }
});
b2.addEventListener("click",()=>{
    if(A[0][1] == 0 && !(game_over))
    {
        if(c%2==0)
        {
            b2.innerHTML="X";
            A[0][1] = 1;
        }
        else
        {
            b2.innerHTML='O';
            A[0][1] = -1;
        }
        c++;
        check();
    }
    
});
b3.addEventListener("click",()=>{
    if(A[0][2] == 0 && !(game_over))
    {
        if(c%2==0)
        {
            b3.innerHTML="X";
            A[0][2] = 1;
        }
        else
        {
            b3.innerHTML='O';
            A[0][2] = -1;
        }
        c++;
        check();
    }
});
b4.addEventListener("click",()=>{
    if(A[1][0] == 0 && !(game_over))
    {
        if(c%2==0)
        {
            b4.innerHTML="X";
            A[1][0] = 1;
        }
        else
        {
            b4.innerHTML='O';
            A[1][0] = -1;
        }
        c++;
        check();
    }
});
b5.addEventListener("click",()=>{
    if(A[1][1] == 0 && !(game_over))
    {
        if(c%2==0)
        {
            b5.innerHTML="X";
            A[1][1] = 1;
        }
        else
        {
            b5.innerHTML='O';
            A[1][1] = -1;
        }
        c++;
        check();
    }
});
b6.addEventListener("click",()=>{
    if(A[1][2] == 0 && !(game_over))
    {
        if(c%2==0)
        {
            b6.innerHTML="X";
            A[1][2] = 1;
        }
        else
        {
            b6.innerHTML='O';
            A[1][2] = -1;
        }
        c++;
        check();
    }
});
b7.addEventListener("click",()=>{
    if(A[2][0] == 0 && !(game_over))
    {
        if(c%2==0)
        {
            b7.innerHTML="X";
            A[2][0] = 1;
        }
        else
        {
            b7.innerHTML='O';
            A[2][0] = -1;
        }
        c++;
        check();
    }
});
b8.addEventListener("click",()=>{
    if(A[2][1] == 0 && !(game_over))
    {
        if(c%2==0)
        {
            b8.innerHTML="X";
            A[2][1] = 1;
        }
        else
        {
            b8.innerHTML='O';
            A[2][1] = -1;
        }
        c++;
        check();
    }
});
b9.addEventListener("click",()=>{
    if(A[2][2] == 0 && !(game_over))
    {
        if(c%2==0)
        {
            b9.innerHTML="X";
            A[2][2] = 1;
        }
        else
        {
            b9.innerHTML='O';
            A[2][2] = -1;
        }
        c++;
        check();
    }
});

function check()
{
    let i,j;
    for(i=0;i<3;i++)
    {
        if( A[i][0]!=0 && A[i][0] == A[i][1] && A[i][0]==A[i][2])
        {
            game_over = true;
            win(A[i][0]);
            end(`#b${i+1}1`,`#b${i+1}2`,`#b${i+1}3`);
            return;
        }
    }
    for(i=0;i<3;i++)
    {
        if(A[0][i]!=0 && A[0][i] == A[1][i] && A[0][i]==A[2][i])
        {
            game_over = true;
            win(A[0][i]);
            end(`#b1${i+1}`,`#b2${i+1}`,`#b3${i+1}`);
            return;
        }
    }
    if(A[0][0]!=0 && A[0][0] == A[1][1] && A[1][1] == A[2][2])
    {
        game_over = true;
        win(A[0][0]);
        end(`#b11`,`#b22`,`#b33`);
        return;
    }
    if(A[2][0]!=0 && A[0][2] == A[1][1] && A[1][1] == A[2][0])
    {
        game_over = true;
        win(A[2][0]);
        end(`#b13`,'#b22','#b31');
        return;
    }
    //checking if all boxes are full
    if(c==9)
    {
        game_over=true;
        win(0);
    }
}

function end(a,b,c)
{
    let g1 = document.querySelector(a);
    let g2 = document.querySelector(b);
    let g3 = document.querySelector(c);
    g1.classList.add("glow");
    g2.classList.add("glow");
    g3.classList.add("glow");
}

function win(a)
{
    if(a==1)
        info.innerHTML = "X WINS !!!";
    else if(a==-1)
        info.innerHTML = "O WINS !!!";
    else 
    info.innerHTML = "CAT'S GAME !!!";
}
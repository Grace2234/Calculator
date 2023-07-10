

function multiplyBy()
{
        const num1 = document.getElementById("firstNumber").value;
        const num2 = document.getElementById("secondNumber").value;
         document.getElementById("result").innerHTML = num1 * num2;
         
}

const btn = document.getElementById('btn');
btn.addEventListener('click', multiplyBy)

function divideBy()
{
  const  num1 = document.getElementById("firstNumber").value;
  const  num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 / num2;
}

const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', divideBy)

function subtractBy()
{
  const  num1 = document.getElementById("firstNumber").value;
  const  num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = Number(num1)-Number(num2);
}

const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', subtractBy)

function addBy()
{
  const  num1 = document.getElementById("firstNumber").value;
  const  num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = Number(num1)+Number(num2);
}

const btn4 = document.getElementById('btn4');
btn4.addEventListener('click', addBy)




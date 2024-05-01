let x = document.getElementById("entry");
let y = document.getElementById("demo");

function clickMe(){
    if(x.value === ''){
        alert("You must have to write something");
    }else{
        let li = document.createElement("li")
        li.innerHTML = `<div>${x.value}</div>`;
        let span = document.createElement("div")
        span.classList.add('remove-icon')
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        y.appendChild(li);
        console.log(li)
    }
    document.getElementById("demo").style.display = "block";
    x.value = '';
}

y.addEventListener('click', function (z){
    z.target.parentElement.remove();
}, false);

// function clickMe(){
//     let x = document.getElementById("entry").value;
//     document.getElementById("demo").innerHTML = x;
//     document.getElementById("demo").style.display = "block";
// }
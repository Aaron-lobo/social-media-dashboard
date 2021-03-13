const colSwitch = document.getElementById("btn");

colSwitch.addEventListener("change", toggleTheme);


function toggleTheme(){
    if(colSwitch.checked)
    {
        document.body.classList.add("light")
        
    }
    else{
        document.body.classList.remove("light")
    }
    
}
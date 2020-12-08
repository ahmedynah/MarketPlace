

let bool = false;


function print (){
    bool = Auth.getAuthStatus();
    if(bool){
        let d = document.querySelector("div.dropdown-menu.dropdown-menu-right");
        d.innerHTML = `<a class="dropdown-item" href="">Profile</a>
                        <a class="dropdown-item" href="#">Settings</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Log out</a>`
    }
    else{

        let d = document.querySelector("div.dropdown-menu.dropdown-menu-right");
        d.innerHTML = `<a class="dropdown-item" href="pages/register.html">Sign Up</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="pages/login.html">Sign In</a>`
    }
    

}

document.addEventListener("DOMContentLoaded", print);


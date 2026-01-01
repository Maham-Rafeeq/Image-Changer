let img = document.getElementById("image");
let btn = document.getElementById("btn");

let ison = false;
function clickme() {
    if (ison === false) {
        ison = true;
        btn.innerText = "Again";
         img.src ="./Images/img1.jpeg";

    }
    else{
        ison = false;
      img.src = "./Images/img2.jpg";
      btn.innerText ="click";
    }

}

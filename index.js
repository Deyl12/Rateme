var button = document.querySelectorAll(".num");
var hiddenContent = document.getElementById("end");
var isClickable = false;
var rating;

for (let index = 0; index < button.length; index++) {
    button[index].addEventListener("click", function(){
        for (let index = 0; index < button.length; index++){
            button[index].setAttribute("class", "num");
        }
        this.setAttribute("class", "num-select");
        isClickable = true;
        rating = this.textContent;
    });
}

document.querySelector("#start .submit").addEventListener("click", function(){
    if (isClickable) {
        document.getElementById("start").hidden = true;
        hiddenContent.hidden = false;
        hiddenContent.children[1].textContent = "You selected " + rating + " out of 5";
    }
});
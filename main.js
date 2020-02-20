//When a user hovers over any one of the boxes, highlight all the boxes with a different background color
var boxes = document.querySelectorAll("#boxes div");

function highlight()
{
    for (i = 0; i < boxes.length; i++) {
        boxes[i].setAttribute("style", "background-color:orange;")
    }
};

function unhighlight()
{  
    for (i = 0; i < boxes.length; i++) {
        boxes[i].setAttribute("style", "background-color:none;")
    }
};

for (i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("mouseover", highlight, false);
    boxes[i].addEventListener("mouseout", unhighlight, false);
}

//When a user clicks on box #1, When a user clicks on box #1, have a message appear somewhere on the page that says “Oooh - so close, but no cigar.” by appending a new DOM node
document.getElementById("box-one").addEventListener("click", function (){
    document.getElementById("text").innerText = "Oooh - so close, but no cigar.";
});

//When a user clicks on box #2, have a message appear somewhere on the page that says “DING DING DING - We have a winner” by appending a new DOM node
document.getElementById("box-two").addEventListener("click", function (){
    document.getElementById("text").innerText = "DING DING DING - We have a winner!";
});

//When a user clicks on box #3, have a message appear somewhere on the page that says “Oops, butter luck next time” by appending a new DOM node
document.getElementById("box-three").addEventListener("click", function (){
    document.getElementById("text").innerText = "Oops, better luck next time!";
});

//When any one of the three boxes are clicked, have a button that says “Start Over” with an href of “#” appear somewhere on the page by removing a hidden class
var startOver = document.querySelectorAll("#boxes div");
var link = document.getElementsByClassName('link');

function toggleStartOver() {
    for (i = 0; i < link.length; i++) {
        link[i].classList.add('show');
    }
}

for (i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', toggleStartOver);
}
var plusButton = Array.from(document.getElementsByClassName("fa-plus-circle"));
var minusButton = Array.from(document.getElementsByClassName("fa-minus-circle"));
var heart = Array.from(document.getElementsByClassName('fa-heart'));
var trash = Array.from(document.getElementsByClassName('fa-trash-alt'));


function total() {
    var price = Array.from(document.getElementsByClassName('unit-price'));
    var quantite = Array.from(document.getElementsByClassName('quantity'));
    var q = quantite.map(el => parseInt(el.textContent));;
    var p = price.map(el => parseInt(el.textContent));;
    console.log(q)
    console.log(p)

    res = 0;

    for (i = 0; i < q.length; i++) {
        res = res + (p[i] * q[i]);
    }

    document.querySelector(".total").innerHTML = res + "$";
}


for (let i = 0; i < minusButton.length; i++) {


    plusButton[i].addEventListener('click', function () {
        plusButton[i].nextElementSibling.innerHTML++;
        total();
    });

    minusButton[i].addEventListener('click', function () {
        if (minusButton[i].previousElementSibling.innerHTML > 0) {
            minusButton[i].previousElementSibling.innerHTML--;
            total();

        }


    });


    heart[i].addEventListener('click', function () {
        if (heart[i].style.color == "black") {

            heart[i].style.color = "red";
        }
        else {
            heart[i].style.color = "black";
        }

    });

    trash[i].addEventListener('click', function () {
        trash[i].parentNode.parentNode.parentNode.remove();
        
        total();
    })

}

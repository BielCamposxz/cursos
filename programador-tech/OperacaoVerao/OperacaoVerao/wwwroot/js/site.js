
$('.close-alert').click(function () {
    $('.alert').hide("hide")
});



const select = document.querySelector(".form-select");
const adicionarId = document.querySelector(".AddId");

select.addEventListener("input", function () {
    select.addEventListener("change", function () {
        if (select.value === "Segunda") {
            adicionarId.value = 1;
        } else if (select.value === "Terca") {
            adicionarId.value = 2;
        } else if (select.value === "Quarta") {
            adicionarId.value = 3;
        } else if (select.value === "Quinta") {
            adicionarId.value = 4;
        } else if (select.value === "Sexta") {
            adicionarId.value = 5;
        } else if (select.value === "Sabado") {
            adicionarId.value = 6;
        } else {
            adicionarId.value = 7;
        }
    });

});

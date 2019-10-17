$(document).ready(function reset() {
    var num1 = ""
    var oper = ""
    var num2 = ""

$(".calculator").on("click", "button", function(e) {
    var val = $(this).html()

    if (val === "=") {
        if (oper === "+") {
            $("#results").html(Number(num1) + Number(num2))
            val = $("#results")
        } else if (oper === "-") {
            $("#results").html(Number(num1) - Number(num2))
        } else if (oper === "*") {
            $("#results").html(Number(num1) * Number(num2))
        } else if (oper === "/") {
            $("#results").html(Number(num1) / Number(num2))
        } 
    } else if (val === "*" || val === "+" || val === "/" || val === "-") {
        oper == val
    } else if (val === "C") {
        num1 = ""
        num2 = ""
        oper = ""
        reset()
        $("#results").html("")
    } else{
        if (oper === "") {
            num1 += val
            $("#results").html(num1)
        } else {
            num2 += val
            $("#results").html(num2)
        }
    }
    console.log("num1" + num1)
    console.log("oper" + oper)
    console.log("num2" + num2)
})
})

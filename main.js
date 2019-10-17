$(document).ready(function(){


    $("#add").on('click', function(e) {
        $("#answer").val(Number($("#num_one").val()) + Number($("#num_two").val()) )
    })

    $("#subtract").on('click', function(e) {
        $("#answer").val(Number($("#num_one").val()) - Number($("#num_two").val()) )
    })

    $("#multiply").on('click', function(e) {
        $("#answer").val(Number($("#num_one").val()) * Number($("#num_two").val()) )
    })

    $("#divide").on('click', function(e) {
        $("#answer").val(Number($("#num_one").val()) / Number($("#num_two").val()) ) 
    })

})
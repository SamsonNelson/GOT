$(document).ready(function () {
    console.log("im listening")
    $('#but').click(function () {
        console.log("Wassup1");
        var input = document.getElementById('input').value;
        $.getJSON("https://api.funtranslations.com/translate/dothraki?api_key=QmXqY48Bfm_VEVWIwL_iuAeF&text=" + input, function (data) {
            $('#result').append(data.contents.translated);
            console.log(data);
            console.log("Wassup2");
        });
    });
});
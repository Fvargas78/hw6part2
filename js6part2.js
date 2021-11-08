$(document).ready(function() {

    $("#main_form").validate({
        rules:
            {
                text_input: {required: true},
                search_char: {required: true,  maxlength: 1}
            }
    });
})

function no_result(search_char) {
    let character = search_char;
    let message = "<html>\n";
    message += "<head>\n";
    message += "<title>No Match Found</title>\n";
    message += "</head>\n";
    message += "<body>\n";
    message += "<div style='margin: 0 auto;'>\n";
    message += "<p> Search character, " + character + ", not found in text string!</p>\n";
    message += "<input type='button' value='Close' onclick='window.close()'>\n";
    message += "</div>\n";
    message += "</body>\n";
    message += "</html>";

    let no_result_window = window.open("", "no_match","left=1,top=300,width=400,height=100");
    no_result_window.focus();
    no_result_window.document.write(message);
    no_result_window.document.close();
}

function process() {
    if ($("#text_input").valid() && $("#search_char").valid()) {
        let count = 0, search_char, text;
        text = ($("#text_input").val()).toLowerCase();
        search_char = ($("#search_char").val()).toLowerCase();
        for (let i=0; i < text.length; i++) {
            if (text.charAt(i) === search_char)
                count++;
        }

        if (count === 0) {
            $("#result").val("");
            no_result(search_char);
        }
        else {
            $("#result").val(count);
        }
    }
}

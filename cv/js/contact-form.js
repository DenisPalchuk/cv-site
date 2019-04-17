$(function() {
    // Get the form.
    var form = $("#ajax-contact");

    // Get the messages div.
    var formMessages = $("#form-messages");

    $(form).submit(function(event) {
        event.preventDefault();
        if ($(form)[0].checkValidity() === false) {
            event.stopPropagation();
        } else {
            var formData = $(form).serialize();
            $.ajax({
                dataType: "json",
                type: "POST",
                url: "sendmail.php",
                data: formData
            })
                .done(function(response) {
                    // Make sure that the formMessages div has the 'success' class.
                    $(formMessages).removeClass("alert alert-danger");
                    $(formMessages).addClass("alert alert-success");

                    // Set the message text.
                    $(formMessages).text(response.text);

                    // Clear the form.
                    $("#name").val("");
                    $("#email").val("");
                    $("#message").val("");
                    $(form).removeClass("was-validated");
                })
                .fail(function(data) {
                    // Make sure that the formMessages div has the 'error' class.
                    $(formMessages).removeClass("alert alert-success");
                    $(formMessages).addClass("alert alert-danger");

                    // Set the message text.
                    if (data.responseText !== "") {
                        $(formMessages).text(data.responseText);
                    } else {
                        $(formMessages).text("Oops! An error occured and your message could not be sent.");
                    }
                });
        }
        $(form).addClass("was-validated");
    });
});

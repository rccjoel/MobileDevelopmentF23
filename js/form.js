$(document).ready(function () {
    $("#contact-info").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            zipc: {
                required: true,
                pattern: /[A-Za-z]\d[A-Za-z][\s \-]?\d[A-Za-z]\d/
            },
            phone: {
                required: true,
                pattern: /^\d{3}\d{3}\d{4}$/
            }
        },
        messages: {
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            zipc: {
                required: "Please enter your zip code",
                pattern: "Please enter a valid zip code"
            },
            phone: {
                required: "Please enter a phone number",
                pattern: "Please enter a valid US phone number (e.g., 123-456-7890)"
            }
        }
    });

    $("#card-info").validate({
        rules: {
            cardnumber: {
                required: true,
                minlength: 16
            },
            expdate: {
                required: true,
            },
            cvv: {
                required: true,
                minlength: 3
            }
        },
        messages: {
            cardnumber: {
                required: "Please enter your card number",
                minlength: "Please enter a valid card number"
            },
            expdate: {
                required: "Please enter your card expiration date"
            },
            cvv: {
                required: "Please enter your card CVV",
                minlength: "Please enter a valid CVV"
            }
        }
    });
});
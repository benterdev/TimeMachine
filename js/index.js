$(document).ready(function () {
    $(".gototencentstorage").click(function () {
        var snapchatIcon = '<i class="fa fa-snapchat-ghost" style="color: #FFFC00" aria-hidden="true"></i>';
        var snapchatNote = ' Add "thepaulkr" on snapchat!';

        $("body").overhang({
            type: "confirm",
            primary: "#333333",
            accent: "#FFFC00",
            message: snapchatIcon + snapchatNote,
            custom: true,
            html: true,
            callback: function () {
                var selection = $("body").data("overhangConfirm");
                if (selection) {
                    window.open("https://www.snapchat.com/add/thepaulkr", "_blank");
                } else {
                    alert("Maybe next time then...");
                }
            }
        });
    });


});
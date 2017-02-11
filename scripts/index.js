$(document).ready(function () {
    var newGameDialog;
    newGameDialog = $("#newGameDialog").dialog({
        autoOpen: false,
        height: 650,
        width: 500,
        modal: true,
        buttons: [{
                text: "Create a new game",
                click: function () {
                    createGame();
                }
            },
            {
                text: "Cancel",
                click: function () {
                    newGameDialog.dialog("close");
                }
            }
        ],
        close: function () {

            //form[0].reset();
            //allFields.removeClass("ui-state-error");
        }
    });

    $("#AddGameButton").on("click", function () {
        newGameDialog.dialog("open");
    });

    
    function createGame() {
        var newGameForm;
        newGameForm = $("newGame").serialize();
        
        //validate game
        var newgame = new Game(newGameForm.newTitle, platform, media, description);
    };

    function changeGame() {

    };

    function removeGame() {

    };


    function loadGameList(games) {

        $.each(games, function (i, game) {
            var e = $("<li />");
            e.attr("id", game.title);
            e.attr("class", "game");
            e.append("<h4>" + game.title + "</h4>");
            e.append("<div>" + "<span>Platform: " + game.platform + " media type: " + game.media +
                "<p>" + game.description + "</p></div>");
            $(e).appendTo('ul#gameList');
        });
    };

    var gamesData = new gameData();
    gamesData.init();
    loadGameList(gamesData.getList());
});
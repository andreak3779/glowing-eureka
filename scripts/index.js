$(document).ready(function () {
    var newGameDialog = $("#GameDialog").dialog({
        autoOpen: false,
        height: 650,
        width: 500,
        modal: true,
        buttons: [{
                text: "Save",
                click: function () {
                    saveGame();
                    this.dialog("close");
                }
            },
            {
                text: "Cancel",
                click: function () {
                    this.dialog("close");
                }
            }
        ],
        close: function () {

            //form[0].reset();
            //allFields.removeClass("ui-state-error");
        }
    });

    $("#AddGameButton").on("click", function () {
        changeFormTitle("Add New Game");
        newGameDialog.tile = "Create Game";
        newGameDialog.dialog("open");  
    });
    $("#RemoveGameButton").on("click", function() {
        
    });
    $("#ChangeButton").on("click", function() {

    });

    function changeFormTitle(titleText) {
        $("#gameFormTitle").empty();
        $("#gameFormTitle").text =titleText;
    };

    function saveGame() {
        var newGameForm = $("newGame").serialize();
        var title = newGameForm.gametitle;
        var plaform = newGameForm.gameplaform;
        var media = newGameForm.gamemedia;
        var description = newGameForm.gamedescription;

        //validate game
        var newgame = new Game(title,platform, media,description);
    };

    function removeGame() {
        var title = 
        gamesData.remove();
    };

    function loadGameList(games) {
        if (games.length > 0) {
            $('ul#gameList').removeClass('hidden');
            $('emptyGameList').addClass('hidden');
        } else { 
            $('ul#gameList').addClass('hidden');
            $('emptyGameList').removeClass('hidden');
        }

        $.each(games, function (i, game) {
            var e = $("<li />");
            e.attr("id", game.title);
            e.attr("class", "game");
            e.append("<h4>" + game.title + "</h4>");
            e.append("<div>" + "<span>Platform: " + game.platform + " media type: " + game.media +
                "<p>" + game.description + "</p></div>");
            $(e).appendTo('ul#gameList');
            $('ul#gameList').fadeIn(400);
        });
    };

    var gamesData = new GameData();
    gamesData.init();
    loadGameList(gamesData.getList());
});
$(document).ready(function () {
    var gameDialog;
    gameDialog = $("#GameDialog").dialog({
        autoOpen: false,
        height: 650,
        width: 500,
        modal: true,
        buttons: [{
                text: "Save",
                click: function () {
                   if( validateGame() ) {
                    saveGame();
                    $(this).dialog("close");
                   } 
                    
                }
            },
            {
                text: "Cancel",
                click: function () {
                    $(this).dialog("close");
                }
            },
            {
                text: "Remove",
                click: function() {
                    //get the current title.
                    var title = $('#gametitle').text;
                    //confirm deleting
                    var yesRemove = confirm("Would you like to remove " + title+" game")
                    if(yesRemove) {
                        gamesData.remove(title);
                    }
                }
            }
        ]
    });

    $("#AddGameButton").on("click", function () {
        changeFormTitle("Add New Game");
        gameDialog.tile = "Create Game";
        gameDialog.dialog("open");  
    });
    

    function changeFormTitle(titleText) {
        $("#gameFormTitle").empty();
        $("#gameFormTitle").text =titleText;
    };

    function saveGame() {
        var newGameForm = $("gameform").serialize();
        var title = newGameForm.gametitle;
        var plaform = newGameForm.gameplaform;
        var media = newGameForm.gamemedia;
        var description = newGameForm.gamedescription;

        //validate game
        var newgame = new Game(title,platform, media,description);
    }
    function loadGameList(games) {
        if (games.length > 0) {
            $('ul#gameList').removeClass('hidden');
            $('#emptyGameList').addClass('hidden');
        } else { 
            $('ul#gameList').addClass('hidden');
            $('#emptyGameList').removeClass('hidden');
        }

        $.each(games, function (i, g) {
            var e = $("<li />");
            e.attr("id", g.title);
            e.attr("class", "game");
            e.append("<h4>" + g.title + "</h4>");
            e.append("<div>" + "<span>Platform: " + g.platform + " media type: " + g.media +
                "<p>" + g.description + "</p></div>");
            e.on("click",function(){
                var changeTitle = $(this).attr("id"); 
                changeFormTitle("Add New Game");
                gameDialog.tile = "Change "+ changeTitle ;
                gameDialog.dialog("open");  
            });
            $(e).appendTo('ul#gameList');
            $('ul#gameList').fadeIn(400);
        });
    }

    var gamesData = new GameData();
    gamesData.init();
    gamesData.loadData();
    loadGameList(gamesData.getList());
});
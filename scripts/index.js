$(document).ready(function() {
    var newGameDialog;
    var gamesData;

$()
    
    newGameDialog = $("#newGameDialog").dialog({
        autoOpen: false,
        height: 650,
        width: 500,
        modal: true,
        buttons: [
            {text:"Create a new game",
                click: function() {
                    createGame();
                }
            },
            {text:"Cancel",
                click: function() {
                    newGameDialog.dialog("close");
                }
            }
        ],
            close: function() {

            //form[0].reset();
            //allFields.removeClass("ui-state-error");
        }
    });

    $("#AddGameButton").on("click", function() {
        newGameDialog.dialog("open");
    });

    function GamesData() {
        this.gameslist = [
            { "id": 1, "title": "Fallout 3", "platform": "ps3", "media": "disc", "description": "Post nuclear open world game." },
            { "id": 2, "title": "Tom Clancy's Division", "platform": "ps4", "media": "download", "description": "post biological attack open world game." }
        ];
        
         this.add = function(newGame) { 
            this.gameslist.push(newGame);
            this.store(this.gameslist);
         };

         this.load = function() {
             var gamesString = localStorage.getItem("gamesCollection");
         
             if (!gamesString) {
                 this.gameslist = [];
             } else {
                 this.gameslist = JSON.parse(gamesString)
             }
         };

         this.store = function() {

             var gamesString = JSON.stringify(gameslist);
             localStorage.setItem("gamesCollection", gamesString);
         };
         this.list = function() {
     
            return this.gameslist;
         };
    
    }
    function createGame() {
        //get values from the form 
        //validate form
        var game ={};
        data.add(game);
    };

    function changeGame() {

    };

    function loadGameList(games) {
        $.each(games, function(i, game) {
            var e = $("<li />");
            e.attr("id",game.id);
            e.attr("class","game");
            e.append("<h4>" + game.title + "</h4>");
            e.append("<div>" + "<span>Platform: " + game.platform + " media type: " + game.media +
                "<p>" + game.description + "</p></div>");
            $(e).appendTo('ul#gameList');
        });
    };

    data = new GamesData();
    loadGameList(data.list());
    


});
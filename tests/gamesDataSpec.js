describe('gamesData Tests', function(){
    var gamesData;
    var gameMedias;
    var gamePlatforms;

    beforeEach(function(){
        gamesData = new GameData();
        gameMedias = new GameMediaTypes();
        gamePlatforms = new GamePlatformTypes();
    });

    afterEach(function() {
        gamesData.clearAll();
        gamesData = null;
        gameMedias = null;
        gamePlatforms = null;
    });

    it('Add a new game', () => {

        var newGame = new Game("Fallout 4", gamePlatforms.ps4, gameMedias.disc,
            "A post-nuclear was sci-fi adventure game.");

        gamesData.store(newGame);

        var objGame = gamesData.get(newGame.title);

        expect(newGame.title).toEqual(objGame.title);
    });

    it('change a game', () => {

        var newGame = new Game("Fallout 4", gamePlatforms.ps4, gameMedias.download,"post-nuclear was adventure game. changed");

        var oldgame = gamesData.get("Fallout 4");

        gamesData.store(newGame);

        var changedGame = gamesData.get("Fallout 4");

        expect(changedGame.description).toEqual("post-nuclear was adventure game. changed");

    });

});
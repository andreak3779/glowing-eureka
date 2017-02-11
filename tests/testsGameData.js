describe('gamesData Tests', () => {
    var gameData;
    var gameMedias;
    var gamePlatforms;

    beforeEach(() => {
            gameData = new GameData();
            gameMedias = new GameMediaTypes();
            gamePlatforms = new GamePlatformTypes();
        });

        afterEach(() => {
            gameData.clearAll();

        });

    it('Add a new game', () => {
        var newGame = new Game("Fallout 4", gamePlatforms.ps4, gameMedias.disc, "A post-nuclear was sci-fi adventure game.");
        gameData.add(newGame);

        var objGame = gameData.get(newGame.title);

        expect(newGame).toEqual(objGame);
    });

    it('get a game', () => {
        var newGame = new Game("Fallout 4",gamePlatforms.ps4,gameMedias.download,"post-nuclear was adventure game.");
    });

});
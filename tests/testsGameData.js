
describe('gamesData Tests', () => {
    var gamePlatforms;
    var gameMedias;
    var gameData;
beforeEach(
    function() {
        gameData = new GameData();
        gameMedias = new GameMediaTypes();
        gamePlatforms = new GamePlatformTypes();
    });

it('get a list of games', () => {
    var newGame = new Game("Fallout 4","ps4","disc","A post-nuclear was sci-fi adventure game.");
    gameData.add(newGame);

    var objGame = gameData.get(newGame.title);

    expect(newGame).toEqual(objGame);
});
    

});
    
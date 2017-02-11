class Game {
    constructor(title, platform, media, description) {
        this.title = title;
        this.platform = platform;
        this.media = media;
        this.description = description;
    }
}

class GamePlatformTypes {
    constructor() {
        this.ps4 = "ps4";
        this.ps3 = "ps3";
        this.wiiu = "wiiU";
        this.psvita = "psvita";
    }
}
class GameMediaTypes {
    constructor() {
        this.disc = "disc";
        this.download = "download";
    }
}
class GameData {
    constructor() {
        this.init = () => {
            Lockr.prefix = 'game';
        };
        this.get = (title) => {
            var gameString = Lockr.get(title);
            var obj = JSON.parse(gameString);
            return obj;
        };
        this.add =(newGame) =>{
            var stringGame = JSON.stringify(game);
            Lockr.set(newGame.title, stringGame);
        };
        this.change = function (game) {
            var stringGame = JSON.stringify(game);
            Lockr.set(game.title, stringGame);
        };
        this.remove = (title) => {
            Lockr.rm(title);
        };
        this.getList = () => {
            return Lockr.getAll();
        };
        this.clearAll = () => {
            Lockr.flush();
        }
    }
}
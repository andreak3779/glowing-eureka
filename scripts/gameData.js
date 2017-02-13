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
        this.init = function () {
            Lockr.prefix = 'game';
        };
        this.get =function(title) {
            var obj = Lockr.get(title); 
            return obj;
        };
        this.store = (changeGame) => {
            Lockr.set(changeGame.title, changeGame);
        };
        this.remove = (title) => {
            Lockr.rm(title);
        };
        this.getList = () => {
            let games;
            games = Lockr.getAll();
            return games;
        };
        this.clearAll = () => {
            Lockr.flush();
        };
        this.loadData = () => {
            if (localStorage.length == 0 ) {
                var game1 = new Game("Catherine","ps3","disc","A unique puzzle adventure game.");
                this.store(game1);
                var game2 = new Game("Sleeping Dogs","ps4","disc","An open world crime adventure game set in Hong Kong");
                this.store(game2);
                var game3 = new Game("ZombiU","wiiU","disc","A first person zombie horror adventure game.");
                this.store(game3);
            }
        };
    }
}
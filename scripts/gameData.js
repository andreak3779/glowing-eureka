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
            return Lockr.getAll();
        };
        this.clearAll = () => {
            Lockr.flush();
        };
    }
}
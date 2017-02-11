module.export = function(config) {
    config.set({
       basePath:'/home/andrea/Documents/src/glowing-eureka/scripts/',
       frameworks: ['jasmine'],
       files:[
           'gamesData.js',
           'index.js',
           'https://code.jquery.com/jquery-3.1.1.min.js',
            'https://code.jquery.com/ui/1.11.4/jquery-ui.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/lockr/0.8.4/lockr.min.js'
       ] 
    });

}
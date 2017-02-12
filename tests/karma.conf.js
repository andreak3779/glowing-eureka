module.exports = function(config) {
    config.set({
       basePath:'/home/andrea/Documents/src/glowing-eureka/tests',
       frameworks: ['jasmine'],
       files:[
           'https://code.jquery.com/jquery-3.1.1.min.js',
            'https://code.jquery.com/ui/1.11.4/jquery-ui.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/lockr/0.8.4/lockr.min.js',
            '/home/andrea/Documents/src/glowing-eureka/scripts/gamesData.js',
            'gamesDataSpec.js'
       ],
       exclude: [],
       port: 8080, 
       logLevel: config.DEBUG,
       autoWatch: true,
       browsers:['Chrome'],
       singleRun: true
    });
};
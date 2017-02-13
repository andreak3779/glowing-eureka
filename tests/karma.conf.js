module.exports = function(config) {
    config.set({
       basePath:'/home/andrea/Documents/src/glowing-eureka/tests',
       frameworks: ['jasmine'],
       files:[
           '../jquery-ui-1.12.1.custom/external/jquery/jquery.js',
            '../jquery-ui-1.12.1.custom/jquery-ui.min.js',
            '../scripts/lockr.min.js',
            '../scripts/gameData.js',
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
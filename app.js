const capitalweather = require('./capitalweather.js')
const yargs = require('yargs')

yargs.command({
    command:'getir',
    describe:'Verilen Olke Adina Gore Hava Derecesini Getiren App', 
    builder : {
        countryname : {
            describe:'havani getirir faranheyt ile',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv){
        capitalweather.findCapital(argv.countryname)
    }
})

yargs.parse()

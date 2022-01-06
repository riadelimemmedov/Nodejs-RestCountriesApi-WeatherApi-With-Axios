//?Axios Uygulama ders 154

const axios = require('axios')
const chalk = require('chalk')

const findCapital = function (olke) {

    axios.get(`https://restcountries.com/v3.1/name/${olke}`)
        .then((response) => {

            //!Country Api
            const olke = response.data[0]
            const paytaxt = olke.capital[0]
            const nufus = olke.population

            //!Weather Api
            axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${baskent}&appid=f68d1b5b546294cd6ef3fa159a2fe650&lang=az&units=metric`)
                .then((response) => {
                    //console.log(response.data.weather[0].description)
                    console.log(chalk.cyanBright.italic(`Paytaxt : ${response.data.name}\nBugun Hava : ${response.data.weather[0].description}\Istilik : ${response.data.main.temp}`))
                })
        })
}


module.exports = {
    findCapital
}
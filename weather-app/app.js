const request=require("request")

const mapboxurl="https://api.mapbox.com/geocoding/v5/mapbox.places/chennaiall.json?access_token=pk.eyJ1Ijoidmlub3RocmFvIiwiYSI6ImNqd3owemw2eTFiaTAzeW41c2hxeXZla2MifQ.Uximc3Y1AacEKqhw3GUrlg&limit=1";

request({url:mapboxurl,json:true},(error,response)=>{
    if(error)
    {
        console.log("Not able to connect to mapbox")
    }
    else if(response.body.message)
    {
        console.log(response.body.message)
    }
    else if(response.body.features.length == 0)
    {
        console.log("The specified city not found")
    }
    else
    {
    var latlong=response.body.features[0].center[1]+"," + response.body.features[0].center[0] ;
    console.log(latlong)
    }
})

// const url="https://api.darksky.net/forecast/c962bbaa8ab779273e6adbf54cade8a0/13.0827,80.2707"

// request({ url: url,json:true }, (error, response) => {  
//     if(error)
//     {
//         console.log("Unable to connect to weather service")
//     }
//     else if (response.body.error)
//     {
//         console.log(response.body.error)
//     }
//     else
//     {
//     const data =  response.body.currently
  
//      console.log("it is currently " + data.temperature + ".There is a " + data.precipProbability + "% of rain " +response.body.timezone)
//     }
// })

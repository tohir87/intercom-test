
 var getCustomers = (customersData) => {

    // Need to process the unstructured customer data
    var customers = customersData
                    .split('\n')                                // split by line break
                    .map(c => JSON.parse(c))                    // transform into an array of objects and parse into json

    // Filter out customers within 100km radius
    let cusWithin100km = c => getDistance(parseFloat(c.latitude), parseFloat(c.longitude)) >= 100
    return customers.filter( cusWithin100km)
                    .sort(function(a, b){                                           // sort customers by user id
                        return a.user_id > b.user_id ? 1 : -1
                    })
                    .map(c => "User ID: " +  c.user_id + ", Name: " + c.name)       //output the names and user ids
    
}

var getDistance = (lat, log) => {
    // load gps distance package
    var distance = require('gps-distance')

     // Constant to hold intercom office geo cordinates
     const intercomOffice =  {"latitude" : 53.339428, "longitude" : -6.257664 };

    return distance(intercomOffice.latitude, intercomOffice.longitude, lat, log)

}

// export
module.exports = getCustomers
module.exports = getDistance

//add file system library
let fs = require('fs')

// Load external customer file
let customersData = fs.readFileSync('gistfile1.txt', 'utf8')

console.log(getCustomers(customersData))
var GetCustomers = require('../index')
var GetDistance = require('../index')


describe("Test functionality", () => {
    it("Get distance from office to my house", () => {
        expect(Math.round(GetDistance(52.986375, -6.043701))).toEqual(42)
    })
    it("Get distance from office to my house", () => {
        expect(Math.round(GetDistance(55.986375, -6.043701))).not.toEqual(42)
    })
})
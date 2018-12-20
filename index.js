function myCoolLogger(value, spacing = 4) {
    console.log(JSON.stringify(value, null, 8))
}


module.exports = myCoolLogger
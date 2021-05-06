const Planet = require('./planet.js')
const SpaceStation = require('./space_station.js')
const Cargo = require('./cargo.js')
const DeliveredGoods = require('./delivered_goods.js')

let planets = []
let space_stations = []
let cargos = []
let delivered_goods = []

function add_planet(name) {
    const planet = new Planet(name)
    planets.push(planet)
    return planet
}

function update_planet (id, name) {
    const find_pl = planets.find(pl => pl.id == id)
    if (find_pl) find_pl.name = name
    return find_pl
}

function deletePlanet (id) {
    return planets = planets.filter(planet => planet.id !== id);
}

function  get_planet(id) {
    return planets.find(pl => pl.id == id)
}

function add_station(name, planet) {
    const station = new SpaceStation(name, planet)
    space_stations.push(station)
    return station
}

function update_station (id, name) {
    const find_st = space_stations.find(st => st.id == id)
    if (find_st) find_st.name = name
    return find_st
}

function deleteStation (id) {
    return space_stations = space_stations.filter(station => station.id !== id);
}

function  get_station(id) {
    return space_stations.find(st => st.id == id)
}

function add_cargo(name) {
    const cargo = new Cargo(name)
    cargos.push(cargo)
}

function deliver_cargo (id, station) {
    const find_cr = cargos.find(cr => cr.id == id)
    if (find_cr){
        if (find_cr.is_delivered) 
            return console.log('Cardo is already relivered.')
        find_cr.is_delivered = true
        const delivered_cargo = new DeliveredGoods(find_cr, station)
        delivered_goods.push(delivered_cargo)

    } 
    return find_cr
}

function deleteCargo (id) {
    cargos = cargos.filter(cargo => cargo.id !== id);
    delivered_goods = delivered_goods.filter(dl_cr => dl_cr.cargo.id != id);
    return cargos
}

function  get_cargo(id) {
    return cargos.find(cr => cr.id == id)
}

function get_planet_stations(planet) {
    return space_stations.filter(station => station.planet == planet)
}


// Adding Planet
const mars = add_planet('Mars')
const saturn = add_planet('Saturn')
const earth = add_planet('Earth')
console.log('Planets:',planets)


update_planet(2, "Pluton")
console.log('Updated planets', planets)

deletePlanet(1)
console.log('Filtered planets', planets)

console.log('Planet 3:', get_planet(3))

const station1 = add_station('Apolo11', mars)
const station2 = add_station('Apolo12', mars)
const station3 = add_station('Nasa1', earth)
add_station('Apolo5', mars)
add_station('Apolo2', mars)
add_station('GalexyS20', saturn)
console.log('Stations:', space_stations)

update_station(3, "Updated_name")
console.log('Updated stations:', space_stations)

deleteStation(2)
console.log('Filtered station', space_stations)

console.log('Station 1:', get_station(1))

add_cargo(97)
add_cargo(67)
add_cargo(34)
console.log('Cargos:', cargos)

deliver_cargo(3, station1)
console.log('Updated cargos:',cargos, delivered_goods)

deleteCargo(2)
console.log('Filtered cargos', cargos)

console.log('Cargo 1:', get_cargo(1))

console.log('Stations of Mars:', get_planet_stations(mars))

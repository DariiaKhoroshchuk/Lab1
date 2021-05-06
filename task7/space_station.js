
class SpaceStation{

    constructor (name, planet) {
      this.id = SpaceStation.get_id()
      this.name = name;
      this.planet = planet;

    }
    static last_id = 0
    static get_id(){
      return ++SpaceStation.last_id
    }
  }
  
  
  module.exports = SpaceStation;
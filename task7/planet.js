
class Planet{

    constructor (name) {
      this.id = Planet.get_id()
      this.name = name;
    }
    static last_id = 0
    static get_id(){
      return ++Planet.last_id
    }
  }


  module.exports = Planet;

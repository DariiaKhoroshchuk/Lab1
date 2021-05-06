class Cargo {

  constructor (weight) {
    this.id = Cargo.get_id()
    this.weight = weight;
    this.is_delivered = false;
  }
  static last_id = 0
  static get_id(){
    return ++Cargo.last_id
  }
}

module.exports = Cargo;
class MadeId{
    constructor(){
        this.id = MadeId.get_id()
    }
    static last_id = 0
    static get_id(){
      return ++MadeId.last_id
    }
}

module.exports = MadeId
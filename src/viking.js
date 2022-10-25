// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  //extends Soldier

  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
    
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
          } else {
            return `A Saxon has died in combat`;
          }

    }

}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(viking){
        
        this.vikingArmy.push(viking)
    }

    addSaxon(Saxon){
      this.saxonArmy.push(Saxon)
    }

    vikingAttack(){
      
      const viking = Math.random()*100
      if(damage>0){
        viking -= this.health
      }
    }

    saxonAttack(){}

    showStatus(){
        if(!saxonArmy){
            return `Vikings have won the war of the century!`
        }
        
    }
}

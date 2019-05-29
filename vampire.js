class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire)
    vampire.creator = this

  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let sum = 0
    let baby = this
    while (baby.creator) {
      baby = baby.creator
      sum++
    }
    return sum

  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal) {
      return true
    } else {
      return false
    }
  }

  closestCommonAncestor(vampire) {

    let vampire1 = this

    if (!vampire1.creator) {
      return vampire1
    }
    if (!vampire.creator) {
      return vampire
    }

    while (vampire1.creator && vampire.creator) {
      if (vampire1.creator === vampire.creator) {
        return vampire1.creator
      } else if (vampire.isMoreSeniorThan > vampire1.isMoreSeniorThan) {
        vampire = vampire.creator
      } else if (vampire.isMoreSeniorThan < vampire1.isMoreSeniorThan) {
        vampire1 = vampire1.creator
      }

    }
  }


  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    for (const vampire of this.offspring) {
      if (vampire.name === name) {
        return vampire
      } else {
        vampire.vampireWithName()

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {

  }

  // Returns the total number of vampires that exist
  get totalDescendents() {

  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {

  }

  /** Stretch **/

      }
    }
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {

  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {

  }

}
module.exports = Vampire;
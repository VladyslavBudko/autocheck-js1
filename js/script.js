const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },

  removePotion(potionName) {
    let potionIndex = -1;

    for (let i = 0; i < this.potions.length; i += 1) {
      const potion = this.potions[i];

      if (potion.name === potionName) {
        potionIndex = i;
        this.potions.splice(potionIndex, 1);
        return `Potion ${potionName} is removed!`;
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },

  updatePotionName(oldName, newName) {
    let potionIndex = -1;

    for (let i = 0; i < this.potions.length; i += 1) {
      const potion = this.potions[i];

      if (potion.name === oldName) {
        potionIndex = i;
        potion.name = newName;
        this.potions.splice(potionIndex, 1, potion);
        return `Potion ${oldName.name} is updated!`;
      }
    }
    return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};

console.log(potionName);

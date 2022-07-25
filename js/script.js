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
      const potion = this.potions[i] ;

      if (potion.name === potionName) {
        potionIndex = i;
        this.potions.splice(potionIndex, 1);
        return `Potion ${potionName.name} is removed!`
      }
    }
    if (potionIndex === -1) {
      return `Potion ${potionName.name} is not in inventory!`;
    }
  },

  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};

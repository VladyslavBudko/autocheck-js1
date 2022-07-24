const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line
if (this.potions.includes(potionName)) {
  const index = this.potions.indexOf(potionName);
  this.potions.splice(index, 1);
}


    // Change code above this line
  },
};

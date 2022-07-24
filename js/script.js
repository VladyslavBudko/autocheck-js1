const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    // Change code below this line
if (this.potions.includes(oldName)) {
  const item = this.potions.indexOf(oldName);
  this.potions.splice(item, 1, newName);
}

    // Change code above this line
  },
};

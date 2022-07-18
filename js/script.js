function slugify(title) {
  // Change code below this line


  // let titleToLower = "";


  const titleToLower = title.toLowerCase();
    console.log(titleToLower);


  const titleToLowerArrey = titleToLower.split(" ");
  console.log(titleToLowerArrey);

return titleToLowerArrey.join('-');

  // Change code above this line
}

slugify("Arrays for begginers");

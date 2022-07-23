function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
  const newTask = {completed, category, priority, ...data};
return newTask;
  // Change code above this line
}

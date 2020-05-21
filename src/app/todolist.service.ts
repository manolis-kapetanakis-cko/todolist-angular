export class TodoListService {
  itemsList = [
    { description: "Clean the house" },
    { description: "Groceries" }
  ]

  onInitialiseList() {
    for (var i = 1; i <= 10; i++) {
      fetch('https://jsonplaceholder.typicode.com/posts/' + i)
        .then(response => response.json())
        .then(
          json =>
            this.itemsList.push({ description: json.title }))
    }

  }
  addItemToList(description: string) {
    this.itemsList.push({ description })
  }
  removeItemToList(i: number) {
    console.log("remove: " + i)
    this.itemsList.splice(i, 1);
  }
}

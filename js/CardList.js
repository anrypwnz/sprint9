class CardList {
  constructor(container, createCard) {
    this.container = container;
    this.createCard = createCard;
  }

  addCard(name, link) {
    const { cardElement } = this.createCard(name, link);
    this.container.appendChild(cardElement);
  }

  render(arr) {
    this.arr = arr;
    for (let value of this.arr) {
      this.addCard(value.name, value.link);
    }
  }
}

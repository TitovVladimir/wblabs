class CM {
  constructor() {
    this.moneyCash = 0;
    this.coffeeMenu =
      [{id: 1, name: 'Американо', price: 10 },
      {id: 2, name: 'Капучино', price: 15},
      {id: 3, name: 'Латте', price: 20}];
    this.currentCoffeeNumber = 0;
  }

  setCash(money) {
    if ((money == 1) || (money == 2) || (money == 5) || (money == 10) || (money == 50)) {
      this.moneyCash = this.moneyCash + money;
      return true;
    } else {
      return false;
    }
  }

  getCoffeeMenu() {
    this.coffeeMenu.forEach(function(cof) {
      console.log(`${cof.id} - ${cof.name} ${cof.price}  руб`);
    });
  }

  chooseCoffee(coffeeNum) {
    if (this.validateNumber(coffeeNum) && this.validateMoney(coffeeNum - 1)) {
      this.currentCoffeeNumber = coffeeNum;
      return true;
    } else
      return false;
  }

  getRemainCash(sdacha) {
    sdacha = this.moneyCash - this.coffeeMenu[this.currentCoffeeNumber - 1].price;
    return sdacha;
  }

    validateNumber(n) {
      if ((n < 1) && (n >= this.coffeeMenu.id))
        return false;
      else
        return true;
    }

    validateMoney(coffeeNum) {
      if (this.moneyCash < this.coffeeMenu[coffeeNum].price)
        return false;
      else
        return true;
    }
}

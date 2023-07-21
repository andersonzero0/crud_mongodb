class modelProducts {

    constructor(id, name, amount, price) {

        this.id = id;
        this.name = name;
        this.amount = amount;
        this.price = price;
        const date = new Date();

        const data = {

            _id: this.id,
            name: this.name,
            amount: this.amount,
            price: this.price,
            date: date
            
        }

        return data;
        
    }
    
}

export { modelProducts };
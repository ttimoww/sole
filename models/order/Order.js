class Order{
    /**
     * Order instance
     * @param {Integer} id Order id
     * @param {User} buyer Buyer
     * @param {User} seller Seller
     * @param {Item} item Item
     */
    constructor(id, buyer, seller, item){
        this.id = id,
        this.buyer = buyer,
        this.seller = seller,
        this.item = item
    }
}

module.exports = Order;
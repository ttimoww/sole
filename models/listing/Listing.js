class Listing{
    /**
     * Listing instance
     * @param {Integer} id Listing ID
     * @param {User} user Seller
     * @param {Item} item Item
     * @param {Integer} price Price
     */
    constructor(id, user, item, price){
        this.id = id,
        this.user = user,
        this.item = item,
        this.price = price
    }
}

module.exports = Listing;
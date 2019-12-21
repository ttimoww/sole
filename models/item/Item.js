class Item{
    /**
     * Item instance
     * @param {Integer} id Item ID
     * @param {String} name Item name
     * @param {String} sku Item SKU
     * @param {String} color Item Color
     */
    constructor(id, name, sku , color){
        this.id = id,
        this.name = name,
        this.sku = sku,
        this.color= color
    }
}

module.exports = Item;
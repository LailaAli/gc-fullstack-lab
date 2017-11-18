export function addItem(item) {
    return {
        type: "ADD_ITEM",
        item
    }
}








/* export function onItemUpdate(field, event) {
    if (field === 'name') {
        this.setState({
            name: event.target.value
        })
        return
    }

    if (field === 'price') {
        this.setState({
            price: event.target.value
        })
        return
    }
}
//Add button function
addItemBtn(event) {
    console.log('New Items: ' + JSON.stringify(this.state))
} */

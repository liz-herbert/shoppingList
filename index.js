
const addItemBtn = document.getElementById('add-item-btn')
const itemInput = document.getElementById('item-input')
const list = document.getElementById('list')

const shoppingList = []
    
addItemBtn.addEventListener('click', function(){

        //if the item is already included in list, then clear the input field
        if(shoppingList.includes(itemInput.value)){
            console.log('no duplicates')
        }
        //else add the item to the shopping list and render out of the list
        else{
            shoppingList.push(itemInput.value)
            render()        
        }
        itemInput.value = '' 
})

//add each item to the shopping list
function render(){    
    let html = ''
    for (let item of shoppingList){
        html+= `<li class="list-item">${item}</li>`
    }
    list.innerHTML = html
}

render()


localStorage.getItem('fridge') ? 
fridgeArr = JSON.parse(localStorage.getItem('fridge')) :
fridgeArr = [];

localStorage.getItem('shopping') ? 
shoppingArr = JSON.parse(localStorage.getItem('shopping')) :
shoppingArr = [];


const fridgeList = document.getElementById('frigo');
const shoppingList = document.getElementById('compra');

function showFridgeList(array){
    fridgeList.innerHTML = '';
    const ul = document.createElement('ul');
    ul.classList.add('text-center');
    ul.classList.add('list-unstyled')
    array.forEach(element => {
        const li = document.createElement('li');
        li.classList.add('mt-1')
        const button = document.createElement('button');
        button.classList.add('btn');
        button.classList.add('btn-danger');
        button.appendChild(document.createTextNode("Borrar"));
        button.addEventListener('click', function(){
            deleteElementFridge(element, array);
            shoppingArr.push(element);
            showFridgeList(array);
            updateShoppingList();
        })

        li.appendChild(document.createTextNode(element + " "));
        li.appendChild(button);
        ul.appendChild(li);
    });
    fridgeList.appendChild(ul);
}

function showShoppingList(array){
    shoppingList.innerHTML = '';
    const ul = document.createElement('ul');
    ul.classList.add('text-center');
    ul.classList.add('list-unstyled')
    array.forEach(element => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.classList.add('btn');
        button.classList.add('btn-danger');
        button.appendChild(document.createTextNode("Borrar"));
        button.addEventListener('click', function(){
            deleteElementShopping(element, array);
            showShoppingList(array);
        })

        li.appendChild(document.createTextNode(element + " "));
        li.appendChild(button);
        ul.appendChild(li);
    });
    shoppingList.appendChild(ul);
}

function updateShoppingList(){
    showShoppingList(shoppingArr);
}

function deleteElementFridge(element){
    let index = fridgeArr.findIndex(el => el === element);
    index === -1 ? 
    alert(element + " no está en la lista") :
    fridgeArr.splice(index, 1);
    localStorage.setItem('fridge', JSON.stringify(fridgeArr));
}

function deleteElementShopping(element){
    let index = shoppingArr.findIndex(el => el === element);
    index === -1 ? 
    alert(element + " no está en la lista") :
    shoppingArr.splice(index, 1);
    localStorage.setItem('shopping', JSON.stringify(shoppingArr));
}


const addFridgeButton = document.getElementById('addFridge');
addFridgeButton.classList.add('btn');
addFridgeButton.classList.add('btn-primary');
const addFridgeInput = document.getElementById('itemFrigo');

addFridgeButton.addEventListener('click', function(e){
    e.preventDefault();
    if(!fridgeArr.includes(addFridgeInput.value)){
        if(addFridgeInput.value != ""){
            fridgeArr.push(addFridgeInput.value);
            localStorage.setItem('fridge', JSON.stringify(fridgeArr));
            showFridgeList(fridgeArr);
            addFridgeInput.value = "";
        }
    } else {
        alert(addFridgeInput.value + " ya está en la lista");
    }
})

const addShoppingButton = document.getElementById('addShopping');
addShoppingButton.classList.add('btn');
addShoppingButton.classList.add('btn-primary');
const addShoppingInput = document.getElementById('itemCompra');

addShoppingButton.addEventListener('click', function(e){
    e.preventDefault();
    if(!shoppingArr.includes(addShoppingInput.value) && addShoppingInput.value != ""){
        shoppingArr.push(addShoppingInput.value);
        localStorage.setItem('shopping', JSON.stringify(shoppingArr));
        showShoppingList(shoppingArr);
        addShoppingInput.value = "";
    } else {
        alert(addShoppingInput.value + " ya está en la lista");
    }
})

showFridgeList(fridgeArr);
showShoppingList(shoppingArr);
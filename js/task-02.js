const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listEl = document.querySelector('#ingredients')

const elements = ingredients.map(options => {

  const itemEl = document.createElement('li')
itemEl.classList.add('item')
  itemEl.textContent = options;
  return itemEl
});

listEl.append(...elements)
console.log(listEl)


// for (let i = 0; i < ingredients.length; i+=1) {
//     const options = ingredients[i]
// const itemEl = document.createElement('li')
// itemEl.classList.add('item')
//   itemEl.textContent = options;
//   elements.push(itemEl)
  
// }
 
// listEl.append(...elements)
// console.log(listEl)

// const itemEl1 = document.createElement('li')
// itemEl1.classList.add('item')
// itemEl1.textContent = ('Mushrooms')


// const itemEl2 = document.createElement('li')
// itemEl2.classList.add('item')
// itemEl2.textContent = ('Garlic');


// const itemEl3 = document.createElement('li')
// itemEl3.classList.add('item')
// itemEl3.textContent = ('Tomatos');


// const itemEl4 = document.createElement('li')
// itemEl4.classList.add('item')
// itemEl4.textContent = ('Herbs');


// const itemEl5 = document.createElement('li')
// itemEl5.classList.add('item')
// itemEl5.textContent = ('Condiments');

// listEl.append(itemEl, itemEl1, itemEl2, itemEl3, itemEl4, itemEl5)
// console.log(listEl)





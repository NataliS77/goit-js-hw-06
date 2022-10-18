const listeIdEl = document.
    querySelector('#categories');
    console.log(listeIdEl)
const itemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemEl.length}`);

for (let i = 0; i < itemEl.length; i += 1){
    console.log(`Category: ${itemEl[i].querySelector('h2').textContent}`)
    console.log(`Eltments: ${itemEl[i].querySelectorAll('li').length}`)
}

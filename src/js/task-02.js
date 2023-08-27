const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const vegetables = ingredients.map((ingredient) => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  // li.classList = 'item'
  li.classList.add("item");
  // console.log(li);
  return li;
}
)

// console.log(vegetables);
list.append(...vegetables);
// console.dir(list);
console.log(list);

// const li = document.createElement('li');
// console.log(li);

// li.textContent = "This is a heading";
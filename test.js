

const movie={
    name:'Star War',
    genre:'fiction',
    description:'This is movie about space war....',
    actor:'luke skywalker',
    price:100000,
    duration: 100,
    score:8,
    releaseYear: 1997,
    viewCount:420000,
}
console.log(string)

function getName(){
    document.getElementById('name').innerText = movie.name;
}
function changeName(){
    const newName = prompt('Input your name')
    document.getElementById('name').innerText=newName;
}
getName()
function getPrice(){
    document.getElementById('price').innerText = movie.price;
}
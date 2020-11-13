

const movie={
    name:'Star War',
    genre:['fiction', 'action'],
    description:'This is movie about space war....',
    actor:['luke skywalker','obiwan'],
    price:100000,
    duration: 100,
    score: 8,
    releaseYear: 1977,
    viewCount:420000,
}
console.log(string)

function getMovie(){
    document.getElementById('name').innerText = movie.name;
    document.getElementById('genre').innerText = movie.genre;
    document.getElementById('description').innerText = movie.description;
    document.getElementById('actor').innerText = movie.actor;
    document.getElementById('duration').innerText = movie.duration + " minutes";
    document.getElementById('score').innerText = movie.score;
    document.getElementById('releaseYear').innerText = movie.releaseYear;
    document.getElementById('viewCount').innerText = movie.viewCount;
}
function changeName(){
    const newName = prompt('Input your name')
    document.getElementById('name').innerText= newName;
    movie.name = newName;
}
function voteScore()
{   
    
    let NewScore = prompt('Input your score')
    if( NewScore >=0 && NewScore <= 10 ){
    let x = (Number(document.getElementById('score').innerText) + Number(NewScore))/2
    document.getElementById('score').innerText = Math.round( x * 10 + Number.EPSILON ) / 10;
    }
    else {
        alert("Please vote score from 0 to 10")
    }
}
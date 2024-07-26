

// render images

function renderImage(image){
   const li = document.createElement('li');
   li.classList.add('list-item');
   li.innerHTML = `<img src = ${image} >`
    document.querySelector('#cards').appendChild(li);
}



//FETCH
function fetchImages(){
    fetch("https://dog.ceo/api/breeds/image/random/3")
    .then((resp) =>resp.json())
    .then((data) => data.message.forEach(dog => renderImage(dog)))
}
fetchImages();





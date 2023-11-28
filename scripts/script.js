// image chien
// fetch('https://dog.ceo/api/breeds/image/random')
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data.message);
//     let newImage = document.querySelector('.imgChien');
//     newImage.src = data.message;
//   });

fetch('https://api.api-onepiece.com/episodes')
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < 300; i++) {
      let newCard = document.createElement('div');
      newCard.className = 'card';

      let id = document.createElement('p');
      id.textContent = data[i].id;

      let titre = document.createElement('h2');
      titre.textContent = data[i].title;

      let description = document.createElement('p');
      description.textContent = data[i].description;

      newCard.appendChild(id);
      newCard.appendChild(titre);
      newCard.appendChild(description);

      document.body.appendChild(newCard);
    }
  });

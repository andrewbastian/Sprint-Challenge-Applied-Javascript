// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
//
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardContainer = document.querySelector(".cards-container")


axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((response) =>{

  const headline = response.data.headline
    const authorPhoto = response.data.authorPhoto
    const authorName = response.data.authorName
    let newComponents = []
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    newComponents.map((headline, authorPhoto, authorName) => {
      let newCard = Card(headline, authorPhoto, authorName);

      // Remember, we always need to return something when we use .map
      return newCard;
    });
    const cards = Card(headline, authorPhoto, authorName)
    newComponents.forEach(cards => {
      cardContainer.appendChild(cards);
    });

    cardContainer.appendChild(cards)
         console.log(cardContainer);

        })



  .catch((error) => {
    console.log('Network request was fail')
    console.log(error)
  })

// <div class="card">

function Card(headline, authorPhoto, authorName) {
  const card = document.createElement('div')
  card.classList.add('card')

  //   <div class="headline">{Headline of article}</div>
  const headlines = document.createElement('div')
  headlines.textContent = headline
  headlines.classList.add('headline')
  card.appendChild(headlines)

  //   <div class="author">
  const author = document.createElement('div')
  author.classList.add('author')
  author.appendChild(card)

  //     <div class="img-container">
  const imgContainer = document.createElement('div')
  imgContainer.classList.add('img-container')
  imgContainer.appendChild(author)

  //       <img src={url of authors image} />
  const image = document.createElement('img')
  image.src = authorPhoto
  imgContainer.appendChild(image)
  //</div>


  //     <span>By {authors name}</span>
  const name = document.createElement('span')
  name.textContent = `By: ${authorName}`
  author.appendChild(name)
  //</div>
  //</div>


  return card
}
//

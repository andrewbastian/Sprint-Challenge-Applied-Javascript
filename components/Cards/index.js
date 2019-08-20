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
// console.log(response.data.articles);
const array = Object.entries(response.data.articles)
// console.log(array)
array.forEach(topic =>{
  console.log("topic: ",topic);
   topic[1].forEach(obj=>{
     Card(obj.headline,obj.authorPhoto, obj.authorName)
   })
})
;})
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
  card.appendChild(author)

  //     <div class="img-container">
  const imgContainer = document.createElement('div')
  imgContainer.classList.add('img-container')
  author.appendChild(imgContainer)

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

cardContainer.appendChild(card)
}
//

// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
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


const articleCardParentElement = document.querySelector('.cards-container');

function articleCardCreator(Object){
    const cardContainer = document.createElement('div');
    const headline = document.createElement('div');
    const authorContainer = document.createElement('div');
    const imgContainer = document.createElement('div');
    const authorImg = document.createElement('img');
    const authorName = document.createElement('span');

    cardContainer.classList.add('card');
    headline.classList.add('headline');
    authorContainer.classList.add('author');
    imgContainer.classList.add('img-container');

    cardContainer.appendChild(headline);
    cardContainer.appendChild(authorContainer);
    authorContainer.appendChild(imgContainer);
    authorContainer.appendChild(authorName);
    imgContainer.appendChild(authorImg);

    headline.textContent = Object.headline;
    authorImg.src = Object.authorPhoto;
    authorName.textContent = `By: ${Object.authorName}`;

    return cardContainer;
};

//HTTP GET REQUEST 
var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
};

var client = new HttpClient();
client.get('https://lambda-times-backend.herokuapp.com/articles', function(response) {
    const jsonHTTPObj = JSON.parse(response).articles;
    //console.log(jsonHTTPObj); 
    jsonHTTPObjKeys = [];
    for (const property in jsonHTTPObj) {
        jsonHTTPObjKeys.push(property);
    };
    for (let i=0; i<jsonHTTPObjKeys.length; i++){
        jsonHTTPObj[jsonHTTPObjKeys[i]].forEach((content) => {
            articleCardParentElement.appendChild(articleCardCreator(content))
        });
    };
}); 

 const cards = [
    {
      backgroundImg: "images/moroco.jpg",
      nameOfCountry: "MOROCCO",
      price: "$3,025",
      dateTime: "April: 5th-16th ",
      Location: "MOUNT TOUBKAL",
      local: false
    },
    {
        backgroundImg: "images/lolldaiga.jpg",
        nameOfCountry: "KENYA",
        price: "ksh 53,000",
        dateTime: "May-31st to June-2nd",
        Location: "Lolldaiga",
        local: true
      },
      {
        backgroundImg: "images/machu.jpg",
        nameOfCountry: "PERU",
        price: "$5,740",
        dateTime: "June-15 to June-29th ",
        Location: "MACHU PIC-CHU",
        local: false
      },
      {
        backgroundImg: "images/gorilla.jpg",
        nameOfCountry: "UGANDA",
        price: "$2,090",
        dateTime: "July-12th to July-17th",
        Location: "GORILLA TRACKING",
        local: false,
      },
      {
        backgroundImg: "images/blanc.webp",
        nameOfCountry: "FRANCE & SWITZERLAND",
        price: "$2,170",
        dateTime: "31-July to August-5th ",
        Location: "MOUNT BLANC",
        local: false
      },
      {
        backgroundImg: "images/portugal.avif",
        nameOfCountry: "PORTUGAL",
        price: "$3,100",
        dateTime: "Aug-5th to Aug-13th ",
        Location: "PORTUGAL",
        local: false
      },
      {
        backgroundImg: "images/meru.jpg",
        nameOfCountry: "TANZANIA",
        price: "$770",
        dateTime: "Sep-5th to Sep-9th",
        Location: "Mount Meru",
        local: false
      },
      {
        backgroundImg: "images/drakensberg.jpeg",
        nameOfCountry: "LESOTHO & SOUTH AFRICA",
        price: "$800",
        dateTime: "Sep-20th to Sep24th",
        Location: "DrackensBurg",
        local: false
      },
      {
        backgroundImg: "images/capetown.jpeg",
        nameOfCountry: "SOUTH AFRICA",
        price: "$800",
        dateTime: "Sep-24th to Sep-29th",
        descriptionTitle:
          "We believe everyone — even our little ones — should get a chance to experience the peace, freedom, and healing of the great outdoors; that’s why we restructured the William Hill hike to make it more child-friendly. Our William Hill hike starts at the base of the Kikuyu escarpment, 7.5 km off the Mai Mahiu highway. The hike starts with an initial 1.5 km gentle trek before taking a 2 km ascent up the Kikuyu escarpment. The hike ends back at the starting point, covering a total of approximately 7 km.",
        Location: "CAPE TOWN",
        local: false
      },
      {
        backgroundImg: "images/kenya.jpeg",
        nameOfCountry: "KENYA",
        price: "ksh 48,900",
        dateTime: "Oct-17th to Oct-20th",
        Location: "MOUNT KENYA",
        local: true
      },
      {
        backgroundImg: "images/place-3.jpg",
        nameOfCountry: "VIETNAM & THAILAND",
        price: "$4,265",
        dateTime: "Nov-1st to Nov-14th",
        Location: "THAILAND",
        local: false
      },
      {
        backgroundImg: "images/place-3.jpg",
        nameOfCountry: "KENYA",
        price: "ksh 50,000",
        dateTime: "December",
        Location: "NORTHERN KENYA",
        local: true
      },
  ];
  
const tripElement = document.getElementById("upcomingTrip") 
const tripArrayElement = document.getElementById("upcomingTrip") 
const internationalButton = document.getElementById("international-button")
const localButton = document.getElementById("local-button")
const titleButton = document.getElementById("title-button")




const init = (filterBy, element)=>{
  let tripHtml = "";
  cards.filter(card=> card.local === filterBy).forEach(card => {

    // ftco-animate  visibility hidden, opacity 0
    // i removed the class above from the dice below
    tripHtml += `
      <div class="col-md-4"> 
        <div class="project-wrap">
          <div
            href="#"
            class="img br"
            style="background-image: url(${card.backgroundImg})"
          ></div>
          <div class="text p-4">
            <span class="price">${card.price}/person</span>
            <span class="days">8 Days Tour</span>
            <h3><a href="#">${card.nameOfCountry}</a></h3>
            <p class="location"><span class="ion-ios-map"></span> ${card.Location}</p>
            <p class="location"><span class="ion-ios-map"></span> ${card.dateTime}</p>
            <ul>
              <li><span class="flaticon-shower"></span>2</li>
              <li><span class="flaticon-king-size"></span>3</li>
              <li><span class="flaticon-mountains"></span>Near Mountain</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  });
  
  element.innerHTML = tripHtml  
  // element.classList.add("test")
  // element.classList.remove("test")
 
}

// Filter for Local

localButton.addEventListener("click", (e)=>{
  e.preventDefault()
  const isLocal = true
  init(isLocal, tripElement)
  titleButton.textContent = "Local Hikes"
})

// Filter for International
internationalButton.addEventListener("click", (e)=>{
  e.preventDefault()
  // constLocal = false
  const isLocal = false
  init(isLocal, tripElement)
  titleButton.textContent = "International Hikes"
})

// Initially show all trips (or adjust as needed)

document.addEventListener("DOMContentLoaded", ()=>{
  const isLocal = false
  init(isLocal, tripElement)
})


// Handle card click event (assuming cards are within tripElement with class "project-wrap")
tripElement.addEventListener("click", (event) => {
  if (event.target.classList.contains("project-wrap")) {
    const clickedCard = event.target;
    const cardInfoString = clickedCard.dataset.cardInfo; // Get card data from data attribute

    // Error handling: Check if cardInfoString is available and valid JSON
    if (cardInfoString && cardInfoString.trim() !== "") {
      try {
        const cardInfo = JSON.parse(cardInfoString);

        // Create a new window with the card details (modify HTML as needed)
        const newWindow = window.open("", "_blank");
        newWindow.document.write(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <title>${cardInfo.nameOfCountry} Hike Details</title>
          </head>
          <body>
            <h1>${cardInfo.nameOfCountry} Hike</h1>
            <img src="${cardInfo.backgroundImg}" alt="${cardInfo.nameOfCountry} Hike Image">
            <p>Price: ${cardInfo.price}/person</p>
            <p>Duration: 8 Days Tour</p>
            <p>Location: ${cardInfo.Location}</p>
            <p>Date & Time: ${cardInfo.dateTime}</p>
            ${cardInfo.descriptionTitle ? `<p>Description: ${cardInfo.descriptionTitle}</p>` : ""}
          </body>
          </html>
        `);
        newWindow.document.close(); // Close the document to prevent further modifications
      } catch (error) {
        console.error("Error parsing card info:", error);
        // Handle the error gracefully (e.g., display an error message to the user)
      }
    } else {
      console.warn("Card data not found or invalid format.");
      // Handle the case where card data is missing or not in JSON format
    }
  }
});

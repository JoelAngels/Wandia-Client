const cards = [
  {
    id: 1,
    backgroundImg: "images/moroco.jpg",
    nameOfCountry: "MOROCCO",
    price: "$3,025",
    dateTime: "April: 5th-16th ",
    Location: "MOUNT TOUBKAL",
    local: false,
    distance: "7KM",
  },
  {
    id: 2,
    backgroundImg: "images/lolldaiga.jpg",
    nameOfCountry: "KENYA",
    price: "ksh 53,000",
    dateTime: "May-31st to June-2nd",
    Location: "Lolldaiga",
    local: true,
  },
  {
    id: 3,
    backgroundImg: "images/machu.jpg",
    nameOfCountry: "PERU",
    price: "$5,740",
    dateTime: "June-15 to June-29th ",
    Location: "MACHU PIC-CHU",
    local: false,
  },
  {
    id: 4,
    backgroundImg: "images/gorilla.jpg",
    nameOfCountry: "UGANDA",
    price: "$2,090",
    dateTime: "July-12th to July-17th",
    Location: "GORILLA TRACKING",
    local: false,
  },
  {
    id: 5,
    backgroundImg: "images/blanc.webp",
    nameOfCountry: "FRANCE & SWITZERLAND",
    price: "$2,170",
    dateTime: "31-July to August-5th ",
    Location: "MOUNT BLANC",
    local: false,
  },
  {
    id: 6,
    backgroundImg: "images/portugal.avif",
    nameOfCountry: "PORTUGAL",
    price: "$3,100",
    dateTime: "Aug-5th to Aug-13th ",
    Location: "PORTUGAL",
    local: false,
  },
  {
    id: 7,
    backgroundImg: "images/meru.jpg",
    nameOfCountry: "TANZANIA",
    price: "$770",
    dateTime: "Sep-5th to Sep-9th",
    Location: "Mount Meru",
    local: false,
  },
  {
    id: 8,
    backgroundImg: "images/drakensberg.jpeg",
    nameOfCountry: "LESOTHO & SOUTH AFRICA",
    price: "$800",
    dateTime: "Sep-20th to Sep24th",
    Location: "DrackensBurg",
    local: false,
  },
  {
    id: 9,
    backgroundImg: "images/capetown.jpeg",
    nameOfCountry: "SOUTH AFRICA",
    price: "$800",
    dateTime: "Sep-24th to Sep-29th",
    descriptionTitle:
      "We believe everyone — even our little ones — should get a chance to experience the peace, freedom, and healing of the great outdoors; that’s why we restructured the William Hill hike to make it more child-friendly. Our William Hill hike starts at the base of the Kikuyu escarpment, 7.5 km off the Mai Mahiu highway. The hike starts with an initial 1.5 km gentle trek before taking a 2 km ascent up the Kikuyu escarpment. The hike ends back at the starting point, covering a total of approximately 7 km.",
    Location: "CAPE TOWN",
    local: false,
  },
  {
    id: 10,
    backgroundImg: "images/kenya.jpeg",
    nameOfCountry: "KENYA",
    price: "ksh 48,900",
    dateTime: "Oct-17th to Oct-20th",
    Location: "MOUNT KENYA",
    local: true,
  },
  {
    id: 11,
    backgroundImg: "images/place-3.jpg",
    nameOfCountry: "VIETNAM & THAILAND",
    price: "$4,265",
    dateTime: "Nov-1st to Nov-14th",
    Location: "THAILAND",
    local: false,
  },
  {
    id: 12,
    backgroundImg: "images/place-3.jpg",
    nameOfCountry: "KENYA",
    price: "ksh 50,000",
    dateTime: "December",
    Location: "NORTHERN KENYA",
    local: true,
  },
];

const tripElement = document.getElementById("upcomingTrip");
const tripArrayElement = document.getElementById("upcomingTrip");
const internationalButton = document.getElementById("international-button");
const localButton = document.getElementById("local-button");
const titleButton = document.getElementById("title-button");

const init = (filterBy, element) => {
  let tripHtml = "";
  cards
    .filter((card) => card.local === filterBy)
    .forEach((card) => {
      // ftco-animate  visibility hidden, opacity 0
      // i removed the class above from the dice below
      tripHtml += `
      <div class="col-md-4"> 
        <div class="project-wrap">
          <a
            href="#"
            class="img br"
            style="background-image: url(${card.backgroundImg})"
            data-card-id="${card.id}">
          ></a>
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
  element.innerHTML = tripHtml;
  // element.classList.add("test")
  // element.classList.remove("test")
};

// Filter for Local

localButton.addEventListener("click", (e) => {
  e.preventDefault();
  const isLocal = true;
  init(isLocal, tripElement);
  titleButton.textContent = "Local Trips";
});

// Filter for International
internationalButton.addEventListener("click", (e) => {
  e.preventDefault();
  // constLocal = false
  const isLocal = false;
  init(isLocal, tripElement);
  titleButton.textContent = "International Trips";
});

// Initially show all trips (or adjust as needed)

document.addEventListener("DOMContentLoaded", () => {
  const isLocal = false;
  init(isLocal, tripElement);
});

tripElement.addEventListener("click", handleCardClick);

function handleCardClick(event) {
  event.preventDefault(); // Prevent default form submission if applicable

  if (event.target.matches(".img.br")) {
    // Check if clicked element is the card image
    const cardId = event.target.dataset.cardId; // Get the card ID from data-card-id
    window.location.href = `trip-details.html?cardId=${cardId}`; // Redirect to trip-details with card ID
    window.location.href = `trip-details.html?cardId=${cardId}&cards=${encodeURIComponent(
      JSON.stringify(cards)
    )}`;
  }
}

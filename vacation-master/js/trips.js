{/* <div class="col-md-4 ftco-animate">
<div class="project-wrap">
  <a
    href="#"
    class="img br br br"
    style="background-image: url(images/kenya.jpeg)"
  ></a>
  <div class="text p-4">
    <span class="price">$200/person</span>
    <span class="days">8 Days Tour</span>
    <h3><a href="#">Kenya</a></h3>
    <p class="location"><span class="ion-ios-map"></span> Nyeri</p>
    <ul>
      <li><span class="flaticon-shower"></span>2</li>
      <li><span class="flaticon-king-size"></span>3</li>
      <li><span class="flaticon-mountains"></span>Near Mountain</li>
    </ul>
  </div>
</div>
</div> */}



 const cards = [
    {
      backgroundImg: "images/moroco.jpg",
      nameOfCountry: "MOROCCO",
      price: "$3025",
      dateTime: "April: 5th -16th ",
      descriptionTitle:
        "We believe everyone — even our little ones — should get a chance to experience the peace, freedom, and healing of the great outdoors; that’s why we restructured the William Hill hike to make it more child-friendly. Our William Hill hike starts at the base of the Kikuyu escarpment, 7.5 km off the Mai Mahiu highway. The hike starts with an initial 1.5 km gentle trek before taking a 2 km ascent up the Kikuyu escarpment. The hike ends back at the starting point, covering a total of approximately 7 km.",
      Location: "MOUNT TOUBKAL",
    },
    {
        backgroundImg: "images/lolldaiga.jpg",
        nameOfCountry: "KENYA",
        price: "KSH 53,000",
        dateTime: "May-31st to June-2nd",
        descriptionTitle:
          "We believe everyone — even our little ones — should get a chance to experience the peace, freedom, and healing of the great outdoors; that’s why we restructured the William Hill hike to make it more child-friendly. Our William Hill hike starts at the base of the Kikuyu escarpment, 7.5 km off the Mai Mahiu highway. The hike starts with an initial 1.5 km gentle trek before taking a 2 km ascent up the Kikuyu escarpment. The hike ends back at the starting point, covering a total of approximately 7 km.",
        Location: "Lolldaiga",
      },
      {
        backgroundImg: "images/machu.jpg",
        nameOfCountry: "PERU",
        price: "$5740",
        dateTime: "June-15 to June-29th ",
        descriptionTitle:
          "We believe everyone — even our little ones — should get a chance to experience the peace, freedom, and healing of the great outdoors; that’s why we restructured the William Hill hike to make it more child-friendly. Our William Hill hike starts at the base of the Kikuyu escarpment, 7.5 km off the Mai Mahiu highway. The hike starts with an initial 1.5 km gentle trek before taking a 2 km ascent up the Kikuyu escarpment. The hike ends back at the starting point, covering a total of approximately 7 km.",
        Location: "Machu Pic-Chu",
      },
      {
        backgroundImg: "images/gorilla.jpg",
        nameOfCountry: "UGANDA",
        price: "$2090",
        dateTime: "July-12th to July-17th ",
        descriptionTitle:
          "We believe everyone — even our little ones — should get a chance to experience the peace, freedom, and healing of the great outdoors; that’s why we restructured the William Hill hike to make it more child-friendly. Our William Hill hike starts at the base of the Kikuyu escarpment, 7.5 km off the Mai Mahiu highway. The hike starts with an initial 1.5 km gentle trek before taking a 2 km ascent up the Kikuyu escarpment. The hike ends back at the starting point, covering a total of approximately 7 km.",
        Location: "GORILLA TRACKING",
      },
      {
        backgroundImg: "images/blanc.webp",
        nameOfCountry: "France & Switzerland",
        price: "$2170",
        dateTime: "31-July to August-5th ",
        descriptionTitle:
          "We believe everyone — even our little ones — should get a chance to experience the peace, freedom, and healing of the great outdoors; that’s why we restructured the William Hill hike to make it more child-friendly. Our William Hill hike starts at the base of the Kikuyu escarpment, 7.5 km off the Mai Mahiu highway. The hike starts with an initial 1.5 km gentle trek before taking a 2 km ascent up the Kikuyu escarpment. The hike ends back at the starting point, covering a total of approximately 7 km.",
        Location: "MOUNT TOUBKAL",
      },
      {
        backgroundImg: "images/meru.jpg",
        nameOfCountry: "TANZANIA",
        price: "$3025 PP",
        dateTime: "Sep-5th to Sep-9th",
        descriptionTitle:
          "We believe everyone — even our little ones — should get a chance to experience the peace, freedom, and healing of the great outdoors; that’s why we restructured the William Hill hike to make it more child-friendly. Our William Hill hike starts at the base of the Kikuyu escarpment, 7.5 km off the Mai Mahiu highway. The hike starts with an initial 1.5 km gentle trek before taking a 2 km ascent up the Kikuyu escarpment. The hike ends back at the starting point, covering a total of approximately 7 km.",
        Location: "Mount Meru",
      },
      {
        backgroundImg: "images/drakensberg.jpeg",
        nameOfCountry: "LESOTHO & SOUTH AFRICA",
        price: "$800",
        dateTime: "Sep-20th to Sep24th",
        descriptionTitle:
          "We believe everyone — even our little ones — should get a chance to experience the peace, freedom, and healing of the great outdoors; that’s why we restructured the William Hill hike to make it more child-friendly. Our William Hill hike starts at the base of the Kikuyu escarpment, 7.5 km off the Mai Mahiu highway. The hike starts with an initial 1.5 km gentle trek before taking a 2 km ascent up the Kikuyu escarpment. The hike ends back at the starting point, covering a total of approximately 7 km.",
        Location: "DrackensBurg",
      },
      {
        backgroundImg: "images/capetown.jpeg",
        nameOfCountry: "SOUTH AFRICA",
        price: "$800",
        dateTime: "Sep-24th to Sep-29th",
        descriptionTitle:
          "We believe everyone — even our little ones — should get a chance to experience the peace, freedom, and healing of the great outdoors; that’s why we restructured the William Hill hike to make it more child-friendly. Our William Hill hike starts at the base of the Kikuyu escarpment, 7.5 km off the Mai Mahiu highway. The hike starts with an initial 1.5 km gentle trek before taking a 2 km ascent up the Kikuyu escarpment. The hike ends back at the starting point, covering a total of approximately 7 km.",
        Location: "CAPE TOWN",
      },
  ];
  
const tripElement = document.getElementById("upcomingTrip") 
const tripArrayElement = document.getElementById("upcomingTrip") 

let tripHtml = "";

cards.forEach(card => {
  tripHtml += `
    <div class="col-md-4 ftco-animate">
      <div class="project-wrap">
        <a
          href="#"
          class="img br br br"
          style="background-image: url(${card.backgroundImg})"
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

tripElement.innerHTML = tripHtml    



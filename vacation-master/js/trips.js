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
      price: "$3,025",
      dateTime: "April: 5th-16th ",
      Location: "MOUNT TOUBKAL",
    },
    {
        backgroundImg: "images/lolldaiga.jpg",
        nameOfCountry: "KENYA",
        price: "ksh 53,000",
        dateTime: "May-31st to June-2nd",
        Location: "Lolldaiga",
      },
      {
        backgroundImg: "images/machu.jpg",
        nameOfCountry: "PERU",
        price: "$5,740",
        dateTime: "June-15 to June-29th ",
        Location: "MACHU PIC-CHU",
      },
      {
        backgroundImg: "images/gorilla.jpg",
        nameOfCountry: "UGANDA",
        price: "$2,090",
        dateTime: "July-12th to July-17th",
        Location: "GORILLA TRACKING",
      },
      {
        backgroundImg: "images/blanc.webp",
        nameOfCountry: "FRANCE & SWITZERLAND",
        price: "$2,170",
        dateTime: "31-July to August-5th ",
        Location: "MOUNT BLANC",
      },
      {
        backgroundImg: "images/portugal.avif",
        nameOfCountry: "PORTUGAL",
        price: "$3,100",
        dateTime: "Aug-5th to Aug-13th ",
        Location: "PORTUGAL",
      },
      {
        backgroundImg: "images/meru.jpg",
        nameOfCountry: "TANZANIA",
        price: "$770",
        dateTime: "Sep-5th to Sep-9th",
        Location: "Mount Meru",
      },
      {
        backgroundImg: "images/drakensberg.jpeg",
        nameOfCountry: "LESOTHO & SOUTH AFRICA",
        price: "$800",
        dateTime: "Sep-20th to Sep24th",
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
      {
        backgroundImg: "images/kenya.jpeg",
        nameOfCountry: "KENYA",
        price: "ksh 48,900",
        dateTime: "Oct-17th to Oct-20th",
        Location: "MOUNT KENYA",
      },
      {
        backgroundImg: "images/place-3.jpg",
        nameOfCountry: "VIETNAM & THAILAND",
        price: "$4,265",
        dateTime: "Nov-1st to Nov-14th",
        Location: "THAILAND",
      },
      {
        backgroundImg: "images/place-3.jpg",
        nameOfCountry: "KENYA",
        price: "ksh 50,000",
        dateTime: "December",
        Location: "NORTHERN KENYA",
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



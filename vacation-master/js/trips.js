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
      backgroundImg: "images/kenya.jpeg",
      nameOfCountry: "MOROCCO",
      price: "$3025 PP",
      dateTime: "April: 5th -16th ",
      title: "Morocco Hike",
      descriptionTitle:
        "We believe everyone — even our little ones — should get a chance to experience the peace, freedom, and healing of the great outdoors; that’s why we restructured the William Hill hike to make it more child-friendly. Our William Hill hike starts at the base of the Kikuyu escarpment, 7.5 km off the Mai Mahiu highway. The hike starts with an initial 1.5 km gentle trek before taking a 2 km ascent up the Kikuyu escarpment. The hike ends back at the starting point, covering a total of approximately 7 km.",
      Location: "MOUNT TOUBKAL",
    },
    {
        backgroundImg: "images/kenya.jpeg",
        nameOfCountry: "MOROCCO",
        price: "$3025 PP",
        dateTime: "April: 5th -16th ",
        title: "Morocco Hike",
        descriptionTitle:
          "We believe everyone — even our little ones — should get a chance to experience the peace, freedom, and healing of the great outdoors; that’s why we restructured the William Hill hike to make it more child-friendly. Our William Hill hike starts at the base of the Kikuyu escarpment, 7.5 km off the Mai Mahiu highway. The hike starts with an initial 1.5 km gentle trek before taking a 2 km ascent up the Kikuyu escarpment. The hike ends back at the starting point, covering a total of approximately 7 km.",
        Location: "MOUNT TOUBKAL",
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



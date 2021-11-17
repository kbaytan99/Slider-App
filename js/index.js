let OcelotVehicles = [
  {
    Id: 0,
    Name: "Ocelot R88",
    Description:
      "The design of the Ocelot R88 (Formula 1 Car) is based on a real life Lotus 97T, Alfa Romeo 179B and various 1980 F1 Cars.",
    Speed: "167 km/h",
    Image: "img/OcelotR.jpg",
  },
  {
    Id: 1,
    Name: "Ocelot Jugular",
    Description:
      "The design of the Ocelot Jugular is based on a real life Jaguar XE SV Project 8.",
    Speed: "157 km/h",
    Image: "img/OcelotJugular.jpg",
  },
  {
    Id: 2,
    Name: "Ocelot Locust",
    Description:
      "The design of the Ocelot Locust is based on a real life 2015 Lotus 3-Eleven.",
    Speed: "154 km/h",
    Image: "img/OcelotLocust.jpg",
  },
  {
    Id: 3,
    Name: "Ocelot Swinger",
    Description:
      "The design of the Ocelot Swinger is based on a real life Jaguar XJ13, Lucra LC470.",
    Speed: "160 km/h",
    Image: "img/OcelotSwinger.jpg",
  },
  {
    Id: 4,
    Name: "Ocelot Stromberg",
    Description:
      "The design of the Ocelot Stromberg is based on a real life Maserati Bora.",
    Speed: "150 km/h",
    Image: "img/OcelotStromberg.jpg",
  },
  {
    Id: 5,
    Name: "Ocelot Pariah",
    Description:
      "The design of the Ocelot Pariah is based on a real life Ferrari 812 Superfast/Aston Martin V12 Zagato.",
    Speed: "210 km/h",
    Image: "img/OcelotPariah.jpg",
  },
  {
    Id: 6,
    Name: "Ocelot Ardent",
    Description:
      "The design of the Ocelot Ardent is based on a real life Lotus Esprit.",
    Speed: "148 km/h",
    Image: "img/OcelotArdent.jpg",
  },
  {
    Id: 7,
    Name: "Ocelot XA-21",
    Description:
      "The design of the Ocelot XA-21 is based on a real life Jaguar C-X75, McLaren P1, Maserati GranTurismo, Koenigsegg Regera.",
    Speed: "197 km/h",
    Image: "img/OcelotX.jpg",
  },
  {
    Id: 8,
    Name: "Ocelot Penetrator",
    Description:
      "The design of the Ocelot Penetrator is based on a real life Jaguar XJ220, Saleen S7.",
    Speed: "199 km/h",
    Image: "img/OcelotPenetrator.jpg",
  },
  {
    Id: 9,
    Name: "Ocelot Lynx",
    Description:
      "The design of the Ocelot Lynx is based on a real life Jaguar F-Type.",
    Speed: "195 km/h",
    Image: "img/OcelotLynx.jpg",
  },
  {
    Id: 10,
    Name: "Ocelot Jackal",
    Description:
      "The design of the Ocelot Jackal is based on a real life Jaguar XF/Maserati Quattroporte.",
    Speed: "182 km/h",
    Image: "img/OcelotJackal.jpg",
  },
  {
    Id: 11,
    Name: "Ocelot F620",
    Description:
      "The design of the Ocelot F620 is based on a real life Jaguar XK, Maserati GranTurismo.",
    Speed: "189 km/h",
    Image: "img/OcelotF.jpg",
  },
];
var randomImage = Math.floor(Math.random() * OcelotVehicles.length);
function webSiteFirstImage() {
  document.querySelector("#slider").src = OcelotVehicles[randomImage].Image;
  for (let a = 0; a < 3; a++) {
    var randomVeh = Math.floor(Math.random() * OcelotVehicles.length);
    document.querySelectorAll("#cards-img")[a].src =
      OcelotVehicles[randomVeh].Image;
    document.querySelectorAll("#cards-title")[a].innerHTML =
      OcelotVehicles[randomVeh].Name;
    document.querySelectorAll("#cards-description")[a].innerHTML =
      OcelotVehicles[randomVeh].Description;
  }
}
function leftButtonClick() {
  if (randomImage > 0) {
    randomImage--;
    return (document.querySelector("#slider").src =
      OcelotVehicles[randomImage].Image);
  } else if (OcelotVehicles[randomImage].Id == 0) {
    document.querySelector("#slider").src =
      OcelotVehicles[randomImage + 11].Image;
    return (randomImage = 11);
  }
}
function rightButtonClick() {
  if (randomImage < 11) {
    randomImage++;
    return (document.querySelector("#slider").src =
      OcelotVehicles[randomImage].Image);
  } else if (OcelotVehicles[randomImage].Id == 11) {
    document.querySelector("#slider").src =
      OcelotVehicles[randomImage - 11].Image;
    return (randomImage = 0);
  }
}

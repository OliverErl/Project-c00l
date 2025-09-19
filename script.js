const mapData = {
  island: {
    title: "The Island",
    image: "Bilder/The_Island_Map.jpg",
    description:
      "The Island consists of multiple climatic and geological regions. There are five larger mountains in the north and plains in the south. Three large Obelisk form a triangle on the Island.",
  },
  scorched: {
    title: "Scorched Earth",
    image: "Bilder/Scorched_Earth_Map.jpg",
    description:
      "Scorched Earth is a desert map with dangerous weather and unique creatures.",
  },
  aberration: {
    title: "Aberration",
    image: "Bilder/Aberration_Map.jpg",
    description:
      "Aberration features underground biomes, hazards, and new creatures.",
  },
  extinction: {
    title: "Extinction",
    image: "Bilder/Extinction_Map.jpg",
    description:
      "Extinction is set on a ruined Earth with new challenges and creatures.",
  },
};

document.querySelectorAll(".other-maps img").forEach((img) => {
  img.addEventListener("click", function () {
    const mapKey = img.dataset.map;
    document.getElementById("map-title").textContent = mapData[mapKey].title;
    document.getElementById("map-image").src = mapData[mapKey].image;
    document.getElementById("map-image").alt = mapData[mapKey].title;
    document.getElementById("map-description").textContent =
      mapData[mapKey].description;
    document.getElementById("map-info").classList.add("active");
  });
});


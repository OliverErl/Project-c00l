const mapData = {
  island: {
    title: "The Island",
    image: "Bilder/The_Island_Map.jpg",
    description:
      "The Island is the first ARK and the most balanced environment, featuring beaches, jungles, swamps, snow-covered mountains, caves, and oceans. It introduces players to the survival loop and the mystery of the Obelisks. The story here reveals that the Island is actually an artificial space station orbiting Earth, designed to test survivors through bosses like the Broodmother, Megapithecus, and Dragon.",
  },
  scorched: {
    title: "Scorched Earth",
    image: "Bilder/Scorched_Earth_Map.jpg",
    description:
      "Scorched Earth shifts the setting to a scorching desert ARK dominated by sand dunes, mesas, canyons, and oases. Water scarcity, sandstorms, and extreme heat are constant challenges. Creatures like Wyverns and Deathworms define this map. The story expands on the idea that there are multiple ARKs, each designed with unique environments to test adaptability.",
  },
  aberration: {
    title: "Aberration",
    image: "Bilder/Aberration_Map.jpg",
    description:
      "Aberration takes place on a damaged ARK with a surface ruined by radiation. Survivors are forced underground into glowing fungal forests, bioluminescent caves, and dangerous chasms. With no natural flyers, travel relies on climbing and gliding creatures. The map introduces Rockwell as a major antagonist after he mutates into a monstrous being through Element corruption, tying the survivor experience to a personal enemy for the first time.",
  },
  extinction: {
    title: "Extinction",
    image: "Bilder/Extinction_Map.jpg",
    description:
      "Extinction abandons orbital ARKs and returns players to Earth itself. The planet is devastated, covered in ruined cities, wastelands, and biomes corrupted by Element. Enormous Titans dominate as raid-style bosses, and the map showcases the endgame of the ARK system. The story here explains that the ARKs were launched to preserve life until Earth could be reclaimed, and defeating the Titans is part of that restoration.",
  },
  genesis_part_1: {
    title: "Genesis Part 1",
    image: "Bilder/Genesis_Part_1_Map.jpg",
    description:
      "Genesis: Part 1 takes place inside a massive virtual simulation rather than a traditional ARK. The map is divided into five distinct biomes — volcanic hellscapes, frigid arctic tundras, toxic swamps, deep ocean trenches, and a low-gravity lunar region. Each zone presents extreme hazards, from erupting volcanoes to space radiation, with missions instead of traditional caves and artifacts. Survivors are guided by HLN-A, an AI companion based on Helena Walker, as they uncover more about the ARK system and the growing threat of Edmund Rockwell. The story shows that Rockwell has infiltrated the simulation, hinting at his corruption spreading even further.",
  },
  genesis_part_2: {
    title: "Genesis Part 2",
    image: "Bilder/Genesis_Part_1_Map.jpg",
    description:
      "Genesis: Part 2 is the final story map, set aboard a massive colony ship traveling through deep space. The map features two enormous regions: one is a lush, Eden-like biome of rivers, mountains, and forests, while the other is a twisted, corrupted landscape dominated by Rockwell’s growth and Element tendrils. Instead of scattered caves and bosses, survivors take on Rockwell himself as the final confrontation, battling within his grotesque domain. The story concludes with the destruction of the ship, Rockwell’s defeat, and the survivors crash-landing on a new world — setting the stage for ARK 2.",
  },
};
document.querySelectorAll(".other-maps img").forEach((img) => {
  img.addEventListener("click", function () {
    document.getElementById('map-info').classList.add('active');
    const mapKey = img.dataset.map;
    document.getElementById("map-title").textContent = mapData[mapKey].title;
    document.getElementById("map-image").src = mapData[mapKey].image;
    document.getElementById("map-image").alt = mapData[mapKey].title;
    document.getElementById("map-description").textContent =
      mapData[mapKey].description;
    document.getElementById("map-info").classList.add("active");
  });
});

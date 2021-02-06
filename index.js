import Rick from "./modules/RickAndMorty.js";

const RickAndMorty = new Rick();
//debugger;
RickAndMorty.getLocationName().then((data) => {
    document.getElementById("locationCounter").innerHTML = "1";
});

RickAndMorty.getEpisodeName().then((data) => {
    debugger
    document.getElementById("episodeCounter").innerHTML = "2";
});

RickAndMorty.getCharacterName().then((data) => {
    document.getElementById("characterCounter").innerHTML = "3";
});
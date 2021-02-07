import Rick from "./modules/RickAndMorty.js";
//console.time("t1");
const RickAndMorty = new Rick();
//debugger;
RickAndMorty.getLocationName().then((data) => {
    const quantity = Object.values(data.results).reduce((a, n) => {
        return a+ n.name.match(/l/ig).length;
    }, 0);
    document.getElementById("locationCounter").innerHTML = quantity;
});

RickAndMorty.getEpisodeName().then((data) => {
    const quantity = Object.values(data.results).reduce((a, n) => {
        return a+ n.name.match(/e/ig).length;
    }, 0);
    document.getElementById("episodeCounter").innerHTML = quantity;
});

RickAndMorty.getCharacterName().then((data) => {
    const quantity = Object.values(data.results).reduce((a, n) => {
        return a+ n.name.match(/c/ig).length;
    }, 0);
    document.getElementById("characterCounter").innerHTML = quantity;
});

console.log(RickAndMorty.getCountPage());
//console.timeEnd("t1");

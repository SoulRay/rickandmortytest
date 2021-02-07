import Rick from "./modules/RickAndMorty.js";
console.time("t1");
const RickAndMorty = new Rick();

const totalChar = async () => { 
    document.getElementById("locationCounter").innerHTML = await RickAndMorty.getLetterQtyByName('location', 'l', 'l');
    document.getElementById("episodeCounter").innerHTML = await RickAndMorty.getLetterQtyByName('episode', 'e', 'e');
    document.getElementById("characterCounter").innerHTML = await RickAndMorty.getLetterQtyByName('character', 'c', 'c');
};

totalChar();
console.timeEnd("t1");

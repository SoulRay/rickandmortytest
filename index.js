import Rick from "./modules/RickAndMorty.js";

const RickAndMorty = new Rick();

const totalChar = async () => { 
    console.time("t1");
    document.getElementById("locationCounter").innerHTML = await RickAndMorty.getLetterQtyByName('location', 'l', 'l');
    document.getElementById("episodeCounter").innerHTML = await RickAndMorty.getLetterQtyByName('episode', 'e', 'e');
    document.getElementById("characterCounter").innerHTML = await RickAndMorty.getLetterQtyByName('character', 'c', 'c');
    console.timeEnd("t1");
};

totalChar();


const init = async () => {
    console.time("t2");
    debugger;
    let newObject = {};
    const location = await RickAndMorty.getAllResourceData('location');
    const character = await RickAndMorty.getAllResourceData('character');
    const episode = await RickAndMorty.getAllResourceData('episode');
    newObject.totalEpisode = episode.length;
    const episodeFilter = episode.map(x => {
        //debugger;
        const character2 = x.characters;
        return {'episode': x.id ,character2};
    });


    console.timeEnd("t2");
}

init();

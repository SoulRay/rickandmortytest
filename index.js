import Rick from "./modules/RickAndMorty.js";
const RickAndMorty = new Rick();

const charCounter = async () => { 
    const begin = Date.now();
    document.getElementById("charCount").innerHTML = `<div>Total letras L en Location: ${await RickAndMorty.getLetterQtyByName('location', 'l', 'l')}</div>
                                                    <div>Total letras E en Episode: ${await RickAndMorty.getLetterQtyByName('episode', 'e', 'e')}</div>
                                                    <div>Total letras C en Character: ${await RickAndMorty.getLetterQtyByName('character', 'c', 'c')}</div>`
    const end = Date.now();
    document.getElementById('execTimeOne').innerHTML = `Tiempo de ejecuci&oacute;n: ${(end-begin)/1000+" secs"}`;
};

charCounter();

const episodeLocation = async () => {
    const begin = Date.now();    
    const episode = await RickAndMorty.getAllResourceData('episode');
    const character = await RickAndMorty.getAllResourceData('character');

    const episodeFilter = episode.map(x => {
        const characterUrl = x.characters;

        const returnOrigins = characterUrl.map(y => {
            const characterFilter = character.filter(c => c.url == y);
            return characterFilter[0].origin.name;
        });

        const origin = returnOrigins.filter((value, index, array) => index === array.indexOf(value));
        return {'episode': x.id, 'originList' : origin};
    });

    let table = `<table id='episodeTable'>`;
    episodeFilter.map(x => {
        return table += `
                        <tr>
                            <td>
                                Episode: ${x.episode}
                            </td>
                            <td>
                                Location Origin: ${x.originList.length}
                                <br>
                                ${'<li>'+x.originList.join().replaceAll(',', '<li>')}
                            </td>
                        </tr>`
    });

    table += `</table>`;
    document.getElementById('table').innerHTML = table;
    const end = Date.now();
    document.getElementById('execTimeTwo').innerHTML = `Tiempo de ejecuci&oacute;n: ${(end-begin)/1000+" secs"}`;
}

episodeLocation();



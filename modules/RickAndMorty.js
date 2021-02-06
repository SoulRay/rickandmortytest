export default class RickAndMorty {
    getLocationName() {
        return fetch('https://rickandmortyapi.com/api/location/?name=l')
        .then((response) => response.json())
        //.then((data) => data)
    }

    getEpisodeName() {
        return fetch('https://rickandmortyapi.com/api/episode/?name=e')
        .then((response) => response.json())
        //.then((data) => data)
    }

    getCharacterName() {
        return fetch('https://rickandmortyapi.com/api/character/?name=c')
        .then((response) => response.json())
    }
}
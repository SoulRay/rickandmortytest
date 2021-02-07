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

    async getCountPage() {
        debugger;
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character/?name=c');
            const data = await response.json();
            const qtyPages = await data.info.pages
            return qtyPages;
        } catch (error) {
            console.error(error);
        }
        
    }
}
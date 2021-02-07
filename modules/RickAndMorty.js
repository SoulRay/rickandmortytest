export default class RickAndMorty {
    // getLocationName() {
    //     return fetch('https://rickandmortyapi.com/api/location/?name=l')
    //     .then((response) => response.json())
    //     //.then((data) => data)
    // }

    // getEpisodeName() {
    //     return fetch('https://rickandmortyapi.com/api/episode/?name=e')
    //     .then((response) => response.json())
    //     //.then((data) => data)
    // }

    // async getCharacterName() {
    //     debugger;
    //     const count = await this.getCountPage();
    //     return fetch('https://rickandmortyapi.com/api/character/?name=c&page=2')
    //     .then((response) => response.json())
    //     .then((data) => {
    //         const quantity = Object.values(data.results).reduce((a, n) => {
    //             return a+ n.name.match(/c/ig).length;
    //         }, 0);
    //         document.getElementById("characterCounter").innerHTML = quantity;
    //     });
    // }

    async getLetterQtyByName(resource, searchName, searchLetter) {
        try {
            const countPage = await this.getCountPage(resource, searchName);
            const regMatch = new RegExp(`${searchLetter}`, 'ig');
            let totalQty = 0;
            for (let i = 0; i < countPage; i++) {
                const response = await fetch(`https://rickandmortyapi.com/api/${resource}/?name=${searchName}&page=${countPage[i]}`);
                const data = await response.json();
                const quantity = await Object.values(data.results).reduce((a, n) => {
                    return a + (n.name.match(regMatch) == null ? 0 : n.name.match(regMatch).length);
                }, 0);
                totalQty += quantity;
            }
            return totalQty;
        } catch (error) {
            console.error(error);
        }
    }

    async getCountPage(resource, searchName) {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/${resource}/?name=${searchName}`);
            const data = await response.json();
            const qtyPages = await data.info.pages;
            return qtyPages;
        } catch (error) {
            console.error(error);
        }

    }
}
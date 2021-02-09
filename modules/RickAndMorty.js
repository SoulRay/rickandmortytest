export default class RickAndMorty {
    constructor() {
        this.url = 'https://rickandmortyapi.com/api/';
    }
    
    async getLetterQtyByName(resource, searchName, searchLetter) {
        try {
            const countPage = await this.getCountPage(resource, searchName);
            const regMatch = new RegExp(`${searchLetter}`, 'ig');
            let totalQty = 0;
            for (let i = 1; i <= countPage; i++) {
                const response = await fetch(`${this.url + resource}/?name=${searchName}&page=${i}`);
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
            const response = await fetch(`${this.url + resource}/?name=${searchName}`);
            const data = await response.json();
            const qtyPages = await data.info.pages;
            return qtyPages;
        } catch (error) {
            console.error(error);
        }
    }

    async getAllResourceData(resource) {
        try {
            const countPage = await this.getCountPage(resource, '');
            let allData = [];
            for (let i = 1; i <= countPage; i++) {
                const response = await fetch(`${this.url + resource}/?page=${i}`);
                const data = await response.json();
                data.results.map(x => allData.push(x)); 
            }
            return allData;
        } catch (error) {
            console.error(error);
        }
    }
}
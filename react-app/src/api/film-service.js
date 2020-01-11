class FilmService {
    constructor() {
        this.url = 'https://reactjs-cdp.herokuapp.com/movies';
    }

    async search({ search /* title/genre */, value, sort }) {
        return await fetch(`${this.url}?searchBy=${search}&search=${value}&sortBy=${sort}&limit=50&sortOrder=desc`);
    }

    async searchById(id) {
        return await fetch(`${this.url}/${id}`);
    }
}

export default new FilmService();
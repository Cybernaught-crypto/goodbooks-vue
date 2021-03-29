import axios from 'axios';
export default class BookService {
    constructor() {
        this.API_URL = process.env.VUE_APP_API_URL;
    }
    // API_URL = "http://localhost:5000/api";
    async getAllBooks() {
        console.log("Stored API URL", this.API_URL);
        // let result = await axios.get('${this.API_URL}/books/')
        let result = await axios.get('http://localhost:5000/api/books/');
        console.log("result", result.data);
        return result.data;
    }
    async addNewBook(book) {
        let result = await axios.post('http://localhost:5000/api/books/', book);
        console.log("result", result.data);
        return result.data;
    }
    async deleteBook(id) {
        console.log("id into book service", id);
        // let result = await axios.delete('http://localhost:5000/api/books/8') <-- works
        // let result = await axios.delete("http://localhost:5000/api/books/${id}") <-- bad request 405
        let result = await axios.delete('http://localhost:5000/api/books/', { data: id });
        return result.data;
    }
}
//# sourceMappingURL=book-service.js.map
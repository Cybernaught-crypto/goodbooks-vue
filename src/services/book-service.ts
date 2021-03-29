import axios from 'axios';
import IBook from "@/types/Book";


export default class BookService {


    API_URL = process.env.VUE_APP_API_URL;

    // API_URL = "http://localhost:5000/api";



    public async getAllBooks(): Promise<IBook[]> {
        console.log("Stored API URL", this.API_URL);
        // let result = await axios.get('${this.API_URL}/books/')
        let result = await axios.get('http://localhost:5000/api/books/')
        console.log("result", result.data);

        return result.data;
    }

    public async addNewBook(book: IBook) {
        let result = await axios.post('http://localhost:5000/api/books/', book)
        console.log("result", result.data);

        return result.data;

    }

    public async deleteBook(id: number) {
        console.log("id into book service", id)

        // let result = await axios.delete('http://localhost:5000/api/books/8') <-- works
        // let result = await axios.delete("http://localhost:5000/api/books/${id}") <-- bad request 405
        let result = await axios.delete('http://localhost:5000/api/books/', { data: id });
        return result.data;

    }


}
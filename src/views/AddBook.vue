<template>
  <div class="add-book-wrapper">
    <h1>Add Book</h1>
    <div class="add-book-form">
      <ul class="new-book">
        <li>
          <label for="title"> Book Title </label>
          <input type="text" id="title" v-model="book.title" />
          <!-- v-model provides two way binding -->
        </li>
        <li>
          <label for="author"> Author </label>
          <input type="text" id="author" v-model="book.author" />
        </li>
      </ul>
      <button :disabled="isButtonDisabled" @click="addBook">Add Book</button>
    </div>
  </div>
</template>

<script lang="ts">
import BookService from "@/services/book-service";
import IBook from "@/types/Book";
import { Component, Vue } from "vue-property-decorator";

const bookService = new BookService();

@Component({
  name: "AddBook",
  components: {},
})
export default class AddBook extends Vue {
  book: IBook = {
    title: "",
    author: "",
    // createdOn: Date,
    // updatedOn: "",
  };

  get isButtonDisabled() {
    return this.book.title === "" || this.book.author === "";
  }

  addBook() {
    console.log("adding book");
    bookService.addNewBook(this.book);
  }
}
</script>

<style scoped lang="scss">
.new-book {
  list-style: none;
  padding: 0;
  margin: 0;
}

input {
  height: 1.8rem;
  margin-bottom: 1.2rem;
  font-size: 1.1rem;
  line-height: 1.3rem;
  padding: 0.2rem;
  color: #555;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.3rem;
}
</style>
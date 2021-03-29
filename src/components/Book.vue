<template>
  <div class="book-wrapper">
    <div class="book-title">
      {{ book.title }}
    </div>
    <div class="book-author">
      {{ book.author }}
    </div>
    <div class="book-created">
      {{ book.createdOn | humanize }}
    </div>
    <div @click="deleteBook(book.id)" class="delete">X</div>
  </div>
</template>

<script lang="ts">
import BookService from "@/services/book-service";
import IBook from "@/types/Book";
import { Component, Prop, Vue } from "vue-property-decorator";

const bookService = new BookService();

@Component({
  name: "Book",
  components: {},
})
export default class Book extends Vue {
  //    Passing data down to child component.
  @Prop({ required: true })
  book!: IBook;

  async deleteBook(id: number) {
    console.log("delete book with ", id);

    await bookService.deleteBook(id);
    this.$emit("deleted", id);

    console.log("from bookService with ", id);
  }
}
</script>

<style scoped lang="scss">
.book-wrapper {
  position: relative;
  margin: 0.8rem;
  padding: 0.4rem;
  background-color: #fafafa;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  .book-title {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .book-author {
    //   font-size: 2rem;
    color: #333;
  }

  .book-created {
    font-size: 0.9rem;
    color: #333;
  }

  .delete {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 0.75rem;
    font-weight: bold;
    color: #f51646;
    cursor: pointer;
  }
}

.book-wrapper:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
}
</style>
<template>
  <div class="books">
    <h1>My Books</h1>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import IBook from "@/types/Book";
import BookService from  "@/services/book-service";


const bookService = new BookService();

@Component({
  name: 'MyBooks',
  components: {}
})
export default class MyBooks extends Vue {

// Things that can be invoked inside a vue component.

// data
myBooks: IBook[] = [];

// computed properties
get bookCount() {
  return this.myBooks.length;

}

// props

// methods

// lifecycle hooks
created() {

}

//  watchers


}
</Script>

<style lang="scss">

</style>
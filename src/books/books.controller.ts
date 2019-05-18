import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dto/create-book.dto';

@Controller('books')
export class BooksController {

    //
    constructor(private booksService: BooksService) {}

    // fetch the list of all books. It has @Get() decorator attached to it.
    // This helps to map any GET request sent to /books to this controller.
    @Get()
    async getBooks() {
        const books = await this.booksService.getBooks();
        return books;
    }

    // retrieve the details of a particular book by passing the bookID as a parameter.
    @Get(':bookID')
    async getBook(@Param('bookID') bookID) {
        const book = await this.booksService.getBook(bookID);
        return book;
    }

    // create and post a new book to the existing book list.
    // the newly added book will only be held in memory.
    @Post()
    async addBook(@Body() createBookDTO: CreateBookDTO) {
        const book = await this.booksService.addBook(createBookDTO);
        return book;
    }

    // delete a book by passing the bookID as a query parameter.
    @Delete()
    async deleteBook(@Query() query) {
        const books = await this.booksService.deleteBook(query.bookID);
        return books;
    }
}

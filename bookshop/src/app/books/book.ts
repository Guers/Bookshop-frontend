export interface Book {
    bookId: number,
    title: string,
    author: string,
    picture: string,
    publicationYear: number
}

export interface    Category {
    categoryId: number,
    categoryTitle: string,
    books: Book[]
}
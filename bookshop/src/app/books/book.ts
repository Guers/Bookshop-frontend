export interface Book {
    bookId: number,
    title: string,
    author: string,
    picture: string,
    publicationYear: string,
    categoryId :number,
    categoryTitle?:string
    description?:string
}

export interface  Category {
    categoryId: number,
    categoryTitle: string,
}

export interface CategoryBook {
   category : Category,
   books : Book []
}
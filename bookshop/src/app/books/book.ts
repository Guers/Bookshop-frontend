export interface Book {
    id: number,
    title: string,
    author: string,
    picture: string,
    publicationDate: string,
    categoryId :number,
    categoryName?:string
    description?:string
}

export interface  Category {
    id: number,
    name: string,
}

export interface CategoryBook {
   category : Category,
   books : Book []
}
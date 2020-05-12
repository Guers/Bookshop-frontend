import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from './book';

export class BookData implements InMemoryDbService {

  createDb() {
    const books: Category[] = [
        {
          categoryId:1,
          categoryTitle : 'Romance',
          books :[
          { bookId: 1, title: 'Goodnight Moon', author: 'Margaret Wise Brown',picture: '../../assets/romance.jpg', publicationYear: 1953 },
          { bookId: 2, title: 'Winnie-the-Pooh', author: 'A. A. Milne',picture: '../../assets/romance2.jpg', publicationYear: 1926 },
          { bookId: 3, title: 'Where the Wild Things Are', author: 'Maurice Sendak', picture: '../../assets/romance3.jpg', publicationYear: 1963 },
          { bookId: 4, title: 'The Hobbit', author: 'J. R. R. Tolkien', picture: '../../assets/histoire.jpg', publicationYear: 1937 },
          { bookId: 5, title: 'Curious George', author: 'H. A. Rey',picture: '../../assets/aventure.jpg', publicationYear: 1941 },
          { bookId: 6, title: 'Alice\'s Adventures in Wonderland', author: 'Lewis Carroll', picture: '../../assets/BD.jpg', publicationYear: 1865 },
      
          ]
        },
        {
          categoryId:2,
          categoryTitle : 'Bande Déssinée',
          books :[
          { bookId: 1, title: 'Goodnight Moon', author: 'Margaret Wise Brown',picture: '../../assets/BD.jpg', publicationYear: 1953 },
          { bookId: 2, title: 'Winnie-the-Pooh', author: 'A. A. Milne',picture: '../../assets/BD2.jpg', publicationYear: 1926 },
          { bookId: 3, title: 'Where the Wild Things Are', author: 'Maurice Sendak',picture: '../../assets/BD3.jpg', publicationYear: 1963 },
          { bookId: 4, title: 'The Hobbit', author: 'J. R. R. Tolkien',picture: '../../assets/BD2.jpg', publicationYear: 1937 },
          { bookId: 5, title: 'Curious George', author: 'H. A. Rey',picture: '../../assets/BD.jpg', publicationYear: 1941 },
          { bookId: 6, title: 'Alice\'s Adventures in Wonderland', author: 'Lewis Carroll',picture: '../../assets/BD3.jpg', publicationYear: 1865 },
      
          ]
        },
        {
          categoryId:3,
          categoryTitle : 'Aventure',
          books :[
          { bookId: 1, title: 'Goodnight Moon', author: 'Margaret Wise Brown',picture: '../../assets/aventure.jpg', publicationYear: 1953 },
          { bookId: 2, title: 'Winnie-the-Pooh', author: 'A. A. Milne',picture: '../../assets/aventure2.jpg', publicationYear: 1926 },
          { bookId: 3, title: 'Where the Wild Things Are', author: 'Maurice Sendak',picture: '../../assets/histoire.jpg', publicationYear: 1963 },
          { bookId: 4, title: 'The Hobbit', author: 'J. R. R. Tolkien',picture: '../../assets/recette.jpg', publicationYear: 1937 },
          { bookId: 5, title: 'Curious George', author: 'H. A. Rey',picture: '../../assets/BD.jpg', publicationYear: 1941 },
          { bookId: 6, title: 'Alice\'s Adventures in Wonderland', author: 'Lewis Carroll',picture: '../../assets/romance.jpg', publicationYear: 1865 },
      
          ]
        }
      
      ];
    return { books };
  }
}

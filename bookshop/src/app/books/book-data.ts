import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from './book';

export class BookData implements InMemoryDbService {

  createDb() {
    const books: Book[] = [
      { id: 1, title: 'Goodnight Moon', author: 'Margaret Wise Brown', picture: '../../assets/romance.jpg', publicationDate: '01/14/1953', categoryId: 1 },
      { id: 2, title: 'Winnie-the-Pooh', author: 'A. A. Milne', picture: '../../assets/romance2.jpg', publicationDate: '01/02/1926', categoryId: 1 },
      { id: 3, title: 'Where the Wild Things Are', author: 'Maurice Sendak', picture: '../../assets/romance3.jpg', publicationDate: '03/08/1963', categoryId: 1 },
      { id: 4, title: 'The Hobbit', author: 'J. R. R. Tolkien', picture: '../../assets/histoire.jpg', publicationDate: '04/20/1937', categoryId: 1 },
      { id: 5, title: 'Curious George', author: 'H. A. Rey', picture: '../../assets/aventure.jpg', publicationDate: '12/12/1941', categoryId: 1 },
      { id: 6, title: 'Alice\'s Adventures in Wonderland', author: 'Lewis Carroll', picture: '../../assets/BD.jpg', publicationDate: '06/09/1865', categoryId: 4 },
      { id: 7, title: 'Goodnight Moon', author: 'Margaret Wise Brown', picture: '../../assets/BD.jpg', publicationDate: '05/30/1953', categoryId: 4 },
      { id: 8, title: 'Winnie-the-Pooh', author: 'A. A. Milne', picture: '../../assets/BD2.jpg', publicationDate: '08/28/1926', categoryId: 4 },
      { id: 9, title: 'Where the Wild Things Are', author: 'Maurice Sendak', picture: '../../assets/BD3.jpg', publicationDate: '12/07/1963', categoryId: 4 },
      { id: 10, title: 'The Hobbit', author: 'J. R. R. Tolkien', picture: '../../assets/BD2.jpg', publicationDate: '07/04/1937', categoryId: 4 },
      { id: 11, title: 'Curious George', author: 'H. A. Rey', picture: '../../assets/BD.jpg', publicationDate: '10/02/1941', categoryId: 4 },
      { id: 12, title: 'Alice\'s Adventures in Wonderland', author: 'Lewis Carroll', picture: '../../assets/BD3.jpg', publicationDate: '05/02/1865', categoryId: 4 },
      { id: 13, title: 'Goodnight Moon', author: 'Margaret Wise Brown', picture: '../../assets/aventure.jpg', publicationDate:' 03/10/1953', categoryId: 3 },
      { id: 14, title: 'Winnie-the-Pooh', author: 'A. A. Milne', picture: '../../assets/aventure2.jpg', publicationDate: '07/07/1926', categoryId: 3 },
      { id: 15, title: 'Where the Wild Things Are', author: 'Maurice Sendak', picture: '../../assets/histoire.jpg', publicationDate: '11/05/1963', categoryId: 3 },
      { id: 16, title: 'The Hobbit', author: 'J. R. R. Tolkien', picture: '../../assets/recette.jpg', publicationDate: '01/27/1937', categoryId: 3 },
      { id: 17, title: 'Curious George', author: 'H. A. Rey', picture: '../../assets/BD.jpg', publicationDate: '11/02/1941', categoryId: 3 },
      { id: 18, title: 'Alice\'s Adventures in Wonderland', author: 'Lewis Carroll', picture: '../../assets/romance.jpg', publicationDate: '04/20/1865', categoryId: 3 },
    ];
    return { books };
  }
}

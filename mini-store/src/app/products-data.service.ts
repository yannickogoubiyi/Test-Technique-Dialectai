import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from './product';

export class ProductData implements InMemoryDbService {
  createDb(): { products: Product[]} {
    const products: Product[] = [
      {
        id: 1,
        productName: 'Nintendo Switch',
        description: 'Découvrez la Console Nintendo Switch, la console du géant du jeu vidéo japonais qui succède à la Console Nintendo Wii U !',
        price: 299.99,
        starRating: 4.5,
        imageUrl: 'https://via.placeholder.com/300/000000/FFFFFF/?text=Nintendo%20Switch'
      },
      {
        id: 2,
        productName: 'Basic-lampadaire 2 Lumières',
        description: 'Lampadaire composé d\'une base ronde, d\'un pied tubulaire et d\'un diffuseur conique en polypropilène opalin, l\'ensemble est équipé d\'une liseuse orientable et réalisé en métal.',
        price: 12.50,
        starRating: 4.5,
        imageUrl: 'https://via.placeholder.com/300/000000/FFFFFF/?text=Lampadaire'
      },
      {
        id: 5,
        productName: 'Maillet',
        description: 'Un maillet en caoutchouc ',
        price: 8.9,
        starRating: 3,
        imageUrl: 'https://via.placeholder.com/300/000000/FFFFFF/?text=Maillet',
      },
      {
        id: 8,
        productName: 'Chaise noire scandinave',
        description: 'Chaises salle à manger et chaises de bureau',
        price: 69.99,
        starRating: 4.4,
        imageUrl: 'https://via.placeholder.com/300/000000/FFFFFF/?text=Chaises'
      },
      {
        id: 10,
        productName: 'Moulinex',
        description: 'L\'Optimo de Moulinex est le four le plus polyvalent et le plus facile d\'utilisation !',
        price: 124.00,
        starRating: 4,
        imageUrl: 'https://via.placeholder.com/300/000000/FFFFFF/?text=Moulinex'
      }
    ];
    return { products };
  }
}
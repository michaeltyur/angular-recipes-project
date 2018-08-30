import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const recipes = [
      { id: 11, name: 'Nancys Baked Spaghetti Squash',description:"Spaghetti squash is baked in a rich tomato sauce and topped with cheese and bacon",ingredients:"sucar,sall,pilpel" },
      { id: 12, name: 'Palak Paneer Curry',description:"Palak paneer is an Indian curry with soft cubes of cheese simmered in a mildly spiced",ingredients:"bacon,brandy" },
      { id: 13, name: 'Spicy Garlic Lime Chicken',description:"A sweet and spicy marinated tenderloin, grilled to perfection",ingredients:"courgette,garlic cloves,crushed" },
      { id: 14, name: 'Cherry Cream Cheese Dump Cake',description:"This dessert is amazing! It uses coffee and chocolate, the best combination since chocolate and peanut butter",ingredients:"red onions,salt,pepper" },
      { id: 15, name: 'Waikiki-Style Meatballs',description:"Hatch chiles are New Mexico's gift to the world",ingredients:"crushed,balsamic vinegar" },
    ];
    return {recipes};
  }
}
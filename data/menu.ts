export type MenuCategory = 'Starters' | 'Mains' | 'Desserts' | 'Drinks';

export type MenuItem = {
  id: number;
  name: string;
  category: MenuCategory;
  price: number;
  description: string;
  featured?: boolean;
  spicy?: boolean;
  vegetarian?: boolean;
};

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Charred Citrus Burrata',
    category: 'Starters',
    price: 14,
    description: 'Creamy burrata with grilled orange, basil oil, and toasted sourdough shards.',
    featured: true,
    vegetarian: true,
  },
  {
    id: 2,
    name: 'Smoked Tomato Bisque',
    category: 'Starters',
    price: 11,
    description: 'Slow-roasted tomato soup finished with crème fraîche and herb crumbs.',
    vegetarian: true,
  },
  {
    id: 3,
    name: 'Woodfire Ribeye',
    category: 'Mains',
    price: 34,
    description: '14 oz ribeye with confit garlic butter, crispy potatoes, and blistered greens.',
    featured: true,
  },
  {
    id: 4,
    name: 'Lemon Butter Salmon',
    category: 'Mains',
    price: 28,
    description: 'Atlantic salmon over saffron rice with roasted fennel and preserved lemon beurre blanc.',
    featured: true,
  },
  {
    id: 5,
    name: 'Wild Mushroom Tagliatelle',
    category: 'Mains',
    price: 24,
    description: 'Fresh pasta with mushroom ragù, thyme cream, and parmesan snow.',
    vegetarian: true,
  },
  {
    id: 6,
    name: 'Harissa Chicken Skewers',
    category: 'Mains',
    price: 22,
    description: 'Flame-grilled chicken with whipped feta, charred pita, and cucumber relish.',
    spicy: true,
  },
  {
    id: 7,
    name: 'Olive Oil Cake',
    category: 'Desserts',
    price: 10,
    description: 'Citrus olive oil cake with mascarpone cream and pistachio brittle.',
    featured: true,
    vegetarian: true,
  },
  {
    id: 8,
    name: 'Dark Chocolate Pot de Crème',
    category: 'Desserts',
    price: 9,
    description: 'Rich chocolate custard with sea salt, espresso caramel, and cocoa nibs.',
    vegetarian: true,
  },
  {
    id: 9,
    name: 'Sparkling Hibiscus Spritz',
    category: 'Drinks',
    price: 8,
    description: 'House hibiscus cordial, citrus, and sparkling water over crushed ice.',
    featured: true,
    vegetarian: true,
  },
  {
    id: 10,
    name: 'Cold Brew Tonic',
    category: 'Drinks',
    price: 7,
    description: 'Single-origin cold brew topped with tonic and an orange twist.',
    vegetarian: true,
  }
];

export const categories: Array<MenuCategory | 'All'> = ['All', 'Starters', 'Mains', 'Desserts', 'Drinks'];

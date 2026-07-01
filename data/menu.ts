export type MenuCategory =
  | 'Dim Sum'
  | 'Sichuan'
  | 'Noodle House'
  | 'Tea House'
  | 'Desserts'
  | 'Drinks';

export type MenuItem = {
  id: number;
  name: string;
  category: MenuCategory;
  price: number;
  description: string;
  featured?: boolean;
  spicy?: boolean;
  vegetarian?: boolean;
  image: string;
  calories: number;
  prepTime: string;
};

const imageSet = {
  dimSum: [
    'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=1200&q=80'
  ],
  sichuan: [
    'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80'
  ],
  noodleHouse: [
    'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1200&q=80'
  ],
  teaHouse: [
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1564894809611-1742fc40ed80?auto=format&fit=crop&w=1200&q=80'
  ],
  desserts: [
    'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1603532648955-039310d9ed75?auto=format&fit=crop&w=1200&q=80'
  ],
  drinks: [
    'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=1200&q=80'
  ]
} as const;

const dimSum = [
  ['Har Gow', 8, 'Translucent shrimp dumplings with bamboo shoots and sesame oil.', true, false, false, 220, '8 min'],
  ['Siu Mai', 8, 'Open-faced pork and shrimp dumplings with roe and scallion.', true, false, false, 240, '8 min'],
  ['Char Siu Bao', 7, 'Steamed barbecue pork buns with glossy sweet-savory filling.', true, false, false, 260, '9 min'],
  ['Vegetable Crystal Dumplings', 7, 'Spinach wrappers filled with mushrooms, chives, and water chestnut.', false, false, true, 190, '8 min'],
  ['Shrimp Cheung Fun', 9, 'Silky rice noodle rolls with shrimp and sweet soy drizzle.', true, false, false, 280, '9 min'],
  ['Turnip Cake', 7, 'Pan-seared daikon cake with dried shrimp and scallion.', false, false, false, 250, '8 min'],
  ['Spring Roll Trio', 6, 'Crisp rolls filled with cabbage, carrot, and shiitake.', false, false, true, 230, '7 min'],
  ['Sticky Rice in Lotus Leaf', 8, 'Glutinous rice parcel with chicken, sausage, and shiitake.', false, false, false, 340, '10 min'],
  ['Chicken Feet Black Bean', 7, 'Braised phoenix claws in fermented black bean sauce.', false, true, false, 260, '9 min'],
  ['Pork Xiao Long Bao', 9, 'Soup dumplings with rich broth and ginger vinegar.', true, false, false, 300, '9 min'],
  ['Scallion Pancake', 6, 'Layered pan-fried flatbread with flaky texture and soy dip.', false, false, true, 310, '7 min'],
  ['Chive Potstickers', 7, 'Crisp-bottom dumplings stuffed with garlic chives and pork.', false, false, false, 290, '8 min'],
  ['Egg Custard Tarts', 6, 'Buttery shells filled with warm Cantonese egg custard.', true, false, true, 210, '6 min'],
  ['BBQ Pork Puff', 7, 'Laminated pastry with roasted char siu filling.', false, false, false, 270, '7 min'],
  ['Sesame Shrimp Toast', 8, 'Golden toast squares with shrimp mousse and toasted sesame.', false, false, false, 320, '8 min'],
  ['Tofu Skin Rolls', 7, 'Bean curd sheets wrapped around vegetables in light sauce.', false, false, true, 220, '8 min'],
  ['Red Oil Wontons', 8, 'Pork wontons dressed in chili oil, vinegar, and garlic.', true, true, false, 330, '8 min'],
  ['Salt Pepper Squid Bites', 10, 'Wok-tossed squid with jalapeño, garlic, and five spice.', true, true, false, 360, '9 min'],
  ['Prawn Toast Sticks', 8, 'Sesame prawn toast cut for sharing with citrus mayo.', false, false, false, 310, '8 min'],
  ['Custard Lava Buns', 7, 'Steamed buns with molten salted egg yolk center.', true, false, true, 280, '8 min']
] as const;

const sichuan = [
  ['Mapo Tofu', 14, 'Silken tofu in chile bean sauce with Sichuan peppercorn and minced pork.', true, true, false, 460, '11 min'],
  ['Kung Pao Chicken', 15, 'Wok-fired chicken with peanuts, dried chilies, and scallion.', true, true, false, 520, '12 min'],
  ['Dry-Fried Green Beans', 12, 'Blistered beans with garlic, preserved mustard greens, and chili.', false, true, true, 280, '10 min'],
  ['Chongqing Crispy Chicken', 16, 'Crackly fried chicken hidden under dried chilies and peppercorn.', true, true, false, 610, '13 min'],
  ['Dan Dan Noodles', 13, 'Springy noodles with sesame-chili sauce, pork, and mustard greens.', true, true, false, 540, '11 min'],
  ['Twice-Cooked Pork', 15, 'Pork belly stir-fried with leek, pepper, and fermented bean paste.', false, true, false, 590, '12 min'],
  ['Fish-Fragrant Eggplant', 13, 'Braised eggplant in garlicky sweet-hot sauce.', true, true, true, 410, '11 min'],
  ['Water-Boiled Beef', 18, 'Tender beef in a deep red broth with napa cabbage and chili oil.', true, true, false, 690, '14 min'],
  ['Tea-Smoked Duck', 19, 'Duck breast with smoky lacquered skin and plum sauce.', true, false, false, 620, '14 min'],
  ['Garlic Cucumber Salad', 9, 'Chilled cucumbers smashed with garlic, vinegar, and sesame.', false, false, true, 120, '5 min'],
  ['Sichuan Wontons', 12, 'Pork wontons in numbing chili broth with greens.', false, true, false, 430, '10 min'],
  ['Hot & Sour Soup', 8, 'Peppery broth with tofu, mushroom, bamboo shoot, and egg ribbon.', false, true, true, 180, '6 min'],
  ['Laziji Cauliflower', 12, 'Crisp cauliflower tossed with cumin, dried chilies, and garlic.', false, true, true, 290, '10 min'],
  ['Chili Oil Dumpling Bowl', 13, 'Mixed dumplings in fragrant red oil with black vinegar.', true, true, false, 470, '10 min'],
  ['Sichuan Pepper Shrimp', 17, 'Shell-on shrimp flash-fried with toasted peppercorn and chile.', true, true, false, 560, '12 min'],
  ['Braised Tofu Clay Pot', 14, 'Tofu, mushroom, bok choy, and glass noodles in savory broth.', false, false, true, 390, '11 min'],
  ['Cumin Lamb', 18, 'Wok-seared lamb with cumin, onion, cilantro, and red chilies.', true, true, false, 650, '13 min'],
  ['Garlic Bok Choy', 10, 'Quick-cooked bok choy finished with fragrant garlic oil.', false, false, true, 140, '6 min'],
  ['Sichuan Fried Rice', 13, 'Egg fried rice with chili crisp, vegetables, and smoked tofu.', false, true, true, 420, '9 min'],
  ['Red Braised Brisket', 19, 'Slow-braised beef brisket with daikon and star anise depth.', false, false, false, 610, '14 min']
] as const;

const noodleHouse = [
  ['Beef Hand-Pulled Noodles', 15, 'Long wheat noodles in aromatic beef broth with greens and chili paste.', true, false, false, 560, '11 min'],
  ['Zhajiangmian', 14, 'Thick noodles with savory soybean pork sauce, cucumber, and scallion.', false, false, false, 580, '10 min'],
  ['Scallion Oil Noodles', 11, 'Simple chewy noodles slicked with fragrant scallion oil.', false, false, true, 430, '8 min'],
  ['Singapore Mei Fun', 13, 'Curried rice noodles with egg, vegetables, and char siu.', false, true, false, 470, '10 min'],
  ['Shrimp Wonton Noodle Soup', 14, 'Egg noodles in clear broth with plump shrimp wontons.', true, false, false, 450, '9 min'],
  ['House Lo Mein', 13, 'Soft noodles stir-fried with vegetables, soy, and wok hei.', false, false, true, 520, '10 min'],
  ['Beef Chow Fun', 15, 'Wide rice noodles, seared beef, and bean sprouts in dark soy.', true, false, false, 590, '11 min'],
  ['Vegetable Chow Mein', 12, 'Crisp pan-fried noodles with mixed vegetables and oysterless sauce.', false, false, true, 460, '9 min'],
  ['Yangzhou Fried Rice', 13, 'Classic fried rice with shrimp, char siu, egg, and peas.', true, false, false, 520, '9 min'],
  ['Egg Fried Rice', 10, 'Wok-tossed jasmine rice with egg, scallion, and soy.', false, false, true, 390, '8 min'],
  ['Salted Fish Chicken Fried Rice', 14, 'Savory fried rice with chicken, salted fish, and wok aroma.', false, false, false, 540, '9 min'],
  ['Congee with Century Egg', 11, 'Slow-cooked rice porridge with pork, ginger, and scallion.', false, false, false, 330, '9 min'],
  ['Seafood Congee', 13, 'Comforting rice porridge with shrimp, fish, and white pepper.', false, false, false, 350, '10 min'],
  ['Soy Sauce Pan Noodles', 12, 'Hong Kong-style noodles finished with soy glaze and bean sprouts.', false, false, true, 470, '9 min'],
  ['Braised Tofu Rice Bowl', 12, 'Steamed rice topped with soy-braised tofu and shiitake.', false, false, true, 410, '8 min'],
  ['Crispy Orange Chicken Bowl', 14, 'Rice bowl with citrus-glazed chicken and sesame greens.', true, false, false, 620, '10 min'],
  ['Mushroom Udon Stir-Fry', 13, 'Thick noodles tossed with king oyster mushrooms and bok choy.', false, false, true, 500, '10 min'],
  ['Black Pepper Beef Rice', 15, 'Sliced beef, onions, and pepper sauce over steamed rice.', false, false, false, 570, '10 min'],
  ['Chicken Lettuce Wrap Set', 13, 'Minced chicken, water chestnut, and mushrooms with lettuce cups and rice.', false, false, false, 430, '9 min'],
  ['XO Vegetable Rice Cakes', 14, 'Chewy rice cakes wok-seared with vegetables and vegetarian XO-style sauce.', true, true, true, 510, '10 min']
] as const;

const teaHouse = [
  ['Jasmine Pearl Tea', 5, 'Delicate green tea pearls with floral aroma and clean finish.', true, false, true, 5, '4 min'],
  ['Tie Guan Yin', 6, 'Roasted oolong with stone-fruit notes and lingering sweetness.', false, false, true, 5, '4 min'],
  ['Pu-erh Pot', 6, 'Earthy aged tea brewed tableside for long conversations.', false, false, true, 5, '4 min'],
  ['Chrysanthemum Tea', 5, 'Golden herbal infusion with honeyed floral finish.', false, false, true, 10, '4 min'],
  ['Hong Kong Milk Tea', 6, 'Strong black tea pulled smooth with evaporated milk.', true, false, true, 170, '5 min'],
  ['Brown Sugar Boba Milk Tea', 7, 'Black tea with warm tapioca pearls and caramelized sugar syrup.', true, false, true, 260, '5 min'],
  ['Lemon Iced Tea', 5, 'Brisk iced tea with fresh lemon and a light sugar edge.', false, false, true, 70, '3 min'],
  ['Lychee Green Tea', 6, 'Chilled green tea with lychee nectar and mint.', false, false, true, 85, '3 min'],
  ['Yuanyang', 6, 'Hong Kong coffee-tea blend with condensed milk richness.', false, false, true, 190, '5 min'],
  ['Warm Soy Milk', 4, 'Fresh soy milk lightly sweetened and served hot.', false, false, true, 120, '4 min'],
  ['Osmanthus Oolong Spritz', 6, 'Sparkling oolong drink with osmanthus syrup and citrus.', false, false, true, 90, '3 min'],
  ['Ginger Honey Tea', 5, 'Warming black tea with ginger slices and honey.', false, false, true, 60, '4 min'],
  ['Plum Soda', 5, 'Salted plum refresher with bubbles and citrus bite.', false, false, true, 55, '2 min'],
  ['Almond Milk Tea', 6, 'Creamy almond-forward tea served warm or iced.', false, false, true, 180, '4 min'],
  ['Wintermelon Tea', 5, 'Smooth caramel-toned herbal tea over ice.', false, false, true, 65, '3 min'],
  ['Sparkling Yuzu Tea', 6, 'Bright yuzu preserve lifted with chilled soda water.', false, false, true, 75, '3 min']
] as const;

const desserts = [
  ['Mango Pomelo Sago', 8, 'Chilled mango cream with pomelo, sago pearls, and citrus lift.', true, false, true, 280, '5 min'],
  ['Sesame Balls', 7, 'Fried glutinous rice balls filled with sweet lotus paste.', true, false, true, 260, '6 min'],
  ['Egg Tart Pair', 6, 'Warm flaky tarts with silky custard centers.', true, false, true, 220, '5 min'],
  ['Almond Tofu', 7, 'Silky almond jelly with seasonal fruit and syrup.', false, false, true, 180, '4 min'],
  ['Black Sesame Mochi', 7, 'Chewy rice cakes with toasted black sesame filling.', false, false, true, 240, '5 min'],
  ['Tofu Pudding', 6, 'Soft douhua with ginger syrup and brown sugar.', false, false, true, 170, '4 min'],
  ['Coconut Red Bean Pudding', 7, 'Layered chilled pudding with adzuki bean sweetness.', false, false, true, 210, '4 min'],
  ['Matcha Swiss Roll', 8, 'Soft sponge roll with matcha cream and red bean.', false, false, true, 260, '4 min']
] as const;

const drinks = [
  ['Mandarin Sparkler', 6, 'Citrus soda with mandarin syrup and orange peel.', false, false, true, 95, '2 min'],
  ['Lychee Cooler', 6, 'Lychee, lime, and sparkling water over crushed ice.', true, false, true, 90, '2 min'],
  ['Salted Plum Lemonade', 5, 'Sweet-tart lemonade sharpened with preserved plum.', false, false, true, 80, '2 min'],
  ['House Iced Coffee', 5, 'Strong chilled coffee with a touch of condensed milk.', false, false, true, 110, '3 min'],
  ['Passionfruit Soda', 6, 'Bright passionfruit fizz with mint.', false, false, true, 85, '2 min'],
  ['Coconut Water Lime', 5, 'Cold coconut water with lime and basil seeds.', false, false, true, 45, '2 min'],
  ['Peach Jasmine Fizz', 6, 'Sparkling jasmine tea with peach nectar.', false, false, true, 88, '2 min'],
  ['Ginger Citrus Cooler', 5, 'Fresh ginger, lemon, and soda water for a sharp finish.', false, false, true, 60, '2 min']
] as const;

type MenuRow = readonly [string, number, string, boolean, boolean, boolean, number, string];

function buildItems(
  rows: readonly MenuRow[],
  category: MenuCategory,
  images: readonly string[],
  startId: number
): MenuItem[] {
  return rows.map(([name, price, description, featured, spicy, vegetarian, calories, prepTime], index) => ({
    id: startId + index,
    name,
    category,
    price,
    description,
    featured,
    spicy,
    vegetarian,
    image: images[index % images.length],
    calories,
    prepTime,
  }));
}

export const menuItems: MenuItem[] = [
  ...buildItems(dimSum, 'Dim Sum', imageSet.dimSum, 1),
  ...buildItems(sichuan, 'Sichuan', imageSet.sichuan, 21),
  ...buildItems(noodleHouse, 'Noodle House', imageSet.noodleHouse, 41),
  ...buildItems(teaHouse, 'Tea House', imageSet.teaHouse, 61),
  ...buildItems(desserts, 'Desserts', imageSet.desserts, 77),
  ...buildItems(drinks, 'Drinks', imageSet.drinks, 85),
];

export const categories: Array<MenuCategory | 'All'> = [
  'All',
  'Dim Sum',
  'Sichuan',
  'Noodle House',
  'Tea House',
  'Desserts',
  'Drinks',
];

export const categoryDescriptions: Record<MenuCategory, string> = {
  'Dim Sum': 'Steamed baskets, baked buns, crisp small plates, and cart-style brunch favorites built for sharing.',
  Sichuan: 'Peppercorn heat, wok-fired classics, chili oil depth, and big mains for dinner energy.',
  'Noodle House': 'Broth bowls, stir-fried noodles, congee, fried rice, and faster comfort-food staples.',
  'Tea House': 'Traditional Chinese teas, milk tea, iced refreshers, and lighter drinks for slower browsing.',
  Desserts: 'Custards, sesame sweets, mango desserts, and soft finishers that fit the new menu direction.',
  Drinks: 'Coolers, sodas, coffee, and fruit-led refreshments to round out lunch, brunch, or dinner.',
};

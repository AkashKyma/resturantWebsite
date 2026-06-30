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
  image: string;
  calories: number;
  prepTime: string;
};

const imageSet = {
  starters: [
    'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=80'
  ],
  mains: [
    'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1200&q=80'
  ],
  desserts: [
    'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1464306076886-da185f6a9d05?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&q=80'
  ],
  drinks: [
    'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80'
  ]
} as const;

const starters = [
  ['Charred Citrus Burrata', 14, 'Creamy burrata with grilled orange, basil oil, and toasted sourdough shards.', true, false, true, 420, '8 min'],
  ['Smoked Tomato Bisque', 11, 'Slow-roasted tomato soup finished with crème fraîche and herb crumbs.', false, false, true, 310, '6 min'],
  ['Whipped Feta Board', 13, 'Silky whipped feta with chili honey, cucumbers, and sesame flatbread.', false, false, true, 390, '7 min'],
  ['Crispy Calamari', 15, 'Buttermilk calamari with lemon aioli and charred scallion dust.', true, false, false, 460, '9 min'],
  ['Roasted Beet Carpaccio', 12, 'Rainbow beets with pistachio dukkah, dill yogurt, and arugula.', false, false, true, 280, '7 min'],
  ['Truffle Polenta Fries', 10, 'Golden polenta fries with pecorino and black truffle salt.', false, false, true, 350, '8 min'],
  ['Firecracker Shrimp', 16, 'Crispy shrimp tossed in a sweet heat glaze with lime zest.', false, true, false, 430, '9 min'],
  ['Market Greens Salad', 12, 'Little gem lettuce, herbs, shaved radish, and champagne vinaigrette.', false, false, true, 240, '5 min'],
  ['Wood Oven Meatballs', 14, 'Beef and pork meatballs in tomato sugo with whipped ricotta.', false, false, false, 470, '10 min'],
  ['Seared Halloumi Skewers', 13, 'Halloumi, apricot glaze, mint, and toasted almonds.', false, false, true, 360, '7 min'],
  ['Tuna Crudo', 17, 'Yellowfin tuna with cucumber water, avocado, and crispy shallots.', true, false, false, 260, '6 min'],
  ['Crisp Brussels Sprouts', 11, 'Roasted sprouts with tamarind glaze, peanuts, and herbs.', false, true, true, 300, '8 min'],
  ['Sweet Corn Arancini', 12, 'Corn risotto croquettes with basil crema and grana padano.', false, false, true, 340, '8 min'],
  ['Lobster Toast', 19, 'Butter-poached lobster on brioche with celery leaf and citrus mayo.', true, false, false, 410, '9 min'],
  ['Charred Broccolini', 10, 'Broccolini with lemon tahini, preserved lemon, and breadcrumbs.', false, false, true, 220, '6 min'],
  ['Spicy Tuna Tartare', 18, 'Tuna tartare with gochujang dressing, avocado, and rice crisps.', false, true, false, 290, '6 min'],
  ['Miso Eggplant Bites', 11, 'Roasted eggplant glazed with white miso and sesame.', false, false, true, 270, '7 min'],
  ['Crab-Stuffed Peppers', 16, 'Sweet peppers filled with crab, herbs, and parmesan crumbs.', false, false, false, 320, '8 min'],
  ['Basil Burrata Tomatoes', 15, 'Heirloom tomatoes, burrata, basil oil, and aged balsamic.', true, false, true, 330, '5 min'],
  ['Garlic Prawn Skillet', 17, 'Wild prawns in garlic butter with white wine and grilled bread.', false, false, false, 380, '9 min'],
  ['Herb Falafel Plate', 12, 'Green falafel with tahini, pickled onions, and cucumber salad.', false, false, true, 360, '7 min'],
  ['Smoked Trout Dip', 13, 'House-smoked trout dip with capers, dill, and rye crisps.', false, false, false, 340, '6 min'],
  ['Ricotta Stuffed Blossoms', 14, 'Squash blossoms with ricotta, lemon, and warm marinara.', false, false, true, 310, '8 min'],
  ['Coconut Mussels', 16, 'Prince Edward Island mussels with coconut broth and grilled lime.', false, true, false, 350, '10 min'],
  ['Warm Olive Medley', 9, 'Citrus-marinated olives with rosemary and orange peel.', false, false, true, 180, '4 min']
] as const;

const mains = [
  ['Woodfire Ribeye', 34, '14 oz ribeye with confit garlic butter, crispy potatoes, and blistered greens.', true, false, false, 880, '18 min'],
  ['Lemon Butter Salmon', 28, 'Atlantic salmon over saffron rice with roasted fennel and preserved lemon beurre blanc.', true, false, false, 640, '16 min'],
  ['Wild Mushroom Tagliatelle', 24, 'Fresh pasta with mushroom ragù, thyme cream, and parmesan snow.', false, false, true, 590, '14 min'],
  ['Harissa Chicken Skewers', 22, 'Flame-grilled chicken with whipped feta, charred pita, and cucumber relish.', false, true, false, 610, '15 min'],
  ['Braised Short Rib', 31, 'Slow-braised short rib over parsnip purée with red wine jus.', true, false, false, 760, '17 min'],
  ['Spring Pea Risotto', 23, 'Creamy risotto with peas, mint, pecorino, and lemon zest.', false, false, true, 540, '15 min'],
  ['Blackened Snapper', 29, 'Snapper with corn succotash, okra, and smoked chili butter.', false, true, false, 620, '16 min'],
  ['Steak Frites', 27, 'Grilled hanger steak with peppercorn sauce and crispy fries.', false, false, false, 790, '14 min'],
  ['Ricotta Gnocchi', 24, 'Potato gnocchi with roasted tomato sugo and basil pistou.', false, false, true, 560, '14 min'],
  ['Maple Glazed Pork Chop', 29, 'Bone-in pork chop with apple slaw and roasted sweet potato.', false, false, false, 720, '17 min'],
  ['Zaatar Cauliflower Steak', 22, 'Roasted cauliflower with hummus, lentils, and herb salad.', false, false, true, 510, '13 min'],
  ['Cajun Prawn Linguine', 26, 'Linguine with prawns, roasted peppers, and spicy cream sauce.', false, true, false, 670, '15 min'],
  ['Crispy Duck Breast', 33, 'Duck breast with cherry gastrique and whipped celery root.', true, false, false, 730, '18 min'],
  ['Coal Roasted Half Chicken', 26, 'Half chicken with lemon jus, charred broccoli, and fingerlings.', false, false, false, 690, '16 min'],
  ['Saffron Seafood Stew', 32, 'Shrimp, mussels, and white fish in saffron tomato broth.', false, false, false, 610, '17 min'],
  ['Pesto Burrata Flatbread', 21, 'Wood-fired flatbread with pesto, burrata, and roasted tomatoes.', false, false, true, 580, '12 min'],
  ['Moroccan Lamb Bowl', 27, 'Spiced lamb, couscous, harissa yogurt, and grilled vegetables.', false, true, false, 660, '15 min'],
  ['Miso Glazed Tofu', 23, 'Crispy tofu with soba noodles, bok choy, and sesame broth.', false, false, true, 520, '13 min'],
  ['Truffle Burger', 22, 'Smash burger with truffle aioli, fontina, and rosemary fries.', true, false, false, 810, '12 min'],
  ['Roasted Vegetable Lasagna', 24, 'Layered pasta with roasted squash, spinach, and béchamel.', false, false, true, 630, '16 min'],
  ['Peri Peri Shrimp Bowl', 25, 'Peri peri shrimp with coconut rice, greens, and mango salsa.', false, true, false, 590, '14 min'],
  ['Braised Chickpea Shakshuka', 21, 'Tomato braised chickpeas, baked eggs, and grilled sourdough.', false, true, true, 500, '12 min'],
  ['Filet Mignon', 38, 'Center-cut filet with truffle mash and asparagus.', true, false, false, 700, '18 min'],
  ['Cedar Plank Trout', 27, 'Herb trout with farro salad and blistered tomatoes.', false, false, false, 560, '15 min'],
  ['Spiced Eggplant Couscous', 22, 'Roasted eggplant, pearl couscous, yogurt, and herbs.', false, false, true, 490, '13 min']
] as const;

const desserts = [
  ['Olive Oil Cake', 10, 'Citrus olive oil cake with mascarpone cream and pistachio brittle.', true, false, true, 370, '5 min'],
  ['Dark Chocolate Pot de Crème', 9, 'Rich chocolate custard with sea salt, espresso caramel, and cocoa nibs.', false, false, true, 330, '4 min'],
  ['Strawberry Pavlova', 11, 'Crisp meringue with vanilla cream and macerated berries.', true, false, true, 290, '5 min'],
  ['Brown Butter Cookie Skillet', 12, 'Warm cookie with vanilla bean gelato and toffee sauce.', false, false, true, 480, '7 min'],
  ['Lemon Tart', 10, 'Silky lemon tart with brûléed top and berry compote.', false, false, true, 310, '4 min'],
  ['Affogato Sundae', 9, 'Espresso poured over gelato with dark chocolate crunch.', false, false, true, 260, '3 min'],
  ['Coconut Rice Pudding', 9, 'Creamy rice pudding with mango, lime, and toasted coconut.', false, false, true, 280, '4 min'],
  ['Basque Cheesecake', 11, 'Burnt Basque cheesecake with cherry sauce and sea salt.', true, false, true, 360, '4 min'],
  ['Molten Chocolate Cake', 12, 'Warm chocolate cake with gooey center and vanilla cream.', true, false, true, 450, '7 min'],
  ['Pistachio Tiramisu', 11, 'Espresso sponge layered with pistachio mascarpone.', false, false, true, 390, '4 min'],
  ['Seasonal Fruit Galette', 10, 'Rustic galette with whipped crème fraîche.', false, false, true, 320, '6 min'],
  ['Salted Caramel Budino', 10, 'Italian pudding with caramel and cocoa shortbread crumbs.', false, false, true, 340, '4 min'],
  ['Peach Shortcake', 11, 'Buttermilk biscuit, roasted peaches, and vanilla chantilly.', false, false, true, 350, '5 min'],
  ['Matcha Panna Cotta', 10, 'Silky panna cotta with sesame tuile and strawberry glaze.', false, false, true, 270, '4 min'],
  ['Berry Mascarpone Parfait', 9, 'Layered berries, mascarpone cream, and almond crumble.', false, false, true, 260, '3 min'],
  ['Warm Banana Bread Pudding', 11, 'Banana bread pudding with rum caramel and pecans.', false, false, true, 420, '6 min'],
  ['Chocolate Hazelnut Tart', 10, 'Hazelnut crust with dark chocolate ganache.', false, false, true, 380, '4 min'],
  ['Citrus Granita', 8, 'Refreshing citrus granita with mint sugar.', false, false, true, 150, '2 min'],
  ['Honey Semifreddo', 10, 'Frozen honey semifreddo with figs and sesame brittle.', false, false, true, 300, '4 min'],
  ['Carrot Cake Stack', 11, 'Spiced carrot cake with cream cheese frosting and walnuts.', false, false, true, 410, '5 min'],
  ['Vanilla Bean Crème Brûlée', 10, 'Classic custard with caramelized sugar shell.', true, false, true, 320, '4 min'],
  ['Blackberry Cobbler', 11, 'Warm cobbler with vanilla ice cream and oat crumble.', false, false, true, 390, '6 min'],
  ['Espresso Brownie Bite', 8, 'Dense espresso brownie with whipped cream.', false, false, true, 290, '3 min'],
  ['Toasted Almond Cannoli', 9, 'Crisp cannoli shells with orange ricotta filling.', false, false, true, 310, '4 min'],
  ['Meyer Lemon Posset', 9, 'Chilled lemon posset with buttery shortbread.', false, false, true, 240, '3 min']
] as const;

const drinks = [
  ['Sparkling Hibiscus Spritz', 8, 'House hibiscus cordial, citrus, and sparkling water over crushed ice.', true, false, true, 110, '3 min'],
  ['Cold Brew Tonic', 7, 'Single-origin cold brew topped with tonic and an orange twist.', false, false, true, 95, '2 min'],
  ['Cucumber Mint Cooler', 8, 'Fresh cucumber, mint, lime, and soda.', false, false, true, 90, '3 min'],
  ['Blood Orange Margarita', 14, 'Tequila, blood orange, agave, and sea salt.', true, false, true, 210, '4 min'],
  ['Rosemary Paloma', 13, 'Grapefruit, tequila, and rosemary syrup.', false, false, true, 190, '4 min'],
  ['Yuzu Ginger Fizz', 9, 'Yuzu, ginger beer, and lime over pebble ice.', false, true, true, 120, '3 min'],
  ['Blackberry Smash', 14, 'Bourbon, blackberry, lemon, and basil.', false, false, true, 220, '4 min'],
  ['House Lemonade', 6, 'Fresh lemonade with a subtle vanilla finish.', false, false, true, 130, '2 min'],
  ['Coconut Espresso Martini', 15, 'Vodka, espresso, coffee liqueur, and coconut cream.', true, false, true, 240, '4 min'],
  ['Pineapple Jalapeño Mule', 13, 'Vodka, pineapple, ginger beer, and jalapeño.', false, true, true, 200, '4 min'],
  ['Lavender Collins', 13, 'Gin, lavender syrup, lemon, and soda.', false, false, true, 180, '4 min'],
  ['Zero-Proof Sunset', 8, 'Mango, passionfruit, citrus, and sparkling tea.', false, false, true, 100, '3 min'],
  ['Spiced Pear Spritz', 9, 'Pear nectar, cinnamon, lemon, and sparkling water.', false, false, true, 105, '3 min'],
  ['Classic Negroni', 14, 'Gin, sweet vermouth, and Campari.', false, false, true, 190, '3 min'],
  ['Matcha Coconut Latte', 7, 'Iced matcha with coconut milk and vanilla.', false, false, true, 150, '3 min'],
  ['Passionfruit Mojito', 13, 'Rum, mint, lime, and passionfruit.', false, false, true, 210, '4 min'],
  ['Chai Old Fashioned', 15, 'Bourbon, chai syrup, bitters, and orange oils.', false, false, true, 200, '4 min'],
  ['Strawberry Basil Soda', 8, 'Strawberry purée, basil, lemon, and soda water.', false, false, true, 98, '3 min'],
  ['Smoked Maple Manhattan', 16, 'Rye whiskey, maple, vermouth, and smoked cherry.', true, false, true, 220, '4 min'],
  ['Tropical Green Juice', 9, 'Pineapple, cucumber, kale, and green apple.', false, false, true, 115, '2 min'],
  ['Peach Iced Tea', 7, 'Black tea with peach nectar and lemon.', false, false, true, 100, '2 min'],
  ['Ginger Turmeric Shot', 5, 'Fresh ginger, turmeric, orange, and cayenne.', false, true, true, 45, '1 min'],
  ['Vanilla Cream Soda', 7, 'House vanilla syrup with sparkling water and cream.', false, false, true, 140, '2 min'],
  ['Sparkling Rosé Sangria', 12, 'Rosé, berries, and citrus.', false, false, true, 180, '3 min'],
  ['Citrus Bloom Mocktail', 8, 'Earl grey syrup, lemon, orange blossom, and tonic.', false, false, true, 85, '3 min']
] as const;

function buildItems(
  rows: readonly (readonly [string, number, string, boolean, boolean, boolean, number, string])[],
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
  ...buildItems(starters, 'Starters', imageSet.starters, 1),
  ...buildItems(mains, 'Mains', imageSet.mains, 26),
  ...buildItems(desserts, 'Desserts', imageSet.desserts, 51),
  ...buildItems(drinks, 'Drinks', imageSet.drinks, 76),
];

export const categories: Array<MenuCategory | 'All'> = ['All', 'Starters', 'Mains', 'Desserts', 'Drinks'];

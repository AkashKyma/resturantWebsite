export type MenuCategory =
  | 'Indian Thali'
  | 'South Indian'
  | 'North Indian'
  | 'Tea'
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
  indianThali: [
    'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1517244683847-7456b63c5969?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1200&q=80'
  ],
  southIndian: [
    'https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1673442635965-1c322d076d4b?auto=format&fit=crop&w=1200&q=80'
  ],
  northIndian: [
    'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80'
  ],
  tea: [
    'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1564894809611-1742fc40ed80?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80'
  ],
  desserts: [
    'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&q=80'
  ],
  drinks: [
    'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80'
  ]
} as const;

const indianThali = [
  ['Royal Veg Thali', 18, 'Paneer butter masala, dal tadka, aloo jeera, pulao, roti, papad, pickle, salad, and gulab jamun.', true, false, true, 780, '14 min'],
  ['Maharaja Non-Veg Thali', 23, 'Butter chicken, mutton curry, dal makhani, jeera rice, naan, salad, and dessert.', true, true, false, 920, '16 min'],
  ['Gujarati Kathiyawadi Thali', 19, 'Sev tameta, ringna bateta, dal, kadhi, bajra rotla, khichdi, farsan, and shrikhand.', false, true, true, 760, '15 min'],
  ['Rajasthani Dal Baati Churma Thali', 20, 'Baked baati, panchmel dal, gatte ki sabzi, churma, garlic chutney, and buttermilk.', true, true, true, 840, '17 min'],
  ['Punjabi Dhaba Thali', 21, 'Dal makhani, chole, paneer lababdar, tandoori roti, rice, onion salad, and lassi.', true, true, true, 830, '15 min'],
  ['Coastal Fish Thali', 24, 'Meen curry, coconut rice, thoran, rasam, appam, pickle, and payasam.', true, true, false, 810, '16 min'],
  ['Kerala Sadya Mini Thali', 18, 'Avial, olan, sambar, rasam, thoran, red rice, pappadam, pickle, and payasam.', false, false, true, 720, '15 min'],
  ['Andhra Spice Thali', 20, 'Gongura pachadi, pappu, gutti vankaya, spicy chicken fry, rice, curd, and pickle.', true, true, false, 850, '16 min'],
  ['Bengali Bhog Thali', 19, 'Luchi, cholar dal, alur dom, beguni, pulao, chutney, and mishti doi.', false, false, true, 740, '15 min'],
  ['Jain Comfort Thali', 18, 'No onion no garlic paneer curry, dal, vegetable sabzi, khichdi, phulka, and halwa.', false, false, true, 700, '14 min'],
  ['Millet Wellness Thali', 17, 'Foxtail millet khichdi, lauki kofta, spinach dal, jowar roti, salad, and chaas.', false, false, true, 650, '14 min'],
  ['Hyderabadi Thali', 22, 'Bagara rice, mirchi ka salan, chicken korma, dalcha, naan, and double ka meetha.', true, true, false, 880, '16 min'],
  ['Amritsari Kulcha Thali', 19, 'Stuffed kulcha, chole, boondi raita, onion salad, mint chutney, and kheer.', false, true, true, 760, '13 min'],
  ['Temple Prasadam Thali', 16, 'Lemon rice, curd rice, poriyal, sambar, chutney, appalam, and sakkarai pongal.', false, false, true, 690, '13 min'],
  ['Weekend Family Thali', 26, 'Paneer tikka masala, dal makhani, veg jalfrezi, biryani rice, naan basket, and dessert duo.', true, true, true, 980, '18 min'],
  ['Street Feast Thali', 18, 'Pav bhaji, mini vada pav, masala pulao, raita, kachumber, and jalebi.', false, true, true, 770, '14 min'],
  ['Lucknowi Thali', 22, 'Galouti kebab, roomali roti, nihari gravy, peas pulao, salad, and shahi tukda.', true, true, false, 890, '17 min'],
  ['Chettinad Thali', 21, 'Pepper chicken, kara kuzhambu, beans poriyal, steamed rice, parotta, and payasam.', true, true, false, 860, '16 min'],
  ['Festival Satvik Thali', 17, 'Aloo rasedar, paneer tomato curry, sama rice khichdi, kuttu puri, and fruit rabri.', false, false, true, 710, '15 min'],
  ['Mumbai Lunch Thali', 18, 'Puri bhaji, dal fry, paneer bhurji, pulao, sol kadhi, papad, and shrikhand.', false, false, true, 750, '14 min'],
  ['Royal Awadhi Veg Thali', 21, 'Nawabi paneer, subz qorma, dal, saffron rice, sheermal, and phirni.', true, false, true, 820, '16 min'],
  ['Malabar Prawn Thali', 24, 'Prawn roast, coconut curry, matta rice, beetroot thoran, appam, and payasam.', true, true, false, 840, '17 min'],
  ['Farmer\'s Simple Thali', 15, 'Seasonal sabzi, yellow dal, steamed rice, chapati, pickle, curd, and jaggery.', false, false, true, 610, '12 min'],
  ['Paneer Lover Thali', 20, 'Paneer makhani, paneer bhurji, dal, jeera rice, butter naan, and gulab jamun.', true, false, true, 860, '15 min'],
  ['Kolkata Fish Thali', 23, 'Mustard fish curry, moong dal, aloo bhaja, steamed rice, chutney, and rasgulla.', true, true, false, 810, '16 min'],
  ['Deccan Millet Thali', 18, 'Ragi mudde, saaru, vegetable palya, curd, pickle, and payasam.', false, true, true, 680, '14 min'],
  ['Village Chicken Thali', 22, 'Country chicken curry, dal fry, rice, jowar roti, thecha, and onion salad.', true, true, false, 890, '16 min'],
  ['Navratna Veg Thali', 19, 'Navratan korma, dal tadka, peas pulao, missi roti, raita, and halwa.', false, false, true, 760, '14 min'],
  ['Bombay Seafood Thali', 24, 'Bombil fry, prawn curry, sol kadhi, steamed rice, bhakri, and koshimbir.', true, true, false, 850, '17 min'],
  ['House Signature Grand Thali', 27, 'Curated mix of chef specials across curry, bread, rice, snack, pickle, dessert, and chai pairing.', true, true, false, 1020, '18 min']
] as const;

const southIndian = [
  ['Classic Masala Dosa', 11, 'Crisp fermented rice crêpe filled with spiced potato masala, served with sambar and chutneys.', true, false, true, 420, '10 min'],
  ['Ghee Roast Dosa', 12, 'Paper-thin dosa roasted in ghee with fiery chutney podi and potato masala.', true, true, true, 450, '11 min'],
  ['Mysore Masala Dosa', 12, 'Dosa layered with spicy Mysore chutney and stuffed with masala potatoes.', true, true, true, 460, '11 min'],
  ['Rava Onion Dosa', 11, 'Semolina dosa with onion, pepper, cumin, and coriander.', false, false, true, 390, '10 min'],
  ['Set Dosa with Kurma', 11, 'Soft sponge dosas served with vegetable kurma and coconut chutney.', false, false, true, 410, '10 min'],
  ['Pesarattu Upma', 12, 'Green gram crêpe wrapped around soft upma, ginger chutney, and sambar.', false, false, true, 430, '11 min'],
  ['Mini Idli Sambar Bowl', 10, 'Button idlis soaked in aromatic sambar with ghee and coriander.', false, false, true, 320, '8 min'],
  ['Thatte Idli Plate', 10, 'Large soft idlis with chutney trio and vegetable sagu.', false, false, true, 340, '8 min'],
  ['Medu Vada Basket', 9, 'Crisp urad dal doughnuts with coconut chutney and hot sambar.', false, false, true, 360, '8 min'],
  ['Pongal & Vada Combo', 11, 'Creamy ven pongal with pepper, cashew, and a crisp medu vada.', false, false, true, 430, '9 min'],
  ['Curd Rice Tempered', 9, 'Cooling curd rice with pomegranate, curry leaves, and pickle.', false, false, true, 310, '6 min'],
  ['Lemon Rice Bowl', 9, 'Turmeric rice with peanuts, curry leaves, and green chili tempering.', false, true, true, 300, '6 min'],
  ['Tamarind Rice', 9, 'Puliyodarai with sesame, peanuts, and temple-style spice blend.', false, true, true, 320, '6 min'],
  ['Tomato Rice', 10, 'South-style tomato rice with cashews and roasted papad.', false, true, true, 330, '7 min'],
  ['Bisi Bele Bath', 11, 'Karnataka lentil-rice pot with vegetables, ghee, and boondi.', false, true, true, 420, '10 min'],
  ['Chettinad Veg Curry', 12, 'Roasted spice coconut curry with mixed vegetables and flaky parotta.', false, true, true, 470, '11 min'],
  ['Kothu Parotta', 13, 'Shredded parotta tossed with egg, onion, curry leaves, and salna.', false, true, false, 560, '12 min'],
  ['Malabar Parotta & Kurma', 12, 'Layered parotta with silky mixed vegetable kurma.', false, false, true, 510, '10 min'],
  ['Appam with Vegetable Stew', 12, 'Lacy appams paired with coconut vegetable stew.', true, false, true, 440, '11 min'],
  ['Idiyappam Coconut Milk', 11, 'String hoppers served with lightly sweet coconut milk and vegetable kurma.', false, false, true, 370, '9 min'],
  ['Andhra Chili Paneer', 13, 'Paneer tossed with curry leaves, green chilies, and Andhra spices.', false, true, true, 460, '11 min'],
  ['Gongura Chicken Bowl', 14, 'Tangy sorrel-leaf chicken with steamed rice and onion salad.', true, true, false, 580, '12 min'],
  ['Hyderabadi Veg Dum Biryani', 14, 'Layered basmati biryani with fried onions, herbs, and mirchi ka salan.', true, true, true, 590, '13 min'],
  ['Hyderabadi Chicken Biryani', 16, 'Fragrant dum biryani with raita and salan.', true, true, false, 690, '14 min'],
  ['Kerala Fish Curry Meal', 15, 'Tangy coconut fish curry with matta rice and thoran.', true, true, false, 610, '13 min'],
  ['Podi Idli Fry', 10, 'Pan-tossed idli cubes coated in podi masala and ghee.', false, true, true, 350, '8 min'],
  ['Uttapam Trio', 12, 'Tomato, onion, and chili uttapam assortment with chutneys.', false, true, true, 430, '10 min'],
  ['Coconut Sevai', 9, 'Rice noodles tempered with mustard, curry leaves, and fresh coconut.', false, false, true, 280, '6 min'],
  ['South Indian Filter Coffee Set', 8, 'Strong decoction coffee with mini butter biscuits.', true, false, true, 150, '4 min'],
  ['Madurai Kari Dosa', 15, 'Stuffed dosa with spiced minced lamb, egg wash, and chutney.', true, true, false, 640, '13 min']
] as const;

const northIndian = [
  ['Paneer Butter Masala', 13, 'Creamy tomato gravy with charred paneer cubes and kasuri methi.', true, false, true, 520, '11 min'],
  ['Dal Makhani', 11, 'Slow-cooked black lentils with butter, cream, and smoky finish.', true, false, true, 430, '10 min'],
  ['Chole Bhature', 12, 'Amritsari chickpea curry with fluffy bhature and pickle.', true, true, true, 590, '12 min'],
  ['Rajma Chawal', 11, 'Delhi-style kidney bean curry with cumin rice and onion salad.', false, false, true, 470, '10 min'],
  ['Aloo Paratha Platter', 10, 'Stuffed parathas with curd, pickle, and white butter.', false, false, true, 510, '9 min'],
  ['Paneer Tikka Skewers', 13, 'Clay oven paneer with peppers, onions, and mint chutney.', true, true, true, 450, '11 min'],
  ['Chicken Tikka', 14, 'Yogurt-marinated boneless chicken roasted in the tandoor.', true, true, false, 480, '12 min'],
  ['Butter Chicken', 15, 'Classic makhani gravy with charred tandoori chicken pieces.', true, false, false, 610, '12 min'],
  ['Rogan Josh', 16, 'Kashmiri-style lamb curry with fennel and dry ginger notes.', true, true, false, 640, '13 min'],
  ['Palak Paneer', 12, 'Spinach purée with paneer, garlic, and tempered cumin.', false, false, true, 410, '10 min'],
  ['Kadai Vegetable', 11, 'Seasonal vegetables in onion-tomato masala with crushed coriander.', false, true, true, 390, '10 min'],
  ['Kadai Chicken', 14, 'Chicken curry with peppers, tomato, and coarsely ground spices.', false, true, false, 560, '11 min'],
  ['Malai Kofta', 13, 'Soft paneer-potato dumplings in rich cashew gravy.', false, false, true, 540, '11 min'],
  ['Matar Mushroom', 12, 'Peas and mushroom curry with ginger and tomato gravy.', false, false, true, 400, '10 min'],
  ['Bhindi Do Pyaza', 11, 'Okra stir-fry with onions, amchur, and coriander.', false, false, true, 330, '9 min'],
  ['Aloo Gobi Adraki', 10, 'Cauliflower and potato sautéed with ginger and turmeric.', false, false, true, 350, '9 min'],
  ['Paneer Lababdar', 13, 'Smoky paneer curry finished with cream and butter.', true, false, true, 530, '11 min'],
  ['Lachha Paratha Basket', 8, 'Layered flaky flatbreads with pickle and chutney.', false, false, true, 290, '6 min'],
  ['Garlic Naan', 5, 'Soft naan brushed with garlic butter and coriander.', false, false, true, 220, '5 min'],
  ['Tandoori Roti', 4, 'Whole wheat roti baked in the tandoor.', false, false, true, 160, '4 min'],
  ['Veg Pulao', 9, 'Fragrant basmati rice with vegetables, mint, and fried onions.', false, false, true, 360, '8 min'],
  ['Jeera Rice', 7, 'Basmati rice tempered with cumin and ghee.', false, false, true, 280, '6 min'],
  ['Lucknowi Veg Biryani', 14, 'Subtle Awadhi biryani with saffron, nuts, and aromatic spices.', false, false, true, 560, '12 min'],
  ['Murgh Dum Biryani', 16, 'Slow-cooked chicken biryani with raita and salan.', true, true, false, 710, '13 min'],
  ['Dahi Bhalla Chaat', 9, 'Lentil dumplings with yogurt, tamarind, mint, and sev.', false, false, true, 320, '7 min'],
  ['Samosa Chaat', 9, 'Crushed samosa with chole, yogurt, chutneys, and onions.', false, true, true, 390, '8 min'],
  ['Papdi Chaat', 8, 'Crisp wafers topped with potatoes, yogurt, chutneys, and pomegranate.', false, false, true, 300, '7 min'],
  ['Kulfi Falooda', 9, 'Traditional kulfi with falooda sev and rose syrup.', true, false, true, 340, '5 min'],
  ['Shahi Paneer', 13, 'Royal paneer curry enriched with saffron and cashew paste.', true, false, true, 520, '11 min'],
  ['Sarson Saag Makki Roti', 12, 'Punjabi mustard greens with corn flatbread and jaggery.', false, false, true, 430, '11 min']
] as const;

const tea = [
  ['Masala Chai', 4, 'House-brewed black tea simmered with milk, ginger, cardamom, clove, and cinnamon.', true, true, true, 120, '4 min'],
  ['Cutting Chai', 3, 'Mumbai-style half glass strong chai for quick sipping.', false, true, true, 80, '3 min'],
  ['Elaichi Chai', 4, 'Fragrant milk tea with green cardamom and a mellow finish.', false, false, true, 110, '4 min'],
  ['Adrak Chai', 4, 'Bold ginger tea with warming spice and creamy milk.', false, true, true, 115, '4 min'],
  ['Kashmiri Kahwa', 5, 'Green tea infusion with saffron, cinnamon, almonds, and rose petals.', true, false, true, 70, '5 min'],
  ['Noon Chai', 5, 'Pink Kashmiri salted tea with milk and pistachio dust.', false, false, true, 95, '5 min'],
  ['Tulsi Herbal Tea', 4, 'Caffeine-free holy basil infusion with honeyed aroma.', false, false, true, 20, '4 min'],
  ['Lemongrass Tea', 4, 'Fresh lemongrass brew with citrus notes and light sweetness.', false, false, true, 25, '4 min'],
  ['Mint Green Tea', 4, 'Refreshing green tea with garden mint leaves.', false, false, true, 15, '3 min'],
  ['Sulaimani Tea', 4, 'Kerala black tea with lemon, mint, and a pinch of spice.', false, false, true, 18, '3 min'],
  ['Irani Chai', 5, 'Creamy slow-brewed tea with condensed milk richness.', true, false, true, 140, '5 min'],
  ['Chocolate Chai', 5, 'Spiced chai touched with cocoa and steamed milk.', false, false, true, 160, '5 min'],
  ['Rose Chai', 5, 'Silky chai infused with dried rose petals and cardamom.', false, false, true, 125, '4 min'],
  ['Jaggery Chai', 4, 'Traditional chai sweetened with dark jaggery.', false, false, true, 118, '4 min'],
  ['Filter Kaapi', 4, 'South Indian filter coffee with deep roast aroma and frothy milk.', true, false, true, 90, '4 min'],
  ['Badam Milk Tea', 5, 'Milky tea with almond paste and saffron.', false, false, true, 170, '5 min'],
  ['Ice Tea Nimbu', 4, 'Indian-style chilled lemon tea with black salt and mint.', false, false, true, 60, '3 min'],
  ['Peach Iced Chai', 5, 'Cold chai with peach nectar and a subtle spice finish.', false, false, true, 95, '4 min'],
  ['Tandoori Chai', 5, 'Dramatic smoky chai finished in a fired clay kulhad.', true, true, true, 130, '5 min'],
  ['Saffron Milk Tea', 5, 'Rich tea with saffron, cardamom, and a creamy finish.', false, false, true, 135, '5 min']
] as const;

const desserts = [
  ['Gulab Jamun Duo', 7, 'Warm khoya dumplings soaked in cardamom syrup.', true, false, true, 280, '4 min'],
  ['Rasmalai', 8, 'Soft paneer discs in chilled saffron milk with pistachio.', true, false, true, 260, '4 min'],
  ['Gajar Halwa', 7, 'Slow-cooked carrot pudding with nuts and reduced milk.', false, false, true, 300, '5 min'],
  ['Shahi Tukda', 8, 'Fried bread in rabri with saffron, nuts, and rose.', false, false, true, 340, '5 min'],
  ['Phirni', 7, 'Silky ground rice pudding in a clay pot.', false, false, true, 220, '4 min'],
  ['Kulfi Trio', 8, 'Mango, pistachio, and malai kulfi slices.', true, false, true, 250, '4 min'],
  ['Jalebi Rabri', 8, 'Hot jalebi spirals with chilled thickened milk.', true, false, true, 360, '5 min'],
  ['Payasam of the Day', 7, 'Rotating South Indian pudding finished with ghee-fried nuts.', false, false, true, 230, '4 min'],
  ['Kesari Bath', 6, 'Semolina pudding with saffron, ghee, and cashews.', false, false, true, 240, '4 min'],
  ['Mishti Doi', 7, 'Caramelized Bengali sweet yogurt served chilled.', false, false, true, 180, '3 min']
] as const;

const drinks = [
  ['Sweet Lassi', 6, 'Chilled yogurt drink with cardamom and a frothy finish.', false, false, true, 190, '3 min'],
  ['Salted Lassi', 6, 'Savory yogurt cooler with roasted cumin and mint.', false, false, true, 160, '3 min'],
  ['Mango Lassi', 7, 'Classic mango-yogurt blend with saffron.', true, false, true, 230, '3 min'],
  ['Jaljeera Cooler', 5, 'Tangy cumin-mint drink with lime and black salt.', false, true, true, 45, '2 min'],
  ['Nimbu Soda', 5, 'Sparkling lemon soda sweet-salty Indian style.', false, false, true, 55, '2 min'],
  ['Masala Buttermilk', 5, 'Cooling chaas with coriander, cumin, and green chili.', false, true, true, 70, '2 min'],
  ['Rose Milk', 6, 'Chilled milk flavored with rose syrup and basil seeds.', false, false, true, 170, '3 min'],
  ['Sugarcane Ginger Lime', 6, 'Fresh sugarcane juice brightened with ginger and lime.', false, false, true, 120, '3 min'],
  ['Tender Coconut Water', 5, 'Naturally hydrating coconut water served cold.', false, false, true, 40, '1 min'],
  ['Masala Soda', 5, 'Sparkling digestive soda with spice, citrus, and herbs.', false, true, true, 35, '2 min']
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
  ...buildItems(indianThali, 'Indian Thali', imageSet.indianThali, 1),
  ...buildItems(southIndian, 'South Indian', imageSet.southIndian, 31),
  ...buildItems(northIndian, 'North Indian', imageSet.northIndian, 61),
  ...buildItems(tea, 'Tea', imageSet.tea, 91),
  ...buildItems(desserts, 'Desserts', imageSet.desserts, 111),
  ...buildItems(drinks, 'Drinks', imageSet.drinks, 121),
];

export const categories: Array<MenuCategory | 'All'> = [
  'All',
  'Indian Thali',
  'South Indian',
  'North Indian',
  'Tea',
  'Desserts',
  'Drinks',
];

export const categoryDescriptions: Record<MenuCategory, string> = {
  'Indian Thali': 'Complete platters with regional curries, breads, rice, sides, and dessert built for generous Indian dining.',
  'South Indian': 'Dosas, idlis, biryanis, appams, and deeply spiced favorites from Tamil Nadu, Kerala, Karnataka, Andhra, and Telangana.',
  'North Indian': 'Creamy gravies, tandoor classics, breads, rice dishes, and street-style plates from the northern belt.',
  Tea: 'Kulhad chai, kahwa, herbal brews, and filter coffee for proper Indian tea-time energy.',
  Desserts: 'Classic Indian sweets from gulab jamun to phirni, kulfi, and regional puddings.',
  Drinks: 'Lassi, chaas, soda, sugarcane coolers, and traditional refreshers to round out the meal.',
};

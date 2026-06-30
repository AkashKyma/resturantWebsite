export type MenuCategory = 'Indian Thali' | 'South Indian' | 'North Indian' | 'Tea & Drinks';

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
  region: string;
};

const imageSet = {
  thali: [
    'https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1517244683847-7456b63c5969?auto=format&fit=crop&w=1200&q=80'
  ],
  southIndian: [
    'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1626132647523-66f4f8b8b0a9?auto=format&fit=crop&w=1200&q=80'
  ],
  northIndian: [
    'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=1200&q=80'
  ],
  tea: [
    'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=1200&q=80'
  ]
} as const;

const indianThaliRows = [
  ['Royal Rajasthani Thali', 18, 'Dal baati churma, gatte ki sabzi, ker sangri, bajra roti, and churma laddoo.', true, true, true, 920, '18 min', 'Rajasthan'],
  ['Gujarati Family Thali', 17, 'Undhiyu, dal, kadhi, thepla, farsan, khichdi, and shrikhand.', true, false, true, 860, '16 min', 'Gujarat'],
  ['Kathiawadi Thali', 18, 'Sev tameta, ringan no oro, bajri rotla, jaggery, and garlic chutney.', false, true, true, 900, '17 min', 'Gujarat'],
  ['Maharashtrian Festive Thali', 19, 'Puran poli, bharli vangi, matki usal, varan bhaat, and solkadhi.', true, true, true, 910, '18 min', 'Maharashtra'],
  ['Kolhapuri Thali', 20, 'Tambda rassa, pandhra rassa, mutton sukka, bhakri, and rice.', true, true, false, 980, '19 min', 'Maharashtra'],
  ['Malvani Seafood Thali', 22, 'Fish curry, fried surmai, solkadhi, steamed rice, and bhakri.', true, true, false, 940, '20 min', 'Konkan'],
  ['Goan Coastal Thali', 21, 'Prawn curry, rawa fry, kokum dal, cabbage foogath, and poi.', false, true, false, 890, '19 min', 'Goa'],
  ['Punjabi Village Thali', 19, 'Dal makhani, paneer butter masala, jeera rice, naan, and kheer.', true, false, true, 970, '17 min', 'Punjab'],
  ['Amritsari Thali', 20, 'Chole, kulcha, dal tadka, paneer tikka, and phirni.', false, true, true, 930, '18 min', 'Punjab'],
  ['Kashmiri Wazwan Plate', 24, 'Rogan josh, yakhni, haak saag, gushtaba, and saffron rice.', true, false, false, 1010, '21 min', 'Kashmir'],
  ['Himachali Dham Thali', 18, 'Madra, rajma, khatta, sepu vadi, rice, and meetha bhat.', false, false, true, 870, '17 min', 'Himachal Pradesh'],
  ['Awadhi Lucknowi Thali', 21, 'Galouti kebab, nihari, sheermal, zarda pulao, and shahi tukda.', true, false, false, 1020, '20 min', 'Uttar Pradesh'],
  ['Banarasi Satvik Thali', 17, 'Aloo tamatar, kaddu, chana dal, poori, boondi raita, and peda.', false, false, true, 850, '16 min', 'Uttar Pradesh'],
  ['Bihari Sattu Thali', 17, 'Litti chokha, chokha trio, ghugni, curd, and gur.', false, true, true, 880, '18 min', 'Bihar'],
  ['Jharkhand Tribal Thali', 18, 'Dhuska, aloo chokha, saag, chana curry, and rice beer-inspired cooler.', false, true, true, 840, '17 min', 'Jharkhand'],
  ['Bengali Bhoj Thali', 21, 'Shukto, luchi, cholar dal, fish kalia, mishti doi, and pulao.', true, false, false, 930, '19 min', 'West Bengal'],
  ['Odia Pakhala Thali', 17, 'Pakhala bhaat, saga bhaja, dalma, alu bharta, and badi chura.', false, false, true, 760, '14 min', 'Odisha'],
  ['Assamese Heritage Thali', 19, 'Masor tenga, khar, lai xaak, black rice, and pitika.', false, false, false, 820, '17 min', 'Assam'],
  ['Sikkim Monastery Thali', 18, 'Phagshapa-style vegetables, gundruk soup, millet roti, and momos.', false, true, true, 790, '16 min', 'Sikkim'],
  ['Nepali-Indian Hill Thali', 18, 'Aloo tama, dal, rice, achar, saag, and sel roti.', false, true, true, 810, '15 min', 'Darjeeling Hills'],
  ['Chhattisgarhi Rustic Thali', 17, 'Chila, fara, dubki kadhi, red rice, and mahua-inspired dessert.', false, false, true, 800, '16 min', 'Chhattisgarh'],
  ['Madhya Pradesh Royal Thali', 18, 'Bhutte ki kees, dal bafla, sabudana khichdi, and mawa bati.', false, false, true, 890, '17 min', 'Madhya Pradesh'],
  ['Telangana Spice Thali', 19, 'Kodi kura, pappu, gongura chutney, jonna roti, and rice.', true, true, false, 930, '18 min', 'Telangana'],
  ['Andhra Meals Thali', 18, 'Pappu, gutti vankaya, avakaya, rasam, curd rice, and papad.', true, true, true, 870, '16 min', 'Andhra Pradesh'],
  ['Chettinad Non-Veg Thali', 22, 'Pepper chicken, fish fry, kara kuzhambu, poriyal, and appam.', true, true, false, 960, '20 min', 'Tamil Nadu']
] as const;

const southIndianRows = [
  ['Classic Masala Dosa', 9, 'Crisp dosa with potato masala, coconut chutney, and sambar.', true, false, true, 420, '8 min', 'Karnataka'],
  ['Mysore Masala Dosa', 10, 'Dosa layered with spicy red chutney and buttery potato filling.', true, true, true, 450, '9 min', 'Karnataka'],
  ['Rava Dosa', 9, 'Lacy semolina dosa with pepper, cumin, and ghee roast finish.', false, false, true, 390, '8 min', 'Tamil Nadu'],
  ['Paper Roast Dosa', 11, 'Long crisp paper dosa served with three chutneys and sambar.', false, false, true, 430, '9 min', 'Tamil Nadu'],
  ['Set Dosa', 8, 'Soft fluffy dosa pair with vegetable saagu and chutney.', false, false, true, 360, '7 min', 'Karnataka'],
  ['Podi Idli', 8, 'Steamed idlis tossed in gunpowder spice and ghee.', false, true, true, 320, '6 min', 'Tamil Nadu'],
  ['Mini Sambar Idli', 8, 'Tender mini idlis soaked in hot sambar with coriander.', false, false, true, 300, '6 min', 'Tamil Nadu'],
  ['Ghee Karam Idli', 8, 'Idli cubes with ghee, podi, curry leaves, and roasted cashews.', false, true, true, 340, '6 min', 'Andhra Pradesh'],
  ['Medu Vada Basket', 8, 'Crisp urad dal vada with chutney trio and sambar.', false, false, true, 350, '7 min', 'Tamil Nadu'],
  ['Sambar Vada', 9, 'Medu vada dunked in sambar with onion and coriander.', false, false, true, 380, '7 min', 'Tamil Nadu'],
  ['Pongal Comfort Bowl', 8, 'Ven pongal with black pepper, ginger, ghee, and coconut chutney.', false, false, true, 410, '7 min', 'Tamil Nadu'],
  ['Bisi Bele Bath', 9, 'Lentil rice with vegetables, tamarind, and house masala.', false, true, true, 440, '8 min', 'Karnataka'],
  ['Tomato Rice', 8, 'South-style tomato rice finished with curry leaves and peanuts.', false, true, true, 390, '7 min', 'Andhra Pradesh'],
  ['Lemon Rice', 8, 'Turmeric rice with mustard seeds, curry leaves, and roasted peanuts.', false, false, true, 360, '6 min', 'Tamil Nadu'],
  ['Curd Rice Temple Style', 8, 'Cooling rice with curd, pomegranate, ginger, and tempering.', false, false, true, 330, '5 min', 'Tamil Nadu'],
  ['Tamarind Rice', 8, 'Puliyodarai with sesame, peanuts, and tamarind concentrate.', false, true, true, 370, '6 min', 'Tamil Nadu'],
  ['Appam with Vegetable Stew', 10, 'Soft lacy appam with coconut milk stew and vegetables.', true, false, true, 430, '9 min', 'Kerala'],
  ['Malabar Parotta with Kurma', 10, 'Layered parotta with mixed vegetable kurma.', false, true, true, 470, '10 min', 'Kerala'],
  ['Kerala Puttu Kadala', 10, 'Steamed rice flour cylinders with black chickpea curry.', false, false, true, 450, '9 min', 'Kerala'],
  ['Kappa with Fish Curry', 12, 'Mashed tapioca with fiery Kerala fish curry.', true, true, false, 520, '11 min', 'Kerala'],
  ['Chettinad Pepper Chicken', 13, 'Dry chicken toss with pepper, fennel, and curry leaves.', true, true, false, 510, '10 min', 'Tamil Nadu'],
  ['Gongura Chicken Bowl', 12, 'Tangy gongura chicken with steamed rice and onion salad.', false, true, false, 560, '11 min', 'Andhra Pradesh'],
  ['Nellore Fish Curry', 13, 'Red chili tamarind fish curry with rice.', false, true, false, 540, '10 min', 'Andhra Pradesh'],
  ['Hyderabadi Veg Biryani', 12, 'Layered basmati with saffron, mint, fried onions, and raita.', true, true, true, 610, '12 min', 'Telangana'],
  ['Hyderabadi Chicken Biryani', 14, 'Dum biryani with marinated chicken, mint, and saffron.', true, true, false, 690, '13 min', 'Telangana']
] as const;

const northIndianRows = [
  ['Butter Chicken', 14, 'Tandoor chicken simmered in rich tomato butter gravy.', true, false, false, 620, '11 min', 'Delhi'],
  ['Paneer Butter Masala', 12, 'Paneer cubes in silky tomato and cashew gravy.', true, false, true, 540, '10 min', 'Punjab'],
  ['Dal Makhani', 11, 'Slow-cooked black lentils with butter, cream, and smoke.', true, false, true, 480, '10 min', 'Punjab'],
  ['Chole Bhature', 11, 'Amritsari chickpea curry with fluffy fried bhature.', true, true, true, 700, '12 min', 'Punjab'],
  ['Rajma Chawal', 10, 'Comforting kidney bean curry over steamed basmati rice.', false, false, true, 520, '9 min', 'Punjab'],
  ['Aloo Paratha', 9, 'Stuffed flatbread with yogurt, pickle, and white butter.', false, false, true, 470, '8 min', 'Punjab'],
  ['Paneer Tikka', 12, 'Charred paneer cubes with peppers, onions, and mint chutney.', true, true, true, 430, '9 min', 'Punjab'],
  ['Tandoori Chicken Half', 13, 'Yogurt-marinated chicken roasted in tandoor spices.', true, true, false, 510, '11 min', 'Punjab'],
  ['Mutton Rogan Josh', 15, 'Kashmiri style lamb curry with fennel and warming spices.', true, false, false, 640, '12 min', 'Kashmir'],
  ['Kashmiri Dum Aloo', 11, 'Baby potatoes in red yogurt gravy with fennel and ginger.', false, true, true, 460, '9 min', 'Kashmir'],
  ['Palak Paneer', 11, 'Paneer in spinach gravy scented with garlic and kasoori methi.', false, false, true, 420, '9 min', 'North India'],
  ['Malai Kofta', 12, 'Paneer potato dumplings in creamy saffron gravy.', false, false, true, 500, '10 min', 'North India'],
  ['Kadai Paneer', 12, 'Paneer with capsicum, onion, and roasted kadai masala.', false, true, true, 470, '10 min', 'North India'],
  ['Kadai Chicken', 13, 'Chicken tossed in onion-tomato gravy with crushed spices.', false, true, false, 540, '10 min', 'North India'],
  ['Chicken Tikka Masala', 13, 'Tandoori chicken finished in smoky tomato gravy.', true, true, false, 590, '11 min', 'Delhi'],
  ['Amritsari Kulcha Plate', 10, 'Stuffed kulcha with chole, pickle, and onion salad.', false, true, true, 530, '9 min', 'Punjab'],
  ['Pindi Chana', 10, 'Dry spiced chana with pomegranate powder and ginger.', false, true, true, 430, '8 min', 'Punjab'],
  ['Bhindi Do Pyaza', 10, 'Okra stir fry with double onions and tomato masala.', false, false, true, 360, '8 min', 'Uttar Pradesh'],
  ['Baingan Bharta', 10, 'Fire-roasted eggplant mash with peas and coriander.', false, true, true, 350, '8 min', 'Punjab'],
  ['Nawabi Veg Korma', 12, 'Vegetables and nuts in mild creamy Awadhi gravy.', false, false, true, 490, '10 min', 'Lucknow'],
  ['Lucknowi Galouti Kebab', 13, 'Melt-soft kebabs with ulte tawe ka paratha.', true, false, false, 520, '9 min', 'Lucknow'],
  ['Nihari Bowl', 14, 'Slow-cooked spiced beef stew with ginger and coriander.', false, true, false, 610, '12 min', 'Old Delhi'],
  ['Jeera Rice', 6, 'Fragrant basmati rice with cumin and ghee.', false, false, true, 290, '5 min', 'North India'],
  ['Garlic Naan Basket', 6, 'Tandoor naan brushed with garlic butter and herbs.', false, false, true, 310, '5 min', 'North India'],
  ['Lassi Sweet & Salted', 5, 'Classic Punjab lassi served chilled in earthen style.', false, false, true, 190, '3 min', 'Punjab']
] as const;

const teaRows = [
  ['Masala Chai', 4, 'Strong Assam tea simmered with milk, cardamom, ginger, and clove.', true, true, true, 140, '4 min', 'India'],
  ['Elaichi Chai', 4, 'Milk tea perfumed with green cardamom and light sweetness.', false, false, true, 130, '4 min', 'India'],
  ['Adrak Chai', 4, 'Fresh ginger chai with a sharp warming finish.', false, true, true, 135, '4 min', 'India'],
  ['Kashmiri Kahwa', 5, 'Saffron green tea with almond slivers and cinnamon.', true, false, true, 70, '5 min', 'Kashmir'],
  ['Cutting Chai', 3, 'Mumbai street-style half glass of bold spiced tea.', false, true, true, 90, '3 min', 'Mumbai'],
  ['Irani Chai', 4, 'Hyderabad café-style thick creamy tea with a mellow finish.', false, false, true, 150, '4 min', 'Hyderabad'],
  ['Sulaimani Tea', 4, 'Kerala black tea with lemon, mint, and gentle spice.', false, false, true, 40, '3 min', 'Kerala'],
  ['Tulsi Herbal Tea', 4, 'Holy basil infusion with honey and pepper notes.', false, false, true, 35, '4 min', 'India'],
  ['Lemon Tea', 4, 'Clear tea with lemon, honey, and a light spice lift.', false, false, true, 30, '3 min', 'India'],
  ['Mint Tea', 4, 'Refreshing mint infusion served hot.', false, false, true, 25, '3 min', 'India'],
  ['Rose Milk', 5, 'Chilled milk drink with rose syrup and basil seeds.', false, false, true, 210, '3 min', 'Tamil Nadu'],
  ['Filter Coffee', 5, 'South Indian degree coffee with frothy milk and chicory.', true, false, true, 160, '4 min', 'Tamil Nadu'],
  ['Cold Filter Coffee', 6, 'Iced filter coffee with jaggery sweetness.', false, false, true, 180, '4 min', 'Karnataka'],
  ['Badam Milk', 5, 'Warm saffron almond milk with pistachio dust.', false, false, true, 220, '4 min', 'North India'],
  ['Jaggery Ginger Tea', 4, 'Earthy ginger tea sweetened with jaggery.', false, true, true, 120, '4 min', 'India'],
  ['Tandoori Chai', 5, 'Smoky chai finished in a hot clay cup for roasted aroma.', true, true, true, 155, '5 min', 'North India'],
  ['Mango Lassi', 6, 'Creamy yogurt drink blended with ripe mango.', false, false, true, 240, '3 min', 'Punjab'],
  ['Salted Buttermilk', 4, 'Spiced chaas with cumin, coriander, and green chili.', false, true, true, 80, '3 min', 'Gujarat'],
  ['Jaljeera Cooler', 4, 'Tangy cumin mint drink with black salt.', false, true, true, 45, '2 min', 'North India'],
  ['Nannari Sharbat', 5, 'Herbal root syrup with lemon and chilled water.', false, false, true, 90, '2 min', 'Tamil Nadu'],
  ['Panakam', 4, 'Jaggery cooler with dry ginger, cardamom, and lemon.', false, true, true, 75, '2 min', 'South India'],
  ['Kesar Pistachio Tea', 5, 'Creamy saffron tea with pistachio crumbs.', false, false, true, 145, '4 min', 'North India'],
  ['Chocolate Chai', 5, 'Masala chai with dark cocoa and a café finish.', false, false, true, 170, '4 min', 'Fusion'],
  ['Iced Masala Chai', 5, 'Chilled spiced chai over ice with cardamom foam.', false, true, true, 150, '4 min', 'India'],
  ['Tender Coconut Cooler', 5, 'Tender coconut water with lime and mint.', false, false, true, 60, '2 min', 'Coastal India']
] as const;

type SourceRow = readonly [string, number, string, boolean, boolean, boolean, number, string, string];

function buildItems(
  rows: readonly SourceRow[],
  category: MenuCategory,
  images: readonly string[],
  startId: number
): MenuItem[] {
  return rows.map(([name, price, description, featured, spicy, vegetarian, calories, prepTime, region], index) => ({
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
    region,
  }));
}

export const menuItems: MenuItem[] = [
  ...buildItems(indianThaliRows, 'Indian Thali', imageSet.thali, 1),
  ...buildItems(southIndianRows, 'South Indian', imageSet.southIndian, 26),
  ...buildItems(northIndianRows, 'North Indian', imageSet.northIndian, 51),
  ...buildItems(teaRows, 'Tea & Drinks', imageSet.tea, 76),
];

export const categories: Array<MenuCategory | 'All'> = ['All', 'Indian Thali', 'South Indian', 'North Indian', 'Tea & Drinks'];

export const regionalHighlights = [
  {
    title: '100-item Indian feed',
    description: 'Built out with real regional spread instead of a thin placeholder menu.',
  },
  {
    title: 'Thali-first browsing',
    description: 'Dedicated coverage for Indian thali plates, South Indian classics, North Indian mains, and tea service.',
  },
  {
    title: 'Image-backed menu cards',
    description: 'Every item includes a high-quality image, pricing, prep time, and region.',
  },
] as const;

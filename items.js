// =======================================================
// Файл: items.js
// База предметов для ресурспака Lunaria
// =======================================================

/* 
  =======================================================
  УДОБНЫЕ ШАБЛОНЫ ДЛЯ КОПИРОВАНИЯ И ДОБАВЛЕНИЯ ПРЕДМЕТОВ:
  =======================================================

  --- ВАРИАНТ А: Обычный предмет ---
  {
    image: "images/путь_к_картинке.png",
    hoverImage: "images/картинка_при_наведении.png",
    category: "weapons", // Доступные категории: weapons, armor, tools, hats, totems, food, goodies
    theme: "lunaria",    // Доступные тематики: lunaria, slime, pugs, energy, other
    original: { ru: "Исходный предмет", en: "Original Item" },
    rename: { ru: "Новое Имя Ру", en: "New Name En" },
    requiresRPT: true    // ДОБАВЬТЕ ЭТУ СТРОКУ ЕСЛИ ДЛЯ ПРЕДМЕТА НУЖЕН МОД RPT
  },

  --- ВАРИАНТ В: С выпадающим списком материалов ---
  {
    image: "images/основная_картинка.png",
	hoverImage: "images/картинка_при_наведении.png",
    category: "weapons",
    theme: "slime",
    original: { ru: "Исходный предмет", en: "Original Item" },
    rename: { ru: "Новое Имя Ру", en: "New Name En" },
    variants: [
      { material: { ru: "Деревянный", en: "Wooden" }, image: "images/variant_wood.png", matIcon: "images/mat_wood.png" },
      { material: { ru: "Каменный", en: "Stone" }, image: "images/variant_stone.png", matIcon: "images/mat_stone.png" }
    ],
	requiresRPT: false
  },
  -------------------------------------------------------
*/

window.LUNARIA_ITEMS = [
  {
    image: "images/just/moonedge.png",
    hoverImage: "images/render/moonedge.png",
    category: "weapons",
    theme: "lunaria",
    original: { ru: "Любой Меч", en: "Any sword" },
    rename: { ru: "Остролуние", en: "Moonedge" },
	requiresRPT: false
  },
  {
    image: "images/just/silverine_ingot.png",
    hoverImage: "images/render/silverine_ingot.png",
    category: "goodies",
    theme: "lunaria",
    original: { ru: "Железный Слиток", en: "Iron Ingot" },
    rename: { ru: "Сильвериновый Слиток", en: "Silverine Ingot" },
	requiresRPT: false
  },
  {
    image: "images/just/moonbattler.png",
    hoverImage: "images/render/moonbattler.png",
    category: "weapons",
    theme: "lunaria",
    original: { ru: "Любое Копье", en: "Any spear" },
    rename: { ru: "Луноборец", en: "Moonbattler" },
	requiresRPT: false
  },
  {
    image: "images/just/image_of_majesty.png",
    hoverImage: "images/render/image_of_majesty.png",
    category: "hats",
    theme: "lunaria",
    original: { ru: "Вырезанная Тыква", en: "Carved Pumpkin" },
    rename: { ru: "Образ Величия", en: "Image of Majesty" },
	requiresRPT: false
  },
  {
    image: "images/just/slime_sword.png",
    hoverImage: "images/render/slime_sword.png",
    category: "weapons",
    theme: "slime",
    original: { ru: "Любой Меч", en: "Any sword" },
    rename: { ru: "Слизневый Меч", en: "Slime Sword" },
	requiresRPT: false
  },
  {
    image: "images/just/monster.png",
    hoverImage: "images/render/monster.png",
    category: "food",
    theme: "energy",
    original: { ru: "Золотая Морковь", en: "Golden Carrot" },
    rename: { ru: "Монстр", en: "Monster" },
	requiresRPT: false
  },
  {
    image: "images/just/white_monster.png",
    hoverImage: "images/render/white_monster.png",
    category: "food",
    theme: "energy",
    original: { ru: "Золотая Морковь", en: "Golden Carrot" },
    rename: { ru: "Белый Монстр", en: "White Monster" },
	requiresRPT: false
  },
  {
    image: "images/just/slimeburger.png",
    hoverImage: "images/render/slimeburger.png",
    category: "food",
    theme: "slime",
    original: { ru: "Золотая Морковь", en: "Golden Carrot" },
    rename: { ru: "Слизьбургер", en: "Slimeburger" },
	requiresRPT: false
  },
  {
    image: "images/just/spunked_carrot.png",
    hoverImage: "images/render/spunked_carrot.png",
    category: "food",
    theme: "other",
    original: { ru: "Золотая Морковь", en: "Golden Carrot" },
    rename: { ru: "Малафьиная Морковь", en: "Spunked Carrot" },
	requiresRPT: false
  },
  {
    image: "images/just/pug_of_undying.png",
	hoverImage: "images/render/pug_of_undying.png",
    category: "totems",
    theme: "pugs",
    original: { ru: "Тотем Бессмертия", en: "Totem of Undying" },
    rename: { ru: "Мопс Бессмертия", en: "Pug of Undying" },
	requiresRPT: false
  },
  {
    image: "images/just/great_pug.png",
	hoverImage: "images/render/great_pug.png",
    category: "hats",
    theme: "pugs",
    original: { ru: "Вырезанная Тыква", en: "Carved Pumpkin" },
    rename: { ru: "Великий Мопс", en: "Great Pug" },
    requiresRPT: false
  },
  {
    image: "images/just/great_pug.png",
	hoverImage: "images/render/great_magical_dog.png",
    category: "hats",
    theme: "pugs",
    original: { ru: "Вырезанная Тыква", en: "Carved Pumpkin" },
    rename: { ru: "Великий Магический Пес", en: "Great Magical Dog" },
    requiresRPT: false
  },
  {
    image: "images/just/grass_sword.png",
	hoverImage: "images/render/grass_sword.png",
    category: "weapons",
    theme: "adventure_time",
    original: { ru: "Любой Меч", en: "Any Sword" },
    rename: { ru: "Травяной Меч", en: "Grass Sword" },
	requiresRPT: false
  },
  {
    image: "images/just/scarlet.png",
	hoverImage: "images/render/scarlet.png",
    category: "weapons",
    theme: "adventure_time",
    original: { ru: "Любой Меч", en: "Any Sword" },
    rename: { ru: "Скарлет", en: "Scarlet" },
	requiresRPT: false
  },
  {
    image: "images/just/silverine_shield.png",
	hoverImage: "images/render/silverine_shield.png",
    category: "weapons",
    theme: "lunaria",
    original: { ru: "Щит", en: "Shield" },
    rename: { ru: "Сильвериновый Щит", en: "Silverine Shield" },
	requiresRPT: false
  },
  {
    image: "images/just/slime_shield.png",
	hoverImage: "images/render/slime_shield.png",
    category: "weapons",
    theme: "slime",
    original: { ru: "Щит", en: "Shield" },
    rename: { ru: "Слизневый Щит", en: "Slime Shield" },
	requiresRPT: false
  },
  {
    image: "images/just/ice_king_crown.png",
	hoverImage: "images/render/ice_king_crown.png",
    category: "hats",
    theme: "adventure_time",
    original: { ru: "Вырезанная Тыква", en: "Carved Pumpkin" },
    rename: { ru: "Корона Ледяного Короля", en: "Ice King Crown" },
	requiresRPT: false
  },
  {
    image: "images/just/tetanus_revenge.png",
	hoverImage: "images/render/tetanus_revenge.png",
    category: "weapons",
    theme: "other",
    original: { ru: "Любой меч", en: "Any sword" },
    rename: { ru: "Двуручный Столбняк", en: "Twohanded Tetanus" },
	requiresRPT: false
  },
  {
    image: "images/just/iron_lillipuntian_sword.png",
	hoverImage: "images/render/iron_lillipuntian_sword.png",
    category: "weapons",
    theme: "other",
    original: { ru: "Любой меч", en: "Any sword" },
    rename: { ru: "Новое Имя Ру", en: "New Name En" },
    variants: [
      { material: { ru: "Деревянный", en: "Wooden" }, image: "images/just/wooden_lillipuntian_sword.png", hoverImage: "images/render/wooden_lillipuntian_sword.png", matIcon: "images/ui/mat_wood.png" },
      { material: { ru: "Каменный", en: "Stone" }, image: "images/just/stone_lillipuntian_sword.png", hoverImage: "images/render/stone_lillipuntian_sword.png", matIcon: "images/ui/mat_stone.png" },
	  { material: { ru: "Медный", en: "Copper" }, image: "images/just/copper_lillipuntian_sword.png", hoverImage: "images/render/copper_lillipuntian_sword.png", matIcon: "images/ui/mat_copper.png" },
      { material: { ru: "Железный", en: "Iron" }, image: "images/just/iron_lillipuntian_sword.png", hoverImage: "images/render/iron_lillipuntian_sword.png", matIcon: "images/ui/mat_iron.png" },
	  { material: { ru: "Золотой", en: "Golden" }, image: "images/just/golden_lillipuntian_sword.png", hoverImage: "images/render/golden_lillipuntian_sword.png", matIcon: "images/ui/mat_gold.png" },
      { material: { ru: "Алмазный", en: "Diamond" }, image: "images/just/diamond_lillipuntian_sword.png", hoverImage: "images/render/diamond_lillipuntian_sword.png", matIcon: "images/ui/mat_diamond.png" },
	  { material: { ru: "Незеритовый", en: "Netherite" }, image: "images/just/netherite_lillipuntian_sword.png", hoverImage: "images/render/netherite_lillipuntian_sword.png", matIcon: "images/ui/mat_netherite.png" }
    ],
	requiresRPT: false
  },
  {
    image: "images/just/carnelian.png",
	hoverImage: "images/render/carnelian.png",
    category: "weapons",
    theme: "other",
    original: { ru: "Аметистовый осколок", en: "Amethyst shard" },
    rename: { ru: "Сердолик", en: "Carnelian" },
	requiresRPT: false
  },
  {
    image: "images/just/garnet.png",
	hoverImage: "images/render/garnet.png",
    category: "weapons",
    theme: "other",
    original: { ru: "Аметистовый осколок", en: "Amethyst shard" },
    rename: { ru: "Гранат", en: "Garnet" },
	requiresRPT: false
  },
  {
    image: "images/just/hedonite.png",
	hoverImage: "images/render/hedonite.png",
    category: "weapons",
    theme: "other",
    original: { ru: "Аметистовый осколок", en: "Amethyst shard" },
    rename: { ru: "Жедонит", en: "Hedonite" },
	requiresRPT: false
  },
  {
    image: "images/just/hematite.png",
	hoverImage: "images/render/hematite.png",
    category: "weapons",
    theme: "other",
    original: { ru: "Аметистовый осколок", en: "Amethyst shard" },
    rename: { ru: "Гематит", en: "Hematite" },
	requiresRPT: false
  },
  {
    image: "images/just/opal.png",
	hoverImage: "images/render/opal.png",
    category: "weapons",
    theme: "other",
    original: { ru: "Аметистовый осколок", en: "Amethyst shard" },
    rename: { ru: "Опал", en: "Opal" },
	requiresRPT: false
  },
  {
    image: "images/just/sodalite.png",
	hoverImage: "images/render/sodalite.png",
    category: "weapons",
    theme: "other",
    original: { ru: "Аметистовый осколок", en: "Amethyst shard" },
    rename: { ru: "Содалит", en: "Sodalite" },
	requiresRPT: false
  },
  {
    image: "images/just/goblin_stew.png",
	hoverImage: "images/render/goblin_stew.png",
    category: "food",
    theme: "other",
    original: { ru: "Еда в миске", en: "Food in bowl" },
    rename: { ru: "Гоблинская Похлебка", en: "Goblin Stew" },
    variants: [
      { material: { ru: "Свекольный суп", en: "Beetroot soup" }, image: "images/just/goblin_stew.png", hoverImage: "images/render/goblin_stew.png", matIcon: "images/ui/beetroot_soup.png" },
      { material: { ru: "Тушёные грибы", en: "Mushroom soup" }, image: "images/just/goblin_stew.png", hoverImage: "images/render/goblin_stew.png", matIcon: "images/ui/mushroom_soup.png" },
	  { material: { ru: "Тушёный кролик", en: "Rabbit Stew" }, image: "images/just/goblin_stew.png", hoverImage: "images/render/goblin_stew.png", matIcon: "images/ui/rabbit_soup.png" }
    ],
	requiresRPT: false
  },
];

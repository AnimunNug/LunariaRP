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
    category: "weapons", // Доступные категории: weapons, armor, tools, hats, totems, food, goodies
    theme: "lunaria",    // Доступные тематики: lunaria, slime, pugs, energy, other
    original: { ru: "Исходный предмет", en: "Original Item" },
    rename: { ru: "Новое Имя Ру", en: "New Name En" },
    requiresRPT: true    // ДОБАВЬТЕ ЭТУ СТРОКУ ЕСЛИ ДЛЯ ПРЕДМЕТА НУЖЕН МОД RPT
  },

  --- ВАРИАНТ Б: С альтернативной иконкой при наведении ---
  {
    image: "images/базовая_картинка.png",
    hoverImage: "images/картинка_при_наведении.png",
    category: "weapons",
    theme: "lunaria",
    original: { ru: "Исходный предмет", en: "Original Item" },
    rename: { ru: "Новое Имя Ру", en: "New Name En" }
  },

  --- ВАРИАНТ В: С выпадающим списком материалов ---
  {
    image: "images/основная_картинка.png",
    category: "weapons",
    theme: "slime",
    original: { ru: "Исходный предмет", en: "Original Item" },
    rename: { ru: "Новое Имя Ру", en: "New Name En" },
    variants: [
      { material: { ru: "Деревянный", en: "Wooden" }, image: "images/variant_wood.png", matIcon: "images/mat_wood.png" },
      { material: { ru: "Каменный", en: "Stone" }, image: "images/variant_stone.png", matIcon: "images/mat_stone.png" }
    ]
  },
  -------------------------------------------------------
*/

window.LUNARIA_ITEMS = [
  {
    image: "images/moonedge.png",
    hoverImage: "images/moonedge_render.png",
    category: "weapons",
    theme: "lunaria",
    original: { ru: "Любой Меч", en: "Any sword" },
    rename: { ru: "Остролуние", en: "Moonedge" }
  },
  {
    image: "images/silverine_ingot.png",
    hoverImage: "images/silverine_ingot_render.png",
    category: "goodies",
    theme: "lunaria",
    original: { ru: "Железный Слиток", en: "Iron Ingot" },
    rename: { ru: "Сильвериновый Слиток", en: "Silverine Ingot" }
  },
  {
    image: "images/moonbattler_icon.png",
    hoverImage: "images/moonbattler.png",
    category: "weapons",
    theme: "lunaria",
    original: { ru: "Любое Копье", en: "Any spear" },
    rename: { ru: "Луноборец", en: "Moonbattler" }
  },
  {
    image: "images/image_of_majesty_icon.png",
    hoverImage: "images/image_of_majesty.png",
    category: "hats",
    theme: "lunaria",
    original: { ru: "Вырезанная Тыква", en: "Carved Pumpkin" },
    rename: { ru: "Образ Величия", en: "Image of Majesty" },
    requiresRPT: true // <--- Добавлен индикатор мода RPT
  },
  {
    image: "images/slime_sword.png",
    hoverImage: "images/slime_sword_render.png",
    category: "weapons",
    theme: "slime",
    original: { ru: "Любой Меч", en: "Any sword" },
    rename: { ru: "Слизневый Меч", en: "Slime Sword" },
    variants: [
      { material: { ru: "Деревянный", en: "Wooden" }, image: "images/slime_sword_wood.png", matIcon: "images/mat_wood.png" },
      { material: { ru: "Каменный", en: "Stone" }, image: "images/slime_sword_stone.png", matIcon: "images/mat_stone.png" },
      { material: { ru: "Железный", en: "Iron" }, image: "images/slime_sword_iron.png", matIcon: "images/mat_iron.png" },
      { material: { ru: "Золотой", en: "Golden" }, image: "images/slime_sword_gold.png", matIcon: "images/mat_gold.png" },
      { material: { ru: "Алмазный", en: "Diamond" }, image: "images/slime_sword_diamond.png", matIcon: "images/mat_diamond.png" },
      { material: { ru: "Незеритовый", en: "Netherite" }, image: "images/slime_sword_netherite.png", matIcon: "images/mat_netherite.png" }
    ]
  },
  {
    image: "images/monster.png",
    category: "food",
    theme: "energy",
    original: { ru: "Золотая Морковь", en: "Golden Carrot" },
    rename: { ru: "Монстр", en: "Monster" }
  },
  {
    image: "images/white_monster.png",
    category: "food",
    theme: "energy",
    original: { ru: "Золотая Морковь", en: "Golden Carrot" },
    rename: { ru: "Белый Монстр", en: "White Monster" }
  },
  {
    image: "images/slimeburger.png",
    category: "food",
    theme: "slime",
    original: { ru: "Золотая Морковь", en: "Golden Carrot" },
    rename: { ru: "Слизьбургер", en: "Slimeburger" }
  },
  {
    image: "images/spunked_carrot.png",
    category: "food",
    theme: "other",
    original: { ru: "Золотая Морковь", en: "Golden Carrot" },
    rename: { ru: "Малафьиная Морковь", en: "Spunked Carrot" }
  },
  {
    image: "images/pug_of_undying.png",
    category: "totems",
    theme: "pugs",
    original: { ru: "Тотем Бессмертия", en: "Totem of Undying" },
    rename: { ru: "Мопс Бессмертия", en: "Pug of Undying" }
  },
  {
    image: "images/great_pug.png",
    category: "hats",
    theme: "pugs",
    original: { ru: "Вырезанная Тыква", en: "Carved Pumpkin" },
    rename: { ru: "Великий Мопс", en: "Great Pug" },
    requiresRPT: true // <--- Добавлен индикатор мода RPT
  },
  {
    image: "images/grass_sword.png",
    category: "weapons",
    theme: "adventure_time",
    original: { ru: "Любой Меч", en: "Any Sword" },
    rename: { ru: "Травяной Меч", en: "Grass Sword" }
  },
  {
    image: "images/scarlet_icon.png",
    category: "weapons",
    theme: "adventure_time",
    original: { ru: "Любой Меч", en: "Any Sword" },
    rename: { ru: "Скарлет", en: "Scarlet" }
  },
  {
    image: "images/silverine_shield.png",
    category: "weapons",
    theme: "lunaria",
    original: { ru: "Щит", en: "Shield" },
    rename: { ru: "Сильвериновый Щит", en: "Silverine Shield" }
  },
  {
    image: "images/slime_shield.png",
    category: "weapons",
    theme: "slime",
    original: { ru: "Щит", en: "Shield" },
    rename: { ru: "Слизневый Щит", en: "Slime Shield" }
  },
  {
    image: "images/ice_king_crown_icon.png",
    category: "hats",
    theme: "adventure_time",
    original: { ru: "Вырезанная Тыква", en: "Carved Pumpkin" },
    rename: { ru: "Корона Ледяного Короля", en: "Ice King Crown" }
  }
];

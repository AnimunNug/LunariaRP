// Файл: items.js
// Этот файл содержит всю базу предметов для таблицы Lunaria.

window.LUNARIA_ITEMS = [
  // ==========================================
  // А) ОБЫЧНОЕ ДОБАВЛЕНИЕ НОВЫХ ПРЕДМЕТОВ
  // Указывается картинка, категория, тема, исходник и новое имя.
  // ==========================================
  { 
    image: "images/moonedge.png", 
    category: "weapons", 
    theme: "lunaria", 
    original: { ru: "Любой Меч", en: "Any sword" }, 
    rename: { ru: "Остролуние", en: "Moonedge" } 
  },
  { 
    image: "images/silverine_ingot.png", 
    category: "goodies", 
    theme: "lunaria", 
    original: { ru: "Железный Слиток", en: "Iron Ingot" }, 
    rename: { ru: "Сильвериновый Слиток", en: "Silverine Ingot" } 
  },

  // ==========================================
  // Б) ПРЕДМЕТЫ С АЛЬТЕРНАТИВНЫМ ИЗОБРАЖЕНИЕМ
  // Добавьте параметр "hoverImage", чтобы картинка менялась при наведении.
  // (Например: Образ Величия и Луноборец)
  // ==========================================
  { 
    image: "images/moonbattler.png", 
    hoverImage: "images/moonbattler_icon.png", // Вставьте сюда путь к картинке при приближении
    category: "weapons", 
    theme: "lunaria", 
    original: { ru: "Любое Копье", en: "Any spear" }, 
    rename: { ru: "Луноборец", en: "Moonbattler" } 
  },
  { 
    image: "images/image_of_majesty_icon.png", 
    hoverImage: "images/image_of_majesty.png", // Вставьте сюда путь к картинке при приближении
    category: "hats", 
    theme: "lunaria", 
    original: { ru: "Вырезанная Тыква", en: "Carved Pumpkin" }, 
    rename: { ru: "Образ Величия", en: "Image of Majesty" } 
  },

  // ==========================================
  // В) ПРЕДМЕТЫ С ВЫПАДАЮЩИМ СПИСКОМ МАТЕРИАЛОВ
  // Добавьте массив "variants" для отображения подкатегорий.
  // ==========================================
  { 
    image: "images/slime_sword.png", 
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

  // --- Остальные предметы вашей базы ---
  { image: "images/monster.png", category: "food", theme: "energy", original: { ru: "Золотая Морковь", en: "Golden Carrot" }, rename: { ru: "Монстр", en: "Monster" } },
  { image: "images/white_monster.png", category: "food", theme: "energy", original: { ru: "Золотая Морковь", en: "Golden Carrot" }, rename: { ru: "Белый Монстр", en: "White Monster" } },
  { image: "images/slimeburger.png", category: "food", theme: "slime", original: { ru: "Золотая Морковь", en: "Golden Carrot" }, rename: { ru: "Слизьбургер", en: "Slimeburger" } },
  { image: "images/spunked_carrot.png", category: "food", theme: "other", original: { ru: "Золотая Морковь", en: "Golden Carrot" }, rename: { ru: "Малафьиная Морковь", en: "Spunked Carrot" } },
  { image: "images/pug_of_undying.png", category: "totems", theme: "pugs", original: { ru: "Тотем Бессмертия", en: "Totem of Undying" }, rename: { ru: "Мопс Бессмертия", en: "Pug of Undying" } },
  { image: "images/great_pug.png", category: "hats", theme: "pugs", original: { ru: "Вырезанная Тыква", en: "Carved Pumpkin" }, rename: { ru: "Великий Мопс", en: "Great Pug" } },
  { image: "images/tetanus_revenge_icon.png", hoverImage: "images/tetanus_revenge.png", category: "weapons", theme: "other", original: { ru: "Любой Меч", en: "Any sword" }, rename: { ru: "Столбняковое Возмездие", en: "Tetanus Revenge" } }
];

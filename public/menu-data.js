// Nomi, ingredienti e foto: menù originale di Sindbad.
// priceCents: prezzo indicativo Deliveroo Via Milano, solo per corrispondenze riconoscibili.
const menuCategories = [
  {
    id: "antipasti",
    labels: {"it": "Antipasti", "ar": "المقبلات", "en": "Starters", "fr": "Entrées", "de": "Vorspeisen", "ru": "Закуски"},
    items: [
      {"id": "antipasti-1", "name": "Adds – Zuppa di lenticchie rosse", "arabic": "شوربة عدس", "ingredients": "Lenticchie rosse, cipolle, pomodoro, limone, cumino, olio d’oliva e prezzemolo.", "photo": "10", "priceCents": 500},
      {"id": "antipasti-2", "name": "Insalata mista", "arabic": "سلطة بالجبنة والتونة", "ingredients": "Verdure miste di stagione, mozzarella fresca e tonno.", "photo": "14", "priceCents": 600},
      {"id": "antipasti-3", "name": "Insalata", "arabic": "سلطة", "ingredients": "Verdure miste di stagione, pomodoro e olive.", "photo": "24", "priceCents": 350},
      {"id": "antipasti-4", "name": "Baba ganoush", "arabic": "بابا غنوج", "ingredients": "Crema di melanzane.", "photo": "16", "priceCents": 500},
      {"id": "antipasti-5", "name": "Tabbouleh", "arabic": "تبولة", "photo": "12", "priceCents": 500},
      {"id": "antipasti-6", "name": "Hummus", "arabic": "حمص", "ingredients": "Crema di ceci.", "photo": "22", "priceCents": 500},
      {"id": "antipasti-7", "name": "Patatine fritte", "arabic": "بطاطس مقلية", "photo": "18", "priceCents": 300},
      {"id": "antipasti-8", "name": "Riso egiziano", "arabic": "أرز بالشعرية", "ingredients": "Riso, pasta capelli d’angelo, frutta secca e burro.", "photo": "20", "priceCents": 650}
    ]
  },
  {
    id: "piatti",
    labels: {"it": "Piatti", "ar": "الأطباق الرئيسية", "en": "Main dishes", "fr": "Plats", "de": "Hauptgerichte", "ru": "Основные блюда"},
    items: [
      {"id": "piatti-1", "name": "Shish kebab", "arabic": "شيش كباب", "ingredients": "Spiedini di agnello con insalata, pomodoro, crema di ceci, crema di melanzane, riso e patatine fritte.", "photo": "29", "priceCents": 1400},
      {"id": "piatti-2", "name": "Sindbad kebab", "arabic": "كباب سندباد", "ingredients": "Kebab, kofta e falafel con insalata, pomodoro, crema di ceci, crema di melanzane, riso e patatine fritte.", "photo": "35", "priceCents": 1400},
      {"id": "piatti-3", "name": "Piatto kebab", "arabic": "شاورما", "ingredients": "Kebab con insalata, pomodoro e patatine fritte.", "photo": "33", "priceCents": 850},
      {"id": "piatti-4", "name": "Misto kebab e verdure", "arabic": "كباب وفلافل", "ingredients": "Kebab e falafel con insalata, pomodoro, crema di ceci e crema di melanzane.", "photo": "31", "priceCents": 1000},
      {"id": "piatti-5", "name": "Tajine maghrebino", "arabic": "طاجين مغربي", "ingredients": "Agnello, cipolle, prugne, pomodoro e patatine fritte.", "photo": "37", "priceCents": 1500},
      {"id": "piatti-6", "name": "Piatto di pollo", "arabic": "طبق دجاج", "ingredients": "Pollo con insalata, pomodoro, crema di ceci, crema di melanzane, riso, verdure grigliate e patatine fritte.", "photo": "39", "priceCents": 1000},
      {"id": "piatti-7", "name": "Costolette d’agnello", "arabic": "ريش ضاني", "ingredients": "Costolette con insalata, pomodoro, crema di ceci, crema di melanzane, riso e patatine fritte.", "photo": "44", "priceCents": 1400},
      {"id": "piatti-8", "name": "Piatto mergas", "arabic": "طبق سجق مرقاز", "ingredients": "Salsiccia con insalata, pomodoro, crema di ceci, crema di melanzane e patatine fritte.", "photo": "46", "priceCents": 950},
      {"id": "piatti-9", "name": "Piatto kofta", "arabic": "كفتة مشوية", "ingredients": "Polpette di carne tritata con insalata, pomodoro, crema di ceci, crema di melanzane e patatine fritte.", "photo": "48", "priceCents": 900},
      {"id": "piatti-10", "name": "Mussakaa con carne", "arabic": "مسقعة باللحمة", "ingredients": "Carne tritata, melanzane, peperoni, cipolle, pomodoro e olive.", "photo": "52", "priceCents": 850},
      {"id": "piatti-11", "name": "Piatto falafel", "arabic": "طبق فلافل", "ingredients": "Falafel con insalata, pomodoro, crema di ceci e crema di melanzane.", "photo": "54", "priceCents": 700},
      {"id": "piatti-12", "name": "Couscous con carne d’agnello", "arabic": "كسكسي باللحم والخضار", "ingredients": "Semola, zucchine, carote, patate, zucca, ceci e agnello.", "photo": "50", "priceCents": 1000},
      {"id": "piatti-13", "name": "Piatto kofta di gamberi", "arabic": "كفتة جمبري", "ingredients": "Polpette di gamberi con riso, insalata, pomodoro, crema di ceci e crema di melanzane.", "photo": "59", "priceCents": 1100},
      {"id": "piatti-14", "name": "Sindbad vegetariano", "arabic": "خضار سندباد", "ingredients": "Insalata, pomodoro, crema di melanzane, crema di ceci, verdure grigliate, falafel, crema di fave e patatine fritte.", "photo": "61", "priceCents": 1000},
      {"id": "piatti-15", "name": "Mussakaa vegetariana", "arabic": "مسقعة نباتية", "ingredients": "Melanzane, peperoni, cipolle, pomodoro e olive.", "photo": "63", "priceCents": 700},
      {"id": "piatti-16", "name": "Misto vegetariano", "arabic": "فول وفلافل", "ingredients": "Insalata, pomodoro, crema di ceci, crema di melanzane, ful (crema di fave) e falafel.", "photo": "65", "priceCents": 850},
      {"id": "piatti-17", "name": "Mahshi", "arabic": "محشي كوسة", "ingredients": "Zucchine ripiene di riso con insalata, pomodoro, crema di melanzane, ceci e patatine fritte.", "photo": "67", "priceCents": 750},
      {"id": "piatti-18", "name": "Piatto di verdure grigliate", "arabic": "طبق خضار مشوية", "photo": "69"},
      {"id": "piatti-19", "name": "Couscous vegetariano", "arabic": "كسكسي بالخضار", "ingredients": "Semola, zucchine, carote, patate, zucca, ceci e brodo vegetale.", "photo": "71", "priceCents": 700}
    ]
  },
  {
    id: "panini",
    labels: {"it": "Panini e arrotolati", "ar": "ساندوتشات وراب", "en": "Sandwiches and wraps", "fr": "Sandwichs et wraps", "de": "Sandwiches und Wraps", "ru": "Сэндвичи и роллы"},
    items: [
      {"id": "panini-1", "name": "Panino kebab", "arabic": "ساندوتش كباب", "ingredients": "Vitello arrosto, insalata, pomodoro, cipolla, piccante e salsa allo yogurt.", "photo": "78", "priceCents": 500},
      {"id": "panini-2", "name": "Panino kebab con formaggio", "arabic": "ساندوتش كباب بالجبنة"},
      {"id": "panini-3", "name": "Arrotolato kebab", "arabic": "راب كباب", "ingredients": "Vitello arrosto, insalata, pomodoro, cipolla, piccante e salsa allo yogurt.", "photo": "76a", "priceCents": 500},
      {"id": "panini-4", "name": "Arrotolato kebab con formaggio", "arabic": "راب كباب بالجبنة", "photo": "76b"},
      {"id": "panini-5", "name": "Panino hot dog", "arabic": "ساندوتش هوت دوغ", "ingredients": "Würstel, insalata, pomodoro, ketchup e maionese.", "photo": "82", "priceCents": 450},
      {"id": "panini-6", "name": "Panino falafel", "arabic": "ساندوتش فلافل", "ingredients": "Falafel, insalata, pomodoro e salsa di sesamo.", "photo": "80", "priceCents": 450},
      {"id": "panini-7", "name": "Panino gamberi", "arabic": "ساندوتش جمبري", "ingredients": "Gamberi, insalata, pomodoro, peperoni e salsa di sesamo.", "photo": "86", "priceCents": 750},
      {"id": "panini-8", "name": "Panino kofta", "arabic": "ساندوتش كفتة", "ingredients": "Polpette di vitello, insalata e pomodoro.", "photo": "84", "priceCents": 600},
      {"id": "panini-9", "name": "Panino mergas", "arabic": "ساندوتش سجق", "ingredients": "Salsiccia di vitello, insalata, pomodoro, salsa di sesamo e patatine fritte.", "photo": "88", "priceCents": 600},
      {"id": "panini-10", "name": "Panino kofta di gamberi", "arabic": "ساندوتش كفتة جمبري", "ingredients": "Polpette di gamberi e riso, insalata, pomodoro e salsa di sesamo.", "photo": "90", "priceCents": 500},
      {"id": "panini-11", "name": "Panino ful", "arabic": "ساندوتش فول", "ingredients": "Crema di fave, insalata, pomodoro e salsa di sesamo.", "priceCents": 450},
      {"id": "panini-12", "name": "Arrotolato falafel", "arabic": "راب فلافل", "priceCents": 500},
      {"id": "panini-13", "name": "Arrotolato falafel con melanzane fritte", "arabic": "راب فلافل مع باذنجان مقلي"},
      {"id": "panini-14", "name": "Panino falafel con melanzane fritte", "arabic": "ساندوتش فلافل مع باذنجان مقلي"}
    ]
  },
  {
    id: "pizze",
    labels: {"it": "Pizze", "ar": "البيتزا", "en": "Pizzas", "fr": "Pizzas", "de": "Pizzen", "ru": "Пицца"},
    items: [
      {"id": "pizze-1", "name": "Margherita", "arabic": "مارغريتا", "ingredients": "Pomodoro e mozzarella.", "photo": "98", "priceCents": 600},
      {"id": "pizze-2", "name": "Frutti di mare", "arabic": "بيتزا المأكولات البحرية", "ingredients": "Pomodoro, mozzarella e frutti di mare.", "photo": "100", "priceCents": 1150},
      {"id": "pizze-3", "name": "Pizza kebab", "arabic": "بيتزا كباب", "ingredients": "Pomodoro, mozzarella, insalata, pomodoro fresco, cipolla, piccante e patatine fritte.", "photo": "102"},
      {"id": "pizze-4", "name": "Napoletana", "arabic": "نابوليتانا", "ingredients": "Pomodoro, mozzarella e acciughe.", "photo": "104", "priceCents": 850},
      {"id": "pizze-5", "name": "Salamino", "arabic": "بيتزا سلامينو", "ingredients": "Pomodoro, mozzarella e salamino.", "photo": "106", "priceCents": 650},
      {"id": "pizze-6", "name": "Stracchino e rucola", "arabic": "ستراكينو وجرجير", "ingredients": "Pomodoro, mozzarella, stracchino e rucola.", "photo": "108", "priceCents": 750},
      {"id": "pizze-7", "name": "Prosciutto", "arabic": "بيتزا بروشوتو", "ingredients": "Pomodoro, mozzarella e prosciutto di vitello.", "photo": "110", "priceCents": 850},
      {"id": "pizze-8", "name": "Bufala", "arabic": "بيتزا موزاريلا بافالو", "ingredients": "Pomodoro e mozzarella di bufala.", "priceCents": 900},
      {"id": "pizze-9", "name": "Calzone Mo-Salah", "arabic": "كالزوني مو صلاح", "ingredients": "Pomodoro, mozzarella e due ingredienti a scelta.", "priceCents": 800},
      {"id": "pizze-10", "name": "Salsiccia", "arabic": "بيتزا سجق", "ingredients": "Pomodoro, mozzarella e salsiccia di vitello.", "priceCents": 850},
      {"id": "pizze-11", "name": "Melanzane e zucchine", "arabic": "بيتزا باذنجان وكوسة", "ingredients": "Pomodoro, mozzarella, melanzane e zucchine.", "priceCents": 800},
      {"id": "pizze-12", "name": "Primavera", "arabic": "بريمافيرا", "ingredients": "Mozzarella, prosciutto, parmigiano e rucola.", "priceCents": 850},
      {"id": "pizze-13", "name": "Funghi", "arabic": "بيتزا مشروم", "ingredients": "Pomodoro, mozzarella e funghi.", "priceCents": 800},
      {"id": "pizze-14", "name": "Würstel e patatine fritte", "arabic": "بيتزا هوت دوغ وبطاطس", "ingredients": "Pomodoro, mozzarella, würstel e patatine fritte.", "priceCents": 850},
      {"id": "pizze-15", "name": "Quattro stagioni", "arabic": "بيتزا الفصول الأربعة", "ingredients": "Pomodoro, mozzarella, prosciutto, funghi, carciofi e olive.", "priceCents": 1000},
      {"id": "pizze-16", "name": "Tonno e cipolla", "arabic": "بيتزا تونة وبصل", "ingredients": "Pomodoro, mozzarella, tonno e cipolla."},
      {"id": "pizze-17", "name": "Capricciosa", "arabic": "كابريتشوزا", "ingredients": "Pomodoro, mozzarella, prosciutto, funghi, carciofi, olive e salamino.", "priceCents": 1050},
      {"id": "pizze-18", "name": "Marinara", "arabic": "مارينارا", "ingredients": "Pomodoro, aglio, olio d’oliva e basilico.", "priceCents": 500},
      {"id": "pizze-19", "name": "Verdure", "arabic": "بيتزا خضار", "ingredients": "Pomodoro, mozzarella e verdure grigliate.", "priceCents": 950},
      {"id": "pizze-20", "name": "Quattro formaggi", "arabic": "بيتزا أربع جبنات", "ingredients": "Pomodoro, mozzarella, gorgonzola, fontina e parmigiano.", "priceCents": 1000}
    ]
  },
  {
    id: "dolci",
    labels: {"it": "Dolci", "ar": "الحلويات", "en": "Desserts", "fr": "Desserts", "de": "Desserts", "ru": "Десерты"},
    items: [
      {"id": "dolci-1", "name": "Gullash", "arabic": "جلاش", "ingredients": "Pasta sfoglia con pistacchi e mandorle.", "photo": "126", "priceCents": 350},
      {"id": "dolci-2", "name": "Riso al latte", "arabic": "أرز باللبن", "photo": "124"},
      {"id": "dolci-3", "name": "Baklawa", "arabic": "بقلاوة", "ingredients": "Pasta sfoglia, mandorle e pistacchi.", "photo": "130", "priceCents": 350},
      {"id": "dolci-4", "name": "Kunafa", "arabic": "كنافة", "ingredients": "Pasta fresca, pistacchi e mandorle.", "photo": "128", "priceCents": 350},
      {"id": "dolci-5", "name": "Basbusa", "arabic": "بسبوسة", "ingredients": "Semola, mandorle, vaniglia e burro.", "photo": "132", "priceCents": 350},
      {"id": "dolci-6", "name": "Bassima", "arabic": "بسيمة", "ingredients": "Torta di semola e cocco con burro.", "photo": "134", "priceCents": 350},
      {"id": "dolci-7", "name": "Piadina alla Nutella", "arabic": "بيادينا بالنوتيلا", "priceCents": 350}
    ]
  },
  {
    id: "bevande",
    labels: {"it": "Bevande", "ar": "المشروبات", "en": "Drinks", "fr": "Boissons", "de": "Getränke", "ru": "Напитки"},
    items: [
      {"id": "bevande-fredde-1", "name": "Acqua minerale", "arabic": "مياه معدنية", "ingredients": "½ l.", "priceCents": 100},
      {"id": "bevande-fredde-2", "name": "Bibite in lattina", "arabic": "مشروبات غازية", "ingredients": "Coca-Cola, Fanta, Sprite, Chinotto, Coca-Cola Zero, Poms e Hawai."},
      {"id": "bevande-fredde-3", "name": "Succo di mango", "arabic": "عصير مانجو", "photo": "143"},
      {"id": "bevande-fredde-4", "name": "Succo di guava", "arabic": "عصير جوافة", "photo": "141"},
      {"id": "bevande-fredde-5", "name": "Erksus", "arabic": "عرقسوس", "ingredients": "Bevanda alla radice di liquirizia.", "photo": "149"},
      {"id": "bevande-fredde-6", "name": "Tamrhindi", "arabic": "تمر هندي", "photo": "147"},
      {"id": "bevande-fredde-7", "name": "Karkadè", "arabic": "كركديه", "ingredients": "Bevanda all’ibisco.", "photo": "145"},
      {"id": "bevande-fredde-8", "name": "Birra analcolica", "arabic": "بيرة بدون كحول", "ingredients": "330 ml.", "photo": "139", "priceCents": 300},
      {"id": "bevande-fredde-9", "name": "Bibite formato famiglia", "arabic": "مشروبات حجم عائلي"},
      {"id": "bevande-calde-1", "name": "Tè alla menta", "arabic": "شاي بالنعناع في براد", "ingredients": "In teiera.", "photo": "159"},
      {"id": "bevande-calde-2", "name": "Tè alla menta", "arabic": "كوب شاي بالنعناع", "ingredients": "Al bicchiere.", "photo": "161"},
      {"id": "bevande-calde-3", "name": "Bibite in bottiglia", "arabic": "مشروبات في زجاجات", "ingredients": "Coca-Cola e Estathé al limone o alla pesca."},
      {"id": "bevande-calde-4", "name": "Caffè espresso", "arabic": "إسبريسو", "photo": "157"},
      {"id": "bevande-calde-5", "name": "Acqua formato grande", "arabic": "مياه حجم كبير"}
    ]
  }
];

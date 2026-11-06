const siteText = {
  it: {
    city: "Torino", skip: "Vai al contenuto", navigation: "Navigazione principale",
    menu: "Menù", book: "Prenota", contact: "Contatti", language: "Lingua",
    headline: "Sapori d’Egitto e d’Italia",
    intro: "Pizza italiana, piatti egiziani e mediorientali, kebab e specialità alla griglia.",
    discover: "Scopri il menù", bookPhone: "Prenota per telefono",
    menuTitle: "Il nostro menù", location: "Dove siamo", call: "Chiama", directions: "Indicazioni"
  },
  ar: {
    city: "تورينو", skip: "انتقل للمحتوى", navigation: "القائمة الرئيسية",
    menu: "المنيو", book: "احجز", contact: "التواصل", language: "اللغة",
    headline: "نكهات من مصر وإيطاليا",
    intro: "سندباد بيقدّم بيتزا إيطالية، وأطباق مصرية وشرقية، وكباب ومشويات.",
    discover: "شوف المنيو", bookPhone: "احجز بالتليفون",
    menuTitle: "منيو سندباد", location: "مكاننا", call: "اتصل بنا", directions: "الاتجاهات"
  },
  en: {
    city: "Turin", skip: "Skip to content", navigation: "Main navigation",
    menu: "Menu", book: "Book a table", contact: "Contact", language: "Language",
    headline: "Flavours of Egypt and Italy",
    intro: "Italian pizza, Egyptian and Middle Eastern dishes, kebabs and grilled specialities.",
    discover: "Explore the menu", bookPhone: "Book by phone",
    menuTitle: "Our menu", location: "Find us", call: "Call", directions: "Get directions"
  },
  fr: {
    city: "Turin", skip: "Aller au contenu", navigation: "Navigation principale",
    menu: "Menu", book: "Réserver", contact: "Contact", language: "Langue",
    headline: "Saveurs d’Égypte et d’Italie",
    intro: "Pizzas italiennes, plats égyptiens et moyen-orientaux, kebabs et grillades.",
    discover: "Découvrir le menu", bookPhone: "Réserver par téléphone",
    menuTitle: "Notre menu", location: "Nous trouver", call: "Appeler", directions: "Itinéraire"
  },
  de: {
    city: "Turin", skip: "Zum Inhalt", navigation: "Hauptnavigation",
    menu: "Speisekarte", book: "Reservieren", contact: "Kontakt", language: "Sprache",
    headline: "Spezialitäten aus Ägypten und Italien",
    intro: "Italienische Pizza, ägyptische und nahöstliche Gerichte, Kebab und Grillspezialitäten.",
    discover: "Speisekarte ansehen", bookPhone: "Telefonisch reservieren",
    menuTitle: "Unsere Speisekarte", location: "So finden Sie uns", call: "Anrufen", directions: "Route planen"
  },
  ru: {
    city: "Турин", skip: "Перейти к содержанию", navigation: "Главное меню",
    menu: "Меню", book: "Забронировать", contact: "Контакты", language: "Язык",
    headline: "Вкусы Египта и Италии",
    intro: "Итальянская пицца, египетские и ближневосточные блюда, кебабы и блюда на гриле.",
    discover: "Посмотреть меню", bookPhone: "Забронировать по телефону",
    menuTitle: "Наше меню", location: "Где мы находимся", call: "Позвонить", directions: "Проложить маршрут"
  }
};

const pageCopy = {
  it: {
    home: "Home", about: "Chi siamo", order: "Ordina ora", deliveryOrder: "Ordina a domicilio",
    headline: "Dalle tradizioni egiziane alla pizza italiana. Un viaggio da assaporare.",
    intro: "Kebab, piatti egiziani e pizza dall’impasto fresco, nel cuore di Torino.",
    discover: "Esplora il menù interattivo", menuPdf: "Menù originale · PDF",
    aboutCopy: "A Torino, la pizza italiana incontra i piatti egiziani, i profumi del Marocco e i sapori del Libano. A tavola da Sindbad puoi passare da un hummus da condividere a un tajine, o scegliere la tua pizza preferita.",
    priceNote: "Prezzi indicativi da Deliveroo. Prezzi finali e disponibilità si confermano al momento dell’ordine.",
    basket: "Il tuo ordine", close: "Chiudi", callOrder: "Ordina per telefono",
    basketNote: "Usa la lista per ordinare al telefono. Per la consegna scegli una piattaforma e seleziona lì i tuoi piatti."
  },
  ar: {
    home: "الرئيسية", about: "من نحن", order: "اطلب الآن", deliveryOrder: "اطلب عبر الديليفري",
    headline: "من عراقة التقاليد المصرية، إلى فخامة البيتزا الإيطالية.. رحلة تذوق لا تُنسى",
    intro: "كباب وأطباق مصرية وبيتزا بعجين طازج، في قلب تورينو.",
    discover: "تصفح المنيو التفاعلية", menuPdf: "المنيو الأصلية · PDF",
    aboutCopy: "في تورينو، بيتزا إيطالية وأطباق مصرية جنب نكهات من المغرب ولبنان. ابدأ بحمص تشاركه على الترابيزة، وكمّل بطاجين مغربي أو بيتزا من اختيارك.",
    priceNote: "الأسعار المعروضة استرشادية من Deliveroo. اتأكد من السعر النهائي وتوفّر الصنف عند الطلب.",
    basket: "طلبك", close: "إغلاق", callOrder: "اطلب بالتليفون",
    basketNote: "استخدم القائمة وإنت بتطلب بالتليفون. لو عايز توصيل، افتح منصة التوصيل واختار الأطباق جواها."
  },
  en: {
    home: "Home", about: "About us", order: "Order now", deliveryOrder: "Order delivery",
    headline: "From Egyptian traditions to Italian pizza. A journey worth tasting.",
    intro: "Kebab, Egyptian dishes and pizza made with fresh dough in the heart of Turin.",
    discover: "Browse the interactive menu", menuPdf: "Original menu · PDF",
    aboutCopy: "Italian pizza meets Egyptian dishes and flavours from Morocco and Lebanon in the heart of Turin. Share hummus to start, then try a tajine or your favourite pizza.",
    priceNote: "Indicative prices from Deliveroo. Confirm final prices and availability when you order.",
    basket: "Your order", close: "Close", callOrder: "Order by phone",
    basketNote: "Use the list to order by phone. For delivery, select your dishes on your chosen delivery platform."
  }
};

const deliveryCopy = {
  it: {
    deliveryEyebrow: "Consegna a Torino",
    deliveryIntro: "Scegli la piattaforma che preferisci: sfoglia il menù, ordina e paga direttamente sulla loro app. Oppure chiamaci.",
    orderOn: "Ordina su", payTitle: "Metodi di pagamento", payCash: "Contanti",
    payCards: "Carte di credito e debito", payOnline: "Pagamento online sulle app di consegna",
    payNote: "Per le consegne il pagamento avviene online sull’app della piattaforma scelta. Per gli altri metodi chiedi al ristorante.",
    discoverDish: "Scopri nel menù"
  },
  ar: {
    deliveryEyebrow: "توصيل في تورينو",
    deliveryIntro: "اختار المنصة اللي تفضلها: تصفح المنيو واطلب وادفع على تطبيقهم مباشرة. أو اتصل بينا وإحنا نخدمك.",
    orderOn: "اطلب من", payTitle: "طرق الدفع", payCash: "كاش",
    payCards: "كروت الائتمان والخصم", payOnline: "دفع أونلاين على تطبيقات التوصيل",
    payNote: "في التوصيل الدفع بيتم أونلاين على تطبيق المنصة اللي اخترتها. لأي طريقة دفع تانية اسأل المطعم.",
    discoverDish: "شوفه في المنيو"
  },
  en: {
    deliveryEyebrow: "Delivery in Turin",
    deliveryIntro: "Pick the platform you like: browse the menu, order and pay right in their app. Or give us a call.",
    orderOn: "Order on", payTitle: "Payment methods", payCash: "Cash",
    payCards: "Credit and debit cards", payOnline: "Online payment on delivery apps",
    payNote: "For deliveries, payment is made online in the app of the platform you choose. Ask the restaurant about other methods.",
    discoverDish: "See it on the menu"
  },
  fr: {
    deliveryEyebrow: "Livraison à Turin", deliveryOrder: "Commander à domicile",
    deliveryIntro: "Choisissez la plateforme que vous préférez : parcourez le menu, commandez et payez directement dans leur appli. Ou appelez-nous.",
    orderOn: "Commander sur", payTitle: "Moyens de paiement", payCash: "Espèces",
    payCards: "Cartes de crédit et de débit", payOnline: "Paiement en ligne sur les applis de livraison",
    payNote: "Pour les livraisons, le paiement se fait en ligne dans l’appli de la plateforme choisie. Pour les autres moyens, demandez au restaurant.",
    discoverDish: "Voir dans le menu"
  },
  de: {
    deliveryEyebrow: "Lieferung in Turin", deliveryOrder: "Nach Hause bestellen",
    deliveryIntro: "Wählen Sie Ihre bevorzugte Plattform: Speisekarte ansehen, bestellen und direkt in der App bezahlen. Oder rufen Sie uns an.",
    orderOn: "Bestellen bei", payTitle: "Zahlungsarten", payCash: "Bargeld",
    payCards: "Kredit- und Debitkarten", payOnline: "Online-Zahlung in den Liefer-Apps",
    payNote: "Bei Lieferungen erfolgt die Zahlung online in der App der gewählten Plattform. Andere Zahlungsarten erfragen Sie bitte im Restaurant.",
    discoverDish: "In der Speisekarte ansehen"
  },
  ru: {
    deliveryEyebrow: "Доставка по Турину", deliveryOrder: "Заказать с доставкой",
    deliveryIntro: "Выберите удобную платформу: смотрите меню, заказывайте и платите прямо в приложении. Или позвоните нам.",
    orderOn: "Заказать в", payTitle: "Способы оплаты", payCash: "Наличные",
    payCards: "Кредитные и дебетовые карты", payOnline: "Онлайн-оплата в приложениях доставки",
    payNote: "При доставке оплата проходит онлайн в приложении выбранной платформы. О других способах оплаты спрашивайте в ресторане.",
    discoverDish: "Смотреть в меню"
  }
};
for (const [language, values] of Object.entries(deliveryCopy)) {
  pageCopy[language] = { ...(pageCopy[language] ?? {}), ...values };
}

for (const [language, values] of Object.entries(siteText)) {
  for (const [key, value] of Object.entries(pageCopy.it)) {
    if (!(key in values)) values[key] = value;
  }
  Object.assign(values, pageCopy[language]);
}

const languagePicker = document.getElementById("language");

function translatePage() {
  const language = languagePicker.value;
  const text = siteText[language] ?? siteText.it;

  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.title = "Sindbad | " + text.city;

  for (const element of document.querySelectorAll("[data-i18n]")) {
    const value = text[element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  }

  for (const element of document.querySelectorAll("[data-i18n-label]")) {
    element.setAttribute("aria-label", text[element.dataset.i18nLabel]);
  }
}

languagePicker.addEventListener("change", translatePage);
translatePage();

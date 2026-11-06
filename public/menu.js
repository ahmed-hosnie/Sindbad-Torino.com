const menuCopy = {
  it: {
    search: "Cerca in questa categoria", ingredientsMissing: "Ingredienti da chiedere al ristorante.",
    empty: "Nessun piatto trovato in questa categoria.", results: "Risultati",
    add: "Aggiungi all’ordine", added: "Aggiunto all’ordine", priceUnknown: "Prezzo da confermare",
    cartEmpty: "Il tuo ordine è vuoto.", estimate: "Totale indicativo", incomplete: "Chiedi il totale al ristorante.",
    less: "Diminuisci quantità", more: "Aumenta quantità"
  },
  ar: {
    search: "ابحث في القسم ده", ingredientsMissing: "اسأل المطعم عن المكونات.",
    empty: "مفيش أطباق مطابقة في القسم ده.", results: "النتائج",
    add: "أضف للطلب", added: "اتضاف للطلب", priceUnknown: "السعر يُؤكَّد مع المطعم",
    cartEmpty: "الطلب لسه فاضي.", estimate: "الإجمالي الاسترشادي", incomplete: "اسأل المطعم عن إجمالي الطلب.",
    less: "قلل الكمية", more: "زوّد الكمية"
  },
  en: {
    search: "Search this category", ingredientsMissing: "Ask the restaurant about ingredients.",
    empty: "No dishes found in this category.", results: "Results",
    add: "Add to order", added: "Added to order", priceUnknown: "Confirm price with restaurant",
    cartEmpty: "Your order is empty.", estimate: "Indicative total", incomplete: "Ask the restaurant for the total.",
    less: "Decrease quantity", more: "Increase quantity"
  }
};

const categories = new Map(menuCategories.map(category => [category.id, category]));
const dishes = new Map(menuCategories.flatMap(category => category.items.map(item => [item.id, { ...item, category }])));
const basket = new Map();
const menuContent = document.getElementById("menu-content");
const orderDialog = document.getElementById("order-dialog");
const orderItems = document.getElementById("order-items");
const orderTotal = document.getElementById("order-total");
const cartStatus = document.getElementById("cart-status");
const currentLanguage = () => languagePicker.value;
const copy = () => menuCopy[currentLanguage()] ?? menuCopy.it;
const euros = cents => new Intl.NumberFormat(currentLanguage(), { style: "currency", currency: "EUR" }).format(cents / 100);

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function makeButton(className, text) {
  const button = element("button", className, text);
  button.type = "button";
  return button;
}

function searchable(text) {
  return text.toLowerCase().normalize("NFD").replace(/\p{M}/gu, "").trim();
}

function dishTitle(item, tag) {
  const title = element(tag, "dish-name");
  const italian = element("span", "", item.name);
  italian.lang = "it";
  italian.dir = "ltr";
  const arabic = element("span", "dish-name-ar", item.arabic);
  arabic.lang = "ar";
  arabic.dir = "rtl";
  title.append(...(currentLanguage() === "ar" ? [arabic, italian] : [italian, arabic]));
  return title;
}

function changeQuantity(id, delta) {
  const quantity = Math.min(99, (basket.get(id) ?? 0) + delta);
  if (quantity > 0) basket.set(id, quantity);
  else basket.delete(id);
  const count = [...basket.values()].reduce((sum, value) => sum + value, 0);
  for (const badge of document.querySelectorAll("[data-cart-count]")) {
    badge.textContent = String(count);
    if (badge.closest(".header-order")) badge.hidden = count === 0;
  }
  renderBasket();
}

function renderBasket() {
  const rows = [];
  let total = 0;
  let complete = true;
  const t = copy();
  for (const [id, quantity] of basket) {
    const item = dishes.get(id);
    const row = element("div", "order-row");
    const details = element("div");
    details.append(dishTitle(item, "h3"), element("p", "form-note", item.priceCents ? euros(item.priceCents) : t.priceUnknown));
    const stepper = element("div", "order-stepper");
    for (const [delta, symbol, label] of [[-1, "−", t.less], [1, "+", t.more]]) {
      const button = makeButton("menu-filter", symbol);
      button.setAttribute("aria-label", label + " · " + item.name);
      button.disabled = delta === 1 && quantity === 99;
      button.addEventListener("click", () => {
        changeQuantity(id, delta);
        const replacement = [...orderItems.querySelectorAll("button")].find(candidate => candidate.getAttribute("aria-label") === button.getAttribute("aria-label"));
        (replacement ?? orderDialog.querySelector("button")).focus();
      });
      stepper.append(button);
      if (delta < 0) stepper.append(element("span", "", String(quantity)));
    }
    row.append(details, stepper);
    rows.push(row);
    if (item.priceCents) total += quantity * item.priceCents;
    else complete = false;
  }
  orderItems.replaceChildren(...(rows.length ? rows : [element("p", "form-note", t.cartEmpty)]));
  orderTotal.textContent = rows.length ? (complete ? t.estimate + " · " + euros(total) : t.incomplete) : "";
}

function renderDish(item) {
  const t = copy();
  const card = element("li", "menu-card product-card");
  const media = element("div", item.photo ? "product-image" : "product-image is-empty");
  if (item.photo) {
    const photo = document.createElement("img");
    photo.src = "./assets/dishes/" + item.photo + ".webp";
    photo.alt = "";
    photo.loading = "lazy";
    photo.decoding = "async";
    media.append(photo);
  }
  card.append(media);
  const details = element("div", "product-copy");
  const ingredients = element("p", "", item.ingredients ?? t.ingredientsMissing);
  if (item.ingredients) ingredients.lang = "it";
  const actions = element("div", "product-actions");
  const price = element("strong", item.priceCents ? "product-price" : "product-price is-tbc", item.priceCents ? euros(item.priceCents) : t.priceUnknown);
  const add = makeButton("button button-secondary add-dish", "+ " + t.add);
  add.addEventListener("click", () => {
    changeQuantity(item.id, 1);
    cartStatus.textContent = t.added + " · " + item.name + " · " + basket.get(item.id);
    add.classList.remove("just-added");
    requestAnimationFrame(() => add.classList.add("just-added"));
  });
  add.addEventListener("animationend", () => add.classList.remove("just-added"));
  actions.append(price, add);
  details.append(dishTitle(item, "h3"), ingredients, actions);
  card.append(details);
  return card;
}

const controls = element("div", "menu-controls");
const tabs = element("div", "menu-filters");
tabs.setAttribute("role", "tablist");
const searchGroup = element("div", "menu-search");
const searchLabel = element("label");
searchLabel.htmlFor = "menu-search";
const search = element("input");
search.type = "search";
search.id = "menu-search";
searchGroup.append(searchLabel, search);
controls.append(tabs, searchGroup);
const panel = element("div", "menu-category");
panel.id = "menu-results";
panel.setAttribute("role", "tabpanel");
const resultStatus = element("p", "menu-status");
resultStatus.setAttribute("role", "status");
const results = element("ul", "menu-items");
panel.append(resultStatus, results);
menuContent.append(controls, panel);

let activeCategory = menuCategories[0].id;
const tabButtons = new Map();
for (const category of menuCategories) {
  const button = makeButton("menu-filter");
  button.id = "tab-" + category.id;
  button.setAttribute("role", "tab");
  button.setAttribute("aria-controls", panel.id);
  button.addEventListener("click", () => activate(category.id));
  tabs.append(button);
  tabButtons.set(category.id, button);
}

function activate(categoryId, query = "") {
  activeCategory = categoryId;
  search.value = query;
  renderMenu();
}

tabs.addEventListener("keydown", event => {
  const keys = [...tabButtons.keys()];
  const index = keys.indexOf(activeCategory);
  const rtl = document.documentElement.dir === "rtl";
  let next;
  switch (event.key) {
    case "Home": next = 0; break;
    case "End": next = keys.length - 1; break;
    case "ArrowRight": next = index + (rtl ? -1 : 1); break;
    case "ArrowLeft": next = index + (rtl ? 1 : -1); break;
    default: return;
  }
  event.preventDefault();
  const key = keys[(next + keys.length) % keys.length];
  activate(key);
  tabButtons.get(key).focus();
});

function renderMenu() {
  const language = currentLanguage();
  const t = copy();
  tabs.setAttribute("aria-label", siteText[language].menuTitle);
  searchLabel.textContent = t.search;
  for (const [id, button] of tabButtons) {
    const selected = id === activeCategory;
    button.textContent = categories.get(id).labels[language];
    button.setAttribute("aria-selected", String(selected));
    button.tabIndex = selected ? 0 : -1;
  }
  panel.setAttribute("aria-labelledby", tabButtons.get(activeCategory).id);
  const query = searchable(search.value);
  const matching = categories.get(activeCategory).items.filter(item =>
    searchable([item.name, item.arabic, item.ingredients].join(" ")).includes(query)
  );
  resultStatus.textContent = matching.length ? t.results + " · " + matching.length : t.empty;
  results.replaceChildren(...matching.map(renderDish));
}

function renderSignaturePrices() {
  for (const badge of document.querySelectorAll("[data-price-for]")) {
    const item = dishes.get(badge.dataset.priceFor);
    badge.textContent = item?.priceCents ? euros(item.priceCents) : "";
    badge.hidden = !badge.textContent;
  }
}

for (const link of document.querySelectorAll("[data-menu-item]")) {
  link.addEventListener("click", event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const item = dishes.get(link.dataset.menuItem);
    activate(item.category.id, item.name);
    document.getElementById("menu-title").focus({ preventScroll: true });
  });
}
for (const trigger of document.querySelectorAll("[data-open-cart]")) {
  trigger.addEventListener("click", () => orderDialog.showModal());
}
document.querySelector(".header-order").addEventListener("click", event => {
  if (!basket.size || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  orderDialog.showModal();
});
document.querySelector("[data-delivery-from-cart]").addEventListener("click", () => orderDialog.close());
search.addEventListener("input", renderMenu);
languagePicker.addEventListener("change", () => {
  renderMenu();
  renderBasket();
  renderSignaturePrices();
});
renderMenu();
renderBasket();
renderSignaturePrices();

const formText = {
  it: {
    signature: "Da provare", reservationTitle: "Prenota un tavolo",
    reservationIntro: "Scegli data, ora e numero di persone. Ti ricontatteremo per confermare la disponibilità.",
    date: "Data", time: "Ora", guests: "Persone", name: "Nome", contactInput: "Email o telefono",
    reservationPrivacy: "Useremo il recapito per gestire questa richiesta.", submitReservation: "Invia richiesta",
    birthdayTitle: "Il tuo compleanno da Sindbad",
    birthdayIntro: "Iscriviti per ricevere il codice sconto di compleanno e il promemoria.",
    birthdayJoin: "Scopri l’offerta", birthdayContact: "Email o cellulare con prefisso", day: "Giorno", month: "Mese",
    birthdayConsent: "Accetto di ricevere il codice e il relativo promemoria. Posso disiscrivermi in qualsiasi momento.",
    birthdaySubmit: "Iscriviti", pending: "Invio in corso…",
    booked: "Richiesta ricevuta. Il ristorante ti ricontatterà per confermare.",
    verify: "Controlla il tuo recapito per confermare l’iscrizione.",
    invalid: "Controlla i dati inseriti e riprova.",
    unavailable: "L’iscrizione non è ancora disponibile.",
    error: "Invio non riuscito. Riprova oppure chiama il ristorante."
  },
  ar: {
    signature: "أطباق ننصح بتجربتها", reservationTitle: "احجز ترابيزة",
    reservationIntro: "اختار اليوم والساعة وعدد الأشخاص. المطعم هيتواصل معاك لتأكيد التوفر.",
    date: "اليوم", time: "الساعة", guests: "عدد الأشخاص", name: "الاسم", contactInput: "الإيميل أو رقم التليفون",
    reservationPrivacy: "هنستخدم وسيلة التواصل لمتابعة طلب الحجز.", submitReservation: "ابعت طلب الحجز",
    birthdayTitle: "عيد ميلادك مع سندباد",
    birthdayIntro: "اشترك عشان يوصلك كود خصم عيد الميلاد وتذكير بيه.",
    birthdayJoin: "شوف العرض", birthdayContact: "الإيميل أو رقم الموبايل بكود الدولة", day: "اليوم", month: "الشهر",
    birthdayConsent: "موافق أستلم كود الخصم والتذكير. أقدر ألغي الاشتراك في أي وقت.",
    birthdaySubmit: "اشترك", pending: "جاري الإرسال…",
    booked: "طلبك وصل. المطعم هيتواصل معاك عشان يأكد الحجز.",
    verify: "راجع وسيلة التواصل اللي سجلتها عشان تأكد اشتراكك.",
    invalid: "راجع البيانات وجرّب تاني.",
    unavailable: "الاشتراك في العرض لسه مش متاح.",
    error: "الإرسال ما تمّش. جرّب تاني أو اتصل بالمطعم."
  },
  en: {
    signature: "Dishes to try", reservationTitle: "Book a table",
    reservationIntro: "Choose your date, time and party size. We’ll contact you to confirm availability.",
    date: "Date", time: "Time", guests: "Guests", name: "Name", contactInput: "Email or phone",
    reservationPrivacy: "We’ll use your contact details to manage this request.", submitReservation: "Send booking request",
    birthdayTitle: "Your birthday at Sindbad",
    birthdayIntro: "Sign up for a birthday discount code and a reminder.",
    birthdayJoin: "See the offer", birthdayContact: "Email or mobile with country code", day: "Day", month: "Month",
    birthdayConsent: "I agree to receive the code and reminder. I can unsubscribe at any time.",
    birthdaySubmit: "Sign up", pending: "Sending…",
    booked: "Request received. The restaurant will contact you to confirm.",
    verify: "Check your messages to confirm your sign-up.",
    invalid: "Check your details and try again.", unavailable: "Sign-up is not available yet.",
    error: "Couldn’t send. Try again or call the restaurant."
  },
  fr: {
    signature: "À découvrir", reservationTitle: "Réserver une table",
    reservationIntro: "Choisissez la date, l’heure et le nombre de personnes. Nous vous contacterons pour confirmer la disponibilité.",
    date: "Date", time: "Heure", guests: "Personnes", name: "Nom", contactInput: "E-mail ou téléphone",
    reservationPrivacy: "Nous utiliserons vos coordonnées pour traiter cette demande.", submitReservation: "Envoyer la demande",
    birthdayTitle: "Votre anniversaire chez Sindbad",
    birthdayIntro: "Inscrivez-vous pour recevoir un code de réduction et un rappel.",
    birthdayJoin: "Découvrir l’offre", birthdayContact: "E-mail ou mobile avec indicatif", day: "Jour", month: "Mois",
    birthdayConsent: "J’accepte de recevoir le code et le rappel. Je peux me désinscrire à tout moment.",
    birthdaySubmit: "S’inscrire", pending: "Envoi en cours…",
    booked: "Demande reçue. Le restaurant vous contactera pour la confirmer.",
    verify: "Consultez vos messages pour confirmer l’inscription.",
    invalid: "Vérifiez les informations et réessayez.", unavailable: "L’inscription n’est pas encore disponible.",
    error: "Échec de l’envoi. Réessayez ou appelez le restaurant."
  },
  de: {
    signature: "Unsere Empfehlungen", reservationTitle: "Einen Tisch reservieren",
    reservationIntro: "Wählen Sie Datum, Uhrzeit und Personenzahl. Wir melden uns zur Bestätigung.",
    date: "Datum", time: "Uhrzeit", guests: "Personen", name: "Name", contactInput: "E-Mail oder Telefon",
    reservationPrivacy: "Wir verwenden Ihre Kontaktdaten zur Bearbeitung dieser Anfrage.", submitReservation: "Anfrage senden",
    birthdayTitle: "Ihr Geburtstag bei Sindbad",
    birthdayIntro: "Melden Sie sich für einen Geburtstagsrabatt und eine Erinnerung an.",
    birthdayJoin: "Angebot ansehen", birthdayContact: "E-Mail oder Mobilnummer mit Vorwahl", day: "Tag", month: "Monat",
    birthdayConsent: "Ich möchte den Code und die Erinnerung erhalten. Ich kann mich jederzeit abmelden.",
    birthdaySubmit: "Anmelden", pending: "Wird gesendet…",
    booked: "Anfrage erhalten. Das Restaurant meldet sich zur Bestätigung.",
    verify: "Bitte bestätigen Sie Ihre Anmeldung über den Link in Ihrer Nachricht.",
    invalid: "Prüfen Sie Ihre Angaben und versuchen Sie es erneut.", unavailable: "Die Anmeldung ist noch nicht verfügbar.",
    error: "Senden fehlgeschlagen. Versuchen Sie es erneut oder rufen Sie das Restaurant an."
  },
  ru: {
    signature: "Что попробовать", reservationTitle: "Забронировать столик",
    reservationIntro: "Выберите дату, время и число гостей. Мы свяжемся с вами для подтверждения.",
    date: "Дата", time: "Время", guests: "Гостей", name: "Имя", contactInput: "Эл. почта или телефон",
    reservationPrivacy: "Мы используем ваши контакты для обработки заявки.", submitReservation: "Отправить заявку",
    birthdayTitle: "Ваш день рождения в Sindbad",
    birthdayIntro: "Подпишитесь, чтобы получить код скидки ко дню рождения и напоминание.",
    birthdayJoin: "Посмотреть предложение", birthdayContact: "Эл. почта или мобильный с кодом страны", day: "День", month: "Месяц",
    birthdayConsent: "Я согласен получить код и напоминание. От подписки можно отказаться в любое время.",
    birthdaySubmit: "Подписаться", pending: "Отправка…",
    booked: "Заявка получена. Ресторан свяжется с вами для подтверждения.",
    verify: "Проверьте сообщения и подтвердите подписку.",
    invalid: "Проверьте данные и повторите попытку.", unavailable: "Подписка пока недоступна.",
    error: "Не удалось отправить. Повторите попытку или позвоните в ресторан."
  }
};

const clubCopy = {
  it: {
    signature: "Le specialità di Sindbad", reservationTitle: "Prenota il tuo tavolo preferito",
    reservationIntro: "Scegli data, ora, numero di persone e tavolo. Ti ricontatteremo per confermare la disponibilità.",
    birthdayTitle: "Entra nel Club degli amici di Sindbad e ricevi un regalo per il tuo compleanno",
    birthdayIntro: "Il giorno del tuo compleanno, con il tuo prossimo ordine scegli una kunafa o una basbusa in omaggio.",
    birthdayConsent: "Acconsento a ricevere il regalo di compleanno via email o SMS. Posso disiscrivermi in qualsiasi momento.",
    phone: "Telefono con prefisso", fullName: "Nome e cognome", email: "Email", table: "Numero del tavolo",
    selectTable: "Scegli un tavolo", seats: "posti", tableTaken: "Tavolo o fascia oraria già richiesti. Verifica la disponibilità e riprova.",
    noTables: "Non ci sono tavoli disponibili per questi dati.", tablesUnconfigured: "Per scegliere un tavolo, chiama il ristorante.",
    tablesError: "Disponibilità non caricata. Riprova o chiama il ristorante."
  },
  ar: {
    signature: "روائع سندباد", reservationTitle: "احجز طاولتك المفضلة",
    reservationIntro: "اختار اليوم والساعة وعدد الأفراد ورقم الطاولة. المطعم هيتواصل معاك عشان يأكّد الحجز.",
    birthdayTitle: "انضم إلى نادي أصدقاء سندباد واحصل على هدايا في عيد ميلادك",
    birthdayIntro: "يوم عيد ميلادك اختار كنافة أو بسبوسة هدية مع طلبك.",
    birthdayConsent: "موافق أستلم هدية عيد الميلاد عبر الإيميل أو رسالة نصية. أقدر ألغي الاشتراك في أي وقت.",
    phone: "رقم التليفون بكود الدولة", fullName: "الاسم الكامل", email: "البريد الإلكتروني", table: "رقم الطاولة",
    selectTable: "اختار رقم الطاولة", seats: "مقاعد", tableTaken: "الطاولة أو الميعاد اتطلبوا بالفعل. شوف المتاح وجرّب تاني.",
    noTables: "مفيش طاولات متاحة بالاختيارات دي.", tablesUnconfigured: "اتصل بالمطعم لاختيار رقم الطاولة.",
    tablesError: "تعذّر تحميل الطاولات. جرّب تاني أو اتصل بالمطعم."
  },
  en: {
    signature: "Sindbad specials", reservationTitle: "Book your favourite table",
    reservationIntro: "Pick your date, time, party size and table. The restaurant will contact you to confirm.",
    birthdayTitle: "Join the Friends of Sindbad and get a gift on your birthday",
    birthdayIntro: "On your birthday, choose a complimentary kunafa or basbusa with your next order.",
    birthdayConsent: "I agree to receive my birthday gift by email or SMS. I can unsubscribe at any time.",
    phone: "Phone with country code", fullName: "Full name", email: "Email", table: "Table number",
    selectTable: "Choose a table", seats: "seats", tableTaken: "This table or time has already been requested. Check availability and try again.",
    noTables: "No tables are available for your selection.", tablesUnconfigured: "Call the restaurant to choose your table.",
    tablesError: "Could not load tables. Try again or call the restaurant."
  }
};

for (const [language, values] of Object.entries(formText)) {
  for (const [key, value] of Object.entries(clubCopy.it)) {
    if (!(key in values) || key.startsWith("birthday") || key.startsWith("reservation")) values[key] = value;
  }
  Object.assign(values, clubCopy[language]);
  Object.assign(siteText[language], values);
}
translatePage();

const formMessages = document.querySelectorAll(".form-message");
languagePicker.addEventListener("change", () => {
  for (const element of formMessages) {
    const key = element.dataset.result;
    if (key) element.textContent = formText[languagePicker.value][key];
  }
});

const reservationForm = document.getElementById("reservation-form");
const reservationDate = reservationForm.elements.date;
const reservationTime = reservationForm.elements.time;
const tableSelect = reservationForm.elements.table;
const tableStatus = document.getElementById("table-status");
const reservationButton = reservationForm.querySelector("button");
let availableTables = [];
let tableMessage = "";
let tableRequest;
let tablesLoading = false;
reservationDate.min = new Intl.DateTimeFormat("sv-SE", { timeZone: "Europe/Rome", dateStyle: "short" }).format(new Date());

function renderTables() {
  const t = formText[languagePicker.value];
  const selected = tableSelect.value;
  const eligible = availableTables.filter(table => table.seats >= Number(reservationForm.elements.guests.value));
  tableSelect.replaceChildren(new Option(t.selectTable, ""), ...eligible.map(table =>
    new Option("#" + table.number + " · " + table.seats + " " + t.seats, table.number)
  ));
  if (eligible.some(table => String(table.number) === selected)) tableSelect.value = selected;
  reservationButton.disabled = tablesLoading || reservationForm.dataset.submitting === "true" || !eligible.length;
  tableStatus.textContent = tableMessage ? t[tableMessage] : (!eligible.length ? t.noTables : "");
}

async function refreshTables() {
  tableRequest?.abort();
  const request = new AbortController();
  tableRequest = request;
  const date = reservationDate.value;
  const time = reservationTime.value;
  const query = date && time ? "?" + new URLSearchParams({ date, time }) : "";
  tablesLoading = true;
  reservationButton.disabled = true;
  try {
    const response = await fetch("/api/tables" + query, { cache: "no-store", signal: request.signal });
    if (!response.ok) throw new Error("Tables request failed");
    const tables = await response.json();
    if (request.signal.aborted) return;
    availableTables = tables;
    tableMessage = !query && !tables.length ? "tablesUnconfigured" : "";
  } catch (error) {
    if (error.name === "AbortError") return;
    availableTables = [];
    tableMessage = "tablesError";
  }
  tablesLoading = false;
  renderTables();
}

reservationDate.addEventListener("change", refreshTables);
reservationTime.addEventListener("change", refreshTables);
reservationForm.elements.guests.addEventListener("input", renderTables);
languagePicker.addEventListener("change", renderTables);
refreshTables();

for (const form of document.querySelectorAll(".guest-form")) {
  const button = form.querySelector("button");
  const status = form.querySelector(".form-message");

  function showResult(key, error = false) {
    status.dataset.result = key;
    status.dataset.error = String(error);
    status.textContent = formText[languagePicker.value][key];
  }

  form.addEventListener("submit", async event => {
    event.preventDefault();
    if (form.dataset.submitting === "true") return;
    form.dataset.submitting = "true";
    button.disabled = true;
    showResult("pending");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new URLSearchParams(new FormData(form))
      });
      const result = await response.json();
      showResult(result.code in formText.it ? result.code : "error", !response.ok);
      if (response.ok) form.reset();
      if (form === reservationForm && (response.ok || response.status === 409)) {
        await refreshTables();
      }
    } catch {
      showResult("error", true);
    } finally {
      delete form.dataset.submitting;
      if (form === reservationForm) renderTables();
      else button.disabled = false;
    }
  });
}

const birthdayForm = document.getElementById("birthday-form");
const birthdayButton = birthdayForm.querySelector("button");
birthdayButton.disabled = true;

async function checkBirthdayAvailability() {
  const status = birthdayForm.querySelector(".form-message");
  try {
    const response = await fetch("/api/birthday-availability", { cache: "no-store" });
    const channels = await response.json();
    if (channels.email || channels.phone) {
      birthdayButton.disabled = false;
      return;
    }
  } catch {
    // Keep sign-up closed until a delivery channel is available.
  }
  status.dataset.result = "unavailable";
  status.textContent = formText[languagePicker.value].unavailable;
}
checkBirthdayAvailability();

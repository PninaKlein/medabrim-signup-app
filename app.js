'use strict';

/* ---------- Text (English + Hebrew) ---------- */

const TEXT = {
  en: {
    camp: 'Medabrim FM', onAir: 'On air', who: 'Who is recording today?',
    qName0: 'What is your name?', qNameN: "What is the next person's name?",
    qEmail: 'What is your email, {name}?', hintEmail: 'This is where we will send the recording.',
    qMore: 'Is anyone else recording with you?', moreYes: '+ Yes, add a person', moreNo: "No, that's everyone",
    qPod: 'Does your podcast have a name?', hintPod: 'Optional. You can skip this.', skip: 'Skip',
    added: 'Signed up:', editItem: 'Fix',
    notInstalled: 'Open in Safari. For full screen and offline use: Share, then Add to Home Screen, and open it from the icon.',
    stepDetails: 'Your details', stepCheck: 'Check', stepRec: 'Recording #',
    rotate: 'Please turn the iPad upright', namePh: 'Full name', kbNext: 'Next', space: 'space',
    handTitle: 'Over to the crew', handLede: 'Hand the iPad to a crew member to add the recording number.',
    saveRec: 'Save', skipRec: 'Add it later', recNeeded: 'Type the recording number, or tap Add it later.',
    thanksTitle: 'Thank you! Have a great recording', thanksLede: 'Your recording will reach your email after Midburn.',
    title: 'Record your podcast',
    lede: 'A few details, and we will email you the recording after Midburn.',
    person: 'Person {n}', name: 'Name', email: 'Email', remove: 'Remove',
    addPerson: '+ Add another person',
    podcast: 'Podcast name', optional: '(optional)', podcastPh: 'For example: Dust Talks',
    consent: 'We only use your email to send you your recording.',
    next: 'Continue', errName: 'Please write a name.', errEmail: 'This email does not look right.',
    didYouMean: 'Did you mean {s}?',
    confirmTitle: 'Is this right?',
    confirmLede: 'Check each email carefully. This is how your recording reaches you.',
    fix: 'Fix something', submit: 'Yes, sign us up',
    doneTitle: 'You are on air!', codeLabel: 'Session code',
    doneLede: 'Tell the crew this code before you start recording.',
    doneNote: 'Your recording will reach your email after Midburn.',
    finish: 'Done',
    crew: 'Crew', backupNudge: 'Crew: {n} new entries are waiting for a backup.',
    pinTitle: 'Crew PIN', pinWrong: 'Wrong PIN. Try again.', cancel: 'Cancel', clear: 'Clear',
    crewTitle: 'Crew', entries: 'Entries', missingNum: 'Missing recording #', sinceBackup: 'Not backed up',
    lastBackup: 'Last backup: {t}', never: 'never', backupNow: 'Back up now',
    backupDone: 'Backup saved', backupCancelled: 'Backup not saved',
    backupTitle: 'Time to back up',
    backupBody: '{n} new entries since the last backup. Save a copy to Files, or AirDrop it to a phone.',
    later: 'Later',
    search: 'Search names, emails or codes', all: 'All', missingOnly: 'Missing #',
    recNum: 'Recording #', recPh: 'For example: 042', saved: 'Saved',
    edit: 'Edit', del: 'Delete', armed: 'Tap again to delete', deleted: 'Entry deleted',
    save: 'Save', notes: 'Crew notes',
    exit: 'Back to sign-up', settings: 'Settings',
    newPin: 'New crew PIN (4 digits)', setPin: 'Change PIN', pinChanged: 'PIN changed', pinBad: 'Use exactly 4 digits.',
    restore: 'Restore or merge a backup file', imported: 'Merged {n} entries', importErr: 'That file is not a Medabrim FM backup.',
    sendMode: 'Send recordings',
    noEntries: 'No entries yet. They appear here as guests sign up.',
    noMatch: 'Nothing matches this search.',
    installTitle: 'Not installed yet',
    installBody: 'In Safari tap Share, then Add to Home Screen, and always open it from that icon. The Home Screen app keeps its own data, separate from Safari.',
    storageOk: 'Saved on this iPad', storageWarn: 'iPad storage is not locked in yet',
    sendTitle: 'Send recordings',
    sendLede: 'Use this on a laptop with internet after the burn. Upload the recordings to Google Drive or Dropbox, add a share link for each one, then send the emails.',
    step1: '1. Load the backup files', step1Body: 'Pick every backup you saved. Entries are merged, so duplicates are safe.',
    step2: '2. Check the recording files', step2Body: 'Optional. Pick the folder with the audio files. A file counts as found when its name contains the recording number.',
    pickFolder: 'Pick folder', filesFound: '{n} files scanned',
    step3: '3. Add share links', step3Body: 'Paste one line per recording: recording number, a comma, then the link. You can also paste a link into each row below.',
    applyLinks: 'Add links', linksAdded: 'Links added: {n}',
    step4: '4. The email', subject: 'Subject', body: 'Message', emailLang: 'Language',
    templateHelp: 'These words are filled in for each email: {names}, {podcast}, {link}, {code}',
    exportCsv: 'Export for mail merge (CSV)',
    readyN: 'Ready', needsLink: 'Needs link', noRec: 'No recording #', sentS: 'Sent', noFile: 'No file found', fileOk: 'File found',
    link: 'Share link', linkPh: 'https://drive.google.com/…',
    openEmail: 'Open email', copyEmails: 'Copy emails', copyMsg: 'Copy message', copied: 'Copied',
    markSent: 'Mark sent', unmark: 'Mark not sent', markedSent: 'Marked as sent',
    filterReady: 'Ready to send', filterLink: 'Needs link', filterRec: 'No recording #', filterSent: 'Sent',
    back: 'Back',
    subjectDefault: 'Your podcast from Medabrim FM',
    bodyDefault: 'Hi {names},\n\nThanks for visiting Medabrim FM at Midburn! Here is your recording ({podcast}):\n{link}\n\nThe link stays open for a few weeks, so download it soon.\n\nWith love,\nThe Medabrim FM crew',
    unnamed: 'your podcast'
  },
  he: {
    camp: 'מדברים FM', onAir: 'בשידור', who: 'מי מקליטים היום?',
    qName0: 'איך קוראים לך?', qNameN: 'ואיך קוראים לאדם הבא?',
    qEmail: 'מה המייל שלך, {name}?', hintEmail: 'לשם נשלח את ההקלטה.',
    qMore: 'מקליטים עוד מישהו איתך?', moreYes: '+ כן, להוסיף עוד אדם', moreNo: 'לא, זה הכול',
    qPod: 'יש שם לפודקאסט?', hintPod: 'לא חובה. אפשר לדלג.', skip: 'דלג',
    added: 'כבר רשומים:', editItem: 'תיקון',
    notInstalled: 'פתוח בספארי. למסך מלא ולעבודה בלי אינטרנט: שיתוף, "הוספה למסך הבית", ולפתוח מהאייקון.',
    stepDetails: 'הפרטים שלכם', stepCheck: 'בדיקה', stepRec: 'מספר הקלטה',
    rotate: 'נא לסובב את האייפד לאורך', namePh: 'שם מלא', kbNext: 'הבא', space: 'רווח',
    handTitle: 'עכשיו תור הצוות', handLede: 'העבירו את האייפד לאחד מאנשי הצוות כדי להוסיף את מספר ההקלטה.',
    saveRec: 'שמירה', skipRec: 'להוסיף אחר כך', recNeeded: 'הקלידו את מספר ההקלטה, או הקישו "להוסיף אחר כך".',
    thanksTitle: 'תודה ובהצלחה בהקלטה!', thanksLede: 'ההקלטה תגיע למייל שלכם אחרי מידברן.',
    title: 'הקליטו פודקאסט',
    lede: 'כמה פרטים, ואת ההקלטה נשלח לכם במייל אחרי מידברן.',
    person: 'משתתף/ת {n}', name: 'שם', email: 'אימייל', remove: 'הסרה',
    addPerson: '+ הוספת משתתף/ת',
    podcast: 'שם הפודקאסט', optional: '(לא חובה)', podcastPh: 'לדוגמה: שיחות אבק',
    consent: 'נשתמש באימייל רק כדי לשלוח לכם את ההקלטה.',
    next: 'המשך', errName: 'נא לכתוב שם.', errEmail: 'האימייל הזה לא נראה תקין.',
    didYouMean: 'התכוונת ל־{s}?',
    confirmTitle: 'הכול נכון?',
    confirmLede: 'בדקו כל אימייל בעיון. כך ההקלטה תגיע אליכם.',
    fix: 'לתקן משהו', submit: 'כן, תרשמו אותנו',
    doneTitle: 'אתם בשידור!', codeLabel: 'קוד הקלטה',
    doneLede: 'אמרו את הקוד לצוות לפני שמתחילים להקליט.',
    doneNote: 'ההקלטה תגיע למייל שלכם אחרי מידברן.',
    finish: 'סיום',
    crew: 'צוות', backupNudge: 'לצוות: {n} רשומות חדשות מחכות לגיבוי.',
    pinTitle: 'קוד צוות', pinWrong: 'קוד שגוי. נסו שוב.', cancel: 'ביטול', clear: 'ניקוי',
    crewTitle: 'צוות', entries: 'רשומות', missingNum: 'חסר מספר הקלטה', sinceBackup: 'לא מגובות',
    lastBackup: 'גיבוי אחרון: {t}', never: 'עוד לא', backupNow: 'גיבוי עכשיו',
    backupDone: 'הגיבוי נשמר', backupCancelled: 'הגיבוי לא נשמר',
    backupTitle: 'הגיע הזמן לגבות',
    backupBody: '{n} רשומות חדשות מאז הגיבוי האחרון. שמרו עותק בקבצים או שלחו ב־AirDrop לטלפון.',
    later: 'אחר כך',
    search: 'חיפוש שם, אימייל או קוד', all: 'הכול', missingOnly: 'חסר מספר',
    recNum: 'מספר הקלטה', recPh: 'לדוגמה: 042', saved: 'נשמר',
    edit: 'עריכה', del: 'מחיקה', armed: 'הקישו שוב למחיקה', deleted: 'הרשומה נמחקה',
    save: 'שמירה', notes: 'הערות צוות',
    exit: 'חזרה להרשמה', settings: 'הגדרות',
    newPin: 'קוד צוות חדש (4 ספרות)', setPin: 'שינוי קוד', pinChanged: 'הקוד שונה', pinBad: 'בדיוק 4 ספרות.',
    restore: 'שחזור או מיזוג קובץ גיבוי', imported: 'מוזגו {n} רשומות', importErr: 'הקובץ הזה אינו גיבוי של מדברים FM.',
    sendMode: 'שליחת הקלטות',
    noEntries: 'עדיין אין רשומות. הן יופיעו כאן כשאורחים יירשמו.',
    noMatch: 'אין תוצאות לחיפוש.',
    installTitle: 'האפליקציה עוד לא מותקנת',
    installBody: 'בספארי הקישו על שיתוף ואז "הוספה למסך הבית", ותמיד פתחו מהאייקון. לאפליקציה במסך הבית יש נתונים משלה, נפרדים מספארי.',
    storageOk: 'נשמר באייפד', storageWarn: 'האחסון באייפד עוד לא נעול',
    sendTitle: 'שליחת הקלטות',
    sendLede: 'השתמשו בזה במחשב עם אינטרנט אחרי הברן. העלו את ההקלטות לגוגל דרייב או דרופבוקס, הוסיפו קישור שיתוף לכל אחת, ואז שלחו את המיילים.',
    step1: '1. טעינת קובצי הגיבוי', step1Body: 'בחרו את כל הגיבויים ששמרתם. הרשומות ממוזגות, כך שכפילויות לא מזיקות.',
    step2: '2. בדיקת קובצי ההקלטה', step2Body: 'לא חובה. בחרו את התיקייה עם קובצי האודיו. קובץ נחשב נמצא אם השם שלו מכיל את מספר ההקלטה.',
    pickFolder: 'בחירת תיקייה', filesFound: 'נסרקו {n} קבצים',
    step3: '3. הוספת קישורי שיתוף', step3Body: 'הדביקו שורה לכל הקלטה: מספר הקלטה, פסיק, ואז הקישור. אפשר גם להדביק קישור בכל שורה למטה.',
    applyLinks: 'הוספת קישורים', linksAdded: 'קישורים שנוספו: {n}',
    step4: '4. המייל', subject: 'נושא', body: 'הודעה', emailLang: 'שפה',
    templateHelp: 'המילים האלה מתמלאות בכל מייל: {names}, {podcast}, {link}, {code}',
    exportCsv: 'ייצוא למיזוג דואר (CSV)',
    readyN: 'מוכן', needsLink: 'חסר קישור', noRec: 'חסר מספר', sentS: 'נשלח', noFile: 'לא נמצא קובץ', fileOk: 'נמצא קובץ',
    link: 'קישור שיתוף', linkPh: 'https://drive.google.com/…',
    openEmail: 'פתיחת מייל', copyEmails: 'העתקת כתובות', copyMsg: 'העתקת הודעה', copied: 'הועתק',
    markSent: 'סימון כנשלח', unmark: 'ביטול סימון', markedSent: 'סומן כנשלח',
    filterReady: 'מוכן לשליחה', filterLink: 'חסר קישור', filterRec: 'חסר מספר', filterSent: 'נשלח',
    back: 'חזרה',
    subjectDefault: 'הפודקאסט שלכם ממדברים FM',
    bodyDefault: 'היי {names},\n\nתודה שביקרתם במדברים FM במידברן! הנה ההקלטה שלכם ({podcast}):\n{link}\n\nהקישור פתוח לכמה שבועות, אז כדאי להוריד בקרוב.\n\nבאהבה,\nצוות מדברים FM',
    unnamed: 'הפודקאסט שלכם'
  }
};

/* ---------- Storage: IndexedDB, mirrored to localStorage ---------- */

const DB_NAME = 'medabrim-fm';
const LS_KEY = 'medabrim-fm-backup-mirror';
let dbPromise = null;

function openDb() {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve) => {
    try {
      const req = indexedDB.open(DB_NAME, 1);
      req.onupgradeneeded = () => {
        const db = req.result;
        db.createObjectStore('sessions', { keyPath: 'id' });
        db.createObjectStore('meta');
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(null);
    } catch (e) { resolve(null); }
  });
  return dbPromise;
}

async function idb(store, mode, fn) {
  const db = await openDb();
  if (!db) return null;
  return new Promise((resolve) => {
    try {
      const tx = db.transaction(store, mode);
      const os = tx.objectStore(store);
      const req = fn(os);
      tx.oncomplete = () => resolve(req ? req.result : true);
      tx.onerror = () => resolve(null);
    } catch (e) { resolve(null); }
  });
}

function mirror() {
  try { localStorage.setItem(LS_KEY, JSON.stringify({ sessions: state.sessions, meta: state.meta })); } catch (e) {}
}

async function saveSession(s) {
  s.updatedAt = new Date().toISOString();
  const i = state.sessions.findIndex((x) => x.id === s.id);
  if (i >= 0) state.sessions[i] = s; else state.sessions.push(s);
  mirror();
  await idb('sessions', 'readwrite', (os) => os.put(s));
}

async function saveMeta() {
  mirror();
  await idb('meta', 'readwrite', (os) => os.put(state.meta, 'meta'));
}

async function loadAll() {
  let sessions = await idb('sessions', 'readonly', (os) => os.getAll());
  let meta = await idb('meta', 'readonly', (os) => os.get('meta'));
  let fallback = null;
  try { fallback = JSON.parse(localStorage.getItem(LS_KEY) || 'null'); } catch (e) {}
  if ((!sessions || !sessions.length) && fallback && fallback.sessions && fallback.sessions.length) {
    sessions = fallback.sessions;
    for (const s of sessions) await idb('sessions', 'readwrite', (os) => os.put(s));
  }
  if (!meta && fallback && fallback.meta) meta = fallback.meta;
  state.sessions = sessions || [];
  state.meta = Object.assign(defaultMeta(), meta || {});
}

function defaultMeta() {
  return {
    pin: '1234', lang: 'he', days: [], unbacked: 0, lastBackupAt: null, lastPromptAt: 0,
    emailLang: 'en', subject: null, body: null
  };
}

/* ---------- State ---------- */

const state = {
  sessions: [], meta: defaultMeta(), view: 'form', lang: 'he',
  draft: null, errors: {}, lastCode: null,
  crewUnlocked: false, pinEntry: '', pinError: false, pinNext: 'crew',
  modal: null, search: '', filter: 'all', armedDelete: null, editDraft: null,
  sendFilter: 'all', files: null, persisted: false,
  focus: null, kbLang: 'he', shift: false, recFor: null, recDraft: '', step: { kind: 'name', i: 0 }, lastTouch: Date.now()
};

const $app = document.getElementById('app');
const t = (key, vars) => {
  let s = (TEXT[state.lang] && TEXT[state.lang][key]) || TEXT.en[key] || key;
  if (vars) for (const k in vars) s = s.split('{' + k + '}').join(vars[k]);
  return s;
};
const esc = (v) => String(v == null ? '' : v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const uid = () => (crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2));
const live = () => state.sessions.filter((s) => !s.deleted);
const blankDraft = () => ({ guests: [{ name: '', email: '' }], podcastName: '' });

function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg; el.hidden = false;
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => { el.hidden = true; }, 2200);
}

function fmtTime(iso, withDay) {
  if (!iso) return '';
  const d = new Date(iso);
  const opts = withDay ? { weekday: 'short', hour: '2-digit', minute: '2-digit' } : { hour: '2-digit', minute: '2-digit' };
  return d.toLocaleString(state.lang === 'he' ? 'he-IL' : 'en-GB', opts);
}

/* ---------- Email checks ---------- */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const DOMAIN_FIXES = {
  'gmial.com': 'gmail.com', 'gamil.com': 'gmail.com', 'gmai.com': 'gmail.com', 'gmail.co': 'gmail.com', 'gmail.con': 'gmail.com',
  'gmaill.com': 'gmail.com', 'gnail.com': 'gmail.com', 'gmail.co.il': 'gmail.com', 'gmal.com': 'gmail.com', 'gmail.cm': 'gmail.com',
  'hotmial.com': 'hotmail.com', 'hotmal.com': 'hotmail.com', 'hotmail.co': 'hotmail.com', 'hotmail.con': 'hotmail.com',
  'yahoo.co': 'yahoo.com', 'yaho.com': 'yahoo.com', 'yahoo.con': 'yahoo.com',
  'walla.co': 'walla.co.il', 'walla.com': 'walla.co.il', 'wala.co.il': 'walla.co.il',
  'icloud.co': 'icloud.com', 'iclould.com': 'icloud.com', 'outlook.co': 'outlook.com', 'outlok.com': 'outlook.com'
};
function cleanEmail(e) { return String(e || '').trim().replace(/\s+/g, '').toLowerCase(); }
function suggestEmail(e) {
  const m = cleanEmail(e).match(/^(.+)@(.+)$/);
  if (!m) return null;
  const fix = DOMAIN_FIXES[m[2]];
  return fix ? m[1] + '@' + fix : null;
}

function validateDraft() {
  const errors = {};
  state.draft.guests.forEach((g, i) => {
    if (!g.name.trim()) errors['name' + i] = t('errName');
    if (!EMAIL_RE.test(cleanEmail(g.email))) errors['email' + i] = t('errEmail');
  });
  state.errors = errors;
  return Object.keys(errors).length === 0;
}

/* ---------- Session codes: day letter + running number (A1, A2 … B1) ---------- */

function nextCode() {
  const today = new Date().toLocaleDateString('en-CA');
  if (!state.meta.days.includes(today)) state.meta.days.push(today);
  const dayIdx = state.meta.days.indexOf(today);
  const letter = String.fromCharCode(65 + (dayIdx % 26));
  const used = state.sessions.filter((s) => s.code && s.code.startsWith(letter)).map((s) => parseInt(s.code.slice(1), 10) || 0);
  return letter + (Math.max(0, ...used) + 1);
}

/* ---------- Rendering ---------- */

function render() {
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === 'he' ? 'rtl' : 'ltr';
  const guestView = ['form', 'confirm', 'rec', 'done'].includes(state.view);
  document.body.className = guestView ? 'night' : 'day';
  const views = { form: viewForm, confirm: viewConfirm, rec: viewRec, done: viewDone, crew: viewCrew, send: viewSend };
  const list = document.getElementById('g-list');
  const keep = list ? list.scrollTop : 0;
  $app.innerHTML = (views[state.view] || viewForm)() + viewModal();
  const list2 = document.getElementById('g-list');
  if (list2) list2.scrollTop = keep;
}

function langSwitch() {
  return `<div class="lang" role="group" aria-label="Language">
    <button data-act="lang" data-v="he" aria-pressed="${state.lang === 'he'}">עברית</button>
    <button data-act="lang" data-v="en" aria-pressed="${state.lang === 'en'}">English</button>
  </div>`;
}

function topBar(extra) {
  return `<header class="bar">
    <div class="brand"><span class="lamp">${esc(t('onAir'))}</span>${esc(t('camp'))}</div>
    <div class="row">${extra || ''}${langSwitch()}</div>
  </header>`;
}

/* Guest screens: upright, one question per screen, like filling in one line on a paper form.
   A desert-dusk scene fills the screen above the app's own keyboard, so the iPad keyboard never opens. */

const DUNES = `<svg class="dunes" viewBox="0 0 800 160" preserveAspectRatio="none" aria-hidden="true">
  <path class="d1" d="M0 96 C120 52 220 60 330 88 C440 116 520 70 640 58 C720 50 770 66 800 74 L800 160 L0 160 Z"/>
  <path class="d2" d="M0 128 C90 104 200 98 300 118 C420 142 520 104 620 100 C700 97 760 112 800 120 L800 160 L0 160 Z"/>
</svg>`;

function eq(n) {
  return `<div class="eq" aria-hidden="true">${Array.from({ length: n }, (_, i) => `<i style="--i:${i}"></i>`).join('')}</div>`;
}

const isInstalled = () => window.navigator.standalone === true || matchMedia('(display-mode: standalone)').matches;

function topbar(withLang) {
  const due = state.meta.unbacked >= 10;
  return `<header class="topbar">
    <div class="brand"><span class="lamp">${esc(t('onAir'))}</span><span class="camp">${esc(t('camp'))}</span></div>
    <div class="row">${withLang ? langSwitch() : ''}<button class="crew-link" data-act="open-crew">${esc(t('crew'))}${due ? '<span class="dot"></span>' : ''}</button></div>
  </header>
  ${isInstalled() ? '' : `<div class="install-strip">${esc(t('notInstalled'))}</div>`}`;
}

function scene(inner, opts) {
  opts = opts || {};
  return `<div class="stage">
    <section class="scene ${opts.cls || ''}">
      <div class="sun" aria-hidden="true"></div>
      ${topbar(opts.lang !== false)}
      <main class="ask">${inner}</main>
      ${DUNES}
    </section>
    ${opts.kb || ''}
    <div class="rotate" role="alert"><div class="rotate-icon" aria-hidden="true"></div><p>${esc(t('rotate'))}</p></div>
  </div>`;
}

/* ---------- In-app keyboard ---------- */

const KB = {
  he: [['ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ'], ['ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף'], ['ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ']],
  en: [['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'], ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], ['z', 'x', 'c', 'v', 'b', 'n', 'm']]
};
const DIGITS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const EMAIL_SNIPPETS = ['@gmail.com', '@walla.co.il', '@hotmail.com', '@icloud.com', '.com', '.co.il'];
const MAX_LEN = 80;

function getVal(f, i) {
  if (f === 'name' || f === 'email') return state.draft.guests[i][f];
  if (f === 'podcast') return state.draft.podcastName;
  return state.recDraft;
}
function setVal(f, i, v) {
  v = v.slice(0, MAX_LEN);
  if (f === 'name' || f === 'email') state.draft.guests[i][f] = v;
  else if (f === 'podcast') state.draft.podcastName = v;
  else state.recDraft = v;
  delete state.errors[f + i];
}
function focusField(f, i) {
  state.focus = { f, i: i || 0 };
  state.kbLang = (f === 'email' || f === 'rec') ? 'en' : state.lang;
  const v = getVal(f, i || 0);
  state.shift = state.kbLang === 'en' && f === 'name' && (!v || v.endsWith(' '));
}
const hasHebrew = (s) => /[֐-׿]/.test(s);

function textField(f, i, ph) {
  const v = getVal(f, i);
  const on = state.focus && state.focus.f === f && state.focus.i === i;
  const bad = !!state.errors[f + i];
  const ok = f === 'email' && EMAIL_RE.test(cleanEmail(v));
  const dir = f === 'email' || f === 'rec' ? 'ltr' : v ? (hasHebrew(v) ? 'rtl' : 'ltr') : (state.lang === 'he' ? 'rtl' : 'ltr');
  const size = v.length > 30 ? 'xs' : v.length > 22 ? 'sm' : '';
  return `<button type="button" class="tf ${on ? 'on' : ''} ${bad ? 'bad' : ''} ${ok ? 'ok' : ''} ${size} ${f === 'rec' ? 'rec' : ''}" data-act="focus" data-f="${f}" data-i="${i}" dir="${dir}" aria-label="${esc(ph)}">
    <span class="tv">${esc(v)}</span>${on ? '<span class="caret"></span>' : ''}${v ? '' : `<span class="ph">${esc(ph)}</span>`}
  </button>`;
}

function keyboard(mode, nextLabel) {
  const lang = state.kbLang;
  const up = state.shift && lang === 'en';
  const key = (k, label, cls) => `<button type="button" class="k ${cls || ''}" data-act="key" data-k="${esc(k)}">${label == null ? esc(k) : label}</button>`;
  const letters = KB[lang].map((row) => row.map((c) => key(up ? c.toUpperCase() : c)).join(''));
  const isEmail = mode === 'email';
  const rows = [];
  if (isEmail) rows.push(`<div class="kr snip">${EMAIL_SNIPPETS.map((s) => key(s, `<span dir="ltr">${esc(s)}</span>`, 'snip')).join('')}</div>`);
  rows.push(`<div class="kr">${DIGITS.map((d) => key(d)).join('')}</div>`);
  rows.push(`<div class="kr">${letters[0]}</div>`);
  rows.push(`<div class="kr">${letters[1]}</div>`);
  rows.push(`<div class="kr">${lang === 'en' ? key('shift', '⇧', 'wide fn' + (state.shift ? ' lit' : '')) : ''}${letters[2]}${key('bksp', '⌫', 'wide fn')}</div>`);
  const mid = isEmail
    ? key('@', '@', 'wide') + key('.', '.') + key('-', '-') + key('_', '_')
    : key('space', esc(t('space')), 'space') + key('-', '-') + (mode === 'rec' ? '' : key("'", "'"));
  const langKey = isEmail || mode === 'rec' ? '' : key('lang', lang === 'he' ? 'ABC' : 'אבג', 'wide fn');
  rows.push(`<div class="kr">${langKey}${mid}${key('next', esc(nextLabel), 'go')}</div>`);
  return `<div class="kb" dir="ltr">${rows.join('')}</div>`;
}

function typeKey(k) {
  if (!state.focus) return;
  const { f, i } = state.focus;
  let v = getVal(f, i);
  if (k === 'bksp') { setVal(f, i, v.slice(0, -1)); if (f === 'name' && state.kbLang === 'en') state.shift = !v.slice(0, -1) || v.slice(0, -1).endsWith(' '); return; }
  if (k === 'shift') { state.shift = !state.shift; return; }
  if (k === 'lang') { state.kbLang = state.kbLang === 'he' ? 'en' : 'he'; state.shift = state.kbLang === 'en' && f === 'name' && (!v || v.endsWith(' ')); return; }
  if (k === 'next') { nextField(); return; }
  if (k === 'space') k = ' ';
  if (f === 'email') {
    if (k === ' ') return;
    if (k.startsWith('@') && k.length > 1 && v.includes('@')) v = v.slice(0, v.indexOf('@'));
    if (k === '@' && v.includes('@')) return;
  }
  if (k === ' ' && (!v || v.endsWith(' '))) return;
  const ch = k.length === 1 && state.shift && state.kbLang === 'en' ? k.toUpperCase() : k;
  setVal(f, i, v + ch);
  if (state.kbLang === 'en' && f === 'name') state.shift = ch === ' ';
  else if (k.length === 1) state.shift = false;
}

/* ---------- Steps: name → email → anyone else? → podcast name → check ---------- */

function goStep(kind, i) {
  state.step = { kind, i: i || 0 };
  state.view = 'form';
  if (kind === 'name' || kind === 'email') focusField(kind, i || 0);
  else if (kind === 'podcast') focusField('podcast', 0);
  else state.focus = null;
}

function nextField() {
  if (state.view === 'rec') { onAction('rec-save', document.body); return; }
  onAction('step-next', document.body);
}

function stepNext() {
  const { kind, i } = state.step;
  const g = state.draft.guests[i];
  if (kind === 'name') {
    if (!g.name.trim()) { state.errors = { ['name' + i]: t('errName') }; return; }
    goStep('email', i);
  } else if (kind === 'email') {
    if (!EMAIL_RE.test(cleanEmail(g.email))) { state.errors = { ['email' + i]: t('errEmail') }; return; }
    goStep('more', i);
  } else if (kind === 'podcast') {
    state.view = 'confirm'; state.focus = null;
  }
}

function stepBack() {
  const { kind, i } = state.step;
  state.errors = {};
  if (kind === 'email') goStep('name', i);
  else if (kind === 'more') goStep('email', i);
  else if (kind === 'name' && i > 0) { state.draft.guests.splice(i, 1); goStep('more', i - 1); }
  else if (kind === 'podcast') goStep('more', state.draft.guests.length - 1);
}

function addedChips(upTo) {
  const done = state.draft.guests.slice(0, upTo).filter((g) => g.name.trim());
  if (!done.length) return '';
  return `<div class="added"><span>${esc(t('added'))}</span>${done.map((g) => `<b>✓ ${esc(g.name.trim())}</b>`).join('')}</div>`;
}

function msgLine() {
  if (state.focus && state.focus.f === 'email') {
    const sug = suggestEmail(getVal('email', state.focus.i));
    if (sug) return `<button type="button" class="suggest" data-act="apply-suggest" data-i="${state.focus.i}">${esc(t('didYouMean', { s: sug }))}</button>`;
  }
  const errs = Object.values(state.errors);
  return errs.length ? `<span class="err">${esc(errs[0])}</span>` : '';
}

function navRow(nextLabel, canBack, extra) {
  return `<div class="nav">
    ${canBack ? `<button type="button" class="btn big outline back" data-act="step-back">${esc(t('back'))}</button>` : ''}
    ${extra || ''}
    <button type="button" class="btn primary big" data-act="step-next">${esc(nextLabel)}</button>
  </div>`;
}

function viewForm() {
  const { kind, i } = state.step;
  const g = state.draft.guests[i];
  if (kind === 'name') {
    return scene(`
      ${i === 0 ? `<p class="kicker">${esc(t('lede'))}</p>` : addedChips(i)}
      <h1>${esc(t(i === 0 ? 'qName0' : 'qNameN'))}</h1>
      ${textField('name', i, t('namePh'))}
      <div class="msg">${msgLine()}</div>
      ${navRow(t('kbNext'), i > 0)}`, { kb: keyboard('text', t('kbNext')) });
  }
  if (kind === 'email') {
    return scene(`
      ${addedChips(i)}
      <h1>${esc(t('qEmail', { name: g.name.trim().split(/\s+/)[0] }))}</h1>
      <p class="sub">${esc(t('hintEmail'))}</p>
      ${textField('email', i, 'name@gmail.com')}
      <div class="msg">${msgLine()}</div>
      ${navRow(t('kbNext'), true)}`, { kb: keyboard('email', t('kbNext')) });
  }
  if (kind === 'more') {
    return scene(`
      ${addedChips(i + 1)}
      <h1>${esc(t('qMore'))}</h1>
      <div class="choices">
        <button type="button" class="choice" data-act="more-yes">${esc(t('moreYes'))}</button>
        <button type="button" class="choice primary" data-act="more-no">${esc(t('moreNo'))}</button>
      </div>
      <button type="button" class="btn big outline back solo-back" data-act="step-back">${esc(t('back'))}</button>`, { cls: 'roomy' });
  }
  return scene(`
    ${addedChips(state.draft.guests.length)}
    <h1>${esc(t('qPod'))}</h1>
    <p class="sub">${esc(t('hintPod'))}</p>
    ${textField('podcast', 0, t('podcastPh'))}
    <div class="msg"></div>
    ${navRow(state.draft.podcastName.trim() ? t('next') : t('skip'), true)}`, { kb: keyboard('text', state.draft.podcastName.trim() ? t('next') : t('skip')) });
}

function viewConfirm() {
  const d = state.draft;
  return scene(`
    <h1>${esc(t('confirmTitle'))}</h1>
    <p class="sub">${esc(t('confirmLede'))}</p>
    <div class="confirm-list">
      ${d.guests.map((g, i) => `<div class="confirm-item">
        <div class="ci-text"><div class="who">${esc(g.name.trim())}</div><div class="mail">${esc(cleanEmail(g.email))}</div></div>
        <button type="button" class="btn sm fix" data-act="fix" data-k="name" data-i="${i}">${esc(t('editItem'))}</button>
      </div>`).join('')}
      ${d.podcastName.trim() ? `<div class="confirm-item pod"><div class="ci-text"><div class="who">🎙 ${esc(t('podcast'))}</div><div class="mail">${esc(d.podcastName.trim())}</div></div>
        <button type="button" class="btn sm fix" data-act="fix" data-k="podcast" data-i="0">${esc(t('editItem'))}</button></div>` : ''}
    </div>
    <button class="btn primary big yes" data-act="submit">${esc(t('submit'))}</button>`, { cls: 'roomy' });
}

function viewRec() {
  const s = state.sessions.find((x) => x.id === state.recFor);
  return scene(`
    <p class="kicker">${esc(t('handLede'))}</p>
    <h1>${esc(t('handTitle'))}</h1>
    <div class="who-list">${s ? s.guests.map((g) => `<span>${esc(g.name)}</span>`).join('') : ''}${s && s.podcastName ? `<em>🎙 ${esc(s.podcastName)}</em>` : ''}</div>
    ${textField('rec', 0, t('recPh'))}
    <div class="msg">${msgLine()}</div>
    <div class="nav">
      <button type="button" class="btn big outline" data-act="rec-skip">${esc(t('skipRec'))}</button>
      <button type="button" class="btn primary big" data-act="rec-save">${esc(t('saveRec'))}</button>
    </div>`, { kb: keyboard('rec', t('saveRec')), lang: false });
}

function viewDone() {
  return scene(`
    <div class="done">
      ${eq(13)}
      <h1>${esc(t('thanksTitle'))}</h1>
      <p class="sub">${esc(t('thanksLede'))}</p>
      <button class="btn primary big" data-act="finish">${esc(t('finish'))}</button>
    </div>`, { cls: 'roomy solo', lang: false });
}


function crewList() {
  const q = state.search.trim().toLowerCase();
  let items = live().slice().sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''));
  if (state.filter === 'missing') items = items.filter((s) => !String(s.recordingNumber || '').trim());
  if (q) items = items.filter((s) => [s.code, s.podcastName, s.recordingNumber, s.notes, ...s.guests.flatMap((g) => [g.name, g.email])].join(' ').toLowerCase().includes(q));
  if (!live().length) return `<div class="empty">${esc(t('noEntries'))}</div>`;
  if (!items.length) return `<div class="empty">${esc(t('noMatch'))}</div>`;
  return items.map((s) => {
    const missing = !String(s.recordingNumber || '').trim();
    const armed = state.armedDelete === s.id;
    return `<article class="entry ${missing ? 'missing' : ''}">
      <div><div class="code">${esc(s.code)}</div><div class="time">${esc(fmtTime(s.createdAt, true))}</div></div>
      <div class="people">
        ${s.guests.map((g) => `<div class="person">${esc(g.name)} <span class="e">${esc(g.email)}</span></div>`).join('')}
        ${s.podcastName ? `<div class="pod">🎙 ${esc(s.podcastName)}</div>` : ''}
        ${s.notes ? `<div class="note">${esc(s.notes)}</div>` : ''}
      </div>
      <div class="rec">
        <label class="small" for="rec-${esc(s.id)}">${esc(t('recNum'))}</label>
        <input class="input mono" id="rec-${esc(s.id)}" data-rec="${esc(s.id)}" value="${esc(s.recordingNumber || '')}" placeholder="${esc(t('recPh'))}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" dir="auto" enterkeyhint="done">
        <div class="acts">
          <button class="btn sm" data-act="edit" data-id="${esc(s.id)}">${esc(t('edit'))}</button>
          <button class="btn sm danger ${armed ? 'armed' : ''}" data-act="delete" data-id="${esc(s.id)}">${esc(armed ? t('armed') : t('del'))}</button>
        </div>
      </div>
    </article>`;
  }).join('');
}

function viewCrew() {
  const all = live();
  const missing = all.filter((s) => !String(s.recordingNumber || '').trim()).length;
  const due = state.meta.unbacked >= 10;
  const standalone = window.navigator.standalone === true || matchMedia('(display-mode: standalone)').matches;
  return `<main class="wrap wide">
    ${topBar(`<button class="btn sm" data-act="exit-crew">${esc(t('exit'))}</button>`)}
    <h1>${esc(t('crewTitle'))}</h1>
    ${standalone ? '' : `<div class="hint"><strong>${esc(t('installTitle'))}</strong>${esc(t('installBody'))}</div>`}
    <div class="tiles">
      <div class="tile"><span class="n">${all.length}</span><span class="l">${esc(t('entries'))}</span></div>
      <div class="tile ${missing ? 'warn' : ''}"><span class="n">${missing}</span><span class="l">${esc(t('missingNum'))}</span></div>
      <div class="tile ${due ? 'warn' : ''}"><span class="n">${state.meta.unbacked}</span><span class="l">${esc(t('sinceBackup'))}</span></div>
    </div>
    <div class="backup ${due ? 'due' : ''}">
      <div><strong>${esc(t('lastBackup', { t: state.meta.lastBackupAt ? fmtTime(state.meta.lastBackupAt, true) : t('never') }))}</strong>
      <div class="small">${esc(state.persisted ? t('storageOk') : t('storageWarn'))}</div></div>
      <button class="btn ${due ? 'primary' : 'dark'}" data-act="backup">${esc(t('backupNow'))}</button>
    </div>
    <div class="row split">
      <input class="input" id="crew-search" data-bind="search" value="${esc(state.search)}" placeholder="${esc(t('search'))}" style="flex:1 1 260px" autocomplete="off">
      <div class="chips">
        <button class="chip" data-act="filter" data-v="all" aria-pressed="${state.filter === 'all'}">${esc(t('all'))}</button>
        <button class="chip" data-act="filter" data-v="missing" aria-pressed="${state.filter === 'missing'}">${esc(t('missingOnly'))} (${missing})</button>
      </div>
    </div>
    <div class="list" id="crew-list">${crewList()}</div>
    <details class="panel">
      <summary>${esc(t('settings'))}</summary>
      <div class="stack">
        <div class="field">
          <label for="new-pin">${esc(t('newPin'))}</label>
          <div class="row"><input class="input mono" id="new-pin" inputmode="numeric" maxlength="4" style="max-width:160px" autocomplete="off"><button class="btn" data-act="set-pin">${esc(t('setPin'))}</button></div>
        </div>
        <div class="field">
          <label for="restore-file">${esc(t('restore'))}</label>
          <input id="restore-file" type="file" accept=".json,application/json" data-import="1">
        </div>
        <button class="btn" data-act="go-send">${esc(t('sendMode'))}</button>
      </div>
    </details>
  </main>`;
}

/* ---------- Send mode ---------- */

function recKey(v) { return String(v || '').trim().toLowerCase().replace(/[^a-z0-9]/g, ''); }

function fileMatch(rec) {
  if (!state.files) return null;
  const key = recKey(rec);
  if (!key) return false;
  const num = /^\d+$/.test(key) ? parseInt(key, 10) : null;
  return state.files.some((name) => {
    const base = name.toLowerCase();
    if (num !== null) return (base.match(/\d+/g) || []).some((d) => parseInt(d, 10) === num);
    return recKey(base).includes(key);
  });
}

function sendStatus(s) {
  if (s.sentAt) return 'sent';
  if (!String(s.recordingNumber || '').trim()) return 'rec';
  if (!String(s.link || '').trim()) return 'link';
  return 'ready';
}

function fillTemplate(tpl, s) {
  const names = s.guests.map((g) => g.name.trim().split(/\s+/)[0]).join(state.meta.emailLang === 'he' ? ' ו' : ' & ');
  return tpl.split('{names}').join(names)
    .split('{podcast}').join(s.podcastName || TEXT[state.meta.emailLang].unnamed)
    .split('{link}').join(s.link || '')
    .split('{code}').join(s.code || '');
}
const tplSubject = () => state.meta.subject != null ? state.meta.subject : TEXT[state.meta.emailLang].subjectDefault;
const tplBody = () => state.meta.body != null ? state.meta.body : TEXT[state.meta.emailLang].bodyDefault;

function mailtoFor(s) {
  const to = s.guests.map((g) => g.email).join(',');
  return 'mailto:' + to + '?subject=' + encodeURIComponent(fillTemplate(tplSubject(), s)) + '&body=' + encodeURIComponent(fillTemplate(tplBody(), s));
}

function sendList() {
  let items = live().slice().sort((a, b) => (a.createdAt || '').localeCompare(b.createdAt || ''));
  if (state.sendFilter !== 'all') items = items.filter((s) => sendStatus(s) === state.sendFilter);
  if (!items.length) return `<div class="empty">${esc(t(live().length ? 'noMatch' : 'noEntries'))}</div>`;
  const pills = { sent: ['ok', 'sentS'], rec: ['red', 'noRec'], link: ['warn', 'needsLink'], ready: ['ok', 'readyN'] };
  return items.map((s) => {
    const st = sendStatus(s);
    const fm = fileMatch(s.recordingNumber);
    return `<article class="send-row ${st === 'sent' ? 'is-sent' : ''}">
      <div class="top">
        <span class="code">${esc(s.code)}</span>
        <strong>${esc(s.guests.map((g) => g.name).join(', '))}</strong>
        ${s.podcastName ? `<span class="small">🎙 ${esc(s.podcastName)}</span>` : ''}
        <span class="pill ${pills[st][0]}">${esc(t(pills[st][1]))}</span>
        ${s.recordingNumber ? `<span class="pill mute">${esc(t('recNum'))} ${esc(s.recordingNumber)}</span>` : ''}
        ${fm === null || !s.recordingNumber ? '' : `<span class="pill ${fm ? 'ok' : 'red'}">${esc(t(fm ? 'fileOk' : 'noFile'))}</span>`}
      </div>
      <div class="mails">${esc(s.guests.map((g) => g.email).join(', '))}</div>
      <div class="row">
        <input class="input" style="flex:1 1 280px;min-height:48px;font-size:16px" id="link-${esc(s.id)}" data-link="${esc(s.id)}" value="${esc(s.link || '')}" placeholder="${esc(t('linkPh'))}" dir="ltr" autocomplete="off">
      </div>
      <div class="row">
        <a class="btn sm ${st === 'ready' || st === 'sent' ? 'primary' : ''}" href="${esc(mailtoFor(s))}" data-act="mailto" data-id="${esc(s.id)}">${esc(t('openEmail'))}</a>
        <button class="btn sm" data-act="copy-emails" data-id="${esc(s.id)}">${esc(t('copyEmails'))}</button>
        <button class="btn sm" data-act="copy-msg" data-id="${esc(s.id)}">${esc(t('copyMsg'))}</button>
        <button class="btn sm" data-act="toggle-sent" data-id="${esc(s.id)}">${esc(t(s.sentAt ? 'unmark' : 'markSent'))}</button>
      </div>
    </article>`;
  }).join('');
}

function viewSend() {
  const all = live();
  const count = (k) => all.filter((s) => sendStatus(s) === k).length;
  const chip = (v, label) => `<button class="chip" data-act="send-filter" data-v="${v}" aria-pressed="${state.sendFilter === v}">${esc(label)}${v === 'all' ? '' : ` (${count(v)})`}</button>`;
  return `<main class="wrap wide">
    ${topBar(`<button class="btn sm" data-act="back-crew">${esc(t('back'))}</button>`)}
    <div class="stack"><h1>${esc(t('sendTitle'))}</h1><p class="lede">${esc(t('sendLede'))}</p></div>
    <div class="tiles">
      <div class="tile"><span class="n">${count('ready')}</span><span class="l">${esc(t('filterReady'))}</span></div>
      <div class="tile ${count('link') ? 'warn' : ''}"><span class="n">${count('link') + count('rec')}</span><span class="l">${esc(t('needsLink'))} / ${esc(t('noRec'))}</span></div>
      <div class="tile"><span class="n">${count('sent')} / ${all.length}</span><span class="l">${esc(t('sentS'))}</span></div>
    </div>
    <details class="panel" ${all.length ? '' : 'open'}>
      <summary>${esc(t('step1'))}</summary>
      <div class="stack"><p class="small">${esc(t('step1Body'))}</p><input id="send-import" type="file" accept=".json,application/json" multiple data-import="1"></div>
    </details>
    <details class="panel">
      <summary>${esc(t('step2'))}</summary>
      <div class="stack"><p class="small">${esc(t('step2Body'))}</p>
        <input id="folder" type="file" webkitdirectory multiple data-folder="1">
        ${state.files ? `<span class="small">${esc(t('filesFound', { n: state.files.length }))}</span>` : ''}
      </div>
    </details>
    <details class="panel">
      <summary>${esc(t('step3'))}</summary>
      <div class="stack"><p class="small">${esc(t('step3Body'))}</p>
        <textarea class="input mono" id="bulk-links" dir="ltr" placeholder="042, https://drive.google.com/file/d/…"></textarea>
        <div class="row"><button class="btn" data-act="apply-links">${esc(t('applyLinks'))}</button></div>
      </div>
    </details>
    <details class="panel">
      <summary>${esc(t('step4'))}</summary>
      <div class="stack">
        <div class="row"><span class="small">${esc(t('emailLang'))}</span>
          <div class="chips"><button class="chip" data-act="email-lang" data-v="en" aria-pressed="${state.meta.emailLang === 'en'}">English</button><button class="chip" data-act="email-lang" data-v="he" aria-pressed="${state.meta.emailLang === 'he'}">עברית</button></div>
        </div>
        <div class="field"><label for="tpl-subject">${esc(t('subject'))}</label><input class="input" id="tpl-subject" data-bind="subject" value="${esc(tplSubject())}" dir="auto"></div>
        <div class="field"><label for="tpl-body">${esc(t('body'))}</label><textarea class="input" id="tpl-body" data-bind="body" dir="auto" style="min-height:200px">${esc(tplBody())}</textarea></div>
        <p class="small">${esc(t('templateHelp'))}</p>
        <div class="row"><button class="btn" data-act="export-csv">${esc(t('exportCsv'))}</button></div>
      </div>
    </details>
    <div class="chips">
      ${chip('all', t('all'))}${chip('ready', t('filterReady'))}${chip('link', t('filterLink'))}${chip('rec', t('filterRec'))}${chip('sent', t('filterSent'))}
    </div>
    <div class="list" id="send-list">${sendList()}</div>
  </main>`;
}

/* ---------- Modals ---------- */

function viewModal() {
  const m = state.modal;
  if (!m) return '';
  if (m === 'pin') {
    const dots = [0, 1, 2, 3].map((i) => `<span class="${i < state.pinEntry.length ? 'on' : ''}"></span>`).join('');
    const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', '⌫'];
    return `<div class="scrim" data-act="close-modal-bg"><div class="modal" role="dialog" aria-modal="true" aria-labelledby="pin-title">
      <h2 id="pin-title" style="text-align:center">${esc(t('pinTitle'))}</h2>
      <div class="pin-dots">${dots}</div>
      ${state.pinError ? `<div class="err" style="text-align:center">${esc(t('pinWrong'))}</div>` : ''}
      <div class="pad">${keys.map((k) => `<button data-act="pin-key" data-v="${k}" aria-label="${k === 'C' ? esc(t('clear')) : k === '⌫' ? 'Delete' : k}">${k}</button>`).join('')}</div>
      <button class="btn" data-act="close-modal">${esc(t('cancel'))}</button>
    </div></div>`;
  }
  if (m === 'backup') {
    return `<div class="scrim"><div class="modal" role="dialog" aria-modal="true" aria-labelledby="bk-title">
      <h2 id="bk-title">${esc(t('backupTitle'))}</h2>
      <p style="margin:0">${esc(t('backupBody', { n: state.meta.unbacked }))}</p>
      <div class="row end"><button class="btn" data-act="close-modal">${esc(t('later'))}</button><button class="btn primary" data-act="backup">${esc(t('backupNow'))}</button></div>
    </div></div>`;
  }
  if (m === 'edit') {
    const d = state.editDraft;
    return `<div class="scrim"><div class="modal" role="dialog" aria-modal="true" aria-labelledby="ed-title">
      <h2 id="ed-title">${esc(t('edit'))} ${esc(d.code)}</h2>
      ${d.guests.map((g, i) => `<div class="stack">
        <span class="eyebrow">${esc(t('person', { n: i + 1 }))}</span>
        <input class="input" id="ed-name${i}" data-ebind="name" data-i="${i}" value="${esc(g.name)}" aria-label="${esc(t('name'))}">
        <input class="input mono" id="ed-email${i}" data-ebind="email" data-i="${i}" value="${esc(g.email)}" dir="ltr" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="${esc(t('email'))}">
        ${d.guests.length > 1 ? `<button class="btn quiet sm" data-act="ed-remove" data-i="${i}" style="align-self:flex-start">${esc(t('remove'))}</button>` : ''}
      </div>`).join('')}
      <button class="btn ghost sm" data-act="ed-add">${esc(t('addPerson'))}</button>
      <div class="field"><label for="ed-pod">${esc(t('podcast'))}</label><input class="input" id="ed-pod" data-ebind="podcastName" value="${esc(d.podcastName || '')}"></div>
      <div class="field"><label for="ed-rec">${esc(t('recNum'))}</label><input class="input mono" id="ed-rec" data-ebind="recordingNumber" value="${esc(d.recordingNumber || '')}" dir="ltr"></div>
      <div class="field"><label for="ed-notes">${esc(t('notes'))}</label><textarea class="input" id="ed-notes" data-ebind="notes">${esc(d.notes || '')}</textarea></div>
      <div id="ed-err" class="err"></div>
      <div class="row end"><button class="btn" data-act="close-modal">${esc(t('cancel'))}</button><button class="btn primary" data-act="ed-save">${esc(t('save'))}</button></div>
    </div></div>`;
  }
  return '';
}

/* ---------- Backup & import ---------- */

const CSV_HEAD = ['code', 'created', 'recording_number', 'podcast_name', 'names', 'emails', 'notes', 'link', 'sent_at'];
function csvCell(v) { const s = String(v == null ? '' : v); return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; }
function toCsv(rows) {
  return '﻿' + [CSV_HEAD.join(',')].concat(rows.map((s) => [
    s.code, s.createdAt, s.recordingNumber || '', s.podcastName || '',
    s.guests.map((g) => g.name).join('; '), s.guests.map((g) => g.email).join('; '),
    s.notes || '', s.link || '', s.sentAt || ''
  ].map(csvCell).join(','))).join('\n');
}

function stamp() { const d = new Date(); const p = (n) => String(n).padStart(2, '0'); return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}_${p(d.getHours())}${p(d.getMinutes())}`; }

async function shareOrDownload(files) {
  if (navigator.canShare && navigator.share && navigator.canShare({ files })) {
    try { await navigator.share({ files, title: 'Medabrim FM backup' }); return true; }
    catch (e) { if (e && e.name === 'AbortError') return false; }
  }
  for (const [i, f] of files.entries()) {
    if (i) await new Promise((r) => setTimeout(r, 700));
    const a = document.createElement('a');
    a.href = URL.createObjectURL(f); a.download = f.name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  }
  return true;
}

async function doBackup() {
  const payload = { app: 'medabrim-fm-signup', version: 1, exportedAt: new Date().toISOString(), sessions: state.sessions };
  const name = 'medabrim-fm-backup_' + stamp();
  const files = [
    new File([JSON.stringify(payload, null, 1)], name + '.json', { type: 'application/json' }),
    new File([toCsv(live())], name + '.csv', { type: 'text/csv' })
  ];
  const ok = await shareOrDownload(files);
  if (ok) {
    state.meta.unbacked = 0;
    state.meta.lastBackupAt = new Date().toISOString();
    await saveMeta();
    state.modal = null;
    toast(t('backupDone'));
  } else toast(t('backupCancelled'));
  render();
}

async function importFiles(fileList) {
  let merged = 0;
  for (const file of fileList) {
    try {
      const data = JSON.parse(await file.text());
      if (!data || data.app !== 'medabrim-fm-signup' || !Array.isArray(data.sessions)) throw new Error('bad');
      for (const inc of data.sessions) {
        if (!inc || !inc.id || !Array.isArray(inc.guests)) continue;
        const cur = state.sessions.find((s) => s.id === inc.id);
        if (!cur || (inc.updatedAt || '') > (cur.updatedAt || '')) {
          const keep = cur ? { link: cur.link, sentAt: cur.sentAt } : {};
          const next = Object.assign({}, inc);
          if (!next.link && keep.link) next.link = keep.link;
          if (!next.sentAt && keep.sentAt) next.sentAt = keep.sentAt;
          const i = state.sessions.findIndex((s) => s.id === inc.id);
          if (i >= 0) state.sessions[i] = next; else state.sessions.push(next);
          await idb('sessions', 'readwrite', (os) => os.put(next));
          merged++;
        }
      }
      for (const s of data.sessions) {
        const day = s && s.createdAt && new Date(s.createdAt).toLocaleDateString('en-CA');
        if (day && !state.meta.days.includes(day)) state.meta.days.push(day);
      }
      state.meta.days.sort();
    } catch (e) { toast(t('importErr')); render(); return; }
  }
  mirror(); await saveMeta();
  toast(t('imported', { n: merged }));
  render();
}

function copyText(text) {
  const done = () => toast(t('copied'));
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done, () => fallbackCopy(text, done));
  } else fallbackCopy(text, done);
}
function fallbackCopy(text, done) {
  const ta = document.createElement('textarea');
  ta.value = text; document.body.appendChild(ta); ta.select();
  try { document.execCommand('copy'); done(); } catch (e) {}
  ta.remove();
}

/* ---------- Events ---------- */

let doneTimer = null;

function resetGuest() {
  clearTimeout(doneTimer);
  state.draft = blankDraft(); state.errors = {}; state.recFor = null; state.recDraft = '';
  state.lang = 'he'; goStep('name', 0);
  render(); window.scrollTo(0, 0);
}

function showThanks() {
  state.view = 'done'; state.focus = null; state.errors = {};
  render();
  clearTimeout(doneTimer);
  doneTimer = setTimeout(() => { if (state.view === 'done') resetGuest(); }, 12000);
}

async function onAction(act, el) {
  const id = el.dataset.id;
  const sess = id ? state.sessions.find((s) => s.id === id) : null;
  switch (act) {
    case 'lang':
      state.lang = el.dataset.v; state.meta.lang = state.lang; saveMeta();
      if (state.view === 'form' && Object.keys(state.errors).length) validateDraft();
      if (state.focus) focusField(state.focus.f, state.focus.i);
      render(); break;
    case 'focus': focusField(el.dataset.f, +el.dataset.i); render(); break;
    case 'key': typeKey(el.dataset.k); render(); break;
    case 'step-next': stepNext(); render(); break;
    case 'step-back': stepBack(); render(); break;
    case 'more-yes':
      if (state.draft.guests.length < 8) state.draft.guests.push({ name: '', email: '' });
      goStep('name', state.draft.guests.length - 1); render(); break;
    case 'more-no': goStep('podcast', 0); render(); break;
    case 'fix': state.errors = {}; goStep(el.dataset.k, +el.dataset.i); render(); break;
    case 'apply-suggest': {
      const g = state.draft.guests[+el.dataset.i];
      g.email = suggestEmail(g.email) || g.email;
      delete state.errors['email' + el.dataset.i];
      render(); break;
    }
    case 'submit': {
      const s = {
        id: uid(), code: nextCode(), createdAt: new Date().toISOString(), lang: state.lang,
        guests: state.draft.guests.map((g) => ({ name: g.name.trim(), email: cleanEmail(g.email) })),
        podcastName: state.draft.podcastName.trim(), recordingNumber: '', notes: '', deleted: false
      };
      state.meta.unbacked += 1;
      await saveSession(s); await saveMeta();
      requestPersist();
      state.recFor = s.id; state.recDraft = ''; state.errors = {};
      state.view = 'rec'; focusField('rec', 0);
      render(); break;
    }
    case 'rec-save': {
      const v = state.recDraft.trim();
      if (!v) { state.errors = { rec0: t('recNeeded') }; render(); break; }
      const s = state.sessions.find((x) => x.id === state.recFor);
      if (s) { s.recordingNumber = v; await saveSession(s); mirror(); }
      showThanks(); break;
    }
    case 'rec-skip': showThanks(); break;
    case 'finish': resetGuest(); break;
    case 'open-crew':
      if (state.crewUnlocked) { enterCrew(); break; }
      state.modal = 'pin'; state.pinEntry = ''; state.pinError = false; render(); break;
    case 'pin-key': {
      const v = el.dataset.v;
      state.pinError = false;
      if (v === 'C') state.pinEntry = '';
      else if (v === '⌫') state.pinEntry = state.pinEntry.slice(0, -1);
      else if (state.pinEntry.length < 4) state.pinEntry += v;
      if (state.pinEntry.length === 4) {
        if (state.pinEntry === state.meta.pin) { state.crewUnlocked = true; state.modal = null; enterCrew(); return; }
        state.pinError = true; state.pinEntry = '';
      }
      render(); break;
    }
    case 'close-modal': state.modal = null; state.editDraft = null; render(); break;
    case 'close-modal-bg': if (el === lastTarget) { state.modal = null; render(); } break;
    case 'exit-crew': state.crewUnlocked = false; state.armedDelete = null; resetGuest(); break;
    case 'backup': await doBackup(); break;
    case 'filter': state.filter = el.dataset.v; render(); break;
    case 'edit':
      state.editDraft = JSON.parse(JSON.stringify(sess)); state.modal = 'edit'; render(); break;
    case 'ed-add': state.editDraft.guests.push({ name: '', email: '' }); render(); break;
    case 'ed-remove': state.editDraft.guests.splice(+el.dataset.i, 1); render(); break;
    case 'ed-save': {
      const d = state.editDraft;
      d.guests = d.guests.map((g) => ({ name: g.name.trim(), email: cleanEmail(g.email) }));
      const bad = d.guests.find((g) => !g.name || !EMAIL_RE.test(g.email));
      if (bad) { document.getElementById('ed-err').textContent = !bad.name ? t('errName') : t('errEmail') + ' ' + bad.email; return; }
      d.podcastName = (d.podcastName || '').trim(); d.recordingNumber = (d.recordingNumber || '').trim();
      await saveSession(d); state.meta.unbacked += 1; await saveMeta();
      state.modal = null; state.editDraft = null; toast(t('saved')); render(); break;
    }
    case 'delete':
      if (state.armedDelete !== id) { state.armedDelete = id; render(); setTimeout(() => { if (state.armedDelete === id) { state.armedDelete = null; render(); } }, 4000); break; }
      sess.deleted = true; state.armedDelete = null;
      await saveSession(sess); state.meta.unbacked += 1; await saveMeta();
      toast(t('deleted')); render(); break;
    case 'set-pin': {
      const v = document.getElementById('new-pin').value.trim();
      if (!/^\d{4}$/.test(v)) { toast(t('pinBad')); break; }
      state.meta.pin = v; await saveMeta(); toast(t('pinChanged')); render(); break;
    }
    case 'go-send': state.view = 'send'; render(); window.scrollTo(0, 0); break;
    case 'back-crew': state.view = 'crew'; render(); window.scrollTo(0, 0); break;
    case 'send-filter': state.sendFilter = el.dataset.v; render(); break;
    case 'email-lang':
      state.meta.emailLang = el.dataset.v; state.meta.subject = null; state.meta.body = null; await saveMeta(); render(); break;
    case 'apply-links': {
      const lines = document.getElementById('bulk-links').value.split(/\n+/);
      let n = 0;
      for (const line of lines) {
        const m = line.match(/^\s*([^,\t]+?)\s*[,\t]\s*(\S+)\s*$/);
        if (!m) continue;
        const key = recKey(m[1]);
        for (const s of live()) if (key && recKey(s.recordingNumber) === key) { s.link = m[2]; await saveSession(s); n++; }
      }
      toast(t('linksAdded', { n })); render(); break;
    }
    case 'copy-emails': copyText(sess.guests.map((g) => g.email).join(', ')); break;
    case 'copy-msg': copyText(fillTemplate(tplSubject(), sess) + '\n\n' + fillTemplate(tplBody(), sess)); break;
    case 'toggle-sent':
      sess.sentAt = sess.sentAt ? null : new Date().toISOString();
      await saveSession(sess); if (sess.sentAt) toast(t('markedSent')); render(); break;
    case 'export-csv': {
      const rows = live().filter((s) => s.recordingNumber).map((s) => Object.assign({}, s, { message: fillTemplate(tplBody(), s) }));
      const head = 'emails,names,podcast_name,code,recording_number,link,subject,message';
      const body = rows.map((s) => [s.guests.map((g) => g.email).join(', '), s.guests.map((g) => g.name).join(', '), s.podcastName, s.code, s.recordingNumber, s.link || '', fillTemplate(tplSubject(), s), s.message].map(csvCell).join(','));
      await shareOrDownload([new File(['﻿' + [head].concat(body).join('\n')], 'medabrim-fm-mail-merge.csv', { type: 'text/csv' })]);
      break;
    }
  }
}

function enterCrew() {
  state.view = 'crew';
  if (state.meta.unbacked >= 10 && Date.now() - (state.meta.lastPromptAt || 0) > 10 * 60 * 1000) {
    state.modal = 'backup'; state.meta.lastPromptAt = Date.now(); saveMeta();
  }
  requestPersist();
  render(); window.scrollTo(0, 0);
}

async function requestPersist() {
  try {
    if (navigator.storage && navigator.storage.persist) {
      state.persisted = (await navigator.storage.persisted()) || (await navigator.storage.persist());
    }
  } catch (e) {}
}

let lastTarget = null;
document.addEventListener('pointerdown', (e) => { lastTarget = e.target; state.lastTouch = Date.now(); });
document.addEventListener('keydown', () => { state.lastTouch = Date.now(); });

// A half-filled form left alone for 3 minutes is cleared, so the next guest starts fresh.
setInterval(() => {
  const started = state.draft.guests.some((g) => g.name || g.email) || state.draft.podcastName;
  const away = Date.now() - state.lastTouch > 3 * 60 * 1000;
  if (away && started && !state.modal && (state.view === 'form' || state.view === 'confirm')) resetGuest();
}, 15000);

$app.addEventListener('click', (e) => {
  const el = e.target.closest('[data-act]');
  if (!el) return;
  if (el.dataset.act === 'mailto') return; // let the link open the mail app
  if (el.dataset.act === 'close-modal-bg' && e.target !== el) return;
  e.preventDefault();
  onAction(el.dataset.act, el);
});

$app.addEventListener('submit', (e) => {
  if (e.target.id !== 'guest-form') return;
  e.preventDefault();
  if (validateDraft()) { state.view = 'confirm'; render(); window.scrollTo(0, 0); }
  else { render(); const first = document.querySelector('.input.bad'); if (first) first.focus(); }
});

$app.addEventListener('input', (e) => {
  const el = e.target;
  const b = el.dataset.bind;
  if (b === 'name' || b === 'email') {
    const i = +el.dataset.i;
    state.draft.guests[i][b] = el.value;
    if (b === 'email') {
      const sug = suggestEmail(el.value);
      document.getElementById('sug' + i).innerHTML = sug ? `<button class="suggest" data-act="apply-suggest" data-i="${i}">${esc(t('didYouMean', { s: sug }))}</button>` : '';
    }
  } else if (b === 'podcast') state.draft.podcastName = el.value;
  else if (b === 'search') { state.search = el.value; document.getElementById('crew-list').innerHTML = crewList(); }
  else if (b === 'subject') { state.meta.subject = el.value; saveMeta(); }
  else if (b === 'body') { state.meta.body = el.value; saveMeta(); }
  else if (el.dataset.ebind) {
    const k = el.dataset.ebind;
    if (k === 'name' || k === 'email') state.editDraft.guests[+el.dataset.i][k] = el.value;
    else state.editDraft[k] = el.value;
  }
});

$app.addEventListener('change', async (e) => {
  const el = e.target;
  if (el.dataset.rec) {
    const s = state.sessions.find((x) => x.id === el.dataset.rec);
    const v = el.value.trim();
    if (s && v !== (s.recordingNumber || '')) {
      s.recordingNumber = v; await saveSession(s); state.meta.unbacked += 1; await saveMeta();
      toast(t('saved') + ': ' + s.code + ' → ' + (v || '—'));
      const y = window.scrollY; render(); window.scrollTo(0, y);
    }
  } else if (el.dataset.link) {
    const s = state.sessions.find((x) => x.id === el.dataset.link);
    if (s) { s.link = el.value.trim(); await saveSession(s); const y = window.scrollY; render(); window.scrollTo(0, y); }
  } else if (el.dataset.import && el.files && el.files.length) {
    await importFiles(el.files);
  } else if (el.dataset.folder && el.files) {
    state.files = Array.from(el.files).map((f) => f.name).filter((n) => !n.startsWith('.'));
    render();
  }
});

document.addEventListener('keydown', (e) => {
  if (!state.focus || state.modal || !['form', 'rec'].includes(state.view) || e.metaKey || e.ctrlKey) return;
  const { f, i } = state.focus;
  if (e.key === 'Enter' || e.key === 'Tab') { e.preventDefault(); nextField(); }
  else if (e.key === 'Backspace') { e.preventDefault(); setVal(f, i, getVal(f, i).slice(0, -1)); }
  else if (e.key.length === 1) { e.preventDefault(); if (!(f === 'email' && e.key === ' ')) setVal(f, i, getVal(f, i) + e.key); }
  else return;
  render();
});

$app.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.target.dataset.rec) e.target.blur();
});

/* ---------- Start ---------- */

(async function start() {
  state.draft = blankDraft();
  await loadAll();
  goStep('name', 0);
  state.lang = 'he';
  try { state.persisted = navigator.storage && navigator.storage.persisted ? await navigator.storage.persisted() : false; } catch (e) {}
  render();
  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    // A new version takes over in the background; reload only when no guest is mid-form.
    let reloaded = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      const idle = state.view === 'form' && !state.draft.guests.some((g) => g.name || g.email) && !state.modal;
      if (!reloaded && idle) { reloaded = true; location.reload(); }
    });
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
})();

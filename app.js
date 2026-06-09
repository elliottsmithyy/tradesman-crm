// TradeBase CRM — Shared data layer + utilities
'use strict';

const SEED_KEY = 'tb_seeded_v3';

const SEED_CUSTOMERS = [
  { id: 'c1', name: 'John Hartley',  phone: '07811 234 567', email: 'john@hartleyltd.co.uk',  address: '14 Mill Street, Bradford, BD1 4TH',          notes: 'Prefers morning appointments. Has a dog.',          createdAt: '2026-01-15' },
  { id: 'c2', name: 'Sarah Wilson',  phone: '07922 345 678', email: 'sarah.wilson@gmail.com',   address: '3 Oak Avenue, Leeds, LS6 2ND',                notes: 'Key under the mat if she is not in. Good payer.',   createdAt: '2026-02-03' },
  { id: 'c3', name: 'Mike Chen',     phone: '07733 456 789', email: 'mchen@outlook.com',        address: '22 Victoria Road, Sheffield, S10 2QB',        notes: '',                                                 createdAt: '2026-02-20' },
  { id: 'c4', name: 'Emma Davies',   phone: '07644 567 890', email: 'emmadavies@gmail.com',     address: '8 Church Lane, Huddersfield, HD1 3JR',        notes: 'Elderly — always confirm 24 hrs before.',         createdAt: '2026-03-10' },
  { id: 'c5', name: 'Tom Bradley',   phone: '07555 678 901', email: 't.bradley@btinternet.com', address: '55 Brook Street, Halifax, HX1 2BN',           notes: 'Landlord. Manages multiple properties.',           createdAt: '2026-03-22' },
];

const yd = (n) => { const d = new Date(); d.setDate(d.getDate() + n); return d.toISOString().slice(0, 10); };

const SEED_JOBS = [
  { id: 'j1', customerId: 'c2', title: 'Boiler Service',             description: 'Annual boiler service and safety check',                    date: yd(0),  status: 'inprogress', location: '3 Oak Avenue, Leeds',         notes: 'Last serviced June 2025', invoiceId: null,  createdAt: yd(-2) },
  { id: 'j2', customerId: 'c1', title: 'Leaking Tap Repair',         description: 'Kitchen tap dripping — replace washer and O-ring',          date: yd(1),  status: 'scheduled',  location: '14 Mill Street, Bradford',    notes: '',                         invoiceId: null,  createdAt: yd(-1) },
  { id: 'j3', customerId: 'c4', title: 'Drain Unblocking',           description: 'Blocked bathroom drain, snake and clear',                   date: yd(2),  status: 'scheduled',  location: '8 Church Lane, Huddersfield', notes: 'Tried drain cleaner already',  invoiceId: null,  createdAt: yd(-1) },
  { id: 'j4', customerId: 'c3', title: 'Bathroom Refit',             description: 'Full bathroom refit — new suite, tiling, plumbing',         date: yd(-3), status: 'completed',  location: '22 Victoria Road, Sheffield', notes: 'Took 3 days total',            invoiceId: 'i1', createdAt: yd(-15) },
  { id: 'j5', customerId: 'c5', title: 'Hot Water Cylinder Install', description: 'Remove old immersion heater, install new unvented cylinder', date: yd(-5), status: 'invoiced',   location: '55 Brook Street, Halifax',    notes: 'G3 qualified — cert needed',   invoiceId: 'i2', createdAt: yd(-12) },
  { id: 'j6', customerId: 'c1', title: 'Radiator Bleed & Balance',   description: 'Bleed all 8 radiators, rebalance system',                   date: yd(-6), status: 'completed',  location: '14 Mill Street, Bradford',    notes: '',                             invoiceId: 'i3', createdAt: yd(-6) },
];

const SEED_INVOICES = [
  { id: 'i1', customerId: 'c3', jobId: 'j4', number: 'INV-001', lineItems: [{ desc: 'Labour (3 days)', qty: 3, rate: 220, total: 660 }, { desc: 'Materials — suite, tiles, fittings', qty: 1, rate: 190, total: 190 }], total: 850,  status: 'paid',    issuedAt: yd(-3),  dueAt: yd(11),  notes: '' },
  { id: 'i2', customerId: 'c5', jobId: 'j5', number: 'INV-002', lineItems: [{ desc: 'Labour (1 day)', qty: 1, rate: 320, total: 320 }, { desc: 'Unvented cylinder (180L)', qty: 1, rate: 680, total: 680 }, { desc: 'G3 Certificate', qty: 1, rate: 60, total: 60 }, { desc: 'Pipe fittings & sundries', qty: 1, rate: 140, total: 140 }], total: 1200, status: 'sent',    issuedAt: yd(-5),  dueAt: yd(9),   notes: 'G3 cert posted separately.' },
  { id: 'i3', customerId: 'c1', jobId: 'j6', number: 'INV-003', lineItems: [{ desc: 'Labour — bleed & balance (2hrs)', qty: 1, rate: 120, total: 120 }], total: 120, status: 'paid',    issuedAt: yd(-6),  dueAt: yd(8),   notes: '' },
  { id: 'i4', customerId: 'c4', jobId: null, number: 'INV-004', lineItems: [{ desc: 'Emergency call-out — burst pipe', qty: 1, rate: 150, total: 150 }], total: 150,  status: 'overdue', issuedAt: yd(-19), dueAt: yd(-5),  notes: 'Chased twice by phone.' },
];

const SEED_QUOTES = [
  { id: 'q1', customerId: 'c2', number: 'QUO-001', title: 'Kitchen tap and shower replacement', lineItems: [{ desc: 'Labour (2 days)', qty: 2, rate: 220, total: 440 }, { desc: 'Materials — taps, shower kit', qty: 1, rate: 180, total: 180 }], total: 620, status: 'sent',  issuedAt: yd(-7), validUntil: yd(7),  notes: 'Includes all fittings. Labour rate may vary if additional work found.', convertedTo: null },
  { id: 'q2', customerId: 'c4', number: 'QUO-002', title: 'Full bathroom refit', lineItems: [{ desc: 'Labour (4 days)', qty: 4, rate: 220, total: 880 }, { desc: 'New bathroom suite', qty: 1, rate: 650, total: 650 }, { desc: 'Tiling & grouting', qty: 1, rate: 320, total: 320 }], total: 1850, status: 'draft', issuedAt: yd(0),  validUntil: yd(14), notes: '', convertedTo: null },
];

// ── Data layer ──────────────────────────────────────────────────────────

const DB = {
  _get(k)    { try { return JSON.parse(localStorage.getItem(k) || 'null'); } catch { return null; } },
  _set(k, v) { localStorage.setItem(k, JSON.stringify(v)); },

  seed() {
    if (this._get(SEED_KEY)) return;
    this._set('tb_customers', SEED_CUSTOMERS);
    this._set('tb_jobs',      SEED_JOBS);
    this._set('tb_invoices',  SEED_INVOICES);
    this._set('tb_quotes',    SEED_QUOTES);
    this._set(SEED_KEY, true);
  },

  // Customers
  getCustomers()      { return this._get('tb_customers') || []; },
  getCustomer(id)     { return this.getCustomers().find(c => c.id === id) || null; },
  saveCustomer(data)  { const l = this.getCustomers(); const i = l.findIndex(c => c.id === data.id); if (i >= 0) l[i] = data; else l.unshift(data); this._set('tb_customers', l); },
  deleteCustomer(id)  { this._set('tb_customers', this.getCustomers().filter(c => c.id !== id)); },

  // Jobs
  getJobs()           { return this._get('tb_jobs') || []; },
  getJob(id)          { return this.getJobs().find(j => j.id === id) || null; },
  getJobsFor(cId)     { return this.getJobs().filter(j => j.customerId === cId); },
  saveJob(data)       { const l = this.getJobs(); const i = l.findIndex(j => j.id === data.id); if (i >= 0) l[i] = data; else l.unshift(data); this._set('tb_jobs', l); },
  deleteJob(id)       { this._set('tb_jobs', this.getJobs().filter(j => j.id !== id)); },

  // Invoices
  getInvoices()       { return this._get('tb_invoices') || []; },
  getInvoice(id)      { return this.getInvoices().find(i => i.id === id) || null; },
  getInvoicesFor(cId) { return this.getInvoices().filter(i => i.customerId === cId); },
  saveInvoice(data)   { const l = this.getInvoices(); const i = l.findIndex(v => v.id === data.id); if (i >= 0) l[i] = data; else l.unshift(data); this._set('tb_invoices', l); },
  deleteInvoice(id)   { this._set('tb_invoices', this.getInvoices().filter(i => i.id !== id)); },
  nextInvoiceNumber() {
    const nums = this.getInvoices().map(i => parseInt(i.number.replace('INV-', ''), 10)).filter(n => !isNaN(n));
    return 'INV-' + String((nums.length ? Math.max(...nums) : 0) + 1).padStart(3, '0');
  },

  // Quotes
  getQuotes()         { return this._get('tb_quotes') || []; },
  getQuote(id)        { return this.getQuotes().find(q => q.id === id) || null; },
  getQuotesFor(cId)   { return this.getQuotes().filter(q => q.customerId === cId); },
  saveQuote(data)     { const l = this.getQuotes(); const i = l.findIndex(q => q.id === data.id); if (i >= 0) l[i] = data; else l.unshift(data); this._set('tb_quotes', l); },
  deleteQuote(id)     { this._set('tb_quotes', this.getQuotes().filter(q => q.id !== id)); },
  nextQuoteNumber()   {
    const nums = this.getQuotes().map(q => parseInt(q.number.replace('QUO-', ''), 10)).filter(n => !isNaN(n));
    return 'QUO-' + String((nums.length ? Math.max(...nums) : 0) + 1).padStart(3, '0');
  },

  // Settings
  getSettings()   { return this._get('tb_settings') || { businessName: 'TradeBase', ownerName: '', phone: '', email: '', address: '', vatNumber: '', vatRate: '0', paymentTerms: '14', defaultNotes: '' }; },
  saveSettings(d) { this._set('tb_settings', d); },
};

// ── Utilities ──────────────────────────────────────────────────────────

function uid() {
  return Math.random().toString(36).slice(2, 9) + Date.now().toString(36).slice(-4);
}

function fmtDate(str) {
  if (!str) return '';
  const d = new Date(str + 'T12:00:00');
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

function fmtDateShort(str) {
  if (!str) return '';
  const d = new Date(str + 'T12:00:00');
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
}

function fmtMoney(n) {
  return '£' + Number(n || 0).toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function badge(status) {
  const m = { scheduled:'Scheduled', inprogress:'In Progress', completed:'Completed', invoiced:'Invoiced', draft:'Draft', sent:'Sent', paid:'Paid', overdue:'Overdue', accepted:'Accepted', declined:'Declined', converted:'Converted' };
  return `<span class="badge badge-${status}">${m[status] || status}</span>`;
}

function toast(msg, type = 'ok') {
  const wrap = document.getElementById('toastWrap');
  if (!wrap) return;
  const el = document.createElement('div');
  el.className = `toast toast-${type}`;
  el.textContent = msg;
  wrap.appendChild(el);
  setTimeout(() => el.remove(), 3200);
}

function escHtml(str) {
  return String(str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ── Icons ──────────────────────────────────────────────────────────────

const ICONS = {
  dashboard: `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`,
  customers: `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  jobs:      `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  quotes:    `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="9 15 12 18 15 15"/><line x1="12" y1="12" x2="12" y2="18"/></svg>`,
  calendar:  `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  invoices:  `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  assistant: `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  settings:  `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  wrench:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  bell:      `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  barChart:  `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>`,
  ham:       `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  collapse:  `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="11 17 6 12 11 7"/><polyline points="18 17 13 12 18 7"/></svg>`,
  expand:    `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/></svg>`,
  plus:      `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  x:         `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  send:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  search:    `<svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  mail:      `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  trash:     `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>`,
  print:     `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>`,
  user:      `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  dollar:    `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  list:      `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><circle cx="3" cy="6" r="1" fill="currentColor"/><circle cx="3" cy="12" r="1" fill="currentColor"/><circle cx="3" cy="18" r="1" fill="currentColor"/></svg>`,
};

// ── Notifications ─────────────────────────────────────────────────────

function getNotifications() {
  const today = todayISO();
  const notifs = [];

  DB.getInvoices()
    .filter(i => i.status === 'overdue')
    .forEach(inv => {
      const c    = DB.getCustomer(inv.customerId);
      const days = Math.max(0, Math.floor((new Date(today) - new Date(inv.dueAt)) / 86400000));
      notifs.push({ type: 'overdue', href: 'invoices.html', color: 'red',
        title: `${escHtml(inv.number)} overdue`,
        sub:   `${escHtml(c?.name || '?')} · ${fmtMoney(inv.total)} · ${days}d late` });
    });

  DB.getJobs()
    .filter(j => j.date === today && j.status !== 'completed' && j.status !== 'invoiced')
    .forEach(job => {
      const c = DB.getCustomer(job.customerId);
      notifs.push({ type: 'today', href: 'jobs.html', color: 'amber',
        title: escHtml(job.title),
        sub:   escHtml(c?.name || '?') + ' · today' });
    });

  DB.getQuotes()
    .filter(q => (q.status === 'sent' || q.status === 'draft') && q.validUntil)
    .forEach(q => {
      const days = Math.floor((new Date(q.validUntil) - new Date(today)) / 86400000);
      if (days >= 0 && days <= 3) {
        const c = DB.getCustomer(q.customerId);
        notifs.push({ type: 'quote', href: 'quotes.html', color: 'yellow',
          title: `${escHtml(q.number)} expires ${days === 0 ? 'today' : `in ${days}d`}`,
          sub:   escHtml(c?.name || '?') + ' · ' + fmtMoney(q.total) });
      }
    });

  return notifs;
}

// ── Nav & Sidebar ──────────────────────────────────────────────────────

function navHtml(activePage) {
  const items = [
    { href: 'index.html',     icon: 'dashboard', label: 'Dashboard' },
    { href: 'customers.html', icon: 'customers', label: 'Customers' },
    { href: 'jobs.html',      icon: 'jobs',      label: 'Jobs' },
    { href: 'quotes.html',    icon: 'quotes',    label: 'Quotes' },
    { href: 'calendar.html',  icon: 'calendar',  label: 'Calendar' },
    { href: 'invoices.html',  icon: 'invoices',  label: 'Invoices' },
    { href: 'reports.html',   icon: 'barChart',  label: 'Reports' },
    { href: 'assistant.html', icon: 'assistant', label: 'AI Assistant' },
  ];
  const bottom = [
    { href: 'settings.html',  icon: 'settings',  label: 'Settings' },
  ];
  const make = list => list.map(item => {
    const active = item.href === activePage ? ' active' : '';
    return `<a href="${item.href}" class="nav-item${active}">${ICONS[item.icon]}<span class="nav-label">${item.label}</span></a>`;
  }).join('');
  return make(items) + `<div style="flex:1"></div>` + make(bottom);
}

function sidebarHtml(activePage) {
  const settings = DB.getSettings();
  const brand    = escHtml(settings.businessName || 'TradeBase');
  return `
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-header">
        <div class="sidebar-logo">${ICONS.wrench}</div>
        <span class="sidebar-brand">${brand}</span>
      </div>
      <nav class="sidebar-nav" style="display:flex;flex-direction:column">${navHtml(activePage)}</nav>
      <div class="sidebar-footer">
        <button class="toggle-btn" id="sidebarToggle" title="Toggle sidebar" aria-label="Toggle sidebar">
          <span id="toggleIcon">${ICONS.collapse}</span>
        </button>
        <span class="footer-label">Collapse</span>
      </div>
    </aside>`;
}

// ── Sidebar init ──────────────────────────────────────────────────────

function initSidebar() {
  const sidebar   = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('sidebarToggle');
  const toggleIcon = document.getElementById('toggleIcon');
  if (!sidebar || !toggleBtn) return;

  // Desktop collapse state
  const collapsed = localStorage.getItem('tb_sidebar_col') === '1';
  if (collapsed) { sidebar.classList.add('collapsed'); toggleIcon.innerHTML = ICONS.expand; }

  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    const isNow = sidebar.classList.contains('collapsed');
    localStorage.setItem('tb_sidebar_col', isNow ? '1' : '0');
    toggleIcon.innerHTML = isNow ? ICONS.expand : ICONS.collapse;
  });

  // Notification bell
  const topbarRight = document.querySelector('.topbar-right');
  if (topbarRight) {
    const bellWrap = document.createElement('div');
    bellWrap.className = 'notif-bell-wrap';
    bellWrap.innerHTML = `
      <button class="notif-bell" id="notifBtn" aria-label="Notifications">
        ${ICONS.bell}
        <span class="notif-badge" id="notifBadge"></span>
      </button>
      <div class="notif-panel" id="notifPanel">
        <div class="notif-panel-header">Notifications</div>
        <div id="notifList"></div>
      </div>`;
    topbarRight.appendChild(bellWrap);

    const notifs   = getNotifications();
    const badge    = document.getElementById('notifBadge');
    const list     = document.getElementById('notifList');
    const panel    = document.getElementById('notifPanel');

    if (notifs.length > 0) {
      badge.textContent = notifs.length;
      badge.style.display = 'flex';
    }

    list.innerHTML = notifs.length === 0
      ? `<div class="notif-empty">All clear — nothing needs attention.</div>`
      : notifs.map(n => `
          <div class="notif-item" onclick="window.location='${n.href}'">
            <div class="notif-dot notif-dot-${n.color}"></div>
            <div>
              <div class="notif-text">${n.title}</div>
              <div class="notif-sub">${n.sub}</div>
            </div>
          </div>`).join('');

    document.getElementById('notifBtn').addEventListener('click', e => {
      e.stopPropagation();
      panel.classList.toggle('open');
    });
    document.addEventListener('click', () => panel.classList.remove('open'));
  }

  // Mobile: inject hamburger into topbar + overlay
  const topbar = document.querySelector('.topbar');
  if (topbar) {
    const ham = document.createElement('button');
    ham.className = 'ham-btn';
    ham.id = 'hamBtn';
    ham.setAttribute('aria-label', 'Open menu');
    ham.innerHTML = ICONS.ham;
    topbar.insertBefore(ham, topbar.firstChild);

    const mobOv = document.createElement('div');
    mobOv.className = 'mob-overlay';
    mobOv.id = 'mobOverlay';
    document.body.appendChild(mobOv);

    const closeMob = () => { sidebar.classList.remove('mob-open'); mobOv.classList.remove('open'); };
    ham.addEventListener('click', () => { sidebar.classList.toggle('mob-open'); mobOv.classList.toggle('open'); });
    mobOv.addEventListener('click', closeMob);
  }
}

// ── Drawer helpers ────────────────────────────────────────────────────

function openDrawer(drawerId, overlayId) {
  const drawer = document.getElementById(drawerId);
  if (!drawer) return;
  drawer.classList.add('open');
  const body = drawer.querySelector('.drawer-body');
  if (body) {
    body.classList.remove('animating');
    void body.offsetHeight;
    body.classList.add('animating');
  }
  document.getElementById(overlayId)?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function countUp(el, targetText, duration = 580) {
  const isMoney = targetText.includes('£');
  const num = parseFloat(targetText.replace(/[£,]/g, ''));
  if (isNaN(num) || num === 0) { el.textContent = targetText; return; }
  const start = performance.now();
  el.classList.add('counting');
  function tick(now) {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 4);
    el.textContent = isMoney ? fmtMoney(num * eased) : Math.round(num * eased);
    if (t < 1) requestAnimationFrame(tick);
    else { el.textContent = targetText; el.classList.remove('counting'); }
  }
  requestAnimationFrame(tick);
}

function closeDrawer(drawerId, overlayId) {
  document.getElementById(drawerId)?.classList.remove('open');
  document.getElementById(overlayId)?.classList.remove('open');
  document.body.style.overflow = '';
}

// ── Boot ──────────────────────────────────────────────────────────────

// ── Command Palette ───────────────────────────────────────────────────

function initCommandPalette() {
  let items      = [];
  let selIdx     = -1;

  const overlay = document.createElement('div');
  overlay.id    = 'cmdOverlay';
  overlay.className = 'cmd-overlay';
  overlay.innerHTML = `
    <div class="cmd-modal" id="cmdModal" role="dialog" aria-modal="true" aria-label="Command palette">
      <div class="cmd-input-wrap">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="flex-shrink:0;color:var(--text-3)"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input class="cmd-input" id="cmdInput" placeholder="Jump to, search, or create..." autocomplete="off" spellcheck="false">
        <kbd class="cmd-esc-key">esc</kbd>
      </div>
      <div class="cmd-body" id="cmdBody"></div>
    </div>`;
  document.body.appendChild(overlay);

  const input = document.getElementById('cmdInput');
  const body  = document.getElementById('cmdBody');

  function openPalette() {
    overlay.classList.add('open');
    input.value = '';
    renderDefault();
    setTimeout(() => input.focus(), 40);
  }
  function closePalette() {
    overlay.classList.remove('open');
    selIdx = -1;
  }
  function setSelected(idx) {
    const els = body.querySelectorAll('.cmd-item');
    els.forEach((el, i) => el.classList.toggle('selected', i === idx));
    if (idx >= 0 && els[idx]) els[idx].scrollIntoView({ block: 'nearest' });
    selIdx = idx;
  }
  function runIdx(idx) {
    if (items[idx]) { closePalette(); items[idx].action(); }
  }

  let cmdMode = 'default';

  function renderItems(sections, fade) {
    const doSwap = () => {
      items = [];
      let html = '';
      sections.forEach(sec => {
        if (!sec.items.length) return;
        const start = items.length;
        items.push(...sec.items);
        if (sec.label) html += `<div class="cmd-group-label">${sec.label}</div>`;
        sec.items.forEach((item, i) => {
          html += `<div class="cmd-item" data-idx="${start + i}">
            <div class="cmd-item-icon">${ICONS[item.icon] || ICONS.list}</div>
            <div class="cmd-item-text">
              <div class="cmd-item-label">${escHtml(item.label)}</div>
              ${item.sub ? `<div class="cmd-item-sub">${escHtml(item.sub)}</div>` : ''}
            </div>
            ${item.hint ? `<div class="cmd-item-hint">${escHtml(item.hint)}</div>` : ''}
          </div>`;
        });
      });
      body.innerHTML = items.length ? html : `<div class="cmd-empty">No results found</div>`;
      selIdx = -1;
      body.classList.remove('fading');
    };
    if (fade) {
      body.classList.add('fading');
      setTimeout(doSwap, 80);
    } else {
      doSwap();
    }
  }

  function nav(href) { return () => { location.href = href; }; }
  function navNew(href, key) {
    return () => { sessionStorage.setItem('tb_cmd_new', key); location.href = href; };
  }

  function renderDefault(fromSearch) {
    const fade = fromSearch && cmdMode !== 'default';
    cmdMode = 'default';
    renderItems([
      { label: 'Navigate', items: [
        { icon: 'dashboard', label: 'Dashboard',    hint: 'Go to', action: nav('index.html') },
        { icon: 'customers', label: 'Customers',    hint: 'Go to', action: nav('customers.html') },
        { icon: 'jobs',      label: 'Jobs',         hint: 'Go to', action: nav('jobs.html') },
        { icon: 'quotes',    label: 'Quotes',       hint: 'Go to', action: nav('quotes.html') },
        { icon: 'calendar',  label: 'Calendar',     hint: 'Go to', action: nav('calendar.html') },
        { icon: 'invoices',  label: 'Invoices',     hint: 'Go to', action: nav('invoices.html') },
        { icon: 'barChart',  label: 'Reports',      hint: 'Go to', action: nav('reports.html') },
        { icon: 'assistant', label: 'AI Assistant', hint: 'Go to', action: nav('assistant.html') },
        { icon: 'settings',  label: 'Settings',     hint: 'Go to', action: nav('settings.html') },
      ]},
      { label: 'Create', items: [
        { icon: 'plus', label: 'New Job',      hint: 'Create', action: navNew('jobs.html',      'job') },
        { icon: 'plus', label: 'New Customer', hint: 'Create', action: navNew('customers.html', 'customer') },
        { icon: 'plus', label: 'New Invoice',  hint: 'Create', action: navNew('invoices.html',  'invoice') },
        { icon: 'plus', label: 'New Quote',    hint: 'Create', action: navNew('quotes.html',    'quote') },
      ]},
    ], fade);
  }

  function renderSearch(q) {
    const fade = cmdMode !== 'search';
    cmdMode = 'search';
    const lq = q.toLowerCase();
    const sections = [];

    const custs = DB.getCustomers().filter(c =>
      c.name.toLowerCase().includes(lq) ||
      (c.email || '').toLowerCase().includes(lq) ||
      (c.phone || '').includes(q)
    ).slice(0, 4).map(c => ({
      icon: 'customers', label: c.name,
      sub: [c.phone, c.email].filter(Boolean).join(' · '),
      hint: 'Customer', action: nav('customers.html'),
    }));
    if (custs.length) sections.push({ label: 'Customers', items: custs });

    const jbs = DB.getJobs().filter(j => {
      const cn = (DB.getCustomer(j.customerId)?.name || '').toLowerCase();
      return j.title.toLowerCase().includes(lq) || cn.includes(lq) || (j.location || '').toLowerCase().includes(lq);
    }).slice(0, 4).map(j => {
      const c = DB.getCustomer(j.customerId);
      return { icon: 'jobs', label: j.title, sub: (c?.name || '?') + ' · ' + fmtDate(j.date), hint: j.status, action: nav('jobs.html') };
    });
    if (jbs.length) sections.push({ label: 'Jobs', items: jbs });

    const invs = DB.getInvoices().filter(i => {
      const cn = (DB.getCustomer(i.customerId)?.name || '').toLowerCase();
      return i.number.toLowerCase().includes(lq) || cn.includes(lq);
    }).slice(0, 3).map(i => {
      const c = DB.getCustomer(i.customerId);
      return { icon: 'invoices', label: i.number, sub: (c?.name || '?') + ' · ' + fmtMoney(i.total), hint: i.status, action: nav('invoices.html') };
    });
    if (invs.length) sections.push({ label: 'Invoices', items: invs });

    const qts = DB.getQuotes().filter(qt => {
      const cn = (DB.getCustomer(qt.customerId)?.name || '').toLowerCase();
      return qt.number.toLowerCase().includes(lq) || (qt.title || '').toLowerCase().includes(lq) || cn.includes(lq);
    }).slice(0, 3).map(qt => {
      const c = DB.getCustomer(qt.customerId);
      return { icon: 'quotes', label: qt.number + (qt.title ? ' — ' + qt.title : ''), sub: (c?.name || '?') + ' · ' + fmtMoney(qt.total), hint: qt.status, action: nav('quotes.html') };
    });
    if (qts.length) sections.push({ label: 'Quotes', items: qts });

    if (!sections.length) {
      if (fade) {
        body.classList.add('fading');
        setTimeout(() => {
          items = [];
          body.innerHTML = `<div class="cmd-empty">No results for "${escHtml(q)}"</div>`;
          body.classList.remove('fading');
        }, 80);
      } else {
        items = [];
        body.innerHTML = `<div class="cmd-empty">No results for "${escHtml(q)}"</div>`;
      }
      return;
    }
    renderItems(sections, fade);
    setTimeout(() => setSelected(0), fade ? 90 : 0);
  }

  input.addEventListener('input', () => {
    const q = input.value.trim();
    q ? renderSearch(q) : renderDefault(true);
  });

  input.addEventListener('keydown', e => {
    const els = body.querySelectorAll('.cmd-item');
    if (e.key === 'ArrowDown')  { e.preventDefault(); setSelected(Math.min(selIdx + 1, els.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setSelected(Math.max(selIdx - 1, 0)); }
    else if (e.key === 'Enter') {
      e.preventDefault();
      const target = selIdx >= 0 ? selIdx : (els.length === 1 ? 0 : -1);
      if (target >= 0) runIdx(target);
    }
  });

  body.addEventListener('click', e => {
    const item = e.target.closest('.cmd-item');
    if (!item) return;
    runIdx(parseInt(item.dataset.idx));
  });

  overlay.addEventListener('click', e => { if (e.target === overlay) closePalette(); });

  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      overlay.classList.contains('open') ? closePalette() : openPalette();
    }
    if (e.key === 'Escape' && overlay.classList.contains('open')) closePalette();
  });
}

// ── Boot ──────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  DB.seed();
  initSidebar();
  initCommandPalette();

  // Auto-open new form if triggered via command palette
  const pendingNew = sessionStorage.getItem('tb_cmd_new');
  if (pendingNew) {
    sessionStorage.removeItem('tb_cmd_new');
    window.dispatchEvent(new CustomEvent('tb:opennew', { detail: pendingNew }));
  }
});

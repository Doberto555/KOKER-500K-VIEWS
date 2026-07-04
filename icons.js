// icons.js — Set SVG (24x24, stroke=currentColor) ki ranplase emoji yo.
// Chak ikòn se yon string SVG ke nou ka mete nan innerHTML dirèkteman.
const ICONS = {
  joker: `<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="3"/><path d="M12 7 L14.5 12 L12 12 L12 17 M12 7 L9.5 12 L12 12"/><circle cx="12" cy="17" r="1.1" fill="currentColor" stroke="none"/></svg>`,

  flame: `<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.5c1 2.5-2.5 4-2.5 7a4.5 4.5 0 1 0 9 0c0-1.6-.8-2.4-1.5-3.5.3 1.5-.7 2.2-1.3 1.7C16.7 6.5 14 5 12 2.5Z"/></svg>`,

  lock: `<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2.2"/><path d="M8 11V7.5a4 4 0 0 1 8 0V11"/></svg>`,

  check: `<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9.2"/><path d="M8 12.3l2.6 2.6L16.2 9"/></svg>`,

  chat: `<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-8.8 8.4 8.7 8.7 0 0 1-3.6-.8L3 20l1-5.4A8.4 8.4 0 1 1 21 11.5Z"/><path d="M8.2 10.7c0 3 3.1 5.6 4.6 4 .3-.3.1-.9-.2-1.1l-1-.9c-.3-.3-.3-.7 0-1l.5-.5c.3-.3.3-.7 0-1l-.9-1.4c-.2-.4-.8-.5-1.1-.2-.9.7-1.9 1.4-1.9 2.1Z" fill="currentColor" stroke="none"/></svg>`,

  download: `<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M7.5 10.5 12 15l4.5-4.5"/><path d="M4.5 17.5V19a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-1.5"/></svg>`,

  warning: `<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5 21.5 20h-19L12 3.5Z"/><path d="M12 9.5v4.2M12 16.7h.01"/></svg>`,

  rocket: `<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 4.5c3 .3 5.6 2.9 6 6-2.7 1.1-5.6 1-7.7-1-2-2.1-2.1-5-1-7.7 1 .1 1.9.3 2.7.7Z"/><path d="M9.8 14.2 5 15.5l1.3-4.8"/><path d="M9.8 14.2c-1.8-1.8-2.3-3.7-2-5.4M9.8 14.2c1.8 1.8 3.7 2.3 5.4 2"/><circle cx="15" cy="9" r="1.1" fill="currentColor" stroke="none"/></svg>`,

  chevron: `<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`,

  users: `<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8.5" r="3"/><path d="M2.5 19c.6-3.3 3.2-5 6.5-5s5.9 1.7 6.5 5"/><circle cx="17" cy="9" r="2.3"/><path d="M15.3 14.3c2.4.3 4.2 1.7 4.7 4.4"/></svg>`,

  card: `<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="5.5" width="19" height="13" rx="2.4"/><path d="M2.5 9.5h19"/></svg>`,
};

// Ti fonksyon rapid pou anbake yon ikòn devan yon tèks
function iconText(name, text) {
  return `<span class="icon-inline">${ICONS[name]}</span>${text}`;
}

// supabase-client.js
// ⚠️ Ranpli 2 valè sa yo ak enfòmasyon pwojè Supabase pa w (Settings > API).
const SUPABASE_URL = "https://mwjhzhdhybznnitwloed.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13amh6aGRoeWJ6bm5pdHdsb2VkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMxMTcwNjIsImV4cCI6MjA5ODY5MzA2Mn0.OxliuenRI2cgsigcB7U-SLyhyPAv_nZqeFakViQoo8Y";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Limit fichye VCF la (30,000 moun maksimòm)
const MAX_CONTACTS = 30000;

// Jenere yon fichye .vcf apati yon lis { name, phone } epi telechaje l
function downloadVCF(contacts, filename = "joker500k-contacts.vcf") {
  const limited = contacts.slice(0, MAX_CONTACTS);
  let vcf = "";
  limited.forEach((c) => {
    vcf += "BEGIN:VCARD\r\n";
    vcf += "VERSION:3.0\r\n";
    vcf += `FN:${c.name}\r\n`;
    vcf += `TEL;TYPE=CELL:${c.phone}\r\n`;
    vcf += "END:VCARD\r\n";
  });
  const blob = new Blob([vcf], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

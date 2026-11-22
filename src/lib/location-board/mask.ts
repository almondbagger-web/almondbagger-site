/** 公開テキストから連絡先・個人識別情報の混入を物理除去 */

const CONTACT_MASK = "[連絡先は事務局管理]";

function normalizeDigits(text: string): string {
  return text
    .replace(/[０-９]/g, (d) =>
      String.fromCharCode(d.charCodeAt(0) - 0xff10 + 0x30),
    )
    .replace(/[−ー―‐]/g, "-");
}

export function maskContactInfo(text: string): string {
  let s = normalizeDigits(text);
  s = s.replace(
    /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
    CONTACT_MASK,
  );
  s = s.replace(
    /(?:\+?81[\s-]?)?(?:0\d{1,4}[\s-]?\d{1,4}[\s-]?\d{3,4}|0[789]0[\s-]?\d{4}[\s-]?\d{4})/g,
    CONTACT_MASK,
  );
  s = s.replace(
    /(?:https?:\/\/)?(?:www\.)?(?:line\.me|lin\.ee|t\.me)\/[^\s]+/gi,
    CONTACT_MASK,
  );
  return s;
}

export function containsBlockedContact(text: string): boolean {
  const masked = maskContactInfo(text);
  return masked.includes(CONTACT_MASK);
}

/** 番地・建物名・部屋番号を公開ラベルから落とす簡易サニタイズ */
export function sanitizeAreaLabel(raw: string): string {
  let s = raw.trim().replace(/\s+/g, "");
  s = s.replace(
    /(?:\d+丁目|\d+[-−ー]\d+|\d+番地|\d+番|\d+号室|\d+号|階|\d+F).*$/u,
    "",
  );
  s = s.replace(/(?:ビル|マンション|ハイツ|アパート|コーポ).*$/u, "");
  return s || raw.trim();
}

/** True once a contract has settled, across legacy (is_sold) and new (status won/lost) schemas. */
export function isContractSettled(c: any): boolean {
  if (!c) return false
  if (c.is_sold === true || Number(c.is_sold) === 1) return true
  const status = String(c.status ?? "").toLowerCase()
  if (status === "sold" || status === "won" || status === "lost") return true
  return false
}

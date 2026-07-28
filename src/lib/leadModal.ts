export const LEAD_MODAL_EVENT = "focus:open-lead-modal";

export function openLeadModal(source?: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(LEAD_MODAL_EVENT, { detail: { source } }));
}

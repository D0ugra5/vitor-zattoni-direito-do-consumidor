import { WHATSAPP_URL } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      title="Falar pelo WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-navy-deep shadow-[0_10px_30px_-8px_oklch(0.76_0.10_80/0.6)] transition-transform hover:scale-110"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white" aria-hidden="true">
        <path d="M19.11 17.27c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.18-1.34-.81-.72-1.35-1.61-1.51-1.88-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.11 2.81.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.55.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16.02 5.33c-5.92 0-10.72 4.8-10.72 10.72 0 1.89.5 3.74 1.45 5.37L5 27.33l6.1-1.6a10.7 10.7 0 0 0 4.92 1.21h.01c5.91 0 10.72-4.8 10.72-10.72 0-2.86-1.11-5.55-3.13-7.57a10.66 10.66 0 0 0-7.6-3.32z" />
      </svg>
      <span className="pointer-events-none absolute right-16 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-md border border-gold/40 bg-navy px-3 py-1.5 text-xs text-offwhite opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 md:block">
        Falar pelo WhatsApp
      </span>
    </a>
  );
}

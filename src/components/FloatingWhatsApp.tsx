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
      <svg viewBox="0 0 32 32" className="h-8 w-8 fill-navy-deep" aria-hidden="true">
        <path d="M16.001 5.333c-5.891 0-10.667 4.776-10.667 10.667 0 1.879.487 3.717 1.41 5.336L5.333 26.667l5.493-1.44a10.66 10.66 0 0 0 5.175 1.32h.004c5.89 0 10.666-4.776 10.666-10.667 0-2.85-1.11-5.529-3.124-7.543a10.6 10.6 0 0 0-7.546-3.124zm0 19.555h-.003a8.86 8.86 0 0 1-4.514-1.236l-.324-.193-3.36.881.897-3.276-.211-.336a8.85 8.85 0 0 1-1.357-4.728c.002-4.898 3.987-8.882 8.875-8.882 2.371 0 4.6.925 6.275 2.602a8.82 8.82 0 0 1 2.598 6.284c-.002 4.898-3.987 8.884-8.876 8.884zm4.866-6.65c-.267-.134-1.578-.779-1.823-.868-.244-.09-.422-.134-.6.133-.178.267-.69.868-.846 1.046-.156.178-.311.2-.578.067-.267-.133-1.127-.415-2.146-1.324-.793-.708-1.328-1.581-1.484-1.848-.156-.267-.017-.411.117-.544.12-.12.267-.311.4-.467.134-.155.178-.267.267-.444.089-.178.044-.334-.022-.467-.067-.134-.6-1.448-.823-1.982-.217-.521-.437-.45-.6-.458l-.512-.009c-.178 0-.467.067-.711.334-.244.267-.934.913-.934 2.226 0 1.314.957 2.583 1.09 2.761.134.178 1.881 2.872 4.557 4.027.637.275 1.134.439 1.522.562.639.203 1.221.174 1.681.106.513-.077 1.578-.645 1.801-1.268.222-.623.222-1.157.156-1.268-.067-.111-.244-.178-.512-.311z"/>
      </svg>
      <span className="pointer-events-none absolute right-16 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-md border border-gold/40 bg-navy px-3 py-1.5 text-xs text-offwhite opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 md:block">
        Falar pelo WhatsApp
      </span>
    </a>
  );
}

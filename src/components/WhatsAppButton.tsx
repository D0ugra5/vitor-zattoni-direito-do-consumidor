import { useLocation } from "@tanstack/react-router";
import { whatsappUrlForPath, CONVERSION_PATHS } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  size?: "md" | "lg";
  className?: string;
  withIcon?: boolean;
};

export function WhatsAppButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  withIcon = true,
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-wide transition-all duration-300";
  const sizes = {
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-4 text-base",
  };
  const variants = {
    primary:
      "bg-gold text-navy-deep hover:brightness-110 shadow-[0_8px_24px_-8px_oklch(0.76_0.10_80/0.6)]",
    outline:
      "border border-gold/70 text-offwhite hover:border-gold hover:bg-gold/10",
  };
  const { pathname } = useLocation();
  const href = whatsappUrlForPath(pathname);
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!CONVERSION_PATHS.some((p) => pathname.startsWith(p))) return;
    const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
    if (typeof gtag !== "function") return;
    e.preventDefault();
    let navigated = false;
    const go = () => {
      if (navigated) return;
      navigated = true;
      window.open(href, "_blank", "noopener,noreferrer");
    };
    gtag("event", "conversion", {
      send_to: "AW-18153701329/dTn8CJ_px6wcENH_rdBD",
      event_callback: go,
    });
    setTimeout(go, 1500);
  };
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {withIcon && <MessageCircle className="h-4 w-4" strokeWidth={1.75} />}
      {children}
    </a>
  );
}

import { useLocation } from "@tanstack/react-router";
import { whatsappUrlForPath } from "@/lib/whatsapp";
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
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {withIcon && <MessageCircle className="h-4 w-4" strokeWidth={1.75} />}
      {children}
    </a>
  );
}

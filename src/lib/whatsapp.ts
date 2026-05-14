const PHONE = "554197166921";

export const WHATSAPP_MESSAGES: Record<string, string> = {
  "/": "Olá, Dr. Vitor Zattoni. Vim pelo site e gostaria de orientação jurídica. Pode me ajudar?",
  "/consumidor":
    "Olá, Dr. Vitor Zattoni. Vim pelo site e gostaria de orientação jurídica sobre um problema com empresa, cobrança, contrato ou serviço. Pode me ajudar?",
  "/inventario":
    "Olá, Dr. Vitor Zattoni. Vim pelo site e gostaria de orientação jurídica sobre inventário. Pode me ajudar?",
  "/imobiliario":
    "Olá, Dr. Vitor Zattoni. Vim pelo site e gostaria de orientação jurídica sobre uma questão imobiliária. Pode me ajudar?",
};

export function buildWhatsappUrl(message?: string) {
  const text = message ?? WHATSAPP_MESSAGES["/"];
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
}

export function whatsappUrlForPath(pathname: string) {
  const key = Object.keys(WHATSAPP_MESSAGES).find(
    (k) => k !== "/" && pathname.startsWith(k)
  );
  return buildWhatsappUrl(WHATSAPP_MESSAGES[key ?? "/"]);
}

export const WHATSAPP_URL = buildWhatsappUrl(WHATSAPP_MESSAGES["/"]);

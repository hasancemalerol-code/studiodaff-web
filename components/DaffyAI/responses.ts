export function getDaffyReply(message: string): string {
  const text = message.toLowerCase();

  if (text.includes("köpek")) {
    return "🐶 Harika! Dostunun ırkı nedir?";
  }

  if (text.includes("kedi")) {
    return "🐱 Çok güzel! Kedinizin ırkı nedir?";
  }

  if (text.includes("pomeranian")) {
    return "🐶 Pomeranian yoğun tüy bakımına ihtiyaç duyar. Haftada birkaç kez taranması ve düzenli profesyonel bakım önerilir. StudioDaff Premium Spa tam uygun olacaktır.";
  }

  if (text.includes("golden")) {
    return "🐶 Golden Retriever düzenli tarama ve mevsimsel tüy bakımı gerektirir. Premium bakım paketimizi öneriyorum.";
  }

  if (text.includes("teşekkür")) {
    return "🦡 Rica ederim. Başka bir konuda da yardımcı olmaktan mutluluk duyarım.";
  }

  return "🦡 Seni daha iyi yönlendirebilmem için dostunun türünü veya ırkını yazar mısın?";
}
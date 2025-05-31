export const cursorShortcuts = [
  { combo: "⌘ + P", desc: "Dosya arama" },
  { combo: "⌘ + B", desc: "Sidebar gizle/aç" },
  { combo: "⌘ + K + T", desc: "Tema değiştir" },
  { combo: "⇧ + ⌘ + .", desc: "Gizli dosyaları göster" },
  { combo: "⌘ + K + C", desc: "Cursor AI Chat" },
  { combo: "⌘ + L", desc: "Satır seç" },
  { combo: "⌘ + D", desc: "Bir sonraki aynı kelimeyi seç" },
  { combo: "⌘ + /", desc: "Yorum satırı ekle/çıkar" },
];

export default function CursorShortcuts() {
  return (
    <div className="mt-12">
      <h2 className="text-xl font-semibold mb-4">⌨️ Furkan'ın Cursor Kısayolları</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {cursorShortcuts.map(({ combo, desc }) => (
          <div key={combo} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
            <code className="bg-muted px-2 py-1 rounded font-mono text-sm">{combo}</code>
            <span className="text-sm text-muted-foreground">{desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 
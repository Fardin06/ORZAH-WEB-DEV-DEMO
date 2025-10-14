export default function ChatWidgets() {
  return (
    <>
      {/* WhatsApp Chat */}
      <a
        href="https://wa.me/01559405312"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        💬
      </a>

      {/* Messenger Chat */}
      <a
        href="https://m.me/orzahstore"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        💭
      </a>
    </>
  );
}

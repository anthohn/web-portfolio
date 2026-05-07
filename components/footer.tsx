export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Anthony Höhn. Tous droits réservés.
      </small>
      <p className="text-xs">
        <span className="font-semibold">À propos du site :</span> construit avec
        React & Next.js, TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, hébergé sur Vercel.
      </p>
      <p className="text-xs mt-1 italic">
        Réalisé par <span className="font-semibold text-gray-700">Anthony Höhn</span>
      </p>
    </footer>
  );
}
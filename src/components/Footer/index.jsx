import React from 'react';
import "./style.css"

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} Developed by Lucas Friedrich. Todos os direitos reservados.</p>
    </footer>
  );
}

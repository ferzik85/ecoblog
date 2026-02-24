import packageJson from '../../package.json';

export default function Footer() {
  const date = new Date();
  const buildDate = `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`;
  const version = packageJson.version;

  return (
    <footer>
      <div>© {date.getFullYear()} Sergey and Olga</div>
      <div>All rights reserved. No reproduction without permission.</div>
      <div>Ver. {version}</div>
      <div>Date: {buildDate}</div>
    </footer>
  );
}
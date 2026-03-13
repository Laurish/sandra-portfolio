const Footer = () => (
  <footer className="border-t border-border px-6 py-8">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p className="font-mono">&copy; 2026 Sandra Andriainen. All rights reserved.</p>
      <div className="flex gap-6 font-mono text-xs">
        <a href="https://www.instagram.com/sandra.sounddesign" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Instagram</a>
        <a href="https://www.linkedin.com/in/sandra-andriainen-34bb34107/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
      </div>
    </div>
  </footer>
);

export default Footer;

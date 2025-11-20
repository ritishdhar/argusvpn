const Footer = () => {
  return (
    <footer className="py-8 mt-24 md:mt-32 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 Argus VPN. All rights reserved.
          </p>
          <a href="mailto:support@argus-vpn.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            support@argus-vpn.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

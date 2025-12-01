import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          Built with <Heart className="h-4 w-4 text-primary fill-primary" /> by VASANTHA MANIKANDAN K
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          © 2024 All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

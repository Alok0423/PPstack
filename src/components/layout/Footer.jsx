import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

const FooterColumn = ({ title, links }) => (
  <div>
    <h4 className="font-bold text-white mb-4 text-lg">{title}</h4>
    <ul className="space-y-2">
      {links.map((link, i) => (
        <li key={i}>
          <Link to="#" className="text-gray-400 hover:text-white transition-colors text-sm">
            {link}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-[#101828] border-t border-gray-800 pt-16 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl font-bold tracking-tighter flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-brand-accent rounded-full"></div>
                PPStack
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering learners worldwide to master the technologies of the future. Join the revolution today.
            </p>
            <div className="flex gap-4 text-gray-400">
              <Facebook size={20} className="hover:text-white cursor-pointer" />
              <Twitter size={20} className="hover:text-white cursor-pointer" />
              <Linkedin size={20} className="hover:text-white cursor-pointer" />
              <Youtube size={20} className="hover:text-white cursor-pointer" />
            </div>
          </div>

          <FooterColumn 
            title="PPStack" 
            links={["About Us", "Careers", "In the News", "Engineering Blog", "Contact"]} 
          />
          
          <FooterColumn 
            title="Community" 
            links={["Learners", "Partners", "Developers", "Beta Testers", "Translators"]} 
          />
          
          <FooterColumn 
            title="More" 
            links={["Terms", "Privacy", "Help", "Accessibility", "Press", "Sitemap"]} 
          />
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2025 PPStack Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
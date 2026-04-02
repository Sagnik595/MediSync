const Footer = () => {
  return (
    <footer className="border-t border-gray-200 px-16 pt-12 mt-40">
      <div className="grid grid-cols-3 gap-10 pb-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span className="text-xl font-medium">MediSync</span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-5">Company</p>
          <ul className="flex flex-col gap-3 text-sm">
            {['Home', 'About us', 'Contact us', 'Privacy policy'].map(link => (
              <li key={link}>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-5">Get in touch</p>
          <div className="flex flex-col gap-3 text-sm text-gray-700">
            <span>+1-212-456-7890</span>
            <span>medisync@gmail.com</span>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-500 py-4 flex justify-between items-center">
        <p className="text-xs text-gray-600">Copyright © 2024 MediSync — All Rights Reserved.</p>
        <p className="text-xs text-gray-800 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block"></span>
          Created by <span className="font-medium text-gray-900">Sagnik</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
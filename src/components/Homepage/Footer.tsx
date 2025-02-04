import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black text-white">
      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent" />

      {/* Animated dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 3 + 2}s infinite`
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="mb-8 grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-2xl font-bold text-transparent">
              Beyond JavaScript
            </h3>
            <p className="max-w-sm text-gray-400">
              Transforming the web development landscape, one contribution at a
              time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                'Documentation',
                'Contributors',
                'Getting Started',
                'Resources'
              ].map(item => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 transition-colors duration-200 hover:text-purple-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Us</h4>
            <div className="flex gap-4">
              {[
                {
                  icon: Github,
                  href: 'https://github.com/yeasin2002/Beyond-JavaScript'
                },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Mail, href: 'mailto:contact@example.com' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 bg-white/5 p-2 transition-colors duration-200 hover:bg-white/10 hover:text-purple-400"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Beyond JavaScript. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Code of Conduct'].map(
                item => (
                  <a
                    key={item}
                    href="#"
                    className="text-sm text-gray-400 transition-colors duration-200 hover:text-purple-400"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

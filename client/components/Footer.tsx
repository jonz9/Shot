import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo or Brand Name */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-semibold">Your Name</h2>
            <p className="text-sm">Full-stack Developer | Designer</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <Link href="https://github.com/your-profile">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                GitHub
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/your-profile">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                LinkedIn
              </a>
            </Link>
            <Link href="mailto:your-email@example.com">
              <a className="hover:text-gray-400">Email</a>
            </Link>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/about">
              <a className="text-sm hover:text-gray-400">About</a>
            </Link>
            <Link href="/projects">
              <a className="text-sm hover:text-gray-400">Projects</a>
            </Link>
            <Link href="/contact">
              <a className="text-sm hover:text-gray-400">Contact</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

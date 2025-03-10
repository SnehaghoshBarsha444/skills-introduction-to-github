
import { Github, Search, Star } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="glass fixed top-0 w-full z-50 border-b border-slate-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <a href="/" className="flex items-center space-x-2">
            <Github className="h-8 w-8 text-primary" />
            <span className="font-semibold text-xl">GitClone</span>
          </a>
          <div className="hidden md:flex items-center space-x-6">
            <a href="/explore" className="text-sm text-gray-600 hover:text-gray-900">
              Explore
            </a>
            <a href="/trending" className="text-sm text-gray-600 hover:text-gray-900">
              Trending
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search repositories..."
              className="pl-10 pr-4 py-2 w-64 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
            />
          </div>
          <Button variant="outline" size="sm" className="hidden sm:flex">
            Sign In
          </Button>
          <Button size="sm" className="hidden sm:flex">
            Sign Up
          </Button>
          <button className="md:hidden">
            <Search className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

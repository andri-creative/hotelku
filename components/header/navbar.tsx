"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, MapPin, Star, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navLinks = [
    { 
      label: "Home", 
      href: "/",
      type: "link" as const
    },
    { 
      label: "Rooms & Suites", 
      href: "/rooms",
      type: "dropdown" as const,
      submenu: [
        { label: "Deluxe Room", href: "/rooms/deluxe" },
        { label: "Executive Suite", href: "/rooms/executive" },
        { label: "Presidential Suite", href: "/rooms/presidential" },
        { label: "Family Suite", href: "/rooms/family" },
      ]
    },
    { 
      label: "Amenities", 
      href: "/amenities",
      type: "link" as const
    },
    { 
      label: "Dining", 
      href: "/dining",
      type: "link" as const
    },
    { 
      label: "Events", 
      href: "/events",
      type: "link" as const
    },
    { 
      label: "Gallery", 
      href: "/gallery",
      type: "link" as const
    },
    { 
      label: "Contact", 
      href: "/contact",
      type: "link" as const
    },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-white/20">
      {/* Top info bar - Hidden on mobile, shown on desktop */}
      <div className="hidden lg:block bg-gradient-to-r from-blue-900/90 via-blue-800/90 to-blue-900/90 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center group cursor-pointer">
              <div className="p-1.5 bg-blue-700 rounded-full group-hover:bg-blue-600 transition-colors">
                <Phone size={12} />
              </div>
              <span className="ml-2 text-sm font-medium">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center group cursor-pointer">
              <div className="p-1.5 bg-blue-700 rounded-full group-hover:bg-blue-600 transition-colors">
                <MapPin size={12} />
              </div>
              <span className="ml-2 text-sm font-medium">123 Luxury Avenue, City Center</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex mr-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={12} fill="#FFD700" className="text-yellow-400 mx-0.5" />
              ))}
            </div>
            <span className="text-sm font-medium bg-white/10 px-3 py-1 rounded-full">
              Luxury 5-Star Experience
            </span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center group">
            <div className="flex items-center">
              {/* Logo icon with animation */}
              <div className="relative group">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <div className="w-11 h-11 bg-white rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                    <div className="text-blue-800 font-bold text-2xl tracking-tighter">H</div>
                  </div>
                </div>
                <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full flex items-center justify-center shadow-md">
                  <Star size={10} fill="white" className="text-white" />
                </div>
              </div>
              
              {/* Logo text */}
              <div className="ml-3 flex flex-col">
                <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
                  Grand Luxe
                </span>
                <span className="text-xs text-gray-500 tracking-widest font-light">HOTELS & RESORTS</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <div key={link.label} className="relative group">
                  {link.type === 'dropdown' ? (
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(link.label)}
                        className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-700 font-medium transition-colors duration-300"
                      >
                        {link.label}
                        <ChevronDown size={16} className={`ml-1 transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Dropdown menu */}
                      <div className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 transform origin-top ${activeDropdown === link.label ? 'scale-100 opacity-100 visible' : 'scale-95 opacity-0 invisible'}`}>
                        <div className="py-2">
                          {link.submenu?.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block px-5 py-3 text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="px-4 py-3 rounded-lg text-gray-700 hover:text-blue-700 font-medium transition-all duration-300 relative group/link"
                    >
                      {link.label}
                      <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 group-hover/link:w-3/4 transition-all duration-300"></span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <button className="ml-6 px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-800 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform">
              Book Now
            </button>
          </div>

          {/* Mobile menu button with improved design */}
          <div className="flex lg:hidden items-center space-x-3">
            {/* Mobile contact info button */}
            <button className="p-2.5 bg-blue-50 rounded-full text-blue-700 hover:bg-blue-100 transition-colors duration-300">
              <Phone size={20} />
            </button>
            
            {/* Book Now button for mobile */}
            <button className="px-4 py-2.5 bg-gradient-to-r from-blue-700 to-blue-600 text-white font-medium rounded-lg hover:from-blue-800 hover:to-blue-700 transition-all duration-300 shadow-md">
              Book Now
            </button>
            
            {/* Mobile menu toggle */}
            <button
              onClick={toggleMenu}
              className="p-3 rounded-lg hover:bg-gray-100 transition-all duration-300 relative"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <div className={`absolute top-0 left-0 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                <div className={`absolute top-2 left-0 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
                <div className={`absolute top-4 left-0 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Improved Design */}
      {isOpen && (
        <div className="lg:hidden bg-gradient-to-b from-white to-gray-50 shadow-inner">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Mobile header info */}
            <div className="py-4 border-b border-gray-200">
              <div className="flex flex-col space-y-3">
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Phone size={18} className="text-blue-700" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-600">Call us now</p>
                    <p className="font-semibold text-gray-900">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <MapPin size={18} className="text-blue-700" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-600">Visit us at</p>
                    <p className="font-semibold text-gray-900">123 Luxury Avenue</p>
                  </div>
                </div>
                <div className="flex items-center justify-center py-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} fill="#FFD700" className="text-yellow-400 mx-1" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm font-semibold text-gray-700">5-Star Luxury Hotel</span>
                </div>
              </div>
            </div>
            
            {/* Mobile navigation links */}
            <div className="py-4">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <div key={link.label} className="border-b border-gray-100 last:border-b-0">
                    {link.type === 'dropdown' ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(`mobile-${link.label}`)}
                          className="flex items-center justify-between w-full px-4 py-4 text-gray-800 font-medium hover:text-blue-700 transition-colors duration-200"
                        >
                          {link.label}
                          <ChevronDown size={18} className={`transition-transform duration-300 ${activeDropdown === `mobile-${link.label}` ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {/* Mobile dropdown */}
                        <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === `mobile-${link.label}` ? 'max-h-96' : 'max-h-0'}`}>
                          <div className="pl-6 pb-3 space-y-2">
                            {link.submenu?.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block px-4 py-2.5 text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className="block px-4 py-4 text-gray-800 font-medium hover:text-blue-700 transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile CTA section */}
            <div className="py-6 px-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Ready for a Luxury Stay?</h3>
              <p className="text-gray-600 mb-4">Book your dream vacation now and enjoy exclusive benefits.</p>
              <div className="flex space-x-3">
                <button className="flex-1 py-3.5 bg-gradient-to-r from-blue-700 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-800 hover:to-blue-700 transition-all duration-300 shadow-lg">
                  Book Now
                </button>
                <button className="flex-1 py-3.5 border-2 border-blue-600 text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300">
                  View Rooms
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
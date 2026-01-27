"use client";

import { useState, useEffect } from "react";
import {
  Calendar,
  Users,
  ArrowRight,
  Shield,
  Wifi,
  Coffee,
} from "lucide-react";

export default function Hero() {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(2);

  // Set default dates
  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    setCheckInDate(today.toISOString().split("T")[0]);
    setCheckOutDate(tomorrow.toISOString().split("T")[0]);
  }, []);

  const roomTypes = [
    {
      name: "Deluxe Room",
      price: "$299",
      description: "Luxury comfort with city view",
    },
    {
      name: "Executive Suite",
      price: "$499",
      description: "Spacious suite with balcony",
    },
    {
      name: "Presidential Suite",
      price: "$899",
      description: "Ultimate luxury experience",
    },
  ];

  const amenities = [
    {
      icon: <Shield size={24} />,
      title: "Safe & Secure",
      description: "24/7 security",
    },
    {
      icon: <Wifi size={24} />,
      title: "Free WiFi",
      description: "High-speed internet",
    },
    {
      icon: <Coffee size={24} />,
      title: "Breakfast",
      description: "Complimentary",
    },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/10"></div>

      {/* Floating elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">
                LUXURY 5-STAR EXPERIENCE
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Experience{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ultimate Luxury
              </span>
              <br />
              <span className="text-4xl lg:text-6xl">At Our Hotel</span>
            </h1>

            <p className="text-xl text-gray-200 max-w-2xl">
              Indulge in unparalleled luxury at Grand Luxe Hotels & Resorts.
              Where every stay becomes a memorable experience with world-class
              amenities, exquisite dining, and exceptional service.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">150+</div>
                <div className="text-sm text-gray-300">Luxury Rooms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">5</div>
                <div className="text-sm text-gray-300">Star Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">24/7</div>
                <div className="text-sm text-gray-300">Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">98%</div>
                <div className="text-sm text-gray-300">Guest Satisfaction</div>
              </div>
            </div>

            {/* Amenities */}
            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4">
                Premium Amenities Included
              </h3>
              <div className="flex flex-wrap gap-4">
                {amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl"
                  >
                    <div className="text-blue-300">{amenity.icon}</div>
                    <div>
                      <div className="font-medium">{amenity.title}</div>
                      <div className="text-sm text-gray-300">
                        {amenity.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Booking Card */}
          <div className="animate-slide-up">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Book Your Stay
              </h2>
              <p className="text-gray-600 mb-8">
                Experience luxury like never before
              </p>

              {/* Booking Form */}
              <div className="space-y-6">
                {/* Date Selection */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        Check-in Date
                      </div>
                    </label>
                    <input
                      type="date"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        Check-out Date
                      </div>
                    </label>
                    <input
                      type="date"
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <div className="flex items-center">
                      <Users size={16} className="mr-2" />
                      Guests
                    </div>
                  </label>
                  <div className="flex items-center bg-gray-50 border border-gray-300 rounded-xl px-4">
                    <button
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="p-2 text-gray-500 hover:text-gray-700"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={guests}
                      onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                      className="flex-1 px-4 py-3 bg-transparent text-center border-none focus:ring-0"
                    />
                    <button
                      onClick={() => setGuests(Math.min(10, guests + 1))}
                      className="p-2 text-gray-500 hover:text-gray-700"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Room Type Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select Room Type
                  </label>
                  <div className="space-y-3">
                    {roomTypes.map((room, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 cursor-pointer group"
                      >
                        <div>
                          <div className="font-semibold text-gray-900 group-hover:text-blue-700">
                            {room.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {room.description}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">
                            {room.price}
                          </div>
                          <div className="text-sm text-gray-500">per night</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Promo Code */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Promo Code (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Enter promo code"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Total Price */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-gray-700">Total for 2 nights</div>
                    <div className="text-3xl font-bold text-gray-900">$598</div>
                  </div>
                  <div className="text-sm text-gray-500 mb-6">
                    Includes taxes and fees • Free cancellation until 24 hours
                    before check-in
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group">
                    Book Now
                    <ArrowRight
                      size={20}
                      className="ml-2 group-hover:translate-x-2 transition-transform duration-300"
                    />
                  </button>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">
                      Best Price Guarantee
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">
                      Free Cancellation
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">
                      No Booking Fees
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center">
            <div className="text-white text-sm mb-2">Scroll to explore</div>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out 0.3s both;
        }
      `}</style>
    </section>
  );
}

import Navbar from "@/components/header/navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
     <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      
      {/* You can add more sections below */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Discover More Luxury
          </h2>
          {/* Add more content here */}
        </div>
      </section>
    </main>
    </>
  );
}

import React from 'react';
import Banner from './Banner.jsx'; 


function Home() {
  return (
    <>
      {/* 1) Hero Banner at the top */}
      <Banner />

      {/* 2) Additional Sections Below */}
      <section className="py-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Stories</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {/* Example: story cards or placeholders */}
          <div className="p-4 bg-white rounded shadow text-center">
            <h3 className="font-semibold">Story 1</h3>
            <p className="mt-2">Short excerpt of story...</p>
          </div>
          <div className="p-4 bg-white rounded shadow text-center">
            <h3 className="font-semibold">Story 2</h3>
            <p className="mt-2">Short excerpt of story...</p>
          </div>
          <div className="p-4 bg-white rounded shadow text-center">
            <h3 className="font-semibold">Story 3</h3>
            <p className="mt-2">Short excerpt of story...</p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">How It Works</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4">
          <div className="text-center max-w-sm">
            <h3 className="text-xl font-semibold">1. Sign Up</h3>
            <p className="mt-2">Create your free account and explore stories.</p>
          </div>
          <div className="text-center max-w-sm">
            <h3 className="text-xl font-semibold">2. Share a Story</h3>
            <p className="mt-2">Write about your experiences to inspire others.</p>
          </div>
          <div className="text-center max-w-sm">
            <h3 className="text-xl font-semibold">3. Read & Interact</h3>
            <p className="mt-2">Discover new places and connect with the community.</p>
          </div>
        </div>
      </section>

      {/* You can keep adding more sections as you like */}
    </>
  );
}

export default Home;

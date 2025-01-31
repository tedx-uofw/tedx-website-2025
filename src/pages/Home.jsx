const Home = () => {
  return (
    <div className="space-y-16">
      <section className="bg-gradient-to-r from-dark to-gray-900 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to TEDx 2025</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">Join us for a day of inspiring talks and innovative ideas</p>
          <button className="bg-ted-red text-white px-8 py-3 rounded-full text-lg hover:bg-red-700 transition-colors">
            Get Your Tickets
          </button>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Speakers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Speaker cards will go here */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Speaker Name</h3>
            <p className="text-gray-600">Coming Soon</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Event Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Interactive Sessions</h3>
            <p className="text-gray-600">Engage with speakers and fellow attendees in our interactive breakout sessions.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Networking</h3>
            <p className="text-gray-600">Connect with like-minded individuals and expand your professional network.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 
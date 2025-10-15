export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to AlumniBridge</h1>
        <p className="text-lg text-gray-700 mb-6">
          A vibrant space where students and alumni connect, mentor, and grow together.
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <a href="/register" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Join Now
          </a>
          <a href="/forum" className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50">
            Explore Forum
          </a>
        </div>
        <img
          src="/assets/hero-graphic.svg"
          alt="Community illustration"
          className="mx-auto w-3/4 max-w-md"
        />
      </div>
    </div>
  );
}
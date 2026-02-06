export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#2E2E2E]">

      {/* HERO SECTION */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif leading-tight">
          Wellness is something <br /> you practice daily.
        </h1>

        <p className="mt-6 text-lg max-w-xl text-gray-600">
          Simple, evidence-based health ideas, grounded in tradition and
          shared by real people living real lives.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 rounded-full bg-[#3A5A40] text-white hover:opacity-90">
            Join Today’s Reset
          </button>
          <button className="px-6 py-3 rounded-full border border-gray-300 hover:bg-white">
            Explore Recipes
          </button>
        </div>
      </section>

      {/* DAILY CONTENT PREVIEW */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6">
          {[
            "Today’s Meal",
            "Today’s Insight",
            "Ayurveda of the Day",
            "Community Pulse",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border p-6 hover:shadow-md transition"
            >
              <h3 className="font-medium">{item}</h3>
              <p className="mt-3 text-sm text-gray-500">
                Daily content will live here.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED RECIPES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif mb-8">
          Recipes people are actually cooking
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-2xl border overflow-hidden hover:shadow-lg transition"
            >
              <div className="h-40 bg-gray-200" />
              <div className="p-4">
                <p className="font-medium">Gut-friendly comfort bowl</p>
                <p className="text-sm text-gray-500 mt-1">
                  Gentle • Nourishing • 20 min
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AYURVEDA × MODERN */}
      <section className="bg-[#EEF2EC] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-6">
            Where tradition meets modern wellness
          </h2>
          <p className="text-gray-600">
            Ayurveda principles explained simply — connected to
            modern nutritional science.
          </p>
        </div>
      </section>

      {/* COMMUNITY MOMENTS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif mb-8">
          Real people, real consistency
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-square bg-gray-200 rounded-xl"
            />
          ))}
        </div>
      </section>

    </main>
  );
}

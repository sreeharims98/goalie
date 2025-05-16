export default function Hero() {
  return (
    <div className="flex flex-col gap-16 items-center py-20 px-4">
      <div className="flex flex-col gap-8 justify-center items-center text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Track Your Goals, Achieve Your Dreams
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Goalie helps you set, track, and achieve your personal and
          professional goals. Break down your ambitions into manageable
          milestones and watch your progress grow.
        </p>
        <div className="flex gap-4">
          <button className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
            Get Started
          </button>
          <button className="px-8 py-3 rounded-lg border border-gray-300 dark:border-gray-600 font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            Learn More
          </button>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-3">Create Goals</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Set clear, achievable goals for any aspect of your life. From
            learning new skills to personal development.
          </p>
        </div>
        <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-3">Track Milestones</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Break down your goals into manageable steps and track your progress
            as you complete each milestone.
          </p>
        </div>
        <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-3">Monitor Progress</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Get a clear view of your achievements with our intuitive dashboard
            and progress tracking features.
          </p>
        </div>
      </div> */}
    </div>
  );
}

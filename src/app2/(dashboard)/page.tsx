export default function DashboardHome() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-zinc-950 font-sans">
      <main className="flex min-h-screen w-full max-w-2xl flex-col items-center justify-center px-4 dark:bg-zinc-950 border-x-2 ring-2 ring-zinc-200 dark:ring-zinc-800 ring-offset-2 ring-offset-white dark:ring-offset-zinc-950">
        <div className="flex flex-col items-center w-full">
          <span className="mb-8 text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
            devbuilds
          </span>
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3 text-center">
            Welcome to the Project 👋
          </h1>
          <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-xl text-center mb-2">
            Start building today and bring your ideas to life. Happy coding! 🚀
          </p>
          <div className="flex flex-col gap-2 w-full items-center">
            <div className="w-full max-w-sm mt-6 text-center">
              <span className="text-xs text-zinc-400 dark:text-zinc-600">
                devbuilds &ndash; minimal developer Setup
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

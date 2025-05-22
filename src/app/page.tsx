export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center">Luke Stringer&apos;s Portfolio</h1>
      </header>
      <main className="max-w-xl text-center text-lg leading-relaxed">
        <p>
          Welcome to my portfolio. I&apos;m a Computer Science graduate and I&apos;m currently transitioning from technical writing to software development.
          I&apos;m learning React right now, for both web and app development.
        </p>
        <p className="mt-4">
          I&apos;m passionate about collaboarting and exploring creative solutions in my work.
        </p>
        <p className="mt-4">
          Connect with me on{' '}
          <a
            href="https://www.linkedin.com/in/lukestringer/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
          .
        </p>
      </main>
    </div>
  );
}

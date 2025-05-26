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
        {/* 
        TODO update Is Now Good link to subpage with explanation of the purpose of the app -- include the presentation from uni and embed the youtube links from the pres.
        Mention the app was the first one you made with Flutter and it was done quickly at uni. 
         */}
        <p>I am familiar with <a href="https://docs.flutter.dev/assets/images/docs/app-architecture/common-architecture-concepts/ui-f-state.png">UI as a function of state</a>, having used Flutter in my uni days to create cross-platform apps, including <a href="https://lukejoshuastringer.github.io/#/">Is Now Good</a>.</p>
        <p className="mt-4">
          I&apos;m passionate about collaborating and exploring creative solutions in my work.
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

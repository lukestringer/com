export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center">Luke Stringer&apos;s Portfolio</h1>
      </header>
      <main className="max-w-xl text-lg leading-relaxed">
        <p className="mt-4">Welcome to my portfolio.</p>
        <p>(It&apos;s under construction.)</p>
        <p className="mt-4">I&apos;m a Computer Science graduate and technical writer.</p>
        {/* 
        TODO update Is Now Good link to subpage with explanation of the purpose of the app -- include the presentation from uni and embed the youtube links from the pres.
        Mention the app was the first one you made with Flutter and it was done quickly at uni. 
         */}
        <p className="mt-4">
          I&apos;m learning React right now. I am familiar with{" "}
          <a
            href="https://docs.flutter.dev/app-architecture/concepts"
            className="text-blue-600 hover:underline"
            target="_blank"
          >
            UI as a function of state
          </a>
          , having used Flutter in my uni days to create cross-platform apps, including{" "}
          <a href="https://lukejoshuastringer.github.io/#/" className="text-blue-600 hover:underline" target="_blank">
            Is Now Good
          </a>
          .
        </p>
        <p className="mt-4">
          I&apos;m passionate about collaborating and exploring creative solutions in my work. Connect with me on{" "}
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

"use client";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HEADER */}
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold font-playwrite">Luke Stringer</h1>
        <p className="mt-2 text-xl font-bold">Portfolio</p>
      </header>

      {/* ABOUT ME */}
      <section className="py-8 px-4 md:px-[5%]">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="mb-2">
          I specalise in turning complex concepts and code into clear, concise documentation with strong analytical,
          problem-solving and communication skills.
        </p>
        <p className="mb-2">
          Now, I build my own web apps and I'm eager to blend my passions for software and user-centred design to drive
          real results.
        </p>
        <p>Have a look at what I'm working on, below.</p>
      </section>

      {/* THEN / NOW */}
      <section className="flex flex-col md:flex-row py-8 px-4 md:px-[5%]">
        {/* THEN */}
        <div className="w-full md:w-1/2 md:pr-4 md:border-r md:border-gray-400 mb-8 md:mb-0">
          <h3 className="text-2xl font-semibold mb-2 flex justify-center">Then</h3>
          <p className="mb-2 italic ">How I got started…</p>
          <div className="m-6 flex justify-center ">
            <img
              src="/images/is_now_good_demo.gif"
              className="object-contain border border-gray-200"
              style={{ height: "35dvh" }}
              alt=""
            />
          </div>
          <p className="mb-2">
            At uni, I developed a{" "}
            <span className="inline-block align-middle font-bold">
              <img src="/images/flutter.svg" alt="Logo" className="inline-block h-5 w-auto mr-1 align-middle" />
              Flutter
            </span>{" "}
            app to tackle context-awareness in instant messaging notifications.
          </p>
          <p className="mb-2">
            Is Now Good gives users control over the notifications their messages trigger. Many conflicting user needs
            were considered, like maintaining context privacy but sharing easily.
          </p>
          <p className="mb-2">
            I learnt a lot about developing Flutter apps, and UI as a function of state in general (which has remained
            useful in React development). I also tried to get a{" "}
            <span className="inline-block align-middle font-bold">
              <img src="/images/firebase.svg" alt="Logo" className="inline-block h-5 w-auto mr-1 align-middle" />
              Firebase
            </span>{" "}
            backend working but didn't get it done before user testing had to begin.
          </p>
          <p className="mb-2">
            The exhibition poster PDF is{" "}
            <a
              className="text-blue-600 hover:underline"
              target="_blank"
              href="https://github.com/adrienerice/The_Chosen_Ones/blob/Managing-IM-Notification-Disruption/Managing%20IM%20Notification%20Disruption/DECO3500_2021_Poster_LukeStringer_43959280.pdf"
            >
              here
            </a>{" "}
            and GitHub + wiki is{" "}
            <a
              className="text-blue-600 hover:underline"
              target="_blank"
              href="https://github.com/adrienerice/The_Chosen_Ones/wiki/Managing-IM-Notification-Disruption"
            >
              here
            </a>
            .
          </p>
          <div className="flex justify-center m-5">
            <p>
              Have a look at the app here:{" "}
              <a
                className="text-blue-600 hover:text-blue-800 hover:bg-cyan-100 font-bold hover:border-2 hover:border-blue-600 border-2 border-cyan-200 bg-cyan-200 p-2 rounded-lg"
                href="https://lukejoshuastringer.github.io/"
                target="_blank"
              >
                Is Now Good?
              </a>
            </p>
          </div>
        </div>

        {/* NOW */}
        <div className="w-full md:w-1/2 md:pl-4">
          <h3 className="text-2xl font-semibold mb-2 flex justify-center">Now</h3>

          <p className="mb-2 italic">
            {/* Now content */}
            What I'm doing today…
          </p>
          <div className="m-6 flex justify-center">
            <img
              src="/images/on_track_simple_saver.gif"
              className="object-contain "
              style={{ height: "35dvh" }}
              alt=""
            />
          </div>
          <p className="mb-2">
            I've been learning{" "}
            <span className="inline-block align-middle font-bold">
              <img src="/images/react.svg" alt="Logo" className="inline-block h-5 w-auto mr-1 align-middle" />
              React
            </span>{" "}
            for a while and, recently, I've gotten a fullstack webapp up and running.
          </p>
          <p className="mb-2">
            On Track Simple Saver sets and tracks progress of a savings goal. Budgeting is a struggle for many people,
            and having a simple way to track whether they are hitting their savings goal takes all of the complications
            out of it.
          </p>
          <p className="mb-2">
            I am still developing this webapp: adding prettier UI and many more features. However, getting the backend
            built with{" "}
            <span className="inline-block align-middle font-bold">
              <img src="/images/aws.svg" alt="Logo" className="inline-block h-5 w-auto mr-1 align-middle" />
              AWS
            </span>{" "}
            was a big milestone for me in my web development journey.
          </p>
          <div className="flex justify-center m-5">
            <p>
              Have a look here:{" "}
              <a
                className="text-blue-600 hover:text-blue-800 hover:bg-cyan-100 font-bold hover:border-2 hover:border-blue-600 border-2 border-cyan-200 bg-cyan-200 p-2 rounded-lg"
                href="https://ontracksimplesaver.com"
                target="_blank"
              >
                On Track Simple Saver
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT ME */}
      {/* <footer className="bg-yellow-50 py-8 px-4 md:px-[5%]">
        <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
        <p>
          TODO: Contact form here.
        </p>
      </footer> */}
    </div>
  );
}

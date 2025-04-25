import React from 'react';

export default function Experience() {
  return (
    <section id='skill'>

      <div className="flex items-center justify-center px-4 py-10">
        <div className="flex flex-col items-center justify-center w-full">

          <h1 className="text-3xl md:text-5xl font-bold mb-6">Experience</h1>

          <div className="w-full max-w-[400px] border-2 rounded-2xl p-4 shadow-md bg-white">
            <span className="block text-xl md:text-3xl font-semibold mb-2">
              Sqilco (2025 - Present)
            </span>
            <p className="text-lg md:text-2xl">
              I have completed a 6-month internship program at Sqilco.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

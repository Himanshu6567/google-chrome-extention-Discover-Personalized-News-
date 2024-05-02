import React from "react";

export default function About() {
  return (
    <div className="absolute w-full ">
      <div className="container px-4 py-8 mx-auto blur-none">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md">
          <div className="p-6">
            <h1 className="mb-4 text-3xl font-bold">
              Introducing our Google Chrome extension
            </h1>
            <p className="mb-4 text-gray-700">
              Designed to enhance your browsing experience. It leverages your
              Google search history to provide personalized article and news
              recommendations on new tabs. With React.js, HTML, Tailwind CSS,
              and the 'news.org' website and API, we bring you engaging content
              based on your recent searches.
            </p>
            <p className="mb-4 text-gray-700">
              Explore topics you've searched for or discover new articles
              related to your interests. Our extension also features a search
              bar that fetches relevant articles on any topic you enter, keeping
              you up-to-date with the latest news.
            </p>
            <p className="mb-4 text-gray-700">
              We strive to provide a seamless browsing experience by combining
              your search history with curated news content. We value your
              feedback and suggestions to improve your experience. Thank you for
              using our Chrome extension!
            </p>
          </div>
          <a
            target=" _blank"
            href="mailto:himanshuchandola000@gmail.com"
            className="flex justify-center text-indigo-700 hover:underline"
          >
            himanshuchandola000@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

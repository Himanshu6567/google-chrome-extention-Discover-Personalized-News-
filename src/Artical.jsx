import PropTypes from "prop-types";
import { useState } from "react";
import { GrShare } from "react-icons/gr";

export default function Article({ newsItem }) {
  const [blur, setBlur] = useState("");
  const [readMore, setReadMore] = useState(false);

  const onMounseEnter = () => {
    setBlur("blur-sm");
    setReadMore(true);
  };

  const onMouseLeave = () => {
    setBlur("");
    setReadMore(false);
  };

  const { publishedAt, image, title, description, url } = newsItem;

  return (
    <div className="overflow-hidden bg-gray-200 border-2 border-black rounded-lg shadow-lg">
      <div className="flex flex-col justify-between px-6 py-3 bg-gray-300 sm:px-16 sm:flex-row">
        <p className="mb-2 text-xl font-bold text-gray-700 sm:mb-0">
          {/* {newsItem.source.name} */}
        </p>
        <p className="text-base text-gray-700"> {publishedAt}</p>
      </div>
      <div className="flex flex-col mx-auto sm:flex-row">
        <img
          className={`w-full h-52  object-cover object-center sm:w-1/3 sm:h-auto`}
          src={image}
          alt="Pixel Fold Image"
        />
        ? {/* {readMore && ( */}
        <div className="absolute flex items-center justify-center px-2 space-x-2 bg-white hover:underline">
          <a target="_blank" rel="noreferrer" href={url}>
            Read More
          </a>
          <span>
            <GrShare />
          </span>
        </div>
        {/* )} */}
        <div className="flex flex-col w-full sm:w-2/3">
          <div className="flex flex-col justify-between h-full px-6 py-4">
            <div>
              <a target="_blank" rel="noreferrer" href={url}>
                <h2 className="mb-2 text-xl font-bold sm:mb-4 hover:underline">
                  {title}
                </h2>
              </a>
              <p className="mb-4 overflow-hidden text-base leading-6 text-gray-700">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Article.propTypes = {
  newsItem: PropTypes.object,
};

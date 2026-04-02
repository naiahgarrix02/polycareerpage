import { useParams } from "react-router-dom";
import { postitions } from "../constants";

const PositionDetails = () => {
  const { id } = useParams();
  const position = postitions.find((post) => post.id === id);

  if (!position) {
    return (
      <div className="lg:px-40 md:px-12 px-4 md:mt-25 mt-16">
        <p className="font-manrope-regular text-[16px] text-[#BC909F]">
          Position not found
        </p>
      </div>
    );
  }

  return (
    <div className="lg:px-40 md:px-12 px-4 md:mt-25 mt-16">
      <div>
        <p className="font-manrope-regular md:text-[20px] text-[16px] text-[#BC909F]">
          Polymorph Labs Careers
        </p>
        <div className="flex flex-col gap-8 mt-6 mb-30">
          <h1 className="font-manrope-bold md:text-[48px] text-[32px] text-[#1B2558]">
            {position.title}
          </h1>

          <p className="font-manrope-regular text-[16px] text-[#5F6376] w-3/5">
            {position.fulldesc}
          </p>

          <div className="flex flex-row gap-4 flex-wrap items-center justify-between w-3/5">
            <div className="flex flex-row gap-4 flex-wrap">
              {position.tags.map((tag, index) => (
                <div
                  key={index}
                  className="px-4 py-1 border border-[#84143C] rounded-full w-fit h-fit"
                >
                  <p className="text-[#84143C] font-manrope-semibold text-[16px]">
                    {tag}
                  </p>
                </div>
              ))}
            </div>
            <a href="">
              <button className="px-6 py-3 bg-[#84143C] text-white font-manrope-semibold rounded-full hover:bg-[#6d1032] transition-colors duration-300">
                Apply
              </button>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-44 mt-12">
          <div>
            <h2 className="font-manrope-semibold md:text-[28px] text-[24px] text-[#1B2558] mb-4">
              What You'll Do
            </h2>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              {position.role.map((item, index) => (
                <li
                  key={index}
                  className="font-manrope-regular text-[16px] text-[#5F6376]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-manrope-semibold md:text-[28px] text-[24px] text-[#1B2558] mb-4">
              What We're Looking For
            </h2>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              {position.requirements.map((item, index) => (
                <li
                  key={index}
                  className="font-manrope-regular text-[16px] text-[#5F6376]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-manrope-semibold md:text-[28px] text-[24px] text-[#1B2558] mb-4">
              Bonus Points
            </h2>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              {position.bonuspoints.map((item, index) => (
                <li
                  key={index}
                  className="font-manrope-regular text-[16px] text-[#5F6376]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-manrope-semibold md:text-[28px] text-[24px] text-[#1B2558] mb-4">
              What We Offer
            </h2>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              {position.offer.map((item, index) => (
                <li
                  key={index}
                  className="font-manrope-regular text-[16px] text-[#5F6376]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PositionDetails;

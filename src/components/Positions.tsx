import { postitions } from "../constants"

const Positions = () => {
  return (
    <div className="lg:px-40 md:px-12 px-4">
      <h2 className="font-manrope-bold md:text-[32px] text-[24px] text-[#1B2558] mt-20 md:mb-9 mb-3">
        Open Positions
      </h2>

      <div className="flex flex-col gap-9">
        {postitions.map((post) => (
          <div
            key={post.title}
            className="group flex md:flex-row flex-col lg:gap-9 md:gap-20 gap-14 lg:p-12 md:p-8 p-4 justify-between cursor-pointer hover:translate-y-1 hover:bg-[#84143C] transition-colors duration-250 ease-out border-b border-[#a5a5a5]"
          >
            <div className="flex flex-col gap-9">
              <div className="flex flex-col gap-6">
                <h2 className="font-manrope-semibold md:text-[36px] text-[24px] text-[#1B2558] group-hover:text-white">
                  {post.title}
                </h2>
                <p className="font-manrope-medium text-[16px] text-[#5F6376] group-hover:text-white">
                  {post.description}
                </p>
              </div>
              <div className="flex flex-row gap-4 flex-wrap">
                {post.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="px-4 py-1 border border-[#84143C] group-hover:border-white rounded-full w-fit h-fit"
                  >
                    <p className="text-[#84143C] group-hover:text-white font-manrope-semibold text-[16px]">
                      {tag}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <a href="">
              <div className="flex flex-row items-start md:gap-4 gap-2 transform transition-all duration-300 group-hover:translate-x-2">
                <p className="font-manrope-semibold lg:text-[32px] text-[24px] text-black group-hover:text-white hover:underline">
                  Apply
                </p>
                <img
                  src="/arrowup.svg"
                  alt="arrow"
                  className="group-hover:invert w-8 h-8 lg:w-full lg:h-full"
                />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Positions
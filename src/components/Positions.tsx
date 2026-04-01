import { postitions } from "../constants"

const Positions = () => {
  return (
    <div className="px-40">
      <h2 className="font-manrope-bold text-[32px] text-[#1B2558] mt-20 mb-9">
        Open Positions
      </h2>

      <div className="flex flex-col gap-9">
        {postitions.map((post) => (
          <div
            key={post.title}
            className="group flex flex-row p-12 justify-between hover:bg-[#84143C] border-b border-[#a5a5a5]"
          >
            <div className="flex flex-col gap-9">
              <div className="flex flex-col gap-6">
                <h2 className="font-manrope-semibold text-[36px] text-[#1B2558] group-hover:text-white">
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
                    className="px-6 py-2 border border-[#84143C] group-hover:border-white rounded-full w-fit h-fit"
                  >
                    <p className="text-[#84143C] group-hover:text-white font-manrope-semibold text-[16px]">
                      {tag}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <a href="">
              <div className="flex flex-row items-start gap-4">
                <p className="font-manrope-semibold text-[32px] text-black group-hover:text-white hover:underline">
                  Apply
                </p>
                <img
                  src="/arrowup.svg"
                  alt="arrow"
                  className="group-hover:invert"
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
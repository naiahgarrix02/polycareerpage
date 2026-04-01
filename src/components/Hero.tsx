const Hero = () => {
  return (
    <div className="px-40 mt-25">
      <div className="flex gap-8 flex-col">
        <div className="flex flex-col gap-3">
          <p className="font-manrope-regular text-[20px] text-[#BC909F]">
            Polymorph Labs Careers
          </p>
          <h1 className="font-manrope-bold text-[48px] text-[#1B2558] w-1/3 leading-[64px]">
            Ready to join the dream team?
          </h1>
        </div>
        <p className="w-4/10 font-manrope-regular text-[16px] text-gray-800">
          Build meaningful solutions with a team that values precision,
          creativity, and continuous growth. At Polymorph Labs, you’ll work on
          impactful projects, collaborate with forward-thinking professionals,
          and develop your skills in an environment designed for excellence.
        </p>
      </div>
    </div>
  );
}

export default Hero
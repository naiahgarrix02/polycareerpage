const Hero = () => {
  return (
    <div className="lg:px-40 md:px-12 px-4 md:mt-25 mt-16">
      <div className="flex flex-col gap-8 ">
        <div className="flex flex-col gap-3">
          <p className="font-manrope-regular md:text-[20px] text-[16px] text-[#BC909F]">
            Polymorph Labs Careers
          </p>
          <h1 className="font-manrope-bold md:text-[48px] text-[32px] text-[#1B2558] lg:w-1/3 md:w-2/3 w-full md:leading-16">
            Ready to join the dream team?
          </h1>
        </div>
        <p className="lg:w-4/10 md:w-3/4 w-full font-manrope-regular text-[16px] text-gray-800">
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
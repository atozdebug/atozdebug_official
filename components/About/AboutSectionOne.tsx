import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <>
      <p className="mb-6 flex items-center text-lg font-medium text-body-color">
        <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {checkIcon}
        </span>
        {text}
      </p>
      {/* <p className="ml-[2.8rem] mb-5 dark:text-[#98b6db] dark:opacity-70 text-dark">{description}</p> */}
    </>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <h2 className="mb-4 !leading-tight text-[1.3rem] font-bold text-black dark:text-white opacity-50">Crafting Websites that Fuel Results</h2>
              <SectionTitle
                title="Best Website Design Company in Guwahati"
                paragraph="ATOZDEBUG is the premier web designing company in Guwahati, setting the industry standard with over 4+ years of unwavering expertise. We have earned a reputation as a trusted and dependable partner, providing top-notch web design solutions to businesses seeking excellence. Our accomplished team of skilled designers, developers, and strategists is driven by a relentless passion for delivering nothing short of exceptional results. Having successfully completed numerous projects, we boast a robust client base spanning both domestic and international markets. Our commitment to excellence is the cornerstone of our success, as evidenced by an impressive 100% client retention rate."
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Affordable Price" />
                    <List text="High-Quality Guarantee" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Free Guidance & Support" />
                    <List text="Money-Back Guarantee" />
                  </div>
                </div>
              </div>
              <div className="mt-6 inline-block">
                <Link
                  href="https://github.com/NextJSTemplates/startup-nextjs"
                  className="rounded-md bg-black/20 py-4 px-8 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
                >
                  Book Free Consultation
                </Link>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;

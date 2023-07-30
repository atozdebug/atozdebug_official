import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import all from "./featuresData";
import Link from "next/link";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title="We Provide Full Range of Services"
            paragraph=""
            center
          />
          <div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-5 mb-12">
              {all.featuresData.map((feature) => (
                <SingleFeature key={feature.id} feature={feature} />
              ))}
            </div>

            <h2 className="mt-12 mb-8 text-3xl text-center font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[30px]">Artificial Intelligence</h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-5">
              {all.ArtificialIntelligence.map((feature) => (
                <SingleFeature key={feature.id} feature={feature} />
              ))}
            </div>

            <h2 className="mt-12 mb-8 text-3xl text-center font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[30px]">Digital Marketing</h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-5">
              {all.DigitalMarketing.map((feature) => (
                <SingleFeature key={feature.id} feature={feature} />
              ))}
            </div>

            <h2 className="mt-12 mb-8 text-3xl text-center font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[30px]">Graphic Designing</h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-5">
              {all.GraphicDesigning.map((feature) => (
                <SingleFeature key={feature.id} feature={feature} />
              ))}
            </div>
          </div>

        </div>
        <div className="mt-16 flex justify-center">
          <Link
            href="https://github.com/NextJSTemplates/startup-nextjs"
            className="rounded-md bg-black/20 py-4 px-8 text-base font-semibold dark:bg-primary text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
          >
            Book Free Consultation <ArrowRightAltIcon />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Features;

import SectionTitle from "../Common/SectionTitle";
import SingleChooseUs from "./SingleChooseUs";
import ChooseUsData from "./ChooseUsData";
import Link from "next/link";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const ChooseUs = () => {
    return (
        <>
            <section
                id="features"
                className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
            >
                <div className="container">
                    <SectionTitle
                        title="10 Reasons Why Choose Us as Your Trusted Website"
                        paragraph=""
                        center
                    />
                    <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-5 mb-12">
                        {ChooseUsData.map((feature) => (
                            <SingleChooseUs key={feature.id} feature={feature} />
                        ))}
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

export default ChooseUs;

import { Feature } from "@/types/feature";

const SingleChooseUs = ({ feature }: { feature: Feature }) => {
    const { icon, title } = feature;
    return (
        <div className="w-full">
            <div className="wow fadeInUp flex flex-col justify-center items-center" data-wow-delay=".15s">
                <div className="mb-10 flex h-[70px] w-[70px] justify-center items-center rounded-md bg-primary bg-opacity-10 text-primary">
                    {icon}
                </div>
                <h3 className="mb-5 text-xl text-center font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
                    {title}
                </h3>
                {/* <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                    {paragraph}
                </p> */}
            </div>
        </div>
    );
};

export default SingleChooseUs;

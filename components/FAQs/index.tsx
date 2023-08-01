"use client"

import SectionTitle from "../Common/SectionTitle";
import AccordionItem from "./AccordianItem";
import Questions from "./Questions";
import { useState } from "react";

const FAQs = () => {

    const [open, setOpen] = useState(false);

    const toggle = (index) => {
        if (open === index) {
            return setOpen(null)
        }
        else {
            setOpen(index);
        }
    }


    return (
        <>
            <div className="container dark:bg-[#0c133e] bg-white pt-16 rounded-lg">
                <SectionTitle
                    title="Frequently Asked Questions"
                    paragraph=""
                    center
                />
                <div className="mb-16 mt-[-64px]">
                    {Questions.map((data, index) => {
                        return <AccordionItem key={index} open={index === open} title={data.title} desc={data.desc} toggle={() => toggle(index)} />
                    })}
                </div>
            </div>
        </>
    )
}

export default FAQs;
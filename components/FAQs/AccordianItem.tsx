import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Collapse } from 'react-collapse';

const AccordionItem = ({ open, toggle, title, desc }) => {
    return (
        <>
            <div className="dark:bg-[#0c133e] bg-white py-[25px] px-[50px] flex justify-between items-center cursor-pointer" onClick={toggle}>
                <p className="text-[22px] font-semibold">{title}</p>
                <div className="text-[30px]">
                    {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </div>
            </div>
            <Collapse isOpened={open}>
                <div className="dark:bg-[#0c133e] bg-white px-[50px] pb-[20px]">{desc}</div>
            </Collapse>
        </>
    )
}

export default AccordionItem
import React, { useRef } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import icons correctly

const AccordionItem = ({ handleToggle, active, faq }) => {
    const contentEl = useRef();
    const { header, id, text, quarter } = faq;

    return (
        <div className="rc-accordion-card">
            <div className="rc-accordion-header">
                <div className={`rc-accordion-toggle p-3 ${active === id ? 'active' : ''}`} onClick={() => handleToggle(id)}>
                    <h5 className="rc-accordion-title">{header}</h5>
                    {active === id ? (
                        <FaChevronUp className="rc-accordion-icon" />
                    ) : (
                        <FaChevronDown className="rc-accordion-icon" />
                    )}
                </div>
            </div>
            <div
                ref={contentEl}
                className={`rc-collapse ${active === id ? 'show' : ''}`}
                style={
                    active === id
                        ? { height: contentEl.current.scrollHeight }
                        : { height: "0px" }
                }
            >
                <div className="rc-accordion-body">
                    {Array.isArray(text) ? (
                        text.map((item) => (
                            <div className=' pt-3 '>
                            <div > <h1   className=' text-sm  font-bold'>{item.header} </h1> </div>
                           <div className="text-sm pt-2 font-bold" > <h1>{item.quarter}</h1></div>
                            <div >
                            <a  key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className="block  pt-2 underline hover:underline text-[18px]">
                             
                                {item.head}
                            </a>
                            </div>
                            </div>
                        ))
                    ) : (
                        <p>{text}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;

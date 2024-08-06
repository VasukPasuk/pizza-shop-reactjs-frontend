import React, {useState} from 'react';
import './style.scss';
import {IoIosArrowForward} from "react-icons/io";

interface IAccordionProps {
  children: React.ReactNode
  title: string
}

interface IAccordionItemProps {
  children: React.ReactNode
  action?: () => void
}

function AccordionItem({action, children}: IAccordionItemProps) {
  return (
    <li
      className="accordion-item"
      onClick={action || undefined}
    >
      {children}
    </li>
  )
}

function Accordion({children, title}: IAccordionProps) {
  const [active, setActive] = useState<boolean>(false)
  return (
    <div
      className="accordion"
      data-accordion-state={String(active)}
    >
      <div className="accordion-head" onClick={() => setActive(prev => !prev)}>
        <span className="accordion-head-title">
          {title}
        </span>
        <IoIosArrowForward className="accordion-head-icon"/>
      </div>
      <ul className="accordion-list">
        {children}
      </ul>
    </div>
  )
}

export {Accordion, AccordionItem}
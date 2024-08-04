import React, { FC, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import './style.scss';
import { BsArrowReturnRight } from 'react-icons/bs';

type AccordionProps = {
  children?: React.ReactNode;
  rootLink: RootLinks;
  linksData: Array<LinkData>;
  headIcon: React.ReactNode;
  headText: string;
};

type AccordionHeadProps = {
  children?: React.ReactNode;
  headIcon: React.ReactNode;
  headText: string;
};

type AccordionItemProps = {
  text: string;
  rootLink: RootLinks;
  link: string;
};

type RootLinks = 'users' | 'products' | 'categories';

type LinkData = {
  link: string;
  text: string;
};

const Accordion: FC<AccordionProps> = ({ headIcon, headText, linksData, rootLink }) => {
  return (
    <li className="accordion">
      <AccordionHead
        headIcon={headIcon}
        headText={headText}
      />
      <AccordionBody>
        {linksData.map(({ text, link }) => (
          <AccordionItem
            key={link}
            text={text}
            link={link}
            rootLink={rootLink}
          />
        ))}
      </AccordionBody>
    </li>
  );
};

const AccordionHead: FC<AccordionHeadProps> = ({ children, headText, headIcon }) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div
      className="accordion-head"
      onClick={() => setActive((prev) => !prev)}
      data-opened={active}
    >
      <IoIosArrowForward
        style={{
          transform: `rotate(${active ? 90 : 0}deg)`,
          transition: '.5s ease transform',
        }}
      />
      {headIcon}
      <span>
        {active && children}
        {headText}
      </span>
    </div>
  );
};

type AccordionBodyProps = {
  children: React.ReactNode;
};

const AccordionBody: FC<AccordionBodyProps> = ({ children }) => {
  return <div className="accordion-body">{children}</div>;
};

const AccordionItem: FC<AccordionItemProps> = ({ text, rootLink, link }) => {
  return (
    <Link
      to={`/admin/${rootLink}/${link}`}
      className="accordion-item"
    >
      <BsArrowReturnRight />
      {text}
    </Link>
  );
};

export { Accordion };

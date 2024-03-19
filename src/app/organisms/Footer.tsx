import Image from 'next/image';

import logo from '../../../public/images/manual.png';
import { Section } from '../atoms/Section';
import { Body } from '../atoms/Typography';
import footerLinks from '../data/footerLinks.json';
import socialLinks from '../data/socialLinks.json';
import { IconLinkList } from '../molecules/IconLinkList';
import { LinkList } from '../molecules/LinkList';

export const Footer = () => {
  return (
    <Section className="bg-light-green pb-0 md:pb-0 lg:pb-0 xl:pb-0">
      <div className="flex gap-12 flex-wrap">
        <div className="lg:flex-1 mr-auto">
          <div className="max-w-[75px]">
            <Image src={logo} alt="Manual logo" />
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-1 gap-12">
          {footerLinks.map((linkList) => (
            <LinkList key={linkList.title} {...linkList} />
          ))}
          {socialLinks.map((iconLinkList) => (
            <IconLinkList key={iconLinkList.title} {...iconLinkList} />
          ))}
        </div>
      </div>
      <div className="border-t border-mid-green mt-12 py-6">
        <Body className="text-center text-mid-dark-green">
          © 2021 Manual. All rights reserverd
        </Body>
      </div>
    </Section>
  );
};

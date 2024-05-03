
import Section from './components/Section';
import Collection from './components/Collection';
import NavigationBar from './components/NavigationBar';
import Link from './components/Link';
import NavigationItem from './components/NavigationItem';
import HeaderNavLink from './components/Header/HeaderNavLink';
import HeaderNavGroup from './components/Header/HeaderNavGroup';
import HeaderNavLinkNested from './components/Header/HeaderNavLinkNested';
import FooterNavigationItem from './components/FooterNavigationItem';
import FooterNavigationItemGroup from './components/FooterNavigationItemGroup';
import Hero from './components/Hero';
import Media from './components/Media';
import TEXT from './components/Text';

import Card from './components/Card/index.ts'
import CollectionAccordion from './components/CollectionAccordion/index.ts'
import BackToTop from '@last-rev/component-library/dist/components/BackToTop'
import CollectionCarousel from '@last-rev/component-library/dist/components/CollectionCarousel'

// Custom components
import CollectionFiltered from './components/CollectionFiltered/index.ts'

// Custom components
import Quote from './components/Quote/index.ts'
import Page from './components/Page/index.ts'
import Phrases from './components/Phrases/index.ts'
import CalendlyInline from './components/Calendly/CalendlyInline.tsx'
import CalendlyPopupWidget from './components/Calendly/CalendlyPopupWidget.tsx'
import CalendlyPopupButton from './components/Calendly/CalendlyPopupButton.tsx'
import ModuleIntegration from './components/ModuleIntegration/index.ts'
import Block from './components/Block/index.ts'
import Form from './components/Form/index.ts'
import Blog from './components/Blog/index.ts'
import GlobalFooter from './components/GlobalFooter/index.ts'
import Header from './components/Header/index.ts'
import Person from './components/Person/index.ts'

// ICONS
import AngledArrowIcon from './components/Icons/AngledArrowIcon.tsx'
import ArrowRightIcon from './components/Icons/ArrowRightIcon.tsx'
import CheckMarkIcon from './components/Icons/CheckMarkIcon.tsx'
import ChevronIcon from './components/Icons/ChevronIcon.tsx'
import CloseIcon from './components/Icons/CloseIcon.tsx'
import FacebookIcon from './components/Icons/FacebookIcon.tsx'
import GlobeIcon from './components/Icons/GlobeIcon.tsx'
import HamburgerIcon from './components/Icons/HamburgerIcon.tsx'
import InstagramIcon from './components/Icons/InstagramIcon.tsx'
import LinkedinIcon from './components/Icons/LinkedinIcon.tsx'
import MinusIcon from './components/Icons/MinusIcon.tsx'
import PlusIcon from './components/Icons/PlusIcon.tsx'
import QuoteIcon from './components/Icons/QuoteIcon.tsx'
import TwitterIcon from './components/Icons/TwitterIcon.tsx'
import YoutubeIcon from './components/Icons/YoutubeIcon.tsx'

const contentMapping: {
  [key: string]: any;
} ={ 
  Page,
  Header,

  Collection,
  'Collection:carousel': CollectionCarousel,
  'Collection:accordion': CollectionAccordion,
  'Collection:filtered': CollectionFiltered,
  'Collection:carousel-large': CollectionCarousel,
  'Collection:carousel-small': CollectionCarousel,
  'Collection:navigation-bar': NavigationBar,
  BackToTop,
  'Cards':Card,
  Media,
  Link,
  NavigationItem,
  'NavigationItem:headerLink': HeaderNavLink,
  'NavigationItem:headerLinkNested': HeaderNavLinkNested,
  'NavigationItem:headerGroup': HeaderNavGroup,
  'NavigationItem:linkFooter': FooterNavigationItem,
  'NavigationItem:linkBoldedFooter': FooterNavigationItem,
  'NavigationItem:groupFooter': FooterNavigationItemGroup,
  'Icon:angled-arrow': AngledArrowIcon,
  'Icon:arrow': ArrowRightIcon,
  'Icon:check-mark': CheckMarkIcon,
  'Icon:chevron': ChevronIcon,
  'Icon:close': CloseIcon,
  'Icon:facebook': FacebookIcon,
  'Icon:globe': GlobeIcon,
  'Icon:hamburger': HamburgerIcon,
  'Icon:instagram': InstagramIcon,
  'Icon:linkedin': LinkedinIcon,
  'Icon:minus': MinusIcon,
  'Icon:plus': PlusIcon,
  'Icon:quote': QuoteIcon,
  'Icon:twitter': TwitterIcon,
  'Icon:youtube': YoutubeIcon,
  Hero,
  Quote,
  ModuleIntegration,
  'ModuleIntegration:Phrases': Phrases,
  'ModuleIntegration:phrases': Phrases,
  'ModuleIntegration:calendlyInline': CalendlyInline,
  'ModuleIntegration:calendlyPopupWidget': CalendlyPopupWidget,
  'ModuleIntegration:calendlyPopupButton': CalendlyPopupButton,
  'ModuleIntegration:hubspotFormDefault': Form,
  Block,
  GlobalFooter,
  Blog,
  Person,
  Text:TEXT,
  Section
};

export {contentMapping};

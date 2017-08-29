import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import OpenModal from './modules/OpenModal';
import $ from 'jquery';

var mobileMenu = new MobileMenu;
new RevealOnScroll($(".feature-item"),"85%");
new RevealOnScroll($(".testimonials"),"65%");
var stickyHeader = new StickyHeader;
var openModal = new OpenModal;
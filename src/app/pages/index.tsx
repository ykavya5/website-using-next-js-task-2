"use client";
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';

// import { useEffect } from 'react';

export default function Home() {

    const [theme, setTheme] = useState<string>('');
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<string>('tab1');
    const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // Check local storage for theme preference
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            setTheme(currentTheme);
        }
    }, []);

    useEffect(() => {
        if (theme === 'dark-mode') {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const handleThemeToggle = () => {
        setTheme(prevTheme => (prevTheme === 'dark-mode' ? 'light-mode' : 'dark-mode'));
    };

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
        document.body.classList.toggle('no-scroll', !isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            const hamburgerBar = document.querySelector('.hamburger-bar') as HTMLElement;
            const menuContent = document.querySelector('.menu-content') as HTMLElement;

            if (
                !hamburgerBar.contains(target) &&
                !menuContent.contains(target)
            ) {
                setIsMenuOpen(false);
                document.body.classList.remove('no-scroll');
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMenuOpen]);
    useEffect(() => {
        // FAQ Toggle
        const faqRows = document.querySelectorAll('.section-faq__row');
    
        faqRows.forEach(row => {
          const title = row.querySelector('.section-faq__title') as HTMLElement;
          title.addEventListener('click', () => {
            row.classList.toggle('active');
          });
        });
    
        // Cleanup event listeners on component unmount
        return () => {
          faqRows.forEach(row => {
            const title = row.querySelector('.section-faq__title') as HTMLElement;
            title.removeEventListener('click', () => {
              row.classList.toggle('active');
            });
          });
        };
      }, []);
      const handleFaqClick = (index: number) => {
        if (faqRefs.current[index]) {
          faqRefs.current[index].classList.toggle('active');
        }
      };
    const blogPosts = [
        {
            id: 1,
            imgSrc: 'assets/images/blog/blog-post3-1.png',
            tag: 'Social Media',
            title: 'New Study: Instagram Reels Outperform TikTok & Facebook Videos.',
            date: '25 January 2024',
            author: 'John Doe',
            link: 'blog-single.html',
        },
        {
            id: 2,
            imgSrc: 'assets/images/blog/blog-post3-2.png',
            tag: 'Marketing Strategy',
            title: 'Creative Ways That Non-Profits Can Increase Donations Via Social Media During the Holidays.',
            date: '25 January 2024',
            author: 'John Doe',
            link: 'blog-single.html',
        },
        {
            id: 3,
            imgSrc: 'assets/images/blog/blog-post3-3.png',
            tag: 'Social Media',
            title: 'New Study: Instagram Reels Outperform TikTok & Facebook Videos.',
            date: '25 January 2024',
            author: 'John Doe',
            link: 'blog-single.html',
        }
    ];

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>NextPro | Home-3</title>
                
            </Head>
            <div>
                <div>
                    <div className="contactemail">
                        <div className="contact-info">
                            <a href="mailto:contact@nextpro.com">
                                <i className="fas fa-envelope"></i> contact@nextpro.com
                            </a>
                            <div className="phone-info">
                                <strong>Call us: </strong>
                                <a href="tel:+17186385000" aria-label="tel number">
                                    <i className="fas fa-phone-alt"></i> +1 718-638-5000
                                </a>
                            </div>
                        </div>
                        <div className="tool-right">
                            <div className="theme">
                                <input
                                    type="checkbox"
                                    id="theme-toggle"
                                    className="theme-toggle"
                                    checked={theme === 'dark-mode'}
                                    onChange={handleThemeToggle}
                                />
                                <label htmlFor="theme-toggle" className="theme-toggle-label">
                                    <span className="light-text">Light</span>
                                    <span className="dark-text">Dark</span>
                                </label>
                            </div>
                            <div className="check">
                                <select>
                                    <option value="EN" data-icon="assets/images/shapes/flag-us.png" >
                                        EN
                                    </option>
                                    <option value="FR" data-icon="assets/images/shapes/flag-fr.png">
                                        FR
                                    </option>
                                    <option value="DE" data-icon="assets/images/shapes/flag-de.png" >
                                        DE
                                    </option>
                                    <option value="AR" data-icon="assets/images/shapes/flag-ar.png" >
                                        AR
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <header>
                        <div className="header-1">
                            <div className="sub-header-1">
                                <div className="section-header__logo">
                                    <div className="section-header__logo-inner">
                                        <a href="index1.html" className="logo" aria-label="logo">
                                            <Image src="assets/images/logo-next.png" className="logo-dark" alt="next-logo" />
                                            <Image src="assets/images/logo-light.png" className="logo-light" alt="next-logo-light" />
                                        </a>
                                    </div>
                                </div>
                                <div className="list">
                                    <ul>
                                        <li className="megamenu dropdown-arrow">
                                            <a href="javascript:void(0)" aria-label="nav link">Home</a>
                                            <ul className="home-showcase">
                                                <li className="home-showcase__card">
                                                    <div className="home-showcase__image">
                                                        <a href="index1.html" aria-label="page link">
                                                            <Image src="assets/images/home-showcase/home-showcase-1.jpg" alt="nextmarketing" />
                                                        </a>
                                                    </div>
                                                    <div className="home-showcase__content">
                                                        <h5 className="home-showcase__title">
                                                            <a href="index1.html" aria-label="page link">Default</a>
                                                        </h5>
                                                    </div>
                                                </li>
                                                <li className="home-showcase__card">
                                                    <div className="home-showcase__image">
                                                        <a href="index2.html" aria-label="page link">
                                                            <Image src="assets/images/home-showcase/home-showcase-2.jpg" alt="nextmarketing" />
                                                        </a>
                                                    </div>
                                                    <div className="home-showcase__content">
                                                        <h5 className="home-showcase__title">
                                                            <a href="index2.html" aria-label="page link">Home v2</a>
                                                            <small className="popular-home hot-item">Popular</small>
                                                        </h5>
                                                    </div>
                                                </li>
                                                <li className="home-showcase__card">
                                                    <div className="home-showcase__image">
                                                        <a href="index3.html" aria-label="page link">
                                                            <Image src="assets/images/home-showcase/home-showcase-3.jpg" alt="nextmarketing" />
                                                        </a>
                                                    </div>
                                                    <div className="home-showcase__content">
                                                        <h5 className="home-showcase__title">
                                                            <a href="index3.html" aria-label="page link">Home v3</a>
                                                        </h5>
                                                    </div>
                                                </li>
                                                <li className="home-showcase__card">
                                                    <div className="home-showcase__image">
                                                        <a href="index4.html" aria-label="page link">
                                                            <Image src="assets/images/home-showcase/home-showcase-4.jpg" alt="nextmarketing" />
                                                        </a>
                                                    </div>
                                                    <div className="home-showcase__content">
                                                        <h5 className="home-showcase__title">
                                                            <a href="index4.html" aria-label="page link">Home v4</a>
                                                        </h5>
                                                    </div>
                                                </li>
                                                <li className="home-showcase__card">
                                                    <div className="home-showcase__image">
                                                        <a href="index5.html" aria-label="page link">
                                                            <Image src="assets/images/home-showcase/home-showcase-5.jpg" alt="nextmarketing" />
                                                        </a>
                                                    </div>
                                                    <div className="home-showcase__content">
                                                        <h5 className="home-showcase__title">
                                                            <a href="index5.html" aria-label="page link">Home v5</a>
                                                            <small className="new-home hot-item">New</small>
                                                        </h5>
                                                    </div>
                                                </li>
                                                <li className="home-showcase__card">
                                                    <div className="home-showcase__image">
                                                        <a href="index1.html" aria-label="page link">
                                                            <Image src="assets/images/home-showcase/up-coming-showcase.png" alt="nextmarketing" />
                                                        </a>
                                                    </div>
                                                    <div className="home-showcase__content">
                                                        <h5 className="home-showcase__title">
                                                            <a href="index1.html" aria-label="page link">Coming soon</a>
                                                        </h5>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-arrow">
                                            <a href="javascript:void(0)" aria-label="nav link">Pages</a>
                                            <ul>
                                                <li><a href="about.html" aria-label="page link">About Us</a></li>
                                                <li><a href="contact.html" aria-label="page link">Contact Us</a></li>
                                                <li className="dropdown-arrow">
                                                    <a href="javascript:void(0)" aria-label="nav link">Our Team</a>
                                                    <ul>
                                                        <li><a href="team.html" aria-label="page link">Our Team</a></li>
                                                        <li><a href="team-carousel.html" aria-label="page link">Team Carousel</a></li>
                                                        <li><a href="team-details.html" aria-label="page link">Team Details</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown-arrow">
                                                    <a href="javascript:void(0)" aria-label="nav link">Career <span className="special-item jobs">2 open jobs</span></a>
                                                    <ul>
                                                        <li><a href="career.html" aria-label="page link">Career</a></li>
                                                        <li><a href="career-details.html" aria-label="page link">Career Details</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="portfolio-details.html" aria-label="page link">Case Studies Details</a></li>
                                                <li><a href="pricing.html" aria-label="page link">Pricing Plan <span className="special-item hot">HOT</span></a></li>
                                                <li><a href="faq.html" aria-label="page link">FAQs</a></li>
                                                <li><a href="testimonial.html" aria-label="page link">Testimonials</a></li>
                                                <li><a href="#" aria-label="page link">Coming Soon</a></li>
                                                <li><a href="not-found.html" aria-label="page link">404</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-arrow">
                                            <a href="javascript:void(0)" aria-label="nav link">Services</a>
                                            <ul>
                                                <li><a href="services.html" aria-label="page link">Services</a></li>
                                                <li><a href="services-details.html" aria-label="page link">Services Details</a></li>
                                                <li><a href="services-details2.html" aria-label="page link">Services Details2</a></li>
                                                <li><a href="services-details3.html" aria-label="page link">Services Details3</a></li>
                                                <li><a href="services-details4.html" aria-label="page link">Services Details4</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="portfolio.html" aria-label="page link">Case Studies</a></li>
                                        <li className="dropdown-arrow">
                                            <a href="javascript:void(0)" aria-label="nav link">Blog</a>
                                            <ul>
                                                <li className="dropdown-arrow">
                                                    <a href="javascript:void(0)" aria-label="nav link">Modern</a>
                                                    <ul>
                                                        <li><a href="blog-grid.html" aria-label="page link">No Sidebar</a></li>
                                                        <li><a href="blog.html" aria-label="page link">Left Sidebar</a></li>
                                                        <li><a href="blog-right-sidebar.html" aria-label="page link">Right Sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown-arrow">
                                                    <a href="javascript:void(0)" aria-label="nav link">Classic</a>
                                                    <ul>
                                                        <li><a href="blog-grid2.html" aria-label="page link">No Sidebar</a></li>
                                                        <li><a href="blog2.html" aria-label="page link">Left Sidebar</a></li>
                                                        <li><a href="blog-right-sidebar2.html" aria-label="page link">Right Sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown-arrow">
                                                    <a href="javascript:void(0)" aria-label="nav link">Blog List</a>
                                                    <ul>
                                                        <li><a href="blog-list-grid.html" aria-label="page link">No Sidebar</a></li>
                                                        <li><a href="blog-list.html" aria-label="page link">Left Sidebar</a></li>
                                                        <li><a href="blog-list-right-sidebar.html" aria-label="page link">Right Sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown-arrow">
                                                    <a href="javascript:void(0)" aria-label="nav link">Blog Single</a>
                                                    <ul>
                                                        <li><a href="blog-single2.html" aria-label="page link">No Sidebar</a></li>
                                                        <li><a href="blog-single.html" aria-label="page link">Left Sidebar</a></li>
                                                        <li><a href="blog-single-right-sidebar.html" aria-label="page link">Right Sidebar</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="lets-talk">
                                    <button><a href="#">Let's Talk</a></button>
                                </div>
                            </div>
                        </div>
                        <div className={`hamburger-bar menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                        </div>
                    </header>
                    <div className={`menu-content ${isMenuOpen ? 'show' : ''}`}>
                        <div className="menu-content-inner">
                            <div className="close-menu" onClick={toggleMenu}>X</div>
                            <div className="list-1">
                                <ul>
                                    <li className="megamenu dropdown-arrow">
                                        <a href="javascript:void(0)" aria-label="nav link">Home</a>
                                        <ul className="home-showcase">
                                            <li className="home-showcase__card">
                                                <div className="home-showcase__image">
                                                    <a href="index1.html" aria-label="page link">
                                                        <Image
                                                            src="assets/images/home-showcase/home-showcase-1.jpg"
                                                            alt="nextmarketing"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="home-showcase__content">
                                                    <h5 className="home-showcase__title">
                                                        <a href="index1.html" aria-label="page link">Default</a>
                                                    </h5>
                                                </div>
                                            </li>
                                            <li className="home-showcase__card">
                                                <div className="home-showcase__image">
                                                    <a href="index2.html" aria-label="page link">
                                                        <Image
                                                            src="assets/images/home-showcase/home-showcase-2.jpg"
                                                            alt="nextmarketing"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="home-showcase__content">
                                                    <h5 className="home-showcase__title">
                                                        <a href="index2.html" aria-label="page link">Home v2</a>
                                                        <small className="popular-home hot-item">Popular</small>
                                                    </h5>
                                                </div>
                                            </li>
                                            <li className="home-showcase__card">
                                                <div className="home-showcase__image">
                                                    <a href="index3.html" aria-label="page link">
                                                        <Image
                                                            src="assets/images/home-showcase/home-showcase-3.jpg"
                                                            alt="nextmarketing"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="home-showcase__content">
                                                    <h5 className="home-showcase__title">
                                                        <a href="index3.html" aria-label="page link">Home v3</a>
                                                    </h5>
                                                </div>
                                            </li>
                                            <li className="home-showcase__card">
                                                <div className="home-showcase__image">
                                                    <a href="index4.html" aria-label="page link">
                                                        <Image
                                                            src="assets/images/home-showcase/home-showcase-4.jpg"
                                                            alt="nextmarketing"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="home-showcase__content">
                                                    <h5 className="home-showcase__title">
                                                        <a href="index4.html" aria-label="page link">Home v4</a>
                                                    </h5>
                                                </div>
                                            </li>
                                            <li className="home-showcase__card">
                                                <div className="home-showcase__image">
                                                    <a href="index5.html" aria-label="page link">
                                                        <Image
                                                            src="assets/images/home-showcase/home-showcase-5.jpg"
                                                            alt="nextmarketing"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="home-showcase__content">
                                                    <h5 className="home-showcase__title">
                                                        <a href="index5.html" aria-label="page link">Home v5</a>
                                                        <small className="new-home hot-item">New</small>
                                                    </h5>
                                                </div>
                                            </li>
                                            <li className="home-showcase__card">
                                                <div className="home-showcase__image">
                                                    <a href="index1.html" aria-label="page link">
                                                        <Image
                                                            src="assets/images/home-showcase/up-coming-showcase.png"
                                                            alt="nextmarketing"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="home-showcase__content">
                                                    <h5 className="home-showcase__title">
                                                        <a href="index1.html" aria-label="page link">Coming soon</a>
                                                    </h5>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-arrow">
                                        <a href="javascript:void(0)" aria-label="nav link">Pages</a>
                                        <ul>
                                            <li><a href="about.html" aria-label="page link">About Us</a></li>
                                            <li><a href="contact.html" aria-label="page link">Contact Us</a></li>
                                            <li className="dropdown-arrow">
                                                <a href="javascript:void(0)" aria-label="nav link">Our Team</a>
                                                <ul>
                                                    <li><a href="team.html" aria-label="page link">Our Team</a></li>
                                                    <li><a href="team-carousel.html" aria-label="page link">Team Carousel</a></li>
                                                    <li><a href="team-details.html" aria-label="page link">Team Details</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-arrow">
                                                <a href="javascript:void(0)" aria-label="nav link">Career <span className="special-item jobs">2 open jobs</span></a>
                                                <ul>
                                                    <li><a href="career.html" aria-label="page link">Career</a></li>
                                                    <li><a href="career-details.html" aria-label="page link">Career Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="portfolio-details.html" aria-label="page link">Case Studies Details</a></li>
                                            <li><a href="pricing.html" aria-label="page link">Pricing Plan <span className="special-item hot">HOT</span></a></li>
                                            <li><a href="faq.html" aria-label="page link">FAQs</a></li>
                                            <li><a href="testimonial.html" aria-label="page link">Testimonials</a></li>
                                            <li><a href="#" aria-label="page link">Coming Soon</a></li>
                                            <li><a href="not-found.html" aria-label="page link">404</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-arrow">
                                        <a href="javascript:void(0)" aria-label="nav link">Services</a>
                                        <ul>
                                            <li><a href="services.html" aria-label="page link">Services</a></li>
                                            <li><a href="services-details.html" aria-label="page link">Services Details</a></li>
                                            <li><a href="services-details2.html" aria-label="page link">Services Details2</a></li>
                                            <li><a href="services-details3.html" aria-label="page link">Services Details3</a></li>
                                            <li><a href="services-details4.html" aria-label="page link">Services Details4</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="portfolio.html" aria-label="page link">Case Studies</a></li>
                                    <li className="dropdown-arrow">
                                        <a href="javascript:void(0)" aria-label="nav link">Blog</a>
                                        <ul>
                                            <li className="dropdown-arrow">
                                                <a href="javascript:void(0)" aria-label="nav link">Modern</a>
                                                <ul>
                                                    <li><a href="blog-grid.html" aria-label="page link">No Sidebar</a></li>
                                                    <li><a href="blog.html" aria-label="page link">Left Sidebar</a></li>
                                                    <li><a href="blog-right-sidebar.html" aria-label="page link">Right Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-arrow">
                                                <a href="javascript:void(0)" aria-label="nav link">Classic</a>
                                                <ul>
                                                    <li><a href="blog-grid2.html" aria-label="page link">No Sidebar</a></li>
                                                    <li><a href="blog2.html" aria-label="page link">Left Sidebar</a></li>
                                                    <li><a href="blog-right-sidebar2.html" aria-label="page link">Right Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-arrow">
                                                <a href="javascript:void(0)" aria-label="nav link">Blog List</a>
                                                <ul>
                                                    <li><a href="blog-list-grid.html" aria-label="page link">No Sidebar</a></li>
                                                    <li><a href="blog-list.html" aria-label="page link">Left Sidebar</a></li>
                                                    <li><a href="blog-list-right-sidebar.html" aria-label="page link">Right Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-arrow">
                                                <a href="javascript:void(0)" aria-label="nav link">Blog Single</a>
                                                <ul>
                                                    <li><a href="blog-single2.html" aria-label="page link">No Sidebar</a></li>
                                                    <li><a href="blog-single.html" aria-label="page link">Left Sidebar</a></li>
                                                    <li><a href="blog-single-right-sidebar.html" aria-label="page link">Right Sidebar</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="lets-talk-1">
                                <button><a href="#">Let's Talk</a></button>
                            </div>
                        </div>
                    </div>
                    {/* header 1 end and header2 start */}
                    <div className="sec-hero-res">
                        <div className="section-hero-three__mainimg">
                            <Image src="assets/images/banner/hero2-1.jpg" alt="nextmarketing" />
                        </div>
                        <div className="section-dashboard__playwrap">
                            <div className="section-dashboard__playbtn">
                                <a href="https://www.youtube.com/watch?v=TKnufs85hXk" className="video-popup-link">
                                    <Image src="assets/images/shapes/play-btn1-1.png" alt="play" />
                                </a>
                            </div>
                            <div className="waves wave-1"></div>
                            <div className="waves wave-2"></div>
                            <div className="waves wave-3"></div>
                        </div>

                        <div className="sec-logo-hero-3">
                            <div className="section-hero-three__logcol">
                                <Image src="assets/images/shapes/comy-logo2-1.png" alt="nextmarketing" />
                            </div>
                            <div className="section-hero-three__logcol">
                                <Image src="assets/images/shapes/comy-logo2-2.png" alt="nextmarketing" />
                            </div>
                            <div className="section-hero-three__logcol">
                                <Image src="assets/images/shapes/comy-logo2-3.png" alt="nextmarketing" />
                            </div>
                            <div className="section-hero-three__logcol">
                                <Image src="assets/images/shapes/comy-logo2-4.png" alt="nextmarketing" />
                            </div>
                        </div>
                    </div>
                    {/* header-2 */}
                    <div className="header-container-2">
                        <div className="ratings">
                            <div className="ratings-list">
                                <h1>4.9</h1>
                                <p>3k Ratings</p>
                            </div>
                            <div>
                                <h1>10k+</h1>
                                <p>Happy Users</p>
                            </div>
                        </div>
                        <div className="sub-header-2">
                            <div className="rating-description">
                                Trusted by over 10,000+ customers and well wishers from all over the world since 2012
                            </div>
                            <div className="google-ratings">
                                <h1>Google Rating</h1><br />
                                <span>
                                    <ul>
                                        <li>4.8</li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </span>
                            </div>
                            <div className="good-firms-ratings">
                                <h1>GoodFirms Rating</h1>
                                <ul>
                                    <li>4.9</li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="services-label-container">
                        <div className="services-sub-label">
                            <h3 className="sec-title__tagline">Our Services</h3>
                            <h1 className="sec-title__title">
                                Innovative <span>Digital Marketing</span> with SEO, PPC, and More
                            </h1>
                        </div>
                        <div className="services-list">
                            <div className="services-element">
                                <Image src="assets/images/shapes/seo-icon.png" alt="nextmarketing" />
                                <h2>Search Engine Optimization</h2>
                                <p>Identify relevant and high-impact keywords for your industry.</p>
                            </div>
                            <div className="services-element">
                                <Image src="assets/images/shapes/social-media-icon.png" alt="nextmarketing" />
                                <h2>Social Media Marketing</h2>
                                <p>Identify relevant and high-impact keywords for your industry.</p>
                            </div>
                            <div className="services-element">
                                <Image src="assets/images/shapes/content-writing-icon.png" alt="nextmarketing" />
                                <h2>Content Writing</h2>
                                <p>Identify relevant and high-impact keywords for your industry.</p>
                            </div>
                            <div className="services-element">
                                <Image src="assets/images/shapes/affiliate-marketing.png" alt="nextmarketing" />
                                <h2>Affiliate Marketing</h2>
                                <p>Identify relevant and high-impact keywords for your industry.</p>
                            </div>
                            <div className="services-element">
                                <Image src="assets/images/shapes/email-marketing-icon.png" alt="nextmarketing" />
                                <h2>Email Marketing</h2>
                                <p>Identify relevant and high-impact keywords for your industry.</p>
                            </div>
                            <div className="services-element">
                                <Image src="assets/images/shapes/pay-per-icon.svg" alt="nextmarketing" />
                                <h2>Pay-Per-Click Advertising</h2>
                                <p>Identify relevant and high-impact keywords for your industry.</p>
                            </div>
                            <div className="services-element">
                                <Image src="assets/images/shapes/cro-icon.png" alt="nextmarketing" />
                                <h2>Conversion Rate Optimization</h2>
                                <p>Identify relevant and high-impact keywords for your industry.</p>
                            </div>
                            <div className="services-element">
                                <Image src="assets/images/shapes/e-commers-icon.png" alt="nextmarketing" />
                                <h2>E-commerce Marketing</h2>
                                <p>Identify relevant and high-impact keywords for your industry.</p>
                            </div>
                        </div>
                    </div>
                    {/* Section 3 */}
                    <section>
                        <div className="section-3-container">
                            <div className="row">
                                <div className="left-section-3">
                                    <div className="sec-3-heading">
                                        <h1 className="sec-title__stitle">
                                            Success in Every Click: Welcome to <span>Next Agency</span>.
                                        </h1>
                                    </div>
                                    <div className="our-story">
                                        <p className="our-story-text">
                                            Since 2012, we&apos;ve been pioneering innovative solutions, crafting unique narratives, and consistently delivering exceptional results. Join us in shaping the future of digital excellence!
                                        </p>
                                        <ul className="our-story-list">
                                            <li>As Digital Innovation Leaders shaping digital future.</li>
                                            <li>Tailored Strategy Experts ensuring a roadmap to success.</li>
                                            <li>Proven Results Achievers: dedicated to achieving your success.</li>
                                        </ul>
                                    </div>
                                    <div className="find-more-btn">
                                        <a href="#" className="btn-find">Find more about us</a>
                                    </div>
                                </div>
                                <div className="right-section-3">
                                    <Image
                                        src="assets/images/resource/our-story3-1.png"
                                        alt="nextmarketing"
                                        height="712"
                                    />
                                    <div className="experience-card">
                                        <div>
                                            <strong className="experience-card-year" data-stop="13" data-speed="1500">13</strong>
                                        </div>
                                        <span className="experience-card-text">Years of Experience in Digital marketing Industry</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Section 4 */}
                    <section className="section-team">
                        <div className="team-container">
                            <div className="sec-4-row">
                                <div className="team-heading">
                                    <span className="sec-title__tagline">Team</span>
                                    <h2 className="sec-title__title">
                                        <span>Creative team</span> who are behind all your success
                                    </h2>
                                </div>
                            </div>
                            <div className="img-4-container">
                                <div className="sec-4-img">
                                    <Image
                                        src="assets/images/banner/hero2-1.jpg"
                                        alt="nextmarketing"
                                        width="1200"
                                        height="510"
                                        className="img-4"
                                    />
                                </div>
                                <div className="skills-container">
                                    <div className="skill-flex">
                                        <div className="skills-list">
                                            <div className="section-team__feature-icon">
                                                <Image
                                                    src="assets/images/shapes/dynamic-team-icon.png"
                                                    alt="nextmarketing"
                                                />
                                            </div>
                                            <div className="section-team__feature-info">
                                                <h4 className="section-team__feature-titel">
                                                    <a href="team-details.html">Dynamic Team</a>
                                                </h4>
                                                <p className="section-team__feature-text">
                                                    Receive comprehensive reports detailing the impact of our efforts
                                                </p>
                                            </div>
                                        </div>
                                        <div className="skills-list">
                                            <div className="section-team__feature-icon">
                                                <Image
                                                    src="assets/images/shapes/skills-icon.png"
                                                    alt="nextmarketing"
                                                />
                                            </div>
                                            <div className="section-team__feature-info">
                                                <h4 className="section-team__feature-titel">
                                                    <a href="team-details.html">Extraordinary skills</a>
                                                </h4>
                                                <p className="section-team__feature-text">
                                                    Receive comprehensive reports detailing the impact of our efforts
                                                </p>
                                            </div>
                                        </div>
                                        <div className="skills-list">
                                            <div className="section-team__feature-icon">
                                                <Image
                                                    src="assets/images/shapes/content-writing-icon.png"
                                                    alt="nextmarketing"
                                                />
                                            </div>
                                            <div className="section-team__feature-info">
                                                <h4 className="section-team__feature-titel">
                                                    <a href="team-details.html">Customer focused</a>
                                                </h4>
                                                <p className="section-team__feature-text">
                                                    Receive comprehensive reports detailing the impact of our efforts
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-study">
                        <div className="study-container">
                            <div className="row-study">
                                <div className="sec-title-study">
                                    <span className="sec-title__tagline">Case Study</span>
                                    <h2 className="sec-title__title">
                                        <span>Success Stories: </span> Transformative Case Studies
                                    </h2>
                                </div>
                            </div>
                            <div className="sec-5-img-container">
                                <div className="section-study-img-container">
                                    <div className="img-list-flex">
                                        <div className="img-1-study">
                                            <Image
                                                src="/assets/images/resource/study-img3-1.png"
                                                alt="E-commerce Success"
                                                width={424}
                                                height={484}
                                                className="for-img-1-study"
                                            />
                                        </div>
                                        <div className="img-1-des">
                                            <h4 className="section-study__title">
                                                <a href="portfolio-details.html" aria-label="page link">E-commerce Success</a>
                                            </h4>
                                            <p className="section-study__text">SEO - Paid Social - Business</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="section-study-img-container">
                                    <div className="img-list-flex">
                                        <div className="img-1-study">
                                            <Image
                                                src="/assets/images/resource/study-img3-2.png"
                                                alt="SEO Optimization"
                                                width={424}
                                                height={484}
                                                className="for-img-1-study"
                                            />
                                        </div>
                                        <div className="img-1-des">
                                            <h4 className="section-study__title">
                                                <a href="portfolio-details.html" aria-label="page link">SEO Optimization</a>
                                            </h4>
                                            <p className="section-study__text">SEO - Paid Social - Business</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="section-study-img-container">
                                    <div className="img-list-flex">
                                        <div className="img-1-study">
                                            <Image
                                                src="/assets/images/resource/study-img3-3.png"
                                                alt="Social Media Growth"
                                                width={424}
                                                height={484}
                                                className="for-img-1-study"
                                            />
                                        </div>
                                        <div className="img-1-des">
                                            <h4 className="section-study__title">
                                                <a href="portfolio-details.html" aria-label="page link">Social Media Growth</a>
                                            </h4>
                                            <p className="section-study__text">Social media marketing - Paid Social</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-provide">
                        <div className="provide-container">
                            <div className="provide-left">
                                <div className="provide-title">
                                    <span className="sec-ptitle__tagline">We Provide</span>
                                    <h2 className="sec-ptitle__title">
                                        Integration Solutions: <span>Connect Seamlessly</span> with Leading Tools
                                    </h2>
                                </div>
                                <div className="p-sub-desc">
                                    <p>
                                        <strong className="fw-bold">Next Agency</strong> seamlessly integrates with a variety of
                                        industry-leading tools, ensuring a cohesive and efficient digital ecosystem for your business.
                                    </p>
                                </div>
                                <div className="provides-list">
                                    <div className="section-provide__ftwrap">
                                        <div className="section-provide__icon">
                                            <Image
                                                src="/assets/images/shapes/connectivity-icon.png"
                                                alt="connectivity icon"
                                                width={50}
                                                height={50}
                                            />
                                        </div>
                                        <h5 className="section-provide__fTitle">Seamless Connectivity with your favorite tools</h5>
                                    </div>
                                    <div className="section-provide__ftwrap">
                                        <div className="section-provide__icon">
                                            <Image
                                                src="/assets/images/shapes/email-marketing-icon.png"
                                                alt="email marketing icon"
                                                width={50}
                                                height={50}
                                            />
                                        </div>
                                        <h5 className="section-provide__fTitle">Customized Solutions to fulfill your exact need</h5>
                                    </div>
                                </div>
                                <a href="about.html" className="section-provide__btn">
                                    See all Integrations
                                    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 7.49976L1 7.49976" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9.9502 1.47541L16.0002 7.49941L9.9502 13.5244" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            </div>
                            <div className="right-provide">
                                <div className="section-provide__right__title-info">
                                    <h3 className="section-provide__right__title">Freedom to integrate all the tools you need</h3>
                                    <p className="section-provide__right__text">
                                        At Next, you can seamlessly integrate with a variety of industry-leading tools, ensuring a cohesive and efficient digital ecosystem for your business.
                                    </p>
                                </div>
                                <div className="section-provide-right-bg-img">
                                    <div className="section-right-provide-spacing">
                                        <div className="section-provide__right__flogowrap d-flex flex-column gap-3" data-bs-theme="light">
                                            <div className="section-provide__right__flogo-row marquee-parent left-right d-flex align-items-center flex-nowrap gap-3" data-dir="left" data-speed="fast">
                                                <div className="section-provide__right__flogo marquee-clone">
                                                    <a href="#"><Image src="/assets/images/shapes/hubSpot3-2.png" alt="hubspot" width={100} height={30} /></a>
                                                </div>
                                                <div className="section-provide__right__flogo marquee-clone">
                                                    <a href="#"><Image src="/assets/images/shapes/shopify3-1.png" alt="shopify" width={100} height={30} /></a>
                                                </div>
                                                <div className="section-provide__right__flogo marquee-clone">
                                                    <a href="#"><Image src="/assets/images/shapes/zapier3-3.png" alt="zapier" width={100} height={30} /></a>
                                                </div>
                                            </div>

                                            <div className="section-provide__right__flogo-row marquee-parent right-left d-flex align-items-center flex-nowrap gap-3" data-dir="right" data-speed="medium">
                                                <div className="section-provide__right__flogo marquee-clone">
                                                    <a href="#"><Image src="/assets/images/shapes/jira3-4.png" alt="jira" width={100} height={30} /></a>
                                                </div>
                                                <div className="section-provide__right__flogo marquee-clone">
                                                    <a href="#"><Image src="/assets/images/shapes/slack3-6.png" alt="slack" width={100} height={30} /></a>
                                                </div>
                                                <div className="section-provide__right__flogo marquee-clone">
                                                    <a href="#"><Image src="/assets/images/shapes/google-analytics3-5.png" alt="google analytics" width={100} height={30} /></a>
                                                </div>
                                            </div>

                                            <div className="section-provide__right__flogo-row marquee-parent left-right d-flex align-items-center flex-nowrap gap-3" data-dir="left" data-speed="medium">
                                                <div className="section-provide__right__flogo marquee-clone">
                                                    <a href="#"><Image src="/assets/images/shapes/notion3-9.png" alt="notion" width={100} height={30} /></a>
                                                </div>
                                                <div className="section-provide__right__flogo marquee-clone">
                                                    <a href="#"><Image src="/assets/images/shapes/paypal3-7.png" alt="paypal" width={100} height={30} /></a>
                                                </div>
                                                <div className="section-provide__right__flogo marquee-clone">
                                                    <a href="#"><Image src="/assets/images/shapes/hotjar3-8.png" alt="hotjar" width={100} height={30} /></a>
                                                </div>
                                            </div>

                                            <div className="section-provide__right__flogo-row marquee-parent right-left d-flex align-items-center flex-nowrap gap-3" data-dir="right" data-speed="fast">
                                                <div className="section-provide__right__flogo marquee-clone">
                                                    <a href="#"><Image src="/assets/images/shapes/mailchimp3-11.png" alt="mailchimp" width={100} height={30} /></a>
                                                </div>
                                                <div className="section-provide__right__flogo marquee-clone">
                                                    <a href="#"><Image src="/assets/images/shapes/stripe3-12.png" alt="stripe" width={100} height={30} /></a>
                                                </div>
                                                <div className="section-provide__right__flogo marquee-clone">
                                                    <a href="#"><Image src="/assets/images/shapes/googledrive3-10.png" alt="googledrive" width={100} height={30} /></a>
                                                </div>
                                            </div>

                                            <div className="section-provide__right__flogo-row marquee-parent left-right d-flex align-items-center flex-nowrap gap-3" data-dir="left" data-speed="slow">
                                                <div className="section-provide__right__flogo marquee-clone">
                                                    <a href="#"><Image src="/assets/images/shapes/zapier3-3.png" alt="zapier" width={100} height={30} /></a>
                                                </div>
                                                <div className="section-provide__right__flogo marquee-clone">
                                                    <a href="#"><Image src="/assets/images/shapes/amazon3-13.png" alt="amazon" width={100} height={30} /></a>
                                                </div>
                                                <div className="section-provide__right__flogo marquee-clone">
                                                    <a href="#"><Image src="/assets/images/shapes/jira3-4.png" alt="jira" width={100} height={30} /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-testimonial-three">
                        <div className="container">
                            <div className="sec-title wow fadeInUp" data-wow-delay="200ms">
                                <span className="sec-title__tagline">Social Proof</span>
                                <h2 className="sec-title__title text-center">
                                    Client Success Stories: Our Social Proof of Digital Excellence
                                </h2>
                            </div>
                            <div className="row">
                                <div className="section-testimonial-three__wrap">
                                    <div className="slider">
                                        <input type="radio" name="slider" id="slide1" defaultChecked />
                                        <input type="radio" name="slider" id="slide2" />

                                        <div className="slides">
                                            <div className="section-testimonial-three__item">
                                                <div className="section-testimonial-three__bg">
                                                    <div className="section-testimonial-three__shape"></div>
                                                    <div className="section-testimonial-three__item-col d-flex flex-wrap">
                                                        <div className="section-testimonial-three__image position-relative">
                                                            <Image
                                                                src="/assets/images/testimonial/testimonial-img3-1.png"
                                                                alt="testimonial 1"
                                                                width={424}
                                                                height={884}
                                                            />
                                                            <div className="section-testimonial-three__icon">
                                                                <Image
                                                                    src="/assets/images/shapes/skills-icon.png"
                                                                    alt="skills icon"
                                                                    width={50}
                                                                    height={50}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="section-testimonial-three__info">
                                                            <div className="section-testimonial-three__review d-flex align-items-center justify-content-between">
                                                                <div className="section-testimonial-three__star-wrap d-flex align-items-center">
                                                                    <span className="star-icon"><i className="icon-Star"></i></span>
                                                                    <span className="star-icon"><i className="icon-Star"></i></span>
                                                                    <span className="star-icon"><i className="icon-Star"></i></span>
                                                                    <span className="star-icon"><i className="icon-Star"></i></span>
                                                                    <span className="star-icon"><i className="icon-Star"></i></span>
                                                                </div>
                                                                <div className="section-testimonial-three__trustpilot">
                                                                    <Image
                                                                        src="/assets/images/shapes/trustpilot-img.png"
                                                                        alt="trustpilot"
                                                                        width={100}
                                                                        height={30}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="section-testimonial-three__info-details">
                                                                <p className="section-testimonial-three__text">
                                                                    The results achieved were beyond our expectations. <strong>NextPro agency</strong> proved to be proven results achievers, consistently delivering measurable impact.
                                                                </p>
                                                                <div className="section-testimonial-three__author">
                                                                    <strong className="section-testimonial-three__name">Emily Thompson</strong>
                                                                    <br />
                                                                    <small className="section-testimonial-three__designation">CEO @ Thompson Tech Solutions</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="section-testimonial-three__item">
                                                <div className="section-testimonial-three__bg">
                                                    <div className="section-testimonial-three__shape"></div>
                                                    <div className="section-testimonial-three__item-col d-flex flex-wrap">
                                                        <div className="section-testimonial-three__image position-relative">
                                                            <Image
                                                                src="/assets/images/testimonial/testimonial-img1-1.jpg"
                                                                alt="testimonial 2"
                                                                width={424}
                                                                height={484}
                                                            />
                                                            <div className="section-testimonial-three__icon">
                                                                <Image
                                                                    src="/assets/images/shapes/skills-icon.png"
                                                                    alt="skills icon"
                                                                    width={50}
                                                                    height={50}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="section-testimonial-three__info">
                                                            <div className="section-testimonial-three__review d-flex align-items-center justify-content-between">
                                                                <div className="section-testimonial-three__star-wrap d-flex align-items-center">
                                                                    <span className="star-icon"><i className="icon-Star"></i></span>
                                                                    <span className="star-icon"><i className="icon-Star"></i></span>
                                                                    <span className="star-icon"><i className="icon-Star"></i></span>
                                                                    <span className="star-icon"><i className="icon-Star"></i></span>
                                                                    <span className="star-icon"><i className="icon-Star"></i></span>
                                                                </div>
                                                                <div className="section-testimonial-three__trustpilot">
                                                                    <Image
                                                                        src="/assets/images/shapes/trustpilot-img.png"
                                                                        alt="trustpilot"
                                                                        width={100}
                                                                        height={30}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="section-testimonial-three__info-details">
                                                                <p className="section-testimonial-three__text">
                                                                    The results achieved were beyond our expectations. <strong>NextPro agency</strong> proved to be proven results achievers, consistently delivering measurable impact.
                                                                </p>
                                                                <div className="section-testimonial-three__author">
                                                                    <strong className="section-testimonial-three__name">Margaret A. Glass</strong>
                                                                    <br />
                                                                    <small className="section-testimonial-three__designation">Clarence Court</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="slider-controls">
                                            <label htmlFor="slide1" className="prev">&#10094;</label>
                                            <label htmlFor="slide2" className="next">&#10095;</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-form" data-bs-theme="light">
                        <div className="container">
                            <div className="section-form__bg">
                                <div
                                    className="section-form__bgimg"
                                    style={{ backgroundImage: "url('/assets/images/background/services-bg1-1.png')" }}
                                ></div>
                                <div className="form-section-container">
                                    <div className="section-form__content">
                                        <div className="section-form__icon d-flex align-items-center justify-content-center wow fadeInUp" data-wow-delay="200ms">
                                            <Image
                                                src="/assets/images/shapes/cro-icon.png"
                                                alt="cro-icon"
                                                width={50}
                                                height={50}
                                            />
                                        </div>
                                        <div className="sec-title_test wow fadeInUp" data-wow-delay="200ms">
                                            <h2 className="sec-title__ttitle">Request a free Audit of your website</h2>
                                            <p className="sec-title__ttext">
                                                Find quick answers to common queries in our FAQ section, ensuring a clear understanding of your digital journey with us.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="section-form__form wow fadeInUp" data-wow-delay="200ms">
                                        <form id="contactForm" action="#">
                                            <div className="form-row d-flex flex-wrap">
                                                <div className="form-group col-sm-6">
                                                    <input type="text" name="InputName" className="form-control" placeholder="Your Name" required />
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <input type="email" name="InputEmail" className="form-control" placeholder="Your Email" required />
                                                </div>
                                            </div>
                                            <div className="form-row d-flex flex-wrap">
                                                <div className="form-group col-sm-6">
                                                    <input type="text" name="InputWebsite" className="form-control" placeholder="Your website" required />
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <select className="custom-select">
                                                        <option className="custom_select_opt form-control" value="">Select a Service</option>
                                                        <option className="custom_select_opt form-control">Search Engine Optimization</option>
                                                        <option className="custom_select_opt form-control">Social Media Marketing</option>
                                                        <option className="custom_select_opt form-control">Content Writing</option>
                                                        <option className="custom_select_opt form-control">Affiliate Marketing</option>
                                                        <option className="custom_select_opt form-control">Email Marketing</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group">
                                                    <textarea className="form-control text-area" placeholder="Message" required></textarea>
                                                </div>
                                            </div>
                                            <div className="sub-req">
                                                <button type="submit" id="next-marketing-btn-req">Send request</button>
                                            </div>
                                            <div className="response py-3"></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-price-table">
                        <div className="container tabs-wrapper">
                            <div className="sec-title text-center d-flex align-items-center" data-wow-delay="200ms">
                                <span className="sec-title__tagline">Pricing</span>
                                <h2 className="sec-title__title-price">The Right Plan for every Business</h2>
                                <p className="sec-title__text">
                                    Discover flexible and transparent pricing options designed to meet the diverse needs of businesses, whether you&apos;re a startup, small business, or enterprise.
                                </p>
                            </div>

                            <div className="section-price-table__tabs-wrap wow fadeInUp" data-wow-delay="200ms">
                                <div className="section-price-table__tabs-row section-price-table__tabs-row--three d-flex align-items-center">
                                    <strong
                                        className={`section-price-table__tab tab-item ${activeTab === 'tab1' ? 'tab-active' : ''}`}
                                        onClick={() => handleTabClick('tab1')}
                                    >
                                        <span>Monthly</span>
                                    </strong>
                                    <strong
                                        className={`section-price-table__tab tab-item ${activeTab === 'tab2' ? 'tab-active' : ''}`}
                                        onClick={() => handleTabClick('tab2')}
                                    >
                                        <span>Yearly</span>
                                    </strong>
                                </div>
                                <p className="section-price-table__tab-text section-price-table__tab-text--three">
                                    <span> Save 30% </span> on Yearly Plan
                                </p>
                            </div>

                            <div className="section-price-table__tabs-content without-switchtab tabs-content-parent">
                                <div className={`section-price-table__content-inner ${activeTab === 'tab1' ? 'content-active' : ''}`}>
                                    <div className="row-price gutter-y-30">
                                        <div className="col-xl-4">
                                            <div className="section-price-table__col wow fadeInUp" data-wow-delay="0ms">
                                                <div className="section-price-table__bg">
                                                    <div className="section-price-table__planing section-price-table__planing--three">
                                                        <div className="section-price__titlewrap">
                                                            <h4 className="section-price__title">Basic Plan</h4>
                                                            <p className="section-price__infotext">Small businesses and startups</p>
                                                        </div>
                                                        <div className="section-price__ammountwrap">
                                                            <span className="section-price__symble">$</span>
                                                            <strong className="section-price__number">99</strong>
                                                            <small className="section-price__month">/ month</small>
                                                        </div>
                                                        <a href="contact.html" aria-label="page link" className="section-price-table__btn next-marketing-btn btn">
                                                            Start 7 Days FREE Trial
                                                            <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M16 7.49976L1 7.49976" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                <path d="M9.9502 1.47541L16.0002 7.49941L9.9502 13.5244" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            </svg>
                                                        </a>
                                                        <small className="section-price__required">*No Credit Card required</small>
                                                    </div>
                                                    <div className="section-price__rightinfo section-price__rightinfo--three">
                                                        <div className="section-price__infocol">
                                                            <h6 className="section-price__listtitle">Services Included:</h6>
                                                            <ul className="reset-ul section-price__list">
                                                                <li>SEO Optimization</li>
                                                                <li>Social Media Marketing (2 platforms)</li>
                                                                <li className="section-price__premium">Pay-Per-Click Ad. (Basic)</li>
                                                                <li className="section-price__premium">Email Marketing (Full Suite)</li>
                                                                <li className="section-price__premium">Advanced Analytics and Reporting</li>
                                                                <li className="section-price__premium">Dedicated Account Manager</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4">
                                            <div className="section-price-table__col active wow fadeInUp" data-wow-delay="100ms">
                                                <div className="section-price-table__bg">
                                                    <div className="section-price-table__planing section-price-table__planing--three">
                                                        <div className="section-price__titlewrap">
                                                            <h4 className="section-price__title">Growth Accelerator</h4>
                                                            <span className="section-price__valuetag">Value</span>
                                                            <p className="section-price__infotext">For Growing businesses looking to expand online presence</p>
                                                        </div>
                                                        <div className="section-price__ammountwrap">
                                                            <span className="section-price__symble">$</span>
                                                            <strong className="section-price__number">199</strong>
                                                            <small className="section-price__month">/ month</small>
                                                        </div>
                                                        <a href="contact.html" aria-label="page link" className="section-price-table__btn next-marketing-btn btn">
                                                            Start 7 Days FREE Trial
                                                            <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M16 7.49976L1 7.49976" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                <path d="M9.9502 1.47541L16.0002 7.49941L9.9502 13.5244" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            </svg>
                                                        </a>
                                                        <small className="section-price__required">*No Credit Card required</small>
                                                    </div>
                                                    <div className="section-price__rightinfo section-price__rightinfo--three">
                                                        <div className="section-price__infocol">
                                                            <h6 className="section-price__listtitle">Services Included:</h6>
                                                            <ul className="reset-ul section-price__list">
                                                                <li>SEO Optimization</li>
                                                                <li>Social Media Marketing (2 platforms)</li>
                                                                <li>Pay-Per-Click Ad. (Basic)</li>
                                                                <li className="section-price__premium">Email Marketing (Full Suite)</li>
                                                                <li className="section-price__premium">Advanced Analytics and Reporting</li>
                                                                <li className="section-price__premium">Dedicated Account Manager</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4">
                                            <div className="section-price-table__col wow fadeInUp" data-wow-delay="200ms">
                                                <div className="section-price-table__bg">
                                                    <div className="section-price-table__planing section-price-table__planing--three">
                                                        <div className="section-price__titlewrap">
                                                            <h4 className="section-price__title">Full-Scale Domination</h4>
                                                            <p className="section-price__infotext">Established enterprises aiming for full-scale marketing</p>
                                                        </div>
                                                        <div className="section-price__ammountwrap">
                                                            <span className="section-price__symble">$</span>
                                                            <strong className="section-price__number">399</strong>
                                                            <small className="section-price__month">/ month</small>
                                                        </div>
                                                        <a href="contact.html" aria-label="page link" className="section-price-table__btn next-marketing-btn btn">
                                                            Start 7 Days FREE Trial
                                                            <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M16 7.49976L1 7.49976" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                <path d="M9.9502 1.47541L16.0002 7.49941L9.9502 13.5244" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            </svg>
                                                        </a>
                                                        <small className="section-price__required">*No Credit Card required</small>
                                                    </div>
                                                    <div className="section-price__rightinfo section-price__rightinfo--three">
                                                        <div className="section-price__infocol">
                                                            <h6 className="section-price__listtitle">Services Included:</h6>
                                                            <ul className="reset-ul section-price__list">
                                                                <li>SEO Optimization</li>
                                                                <li>Social Media Marketing (3 platforms)</li>
                                                                <li>Pay-Per-Click Ad. (Advanced)</li>
                                                                <li>Email Marketing (Full Suite)</li>
                                                                <li>Advanced Analytics and Reporting</li>
                                                                <li>Dedicated Account Manager</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`section-price-table__content-inner ${activeTab === 'tab2' ? 'content-active' : ''}`}>
                                    <div className="row-price gutter-y-30">
                                        <div className="col-xl-4">
                                            <div className="section-price-table__col wow fadeInUp" data-wow-delay="0ms">
                                                <div className="section-price-table__bg">
                                                    <div className="section-price-table__planing section-price-table__planing--three">
                                                        <div className="section-price__titlewrap">
                                                            <h4 className="section-price__title">Basic Plan</h4>
                                                            <p className="section-price__infotext">Small businesses and startups</p>
                                                        </div>
                                                        <div className="section-price__ammountwrap">
                                                            <span className="section-price__symble">$</span>
                                                            <strong className="section-price__number">990</strong>
                                                            <small className="section-price__month">/ year</small>
                                                        </div>
                                                        <a href="contact.html" aria-label="page link" className="section-price-table__btn next-marketing-btn btn">
                                                            Start 7 Days FREE Trial
                                                            <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M16 7.49976L1 7.49976" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                <path d="M9.9502 1.47541L16.0002 7.49941L9.9502 13.5244" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            </svg>
                                                        </a>
                                                        <small className="section-price__required">*No Credit Card required</small>
                                                    </div>
                                                    <div className="section-price__rightinfo section-price__rightinfo--three">
                                                        <div className="section-price__infocol">
                                                            <h6 className="section-price__listtitle">Services Included:</h6>
                                                            <ul className="reset-ul section-price__list">
                                                                <li>SEO Optimization</li>
                                                                <li>Social Media Marketing (2 platforms)</li>
                                                                <li className="section-price__premium">Pay-Per-Click Ad. (Basic)</li>
                                                                <li className="section-price__premium">Email Marketing (Full Suite)</li>
                                                                <li className="section-price__premium">Advanced Analytics and Reporting</li>
                                                                <li className="section-price__premium">Dedicated Account Manager</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4">
                                            <div className="section-price-table__col active wow fadeInUp" data-wow-delay="100ms">
                                                <div className="section-price-table__bg">
                                                    <div className="section-price-table__planing section-price-table__planing--three">
                                                        <div className="section-price__titlewrap">
                                                            <h4 className="section-price__title">Growth Accelerator</h4>
                                                            <span className="section-price__valuetag">Value</span>
                                                            <p className="section-price__infotext">For Growing businesses looking to expand online presence</p>
                                                        </div>
                                                        <div className="section-price__ammountwrap">
                                                            <span className="section-price__symble">$</span>
                                                            <strong className="section-price__number">1990</strong>
                                                            <small className="section-price__month">/ year</small>
                                                        </div>
                                                        <a href="contact.html" aria-label="page link" className="section-price-table__btn next-marketing-btn btn">
                                                            Start 7 Days FREE Trial
                                                            <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M16 7.49976L1 7.49976" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                <path d="M9.9502 1.47541L16.0002 7.49941L9.9502 13.5244" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            </svg>
                                                        </a>
                                                        <small className="section-price__required">*No Credit Card required</small>
                                                    </div>
                                                    <div className="section-price__rightinfo section-price__rightinfo--three">
                                                        <div className="section-price__infocol">
                                                            <h6 className="section-price__listtitle">Services Included:</h6>
                                                            <ul className="reset-ul section-price__list">
                                                                <li>SEO Optimization</li>
                                                                <li>Social Media Marketing (2 platforms)</li>
                                                                <li>Pay-Per-Click Ad. (Basic)</li>
                                                                <li className="section-price__premium">Email Marketing (Full Suite)</li>
                                                                <li className="section-price__premium">Advanced Analytics and Reporting</li>
                                                                <li className="section-price__premium">Dedicated Account Manager</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4">
                                            <div className="section-price-table__col wow fadeInUp" data-wow-delay="200ms">
                                                <div className="section-price-table__bg">
                                                    <div className="section-price-table__planing section-price-table__planing--three">
                                                        <div className="section-price__titlewrap">
                                                            <h4 className="section-price__title">Full-Scale Domination</h4>
                                                            <p className="section-price__infotext">Established enterprises aiming for full-scale marketing</p>
                                                        </div>
                                                        <div className="section-price__ammountwrap">
                                                            <span className="section-price__symble">$</span>
                                                            <strong className="section-price__number">3990</strong>
                                                            <small className="section-price__month">/ year</small>
                                                        </div>
                                                        <a href="contact.html" aria-label="page link" className="section-price-table__btn next-marketing-btn btn">
                                                            Start 7 Days FREE Trial
                                                            <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M16 7.49976L1 7.49976" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                <path d="M9.9502 1.47541L16.0002 7.49941L9.9502 13.5244" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            </svg>
                                                        </a>
                                                        <small className="section-price__required">*No Credit Card required</small>
                                                    </div>
                                                    <div className="section-price__rightinfo section-price__rightinfo--three">
                                                        <div className="section-price__infocol">
                                                            <h6 className="section-price__listtitle">Services Included:</h6>
                                                            <ul className="reset-ul section-price__list">
                                                                <li>SEO Optimization</li>
                                                                <li>Social Media Marketing (3 platforms)</li>
                                                                <li>Pay-Per-Click Ad. (Advanced)</li>
                                                                <li>Email Marketing (Full Suite)</li>
                                                                <li>Advanced Analytics and Reporting</li>
                                                                <li>Dedicated Account Manager</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="section-price-table__content-inner tab-content" id="tab3">
                                    <div className="row-price gutter-y-30">
                                        <div className="col-xl-4">
                                            <div className="section-price-table__col wow fadeInUp" data-wow-delay="0ms">
                                                <div className="section-price-table__bg">
                                                    <div className="section-price-table__planing section-price-table__planing--three">
                                                        <div className="section-price__titlewrap">
                                                            <h4 className="section-price__title">Basic Plan</h4>
                                                            <p className="section-price__infotext">Small businesses and startups</p>
                                                        </div>
                                                        <div className="section-price__ammountwrap">
                                                            <span className="section-price__symble">$</span>
                                                            <strong className="section-price__number">990</strong>
                                                            <small className="section-price__month">/ year</small>
                                                        </div>
                                                        <a href="contact.html" aria-label="page link" className="section-price-table__btn next-marketing-btn btn">
                                                            Start 7 Days FREE Trial
                                                            <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M16 7.49976L1 7.49976" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                <path d="M9.9502 1.47541L16.0002 7.49941L9.9502 13.5244" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            </svg>
                                                        </a>
                                                        <small className="section-price__required">*No Credit Card required</small>
                                                    </div>
                                                    <div className="section-price__rightinfo section-price__rightinfo--three">
                                                        <div className="section-price__infocol">
                                                            <h6 className="section-price__listtitle">Services Included:</h6>
                                                            <ul className="reset-ul section-price__list">
                                                                <li>SEO Optimization</li>
                                                                <li>Social Media Marketing (2 platforms)</li>
                                                                <li className="section-price__premium">Pay-Per-Click Ad. (Basic)</li>
                                                                <li className="section-price__premium">Email Marketing (Full Suite)</li>
                                                                <li className="section-price__premium">Advanced Analytics and Reporting</li>
                                                                <li className="section-price__premium">Dedicated Account Manager</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4">
                                            <div className="section-price-table__col active wow fadeInUp" data-wow-delay="100ms">
                                                <div className="section-price-table__bg">
                                                    <div className="section-price-table__planing section-price-table__planing--three">
                                                        <div className="section-price__titlewrap">
                                                            <h4 className="section-price__title">Growth Accelerator</h4>
                                                            <span className="section-price__valuetag">Value</span>
                                                            <p className="section-price__infotext">For Growing businesses looking to expand online presence</p>
                                                        </div>
                                                        <div className="section-price__ammountwrap">
                                                            <span className="section-price__symble">$</span>
                                                            <strong className="section-price__number">1990</strong>
                                                            <small className="section-price__month">/ year</small>
                                                        </div>
                                                        <a href="contact.html" aria-label="page link" className="section-price-table__btn next-marketing-btn btn">
                                                            Start 7 Days FREE Trial
                                                            <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M16 7.49976L1 7.49976" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                <path d="M9.9502 1.47541L16.0002 7.49941L9.9502 13.5244" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            </svg>
                                                        </a>
                                                        <small className="section-price__required">*No Credit Card required</small>
                                                    </div>
                                                    <div className="section-price__rightinfo section-price__rightinfo--three">
                                                        <div className="section-price__infocol">
                                                            <h6 className="section-price__listtitle">Services Included:</h6>
                                                            <ul className="reset-ul section-price__list">
                                                                <li>SEO Optimization</li>
                                                                <li>Social Media Marketing (2 platforms)</li>
                                                                <li>Pay-Per-Click Ad. (Basic)</li>
                                                                <li className="section-price__premium">Email Marketing (Full Suite)</li>
                                                                <li className="section-price__premium">Advanced Analytics and Reporting</li>
                                                                <li className="section-price__premium">Dedicated Account Manager</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4">
                                            <div className="section-price-table__col wow fadeInUp" data-wow-delay="200ms">
                                                <div className="section-price-table__bg">
                                                    <div className="section-price-table__planing section-price-table__planing--three">
                                                        <div className="section-price__titlewrap">
                                                            <h4 className="section-price__title">Full-Scale Domination</h4>
                                                            <p className="section-price__infotext">Established enterprises aiming for full-scale marketing</p>
                                                        </div>
                                                        <div className="section-price__ammountwrap">
                                                            <span className="section-price__symble">$</span>
                                                            <strong className="section-price__number">3990</strong>
                                                            <small className="section-price__month">/ year</small>
                                                        </div>
                                                        <a href="contact.html" aria-label="page link" className="section-price-table__btn next-marketing-btn btn">
                                                            Start 7 Days FREE Trial
                                                            <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M16 7.49976L1 7.49976" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                <path d="M9.9502 1.47541L16.0002 7.49941L9.9502 13.5244" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            </svg>
                                                        </a>
                                                        <small className="section-price__required">*No Credit Card required</small>
                                                    </div>
                                                    <div className="section-price__rightinfo section-price__rightinfo--three">
                                                        <div className="section-price__infocol">
                                                            <h6 className="section-price__listtitle">Services Included:</h6>
                                                            <ul className="reset-ul section-price__list">
                                                                <li>SEO Optimization</li>
                                                                <li>Social Media Marketing (3 platforms)</li>
                                                                <li>Pay-Per-Click Ad. (Advanced)</li>
                                                                <li>Email Marketing (Full Suite)</li>
                                                                <li>Advanced Analytics and Reporting</li>
                                                                <li>Dedicated Account Manager</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section >
                    <section className="section-faq section-faq--three">
                        <div className="container">
                            <div className="row-ques">
                                <div className="col-lg-5">
                                    <div className="section-faq__title-wrap sticky-elements">
                                        <div className="sec-title faqCenterTitle wow fadeInUp" data-wow-delay="200ms">
                                            <span className="sec-title__tagline-qn">Frequently Asked Questions</span>
                                            <h2 className="sec-title__title-qn">Your Digital Journey Clarified</h2>
                                            <p className="sec-title__text-qn">
                                                Explore essential information about NextMarketing and our services. Find quick answers to common queries in our FAQ section, ensuring a clear understanding of your digital journey with us.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-7">
          <div className="section-faq__wrap">
            {[
              "How does the pricing work for your services?",
              "Can I customize a plan based on my specific requirements?",
              "What results can I expect from your digital marketing services?",
              "How long does it take to see results from your services?",
              "Do you offer ongoing support and optimization for campaigns?",
              "How do I get started with NextMarketing?",
              "Can I see examples of your past work or client success stories?"
            ].map((question, index) => (
              <div
                key={index}
                className="section-faq__row wow fadeInUp"
                ref={(el) => { faqRefs.current[index] = el; }}
              >
                <h6
                  className="section-faq__title"
                  onClick={() => handleFaqClick(index)}
                >
                  {question}
                </h6>
                <div className="section-faq__content">
                  <p className="section-faq__text">
                    We offer flexible pricing plans tailored to different business needs. Our pricing is transparent, with no hidden fees. Explore our detailed pricing section for more information.
                  </p>
                  {index === 4 && (
                    <ul className="reset-ul section-faq__list">
                      <li>We offer flexible pricing plans tailored to different</li>
                      <li>Explore our detailed pricing</li>
                    </ul>
                  )}
                  {index === 5 && (
                    <ol className="section-faq__list reset-ul">
                      <li>We offer flexible pricing plans tailored to different</li>
                      <li>Explore our detailed pricing</li>
                    </ol>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
                            </div>
                        </div>
                    </section>
                    <section className="blog-one">
                        <div className="container">
                            <div className="sec-title-blog d-flex flex-column align-items-center text-center wow fadeInUp" data-wow-delay="200ms">
                                <span className="sec-title__tagline">Our Blog</span>
                                <h2 className="sec-title__title">From Our Blog – Learn, Grow, & Succeed!</h2>
                            </div>

                            <div className="row-blog gutter-y-30">
                                {blogPosts.map((post, index) => (
                                    <div className="col-lg-4 col-md-6" key={post.id}>
                                        <div className="blog-one__item wow fadeIn" data-wow-delay={`${100 * (index + 1)}ms`}>
                                            <div className="blog-one__img">
                                                <div className="blog-one__innerimg blog-one__img--overlay">
                                                    <Image src={post.imgSrc} data-src={post.imgSrc} alt="blog" width="424" height="484" />
                                                </div>
                                                <div className="blog-one__tagwrap blog-one__tagwrap--color position-absolute d-flex flex-wrap gap-1 z-2">
                                                    <span className="blog-one__tag">
                                                        <a href="#" aria-label="blog page">{post.tag}</a>
                                                    </span>
                                                </div>
                                                <div className="blog-one__info blog-one__info--overlap">
                                                    <h4 className="blog-one__title">
                                                        <a href={post.link} aria-label="page link">{post.title}</a>
                                                    </h4>
                                                    <ul className="reset-ul blog-one__meta blog-one__meta--style2">
                                                        <li>
                                                            <a href="#" aria-label="blog page">by {post.author}</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" aria-label="blog page">{post.date}</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    <section className="newsletter-one wow fadeInUp trueClass" data-wow-delay="200ms" data-bs-theme="light">
                        <div className="container">
                            <div className="row-blog">
                                <div className="newsletter-one__wrap">
                                    <div
                                        className="newsletter-one__bgimg"
                                        style={{ backgroundImage: "url('assets/images/background/services-bg1-1.png')" }}
                                    ></div>
                                    <div className="newsletter-one__bg d-flex justify-content-between align-items-center">
                                        <h2 className="newsletter-one__title">Subscribe to our Newsletter</h2>
                                        <div className="newsletter-one__form">
                                            <form className="contact-form d-flex align-items-center flex-wrap">
                                                <div className="form-group p-0 m-0">
                                                    <input
                                                        type="email"
                                                        id="mc-email"
                                                        className="form-control"
                                                        placeholder="Enter your email"
                                                        required
                                                    />
                                                    <button
                                                        type="submit"
                                                        className="newsletter-one__newsletter-btn next-marketing-btn btn btn-radius"
                                                    >
                                                        <span>Subscribe</span>
                                                        <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M16 7.49976L1 7.49976" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M9.9502 1.47541L16.0002 7.49941L9.9502 13.5244" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <footer className="footer footer--three">
                        <div className="footer__top">
                            <div className="container">
                                <div className="footer__bg @@footerGapClass">
                                    <div className="footer__innermx">
                                        <div className="footer__locationbar row align-items-center">
                                            <div className="footer__locationbar__toplogo">
                                                <div className="footer__logo">
                                                    <Image src="assets/images/logo-next.png" className="logo-dark" alt="next-logo" />
                                                    <Image src="assets/images/logo-light.png" className="logo-light" alt="next-logo-light" />
                                                </div>
                                            </div>

                                            <div className="footer__locationbar__wrap d-flex flex-wrap align-items-center">
                                                <div className="footer__locationbar__address d-flex align-items-center">
                                                    <div className="footer__locationbar__icon">
                                                        <Image src="assets/images/shapes/google-map-pin.png" alt="nextmarketing" />
                                                    </div>
                                                    <div className="footer__locationbar__info">
                                                        <p className="footer__locationbar__text">
                                                            243, Eastern Parkway, <br />
                                                            Brooklyn, New York, USA
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="footer__locationbar__address d-flex align-items-center">
                                                    <div className="footer__locationbar__icon">
                                                        <Image src="assets/images/shapes/skills-icon.png" alt="nextmarketing" />
                                                    </div>
                                                    <div className="footer__locationbar__info">
                                                        <ul className="reset-ul footer__locationbar__infolist">
                                                            <li><strong>Email: </strong> <a href="mailto:info@next.com" aria-label="email address">info@next.com</a></li>
                                                            <li><strong>Call us: </strong> <a href="tel:+17186385000" aria-label="tel number">+1 718-638-5000</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row-1 gutter-y-30">
                                            <div className="footer-widget footer-widget__col1">
                                                <h5 className="footer-widget__title">About us</h5>
                                                <p className="footer__text">
                                                    NextMarketing seamlessly integrates with a variety of industry-leading tools, ensuring a cohesive and efficient digital ecosystem for your business.
                                                </p>
                                                <ul className="reset-ul footer__socialwrap">
                                                    <li><a href="#" aria-label="social link"><i className="fa-brands fa-facebook"></i></a></li>
                                                    <li><a href="#" aria-label="social link"><i className="fa-brands fa-twitter"></i></a></li>
                                                    <li><a href="#" aria-label="social link"><i className="fa-brands fa-instagram"></i></a></li>
                                                    <li><a href="#" aria-label="social link"><i className="fa-brands fa-linkedin"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="footer-widget footer-widget__col2">
                                                <h5 className="footer-widget__title">Company</h5>
                                                <ul className="reset-ul footer-widget__links">
                                                    <li><a href="about.html" aria-label="page link">About Us</a></li>
                                                    <li><a href="career.html" aria-label="page link">Careers</a></li>
                                                    <li><a href="blog2.html" aria-label="page link">News</a></li>
                                                    <li><a href="contact.html" aria-label="page link">Contact</a></li>
                                                </ul>
                                            </div>
                                            <div className="footer-widget footer-widget__col3">
                                                <h5 className="footer-widget__title">Resources</h5>
                                                <ul className="reset-ul footer-widget__links">
                                                    <li><a href="blog.html" aria-label="page link">Blog</a></li>
                                                    <li><a href="contact.html" aria-label="page link">Help Center</a></li>
                                                    <li><a href="contact.html" aria-label="page link">Support</a></li>
                                                    <li><a href="about.html" aria-label="page link">Tutorial</a></li>
                                                </ul>
                                            </div>
                                            <div className="footer-widget footer-widget__col4">
                                                <h5 className="footer-widget__title">Social</h5>
                                                <ul className="reset-ul footer-widget__links">
                                                    <li><a href="#" aria-label="social link">Twitter</a></li>
                                                    <li><a href="#" aria-label="social link">Instagram</a></li>
                                                    <li><a href="#" aria-label="social link">LinkedIn</a></li>
                                                    <li><a href="#" aria-label="social link">Facebook</a></li>
                                                </ul>
                                            </div>
                                            <div className="footer-widget footer-widget__col5">
                                                <h5 className="footer-widget__otitle">Other links</h5>
                                                <ul className="reset-ul footer-widget__links">
                                                    <li><a href="#" aria-label="terms link">Terms</a></li>
                                                    <li><a href="#" aria-label="privacy link">Privacy</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="footer__bottom">
                            <div className="container-btm">
                                <div className="footer__bg footer__bottom-bg">
                                    <div className="footer__innermx footer__bottom-innermx">
                                        <div className="row-btm">
                                            <p className="footer__bottom__designed col-md-6 text-start">
                                                Designed and Developed By <a href="#" aria-label="web link" target="_blank">Kavya Yamsani</a>
                                            </p>
                                            <p className="footer__bottom__copyright col-md-6 text-end">
                                                Copyright: &copy; <span className="dynamic-year"> </span>. All Rights Reserved
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>


                </div >
            </div >
        </>
    );
}

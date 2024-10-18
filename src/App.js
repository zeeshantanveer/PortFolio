import { useEffect } from 'react';
import './App.css'; 

const App = () => {



  useEffect(() => {
    // Active menu and sticky header
    const menuLi = document.querySelectorAll('header ul li a');
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('header');
    const menuIcon = document.querySelector('#menu-icon');
    const navList = document.querySelector('.navList');

    // Function to handle active menu items
    const activeMenu = () => {
      let len = sections.length;
      while (--len && window.scrollY + 97 < sections[len].offsetTop) {}
      menuLi.forEach(sec => sec.classList.remove('active'));
      menuLi[len].classList.add('active');
    };

    // Function to handle sticky header
    const handleScroll = () => {
      header.classList.toggle('sticky', window.scrollY > 50);
      // Close the menu if open
      menuIcon.classList.remove('bx-x');
      navList.classList.remove('open');
    };

    // Function to handle menu toggle
    const handleClick = () => {
      menuIcon.classList.toggle('bx-x');
      navList.classList.toggle('open');
    };

    // Set initial active menu
    activeMenu();

    // Add event listeners
    window.addEventListener('scroll', () => {
      activeMenu();
      handleScroll();
    });

    menuIcon.addEventListener('click', handleClick);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', () => {
        activeMenu();
        handleScroll();
      });
      menuIcon.removeEventListener('click', handleClick);
    };
  }, []);

};

export default App;

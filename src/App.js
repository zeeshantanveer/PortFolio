import { useEffect } from 'react';
import './App.css'; 

const App = () => {


  useEffect(() => {

    //active menu //
    const menuLi = document.querySelectorAll('header ul li a');
    const sections = document.querySelectorAll('section');

    const activeMenu = () => {
      let len = sections.length;
      while (--len && window.scrollY + 97 < sections[len].offsetTop) {}
      menuLi.forEach(sec => sec.classList.remove('active'));
      menuLi[len].classList.add('active');
    };

    activeMenu();
    window.addEventListener('scroll', activeMenu);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', activeMenu);
    };
  }, []);

  //active menu //
  useEffect(() => {
    const header = document.querySelector('header');

    const handleScroll = () => {
      header.classList.toggle('sticky', window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const menuIcon = document.querySelector('#menu-icon');
    const navList = document.querySelector('.navList');

    const handleClick = () => {
      menuIcon.classList.toggle('bx-x');
      navList.classList.toggle('open');
    };

    const handleScroll = () => {
      menuIcon.classList.remove('bx-x');
      navList.classList.remove('open');
    };

    menuIcon.addEventListener('click', handleClick);
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listeners on component unmount
    return () => {
      menuIcon.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

};

export default App;

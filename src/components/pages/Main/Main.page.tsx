import './style.scss';
import React from 'react';
import { FaUserFriends } from 'react-icons/fa';
import { MdArrowForward } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../../hooks/useTheme.tsx';

function MainPage(props) {
  const { theme } = useTheme();
  const navigate = useNavigate();
  return (
    <section className="intro_section">
      <div className="intro_left-block">
        <h1 className="intro_title">
          Enjoy Our
          <br />
          Delicious Pizza
        </h1>
        <h2 className="intro_subtitle">
          We offer the freshest and tastiest pizza, prepared with love and attention to every
          detail. Our range includes classic favorite pizzas, gourmet masterpieces and vegetarian
          options for the most demanding tastes.
        </h2>
        <div className="intro_buttons">
          <button
            className="to-register-page-btn"
            onClick={() => navigate('/register')}
          >
            <span>Register</span>
            <FaUserFriends />
          </button>
          <button
            className="to-shop-page-btn"
            onClick={() => navigate('/shop')}
          >
            <span>Go to pizza shop</span>
            <MdArrowForward />
          </button>
        </div>
      </div>
      <div className="intro_right-block">
        <img
          src="./pz-pozza-removebg-preview.png"
          width={150}
          height={125}
          alt="levitating-pizza-preview"
        />
        <img
          src="./pz-pozza-removebg-preview.png"
          width={200}
          height={150}
          alt="levitating-pizza-preview"
        />
        <img
          src="./pz-pozza-removebg-preview.png"
          width={250}
          height={200}
          alt="levitating-pizza-preview"
        />
      </div>

      {theme === 'dark' && (
        <>
          <div className="background-color-ball first-ball" />
          <div className="background-color-ball second-ball" />
          <div className="background-color-ball third-ball" />
        </>
      )}
    </section>
  );
}

export default MainPage;

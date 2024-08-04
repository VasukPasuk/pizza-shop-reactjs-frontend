import { useState} from 'react';
import './style.scss';
import {IShopCard} from '../../../typing/interfaces.tsx';
import {FaEllipsisVertical} from 'react-icons/fa6';
import Button from '../Button/Button.tsx';
import {FLOUR_TYPES, SIZES} from "../../../constants.ts";
import {toast} from "react-toastify";
import {Flour, Size} from "../../../typing/types.tsx";
import {useNavigate} from "react-router-dom";




function ShopCard(props: IShopCard) {
  const {key, category, size = 'medium', discount, flour, inCart, name, popular, price, image} = props;
  const [activeActionMenu, setActiveActionMenu] = useState<boolean>(false);
  const [pizzaSize, setPizzaSize] = useState<Size>(size)
  const [pizzaFlour, setPizzaFlour] = useState<Flour>(flour)
  const [pizzaInCart, setPizzaInCart] = useState<boolean>(inCart)

  const onSelectFlourHandler = (flour: Flour) => () => {
    setPizzaFlour(() => flour)
  }

  const onSelectSizeHandler = (size: Size) => () => {
    setPizzaSize(() => size)
  }

  const onMainCardButtonHandler = () => {
    toast.success(`Pizza successfully ${ inCart ? 'removed from' : 'added to' } cart.`, {
      autoClose: 2500
    })
  }

  const onFaEllipsisVerticalClick = () => {
    setActiveActionMenu(prevState => !prevState)
  }

  return (
    <div
      className="product-shop-cart"
      data-in-cart={Boolean(inCart)}
      key={key}
    >
      <div className="tags-and-action-box">
        <div className="product-shop-cart__tags-box">
          {!!discount && <span className="card-tag discount-tag">- {discount}%</span>}
          {popular && <span className="card-tag popular-tag"> popular </span>}
        </div>
        <div className="action-menu-wrapper">
          <FaEllipsisVertical
            className="product-shop-cart__ellipsis-action-trigger"
            onClick={onFaEllipsisVerticalClick}
          />
          <ShopCardActionMenu
            inCart={pizzaInCart}
            name={name}
            setSize={onSelectSizeHandler}
            activeActionMenu={activeActionMenu}
            inCartHandler={setPizzaInCart}
            setActiveActionMenu={setActiveActionMenu}
          />
        </div>
      </div>
      <img
        src={`${import.meta.env.VITE_SERVER_URL}/${image}`}
        alt="pizza-image"
        className="pizza-image"
        loading="lazy"
        width={175}
        height={175}
      />

      <div className="pizza-name-box">
        {name}
      </div>
      <div className="category-name-box">
        {category}
      </div>

      <ul className="select-size-box">
        {SIZES.map((val, idx) => (
          <>
            {!!idx && (<div key={val + val} className="select-separator">|</div>)}
            <li
              key={val}
              data-selected={val === pizzaSize}
              onClick={onSelectSizeHandler(val as Size)}
            >
              {val}
            </li>
          </>
        ))}
      </ul>

      <ul className="select-flour-box">
        {FLOUR_TYPES.map((item, idx) => (
          <>
            {!!idx && (<div key={item + item} className="select-separator">|</div>)}
            <li
              key={item}
              data-selected={item === pizzaFlour}
              onClick={onSelectFlourHandler(item as Flour)}
            >
              {item}
            </li>
          </>
        ))}
      </ul>

      <div className="price-and-button-box">
        <div className="price-box">
          <span className="price-box__current-price">
            {price}
          </span>
          {!!discount && <div className="price-box__previous-price">
            {discount}$
	        </div>}
        </div>
        <Button
          variant={inCart ? 'warning' : 'main'}
          onClick={onMainCardButtonHandler}
        >
          {inCart ? 'Remove' : 'Add to cart'}
        </Button>
      </div>
    </div>
  );
}

export default ShopCard;

type ShopCardActionMenuProps = {
  inCart: boolean;
  inCartHandler: Function;
  setSize: Function;
  name: string;
  activeActionMenu: boolean;
  setActiveActionMenu: Function;
}

function ShopCardActionMenu({name,inCart, setSize, inCartHandler, activeActionMenu, setActiveActionMenu}:ShopCardActionMenuProps) {
  const navigate = useNavigate()

  const addToFavouritesHandler = ():void => {

  }

  if (!activeActionMenu) return
  return (
    <ul className="product-shop-cart__action-menu" onClick={() => setActiveActionMenu()}>
      <li
        className="product-shop-cart__action-menu__option"
        onClick={() => navigate(`pizza/${name.toLocaleLowerCase()}`)}
      >
        View
      </li>
      <li className="product-shop-cart__action-menu__option">
        <div className="product-shop-cart__action-menu__option__title">Select size</div>
        <ul className="product-shop-cart__action-menu__option__title__micropt-box">
          {SIZES.map((item, idx) => (
            <li key={idx} onClick={setSize(item as Size)}> {item} </li>
          ))}
        </ul>
      </li>
      <li className="product-shop-cart__action-menu__option" onClick={addToFavouritesHandler}>
        Add to favourites
      </li>
      <li className="product-shop-cart__action-menu__option" onClick={() => inCartHandler()}>
        {inCart ? 'Add to cart' : 'Remove'}
      </li>
    </ul>
  )
}

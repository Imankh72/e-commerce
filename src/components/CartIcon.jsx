import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";

import styled from "styled-components";

const CartIcon = () => {
  return (
    <CartIconWrapper>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </CartIconWrapper>
  );
};

export default CartIcon;

const CartIconWrapper = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  .shopping-icon {
    width: 24px;
    height: 24px;
    fill: var(--color-grey-1);
  }

  .item-count {
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
  }
`;

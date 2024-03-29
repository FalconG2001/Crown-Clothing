import styled from "styled-components";

import {
  GoogleSignInButton,
  InvertedButton,
  BaseButton,
} from "../button/button.styles";

export const FooterPC = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  .name {
    width: 90%;
    margin-bottom: 15px;
  }

  .price {
    width: 10%;
  }
`;

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  ${GoogleSignInButton}, ${BaseButton}, ${InvertedButton} {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    ${GoogleSignInButton}, ${BaseButton}, ${InvertedButton} {
      opacity: 0.85;
      display: flex;
    }
  }
`;

// .product-card-container {
// width: 100%;
// display: flex;
// flex-direction: column;
// height: 350px;
// align-items: center;
// position: relative;

// img {
//   width: 100%;
//   height: 95%;
//   object-fit: cover;
//   margin-bottom: 5px;
// }

// button {
//   width: 80%;
//   opacity: 0.7;
//   position: absolute;
//   top: 255px;
//   display: none;
// }

// &:hover {
//   img {
//     opacity: 0.8;
//   }

//   button {
//     opacity: 0.85;
//     display: flex;
//   }
// }

//   .footer {
// width: 100%;
// height: 5%;
// display: flex;
// justify-content: space-between;
// font-size: 18px;

// .name {
//   width: 90%;
//   margin-bottom: 15px;
// }

// .price {
//   width: 10%;
// }
//   }
// }

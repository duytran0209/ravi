import { css } from "styled-components";

export const GlobalClasses = css`
  //Nav Toggler
  .ham-burger-menu {
    position: absolute;
    right: 5%;
    top: 3%;
    display: none;
    opacity: 0;
    z-index: 15;
    svg {
      font-size: 3rem;
    }
  }

  @media screen and (max-width: 917px) {
    .ham-burger-menu {
      display: block;
      opacity: 1;
    }
  }
  .nav-toggle {
    transform: translateY(0) !important;
    z-index: 100;
  }
  body::-webkit-scrollbar {
    width: 9px;
    background-color: #383838;
  }
  body::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #6b6b6b;
  }
  body::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #383838;
  }
`;

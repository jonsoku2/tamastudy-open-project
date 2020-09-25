import styled from 'styled-components';
import A from '../../atoms/A/A';

export const Wrapper = styled.div`
  .menu-enter {
    opacity: 0;
    transform: translateX(-300px);
  }
  .menu-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }
  .menu-exit {
    opacity: 1;
  }
  .menu-exit-active {
    opacity: 0;
    transform: translateX(-300px);
    transition: opacity 300ms, transform 300ms;
  }
`;

export const Content = styled.div`
  width: 300px;
  height: 100%;
  background-color: aliceblue;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 1);
  z-index: 30000;
  display: grid;
  grid-auto-rows: 80px;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const Link = styled(A)`
  font-size: 2rem;
  text-decoration: none;
  padding: 32px;
  color:inherit;
`;
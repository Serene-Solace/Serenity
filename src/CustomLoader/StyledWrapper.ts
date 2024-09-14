import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const LoaderCircle = styled.div`
  border: 8px;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
  background: conic-gradient(rgba(25, 92, 103, 1) 0deg, rgba(255, 255, 255, 0.3) 270deg, rgba(255, 255, 255, 0.5) 340deg);
  mask-image: radial-gradient(farthest-side, transparent calc(100% - 8px), black calc(100% - 8px));
`
export const BackdropDiv = styled.div<{ $open: boolean }>`
  color: #fff;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: ${({ $open }) => ($open ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`

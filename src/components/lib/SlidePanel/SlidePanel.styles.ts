import styled from 'styled-components'

const animationTimeout = 250

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  // TODO(theme): use theme color
  z-index: 100;

  // Prevents the transformation on the Panel from forcing the browser to show a scrollbar.
  overflow: hidden;
`

const Backdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  transition: background-color;
  transition-timing-function: ease-in-out;
  transition-duration: ${animationTimeout}ms;
  background-color: transparent;
  .enter-active &,
  .enter-done & {
    background-color: #0000003b;
  }
  .exit-active & {
    background-color: transparent;
  }

  .exit & {
    pointer-events: none;
  }
`

const Panel = styled.div`
  // TODO(theme): use theme color
  background-color: white;

  width: 1200px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;

  transition: transform;
  transition-timing-function: ease-in-out;
  transition-duration: ${animationTimeout}ms;
  transform: translateX(1200px);
  .enter-active &,
  .enter-done & {
    transform: translateX(0);
  }
  .exit-active &,
  .exit-done & {
    transform: translateX(1200px);
  }
`

export { animationTimeout, Container, Backdrop, Panel }

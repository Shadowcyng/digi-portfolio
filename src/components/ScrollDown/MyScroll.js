import React from 'react'
import styled, { keyframes } from 'styled-components'
import { NavLink } from 'react-bootstrap';

const scale = keyframes`
  from {
    transform: translateY(-.6rem);
  }

  to {
    transform: translateY(-1rem);
  }
`;

const ScrollDown = styled.div`
position: relative;
bottom: 1.7rem;
width: 100%;
text-align: center;
color = #ffffff;
font-size: 1.2em;
background-color: tranparent;
text-shadow: 1px 1px #45a29e;
font-weight: bold;
z-index: 100;
animation: ${scale} .5s linear infinite alternate;


.turn{
    color: #ffffff;
    cursor: pointer;
    transform: rotate(90deg);
}
a{
  color: #fff;
}
`

const MyScroll = () => {
    return (
      <ScrollDown>
            <div className='turn'>
            <NavLink href='#about' >
                <span>&gt;</span>
            </NavLink>
            </div>
            </ScrollDown>
    )
}

export default MyScroll

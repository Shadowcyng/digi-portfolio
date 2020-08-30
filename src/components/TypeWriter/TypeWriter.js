import React from 'react'
import TypeWriterEffect from 'typewriter-effect'
import styled from 'styled-components'

const Titile = styled.h1`
position: absolute;
width: 100%;
top: 22rem;
z-index: 1;
margin-top: -125px;
text-align: center;
strong{
    font-size: 1.25em;
}
div{
    color: #66fcf1;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px; 
}
.main {
    font-size: 50px;
  }

  .sub-text {
    font-size: 27px;
    letter-spacing: 2px;
  }
`

const TypeWriter = () => {
    return (
        <Titile>
            <div>
                <div className='main text-center mb-3'>
                    Hi, I am
                    <br />
                    <span>
                        <strong>Satyam Singhania</strong>
                    </span>
                </div>
                <div className='sub-text'>
                    <TypeWriterEffect
                    options={{
                    strings: ["Web Developer", "Desginer", "Learner"],
                    autoStart: true,
                    loop: true,
                    delay: 50
                    }}
                    />
                </div>
            </div>

        </Titile>

       

    )
}

export default TypeWriter

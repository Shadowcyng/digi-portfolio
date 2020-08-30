import React from 'react'

import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import './SkillTemplate.css'

const SkillTemplate = ({skillSet, title}) => {
    return (
        <Card className='focus mt-2 mb-2'>
        <Card.Body>
          <Card.Title className='text-center card-title'>{title}</Card.Title>
          <hr className='hr' />
          <Row>
      
            <Col sm  className='d-flex flex-column justify-content-start align-content-start'>
               {skillSet.map((skill, index) => ( 
                 <a key={index} className="text-dark  text-decoration-none p-2" href={skill.link} target="_blank" rel="noopener noreferrer">
                   <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="skill_image m-1"></Image><span className= 'font-details'> {skill.skillName} </span>
                 </a>  
            )) }
            </Col>     
          </Row>
        </Card.Body>
      </Card>
    )
}

export default SkillTemplate

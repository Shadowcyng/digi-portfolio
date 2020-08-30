import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Accordion from "react-bootstrap/Accordion";
import P_ChatBox from '../../assets/img/projects/Chat-Box.webp'
import GitHubIcon from '@material-ui/icons/GitHub';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Styled from 'styled-components'
import './ProjectComponent.css'

const Div = Styled.div`
display : flex;
justify-content: space-between;
padding: 1rem;
`


const ProjectComponent = ({project}) => {
    return (

  <Card style={{ maxWidth: '20rem'}}>
  <Card.Header className=' text-center project-title'>{project.name}</Card.Header>
  <Card.Img variant="top" src={project.imgSrc} alt={project.imgAlt}/>
  
  <Card.Body>
    <Card.Text className='project-descrption'>
     {project.description}
    </Card.Text>
    </Card.Body>
    <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} className='text-center toggle' eventKey="0">
           <span className='product-details m-1'>Project Details</span> 
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body> 
              <h5 className='project-list-head'>Features:</h5>                 
                    <ul className='project-list'>
                     {project.features.map((feature, index )=> (
                          <li key={index}>{feature}</li>
                      ))  }
                    </ul>

                    <hr />
                    
                    <h5 className='project-list-head' >Tech Used:</h5>                 
                    <ul className='project-list'>
                     {project.tech.map((tech, index )=> (
                          <li key={index}>{tech}</li>
                      ))  }
                    </ul>
                    
                   {project.demoAccount && <> <hr /> <h5><i>Demo Account (Login with this or signup):</i></h5> 
                     <strong>Email: </strong> <i>{project.demoAccount.email}</i><br/>
                     <strong>Password: </strong> <i>{project.demoAccount.password}</i> </>}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    <Div>
    <Button variant="outline-dark" component={Card.Link} href={project.gitLink} target='_blank' rel='noopener'><GitHubIcon /> Source Code</Button>
    <Button variant="outline-dark" component={Card.Link} href={project.liveLink} target='_blank' rel='noopener'><VisibilityIcon /> Go Live</Button>
    </Div>

</Card>
    )
}

export default ProjectComponent

import React from 'react'
import ProjectComponent from './ProjectComponent'
import { Projects } from './MyProjects'
import {Container,Tab,Tabs, Row, CardColumns } from 'react-bootstrap'
import './ProjectComponent.css'
import { Slide } from '@material-ui/core'
import Graphics from './graphic/Graphics'



const ProjectPage = () => {
    return (
        <div className="pt-3 pb-3" id="projects">
        <h1 className="text-center font-details-b pb-4">PROJECTS</h1>
        <Tabs 
        variant='tabs'
         defaultActiveKey="1" 
        className='tabs'
         >
            <Tab tabClassName='tab text-center'  eventKey="1" title="Development">
                <CardColumns>
                <ProjectComponent project = {Projects.faceDetection}/>
                <ProjectComponent project = {Projects.screams}/>
                <ProjectComponent project = {Projects.chatBox} />
                <ProjectComponent project = {Projects.instaClone}/>
                </CardColumns>
            </Tab>
            <Tab tabClassName='tab' eventKey="2" title="Graphic">
               <Graphics />
            </Tab>

            </Tabs>
                    </div>
                )
            }

export default ProjectPage

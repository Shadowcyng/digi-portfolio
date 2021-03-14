import React from 'react';
import CodeIcon from '@material-ui/icons/Code';
import BrushIcon from '@material-ui/icons/Brush';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Experience.css';

const experience = () => {
	return (
		<div id='experience' className='experience-container  '>
			<h1 className='text-center pt-3 pb-3 heading '>EXPERIENCE</h1>

			<VerticalTimeline>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					date='September 2019 - Present'
					dateClassName='date'
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<CodeIcon />}
				>
					<h3 className='vertical-timeline-element-title pb-1 first-element'>
						Capegemini
					</h3>
					<h5 className='vertical-timeline-element-subtitle sub-title'>
						Software Developer
					</h5>
					<p className='paragraph'>
						<strong className='strong'>Location:</strong> Chennai, India <br />
						<strong className='strong'>Role:</strong> Developer & Production
						Support <br />
						<strong className='strong'>Duration:</strong> Sept. 2019 - Present{' '}
						<br />
						<strong className='strong'>Account:</strong> Kemper
						<br />
						<strong className='strong'>Technology:</strong> Guidewire, h2
					</p>
					<p className='paragraph'>
						<strong className='strong'>Description: </strong> Worked as
						Production Support providing system maintenance. Analyze the
						problems, debugging existing code to solve problems and performing
						CRUD operations on databases.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--education'
					date='2018-2019'
					dateClassName='date'
					iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
					icon={<BrushIcon />}
				>
					<h3 className='vertical-timeline-element-title pb-1 second-element'>
						Freelancing
					</h3>
					<h5 className='vertical-timeline-element-subtitle  sub-title'>
						Graphic Designer
					</h5>
					<p className='paragraph'>
						<strong className='strong'>Location:</strong> Ghaziabad, India
						<br />
						<strong className='strong'>Role:</strong> Graphic Designer
						<br />
						<strong className='strong'>Duration:</strong> 2017 - 2019 <br />
						<strong className='strong'>Tools:</strong> Photoshop, CorelDraw,
						Canva
					</p>
					<p className='paragraph'>
						<strong className='strong'>Description:</strong> Worked as a Graphic
						Designer for multiple small firms and as Graphic head in college
						during my graduation.
					</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div>
	);
};

export default experience;

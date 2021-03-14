import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';

// skills
import { skills } from './MySkill';
import SkillTemplate from './SkillTemplate';

const Skills = () => {
	return (
		<div className='pt-3 pb-3' id='skills'>
			<h1 className='text-center font-details-b pb-4'>TECH SKILLS</h1>
			<CardColumns>
				<SkillTemplate title='Frontend' skillSet={skills.frontend} />
				<SkillTemplate title='Backend' skillSet={skills.backend} />
				<SkillTemplate
					title='Programming Languages'
					skillSet={skills.programmingLanguages}
				/>
				<SkillTemplate
					title='Version Control'
					skillSet={skills.versionControl}
				/>
				<SkillTemplate
					title='Hosting Platforms'
					skillSet={skills.hostingPlatforms}
				/>
				<SkillTemplate title='Databases' skillSet={skills.databases} />
				<SkillTemplate title='Graphic Design' skillSet={skills.GrapicDesign} />
			</CardColumns>
		</div>
	);
};

export default Skills;

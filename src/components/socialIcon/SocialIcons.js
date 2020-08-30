import React from 'react'
import './SocialIcon.css'

import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const SocialIcons = () => {
    return (
<div className="social-icons">
<ul>
<a href="tel:+917037410641"><li><CallIcon /></li></a>
<a href="mailto:satyam.singhania123@gmail.com" target='_blank' ><li><MailIcon /></li></a>
<a href="http://www.linkedin.com/in/satyam-singhania" target='_blank'><li><LinkedInIcon /></li></a>
<a href="http://www.instagram.com/shadowcyng" target='_blank'><li><InstagramIcon /></li></a>
<a href="http://www.github.com/Shadowcyng" target='_blank' ><li><GitHubIcon /></li></a>
</ul>
</div>
    )
}

export default SocialIcons

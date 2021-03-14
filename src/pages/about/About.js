import React, { useEffect, useState } from 'react';
import Profile from '../../assets/img/profile/profile.webp';
//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import './About.css';

const About = () => {
	const [offsetY, setOffsetY] = useState(0);
	const handleScroll = () => setOffsetY(window.pageYOffset);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div id='about' className='about-container'>
			<h1
				className='text-center pt-3 pb-3 heading  '
				style={{ transform: `translateY(${offsetY * 0.075}px)` }}
			>
				ABOUT ME
			</h1>

			<Container>
				<Row className='pt-3 pb-5 align-items-center'>
					<Col md={6} xs={12}>
						<Row
							className='justify-content-center mb-2 mr-2 profile-image-container'
							style={{ transform: `translateY(${offsetY * 0.07}px)` }}
						>
							<Image
								className='profile-img justify-content-end'
								alt='profile'
								src={Profile}
								thumbnail
								fluid
							/>
						</Row>
					</Col>
					<Col md={6} xs={12}>
						<Row
							className='align-item-start p-2 mb-2 my-intro rounded'
							style={{ transform: `translateY(${offsetY * 0.065}px)` }}
						>
							Hi, I am <strong>&nbsp;Satyam Singhania</strong>
							<br />A passionate programmer and a Graphic Designer, born and
							brought up in UP, India. I am a Full Stack Web Developer with
							React.js, Redux, Express.js, Node.js, Firebase and MongoDB as my
							tech stack.
							<br />
							In 2019, I successfully completed my Engineering with
							specialization in 'Electronics and Instrumentations'.
							<br />
							Working with the clients, my goal is always driven towards
							providing amazing experience with the best level of quality and
							service to them.
							<br />
							I love learning about new technologies, what problems are they
							solving and How can I use them to build better and scalable
							products.
							<br /> <br />
							<Col className='d-flex justify-content-center flex-wrap'>
								<a href='#contact'>
									<Button className='m-2' variant='outline-primary'>
										Let's talk
									</Button>
								</a>
								<a
									href='https://drive.google.com/file/d/1VgtKTGHMpJf-o8GDC6eHK2WQxq-JPszK/view?usp=sharing'
									target='_blank'
									rel='noopener noreferrer'
								>
									<Button className='m-2' variant='outline-success'>
										My Resume
									</Button>
								</a>
								{/* <a href="https://github.com/Shadowcyng" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                    <a href="https://www.linkedin.com/in/satyam-singhania/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a> */}
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default About;

import P_FaceDetection from '../../assets/img/projects/Face-Detection.webp'
import P_Scream from '../../assets/img/projects/Scream.webp';
import P_InstaClone from '../../assets/img/projects/Insta-clone.webp'
import P_ChatBox from '../../assets/img/projects/Chat-Box.webp'

export const Projects= {
        screams: {
            name: 'Screamer - A Social Media App',
            imgSrc: P_Scream,
            imgAlt: 'project_picture',
            gitLink: 'https://github.com/Shadowcyng/social-media-app',
            liveLink: ' https://social-media-7433e.web.app/',
            description: 'This is a Social Media Platform using react and firebase funtions and express.',
            features: ['Register new user', 'Login existing user', 'Post your scremes',' Like', 'Comment','Delete', 'Edit Profile', 'Update display picture', 'Get notifications'],
            tech: ['React', 'Redux', 'Firebase', 'Express' ],
            demoAccount: {email:'john@snow.com', password:'123456'}
        }, 
      chatBox:  {
            name: 'Realtime Chat-Box',
            imgSrc: P_ChatBox,
            imgAlt: 'project_picture',
            gitLink: 'https://github.com/Shadowcyng/realtime-chat-box',
            liveLink: 'https://chat-box-client.herokuapp.com/',
            description: 'This is a realtime chatbox. Here you can put your name and a room name. By using the same room name and a different username you can easily chat with your friends. ',
            features: ['Multiple users can share same Room, Show the users online in a room, Realtime chat'],
            tech: ['React', 'Express', 'Soket.IO' ],
        }, 
        faceDetection:{
            name: 'Face-Detection App',
            imgSrc: P_FaceDetection,
            imgAlt: 'project_picture',
            gitLink: 'https://github.com/Shadowcyng/face-detection-app',
            liveLink: 'http://shadowcyng-face-detector.herokuapp.com/#0',
            description: 'This app uses a Clarifai API to detect faces if any face is there in the image.',
            features: ['Register new user', 'Login existing user', 'Keep track of enteries of each user'],
            tech: ['React', 'Express', 'Nodejs', 'Clarifai API', 'PostgreSQL' ],
            demoAccount: {email:'test@gmail.com', password:'Test@123'}
        }, 

       instaClone: {
            name: 'Insta-Clone',
            imgSrc: P_InstaClone,
            imgAlt: 'project_picture',
            gitLink: 'https://github.com/Shadowcyng/insta-clone',
            liveLink: 'https://instagram-clone-cbf80.web.app',
            description: 'This is an Instagram-clone with basic functionalities of Instagram like a sign in, log in with google, sign up, password reset, post image, comment, like, dislike, caption, etc.',
            features: ['Register new user', 'Login existing user', 'Foeget Password', 'Post Phots', 'Enter Caption', 'Like', 'Comment', 'Delete'],
            tech: ['React', 'Firebase'],
            demoAccount: {email:'test123@gmail.com', password:'test123'}
        }, 
    }   
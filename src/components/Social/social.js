import {BsLinkedin, BsGithub, BsStackOverflow} from 'react-icons/bs';

const social = [
  {
    "id":"link01",
    "site": "LinkedIn",
    "link": "https://www.linkedin.com/in/lucianakyoko",
    "icon": <BsLinkedin />
  },
  {
    "id":"link02",
    "site": "GitHub",
    "link": "https://github.com/lucianakyoko",
    "icon": <BsGithub />
  },
  {
    "id":"link03",
    "site": "Stackoverflow",
    "link": "https://pt.stackoverflow.com/users/213097/luciana-kyoko",
    "icon": <BsStackOverflow />
  }
]


export const getSocial = () => {
  return social;
}
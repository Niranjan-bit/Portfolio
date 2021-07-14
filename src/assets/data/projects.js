import { v4 as uuidv4 } from 'uuid';
import Mas from '../images/mas.png';
import Prosec1 from '../images/prosec1.png';
import Wm from '../images/wm.png';

const projects = [
  {
    id: uuidv4(),
    name: 'React Porfolio',
    desc: 'This current website is my portfolio too.',
    img: Prosec1,
  },
  {
    id: uuidv4(),
    name: 'Everything About Movies and Series',
    desc:
      'A website which can give you information about every movie/show you search.',
    img: Mas,
  },
  {
    id: uuidv4(),
    name: 'Walking Man Animation',
    desc:
      'UI animation created for fun purpose, which walks on screen from one side to another.',
    img: Wm,
  },
  {
    id: uuidv4(),
    name: 'Meme Generator',
    desc: 'A webpage where you can create memes. ',
    img: '',
  },
  {
    id: uuidv4(),
    name: 'Resume Builder',
    desc:
      'An online resume builder where you have to fill your information in input boxes and then it will generate your resume.',
    img: '',
  },
];

export default projects;

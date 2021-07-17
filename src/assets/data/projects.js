import { v4 as uuidv4 } from 'uuid';
import Mas from '../images/mas.png';
import Wm from '../images/wm.png';
import Pb from '../images/pb.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Everything About Movies and Series',
    desc:
      'A website which can give you information about every movie/show you search.',
    img: Mas,
  },
  {
    id: uuidv4(),
    name: 'Profile/Resume Builder',
    desc:
      'An online profile/resume builder where you have to fill your information in input boxes and then it will generate your resume.',
    img: Pb,
  },
  {
    id: uuidv4(),
    name: 'Walking Man Animation',
    desc:
      'UI animation created for fun purpose, which walks on screen from one side to another.',
    img: Wm,
  },
];

export default projects;

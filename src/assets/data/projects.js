import { v4 as uuidv4 } from 'uuid';
import Mas from '../images/mas.png';
import Wm from '../images/wm.png';

const projects = [
  {
    id: uuidv4(),
    name: 'React Porfolio',
    desc: 'This current website is my portfolio too.',
    img: '',
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
  /* {
    id: uuidv4(),
    name: 'ToDo List',
    desc: 'A ToDo list website created with ReactJS.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Tracking Soft',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: ProjectImg,
  }, */
];

export default projects;

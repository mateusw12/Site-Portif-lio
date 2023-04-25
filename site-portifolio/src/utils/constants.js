import { BsFillBookFill, BsFillFileEarmarkPostFill, BsFillClockFill } from 'react-icons/bs';
import { SiAboutdotme } from 'react-icons/si';

export const menuItems = [
    { name: 'Sobre', icon: <SiAboutdotme />, link: '/about'},
    { name: 'Skills', icon: <BsFillBookFill />, },
    { name: 'Experiência', icon: <BsFillClockFill />, },
    { name: 'Projetos', icon: <BsFillFileEarmarkPostFill />, },
];

import React from 'react';
import { FaAdjust, FaGithub } from 'react-icons/fa';
import { MdStarBorder } from 'react-icons/md';
import { Button } from '../../common/CommonComponents';
import AddRepoDropDown from '../AddRopoDropDown';
import RepositoryFilter from '../RepositoryFilter';
import SearchBar from '../SearchBar';
import ToggleListButton from '../ToggleListButton';
import { Container } from './style';

const NavBar: React.FC = () => {
  return (
    <Container>
      <section>
        <FaGithub size={25} color="#6B6C7E" />
        <span id="title">Github Compare</span>
      </section>
      <RepositoryFilter />
      <section id="search">
        <SearchBar />
      </section>
      <ul id="menu">
        <li>
          <Button>
            <MdStarBorder size={25} />
          </Button>
        </li>
        <li>
          <Button>
            <FaAdjust size={20} />
          </Button>
        </li>
        <li>
          <ToggleListButton />
        </li>
        <li>
          <AddRepoDropDown />
        </li>
      </ul>
    </Container>
  );
};

export default NavBar;

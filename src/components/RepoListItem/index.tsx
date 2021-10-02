import React from 'react';
import ClayCard from '@clayui/card';
import ClayLabel from '@clayui/label';
import { FiTrash2 } from 'react-icons/fi';
import { MdStarBorder, MdStar } from 'react-icons/md';
import { Container, Header, Body } from './style';
import logo from '../../assets/logo.png';

const RepoListItem: React.FC = () => {
  return (
    <Container>
      <ClayCard className="card">
        <Header>
          <section id="left">
            <img src={logo} alt="" width={40} height={40} />
            <span>Repository name</span>
          </section>
          <section id="right">
            <button type="button">
              <MdStarBorder size={23} />
            </button>
            <button type="button">
              <FiTrash2 size={23} />
            </button>
          </section>
        </Header>
        <Body>
          <ul>
            <li>
              <p>
                Stars <span>stars</span>
              </p>
            </li>

            <li>
              <p>
                Forks <span>forks</span>
              </p>
            </li>

            <li>
              <p>
                Open Issues <span>openIssues</span>
              </p>
            </li>
            <li>
              <p>
                Age <span>12</span>
              </p>
            </li>
            <li>
              <p>
                Last commit
                <span>23</span>
              </p>
            </li>
            <li>
              <p>
                License <span>license</span>
              </p>
            </li>
          </ul>
          <ClayLabel className="language" displayType="warning">
            language
          </ClayLabel>
        </Body>
      </ClayCard>
    </Container>
  );
};

export default RepoListItem;

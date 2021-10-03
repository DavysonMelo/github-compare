import React from 'react';
import ClayCard from '@clayui/card';
import ClayLabel from '@clayui/label';
import { MdStarBorder, MdStar } from 'react-icons/md';
import { Container, Header, Body } from './style';
import logo from '../../assets/logo.png';
import DeleteModal from '../DeleteModal';

interface Props {
  id: number;
  name: string;
  stars: number;
  forks: number;
  openIssues: number;
  age: string;
  lastCommit: string;
  license: string | undefined;
  starred: boolean;
  language: string;
}

const RepoListItem: React.FC<Props> = ({
  id,
  name,
  stars,
  forks,
  openIssues,
  age,
  lastCommit,
  license,
  starred,
  language,
}) => {
  return (
    <Container>
      <ClayCard className="card">
        <Header>
          <section id="left">
            <img src={logo} alt="" width={40} height={40} />
            <span>{name}</span>
          </section>
          <section id="right">
            <button type="button">
              {!starred ? <MdStarBorder size={23} /> : <MdStar size={23} />}
            </button>
            <DeleteModal />
          </section>
        </Header>
        <Body>
          <ul>
            <li>
              <p>
                Stars <span>{stars}</span>
              </p>
            </li>

            <li>
              <p>
                Forks <span>{forks}</span>
              </p>
            </li>

            <li>
              <p>
                Open Issues <span>{openIssues}</span>
              </p>
            </li>
            <li>
              <p>
                Age <span>{age}</span>
              </p>
            </li>
            <li>
              <p>
                Last commit
                <span> {lastCommit}</span>
              </p>
            </li>
            <li>
              <p>
                License <span>{license !== undefined ? license : `N/A`}</span>
              </p>
            </li>
          </ul>
          <ClayLabel className="language" displayType="warning">
            {language}
          </ClayLabel>
        </Body>
      </ClayCard>
    </Container>
  );
};

export default RepoListItem;

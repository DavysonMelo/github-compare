import React from 'react';
import ClayCard from '@clayui/card';
import ClayLabel from '@clayui/label';
import { MdStarBorder, MdStar } from 'react-icons/md';
import { Body, Container, Header } from './style';
import logo from '../../assets/logo.png';
import DeleteModal from '../DeleteModal';
import { useListContext } from '../../contexts/listViewContext';

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

const GridCard: React.FC<Props> = ({
  id,
  name,
  stars,
  forks,
  age,
  language,
  lastCommit,
  license,
  openIssues,
  starred,
}) => {
  const { toggleStarred } = useListContext();
  return (
    <Container>
      <ClayCard className="card">
        <Header>
          <section id="left">
            <img src={logo} alt="" width={40} height={40} />
            <span>{name}</span>
          </section>
          <section id="right">
            <button type="button" onClick={() => toggleStarred(id)}>
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
                <span>{lastCommit}</span>
              </p>
            </li>
            <li>
              <p>
                License <span>{license !== undefined ? license : `N/A`}</span>
              </p>
            </li>
            <li>
              <ClayLabel displayType="warning">{language}</ClayLabel>
            </li>
          </ul>
        </Body>
      </ClayCard>
    </Container>
  );
};

export default GridCard;

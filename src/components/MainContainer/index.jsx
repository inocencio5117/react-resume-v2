import { React } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { NavBar } from '../NavBar';
import { SideBar } from '../SideBar';
import { About } from '../../pages/About';
import { NavContent } from '../NavContent';
import { Resume } from '../../pages/Resume';

import { Container, ContentContainer, Content } from './styled';

export function MainContainer() {
  return (
    <BrowserRouter>

      <Container>
        <NavBar />
        <ContentContainer>
          <SideBar />
          <Content>
            <NavContent />

            <Switch>

              <Route path="/" exact>
                <About />
              </Route>
              <Route path="/resume">
                <Resume />
              </Route>

            </Switch>

          </Content>
        </ContentContainer>
      </Container>

    </BrowserRouter>
  );
}

import { React } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { NavBar } from '../NavBar';
import { SideBar } from '../SideBar';
import { About } from '../../pages/About';
import { NavContent } from '../NavContent';
import { Resume } from '../../pages/Resume';
import { Portifolio } from '../../pages/Portifolio';
import { ContactMe } from '../../pages/ContactMe';

import { Container, ContentContainer, Content } from './styled';

export function MainContainer() {
  return (
    <BrowserRouter>

      <Container>
        <ContentContainer>
          <SideBar />
          <Content>
            <NavBar />
            <NavContent />

            <Switch>

              <Route path="/" exact component={About}>
                <About />
              </Route>
              <Route path="/resume" exact component={Resume}>
                <Resume />
              </Route>
              <Route path="/portifolio" exact component={Portifolio}>
                <Portifolio />
              </Route>
              <Route path="/contactme" exact component={ContactMe}>
                <ContactMe />
              </Route>

            </Switch>

          </Content>
        </ContentContainer>
      </Container>

    </BrowserRouter>
  );
}

import { Home } from '../Tabs/Home/Home'
import { Movies } from '../Tabs/Movies/Movies'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export const App = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Home</Tab>
        <Tab>Movies</Tab>

        <TabPanel>
          <Home/>
        </TabPanel>
{        <TabPanel>
          <Movies />
        </TabPanel>}
      </TabList>
    </Tabs>
  );
};

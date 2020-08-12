import Layout from '../lib/components/layout/index';
import React from 'react';
import CommonHeader from './components/Header';
import CommonSideBar from './components/SideBar';
const { Header, Content, Aside } = Layout


const App: React.FC = ({
	children
}) => {
	return <Layout>
		<Header>
			<CommonHeader />
		</Header>
		<Layout>
			<Aside style={{flex: '0 0 280px'}}>
				<CommonSideBar />
			</Aside>
			<Content style={{padding: '30px'}}>{children}</Content>
		</Layout>
	</Layout>
};

export default App;
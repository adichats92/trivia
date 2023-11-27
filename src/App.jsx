import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import StaticTypeForm from './components/StaticTypeForm';
import './index.css';
import DynamicTypeForm from './components/DynamicTypeForm';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
	return (
		<>
			<Tabs
				defaultActiveKey='home'
				id='justify-tab-example'
				justify
			>
				<Tab
					eventKey='home'
					title='Home'
					className='mx-5 my-5'
				>
					<Home />
				</Tab>
				<Tab
					eventKey='StaticTForm'
					title='Beginner Trivia'
					className='mx-5 my-5 text-center'
				>
					<StaticTypeForm />
				</Tab>
				<Tab
					eventKey='DynamicTForm'
					title='Expert Trivia'
					className='mx-5 my-5 text-center'
				>
					<DynamicTypeForm />
				</Tab>
			</Tabs>
			<Footer />
		</>
	);
}

export default App;

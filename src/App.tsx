
import './App.css';
import git from './assets/25231.png'

function App() {
	  
	return (
		<div>
			<div style={{bottom: '0', fontFamily: 'lato', width: '100%', height: '100vh', display: 'flex', zIndex: 40, flexDirection: 'column', justifyContent: 'center'}}>
				<div style={{width: '100%', height: '10vh', display: 'flex', justifyContent: 'space-around'}}>
					<div className='button'>
						<img src='https://i.imgur.com/DGRV0oT.png' alt="Girl in a jacket" width="25%" height="65%" style={{paddingTop: '7%'}}/>
						<span style={{paddingTop: '12%'}}>
							Repository
						</span>
					</div>	
					<div className='button'>
						<span style={{paddingTop: '12%'}}>
							Download
						</span>
					</div>	
				</div>
				<div style={{width: '100%', height: '40vh'}}>

				</div>
				<div style={{width: '40%', height: '40vh', fontSize: '4vh', alignSelf: 'center', color: '#bfbfbf', textAlign: 'center', fontWeight: 50}} className='title'>
					Uma forma simples e eficiente de organizar o seu universo. Como deveria ser.
				</div>
			</div>
			<div>
				<link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'/>
				<div id="stars"></div>
				<div id="stars2"></div>
				<div id="stars3"></div>
				<div id="title">
					<span>
						TIMETRACKER
					</span>
					<br/>
					<br/>
				</div>
			</div>
		</div>
	);
}

export default App;

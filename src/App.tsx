
import './App.css';
import git from './assets/25231.png'

function App() {
	  
	return (
		<div>
			<div style={{bottom: '0', fontFamily: 'lato', width: '100%', height: '100vh', display: 'flex', zIndex: 40, flexDirection: 'column', justifyContent: 'center'}}>
				<div style={{width: '100%', height: '10vh', display: 'flex', justifyContent: 'space-around', flexDirection: 'row'}}>
					<div className='button'>
						<a href="https://github.com/gcrespe/timetracker-desktop" style={{justifyContent: 'space-evenly', flexDirection: 'row', display: 'flex', height: '100%'}}>
							<img src='https://i.imgur.com/DGRV0oT.png' alt="Girl in a jacket" width="32%" height="65%" style={{paddingTop: '7%'}}/>
							<div style={{paddingLeft: '10%', paddingTop: '15%'}}>
								Repository
							</div>
						</a>
					</div>	
					<div className='button'>
						<a href="https://mega.nz/file/0gkCRDIL#tKKjLx-ZmM4WKfRxPdjy7lMgA4YkRiXFI2u_Fs2mqbs" style={{justifyContent: 'space-evenly', flexDirection: 'row', display: 'flex', height: '100%'}}>
							<span style={{paddingTop: '25%'}}>
								Download
							</span>
						</a>
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

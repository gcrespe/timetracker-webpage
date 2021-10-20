import logo from './assets/logo.gif';
import './App.css';
import ImageGallery from 'react-image-gallery';

function App() {

	const images = [
		{
		  original: 'https://picsum.photos/id/1018/1000/600/',
		  thumbnail: 'https://picsum.photos/id/1018/250/150/',
		},
		{
		  original: 'https://picsum.photos/id/1015/1000/600/',
		  thumbnail: 'https://picsum.photos/id/1015/250/150/',
		},
		{
		  original: 'https://picsum.photos/id/1019/1000/600/',
		  thumbnail: 'https://picsum.photos/id/1019/250/150/',
		},
	  ];

	  
	return (
		<div className="App">
			<header className="App-header">

				<div className="Container">
					<div className="Header">
						Bem vindo ao Timetracker
					</div>
					<div style={{display: 'flex', flexDirection: 'row', width: '100%', height: '55vh', justifyContent: 'space-evenly'}}>

						<div style={{width: '35%', height: '55vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
							<div style={{display: 'flex', flexDirection: 'column', color: '#112d4e', fontSize: 18, alignContent: 'center'}}>
								O Timetracker é um projeto criado a partir do projeto de extensão ERUS, da UFSCar campus Sorocaba. O objetivo principal é desenvolver uma aplicação que pudesse ser usada de alguma forma pela sociedade, e como proposta surge a nossa aplicação.
							</div>
							<div style={{display: 'flex', flexDirection: 'column', color: '#112d4e', fontSize: 18, marginTop: '5%'}}>
								O projeto consiste em uma aplicação Desktop para Windows, desenvolvida utilizando ReactJS, Electron, NodeJS e MySQL. É possivel se registrar e utilizar a aplicação gratuitamente, cadastrar até três projetos diferentes e um número ilimitado de tarefas, acompanhando o tempo de desenvolvimento de cada uma delas
							</div>

						</div>

						<div style={{width: '45%', height: '55vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>

							<ImageGallery 
								items={images}
								showBullets={false}
								showFullscreenButton={false}
								autoPlay={true}
								showThumbnails={false}
								showNav={false}
								showPlayButton={false}	
							/>

						</div>

					</div>

				<div className='button'>
					<div className='line'></div> 
					<div className='line'></div>
					<div className='line'></div>
					<div className='line'></div>
					<div className='line'></div>
					<div className='line'></div>
					<div style={{marginTop: '4%', color: '#112d4e90', fontSize: '24px', letterSpacing: '1px'}}>Download</div>
				</div>
				
			</div>

				{/* <div style={{position: 'absolute', right: '-36.5%'}}>
				<img src={logo} alt="loading..." className="Image"/>
				</div> */}
			</header>
		</div>
	);
}

export default App;

import logo from './assets/logo.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className="Container">
          <div style={{display: 'flex', flexDirection: 'column', width: '90%', height: '12vh', justifyContent: 'center', color: '#112d4e', fontSize: 40, letterSpacing: 1}}>
            Bem vindo ao Timetracker
          </div>
          <div style={{display: 'flex', flexDirection: 'column', width: '90%', height: '12vh', justifyContent: 'center', color: '#112d4e', fontSize: 16}}>
            O Timetracker é um projeto criado a partir do projeto de extensão ERUS, da UFSCar campus Sorocaba. O objetivo principal é desenvolver uma aplicação que pudesse ser usada de alguma forma pela sociedade, e como proposta surge a nossa aplicação.
          </div>

          <div style={{display: 'flex', flexDirection: 'column', width: '90%', height: '12vh', color: '#112d4e', fontSize: 22}}>
            O projeto consiste em uma aplicação Desktop para Windows, desenvolvida utilizando ReactJS, Electron, NodeJS e MySQL. É possivel se registrar e utilizar a aplicação gratuitamente, cadastrar até três projetos diferentes e um número ilimitado de tarefas, acompanhando o tempo de desenvolvimento de cada uma delas
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

        <div style={{position: 'absolute', right: '-36.5%'}}>
          <img src={logo} alt="loading..." className="Image"/>
        </div>
      </header>
    </div>
  );
}

export default App;

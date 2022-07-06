import './App.css';

import Header from './components/Header';
import Menu from './components/Menu';

function App() {
    return (
        <div>
            <Header />
            <div className='app'>
                <div className='course-title-bg'></div>
                <Menu />
            </div>
        </div>
    );
}

export default App;

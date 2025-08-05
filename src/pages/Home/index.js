import { Link } from 'react-router-dom';
 
function Home() {
  return (
    <div>
      <h1>Bem-vindo à página Home</h1>
      <p>Programação e Design</p>
      <br/>
      <Link to="/">Home</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/contato">Contato</Link>
    </div>
  );
}

export default Home;

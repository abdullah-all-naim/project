import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Header from './Header/Header';
import Subscriber from './Subscriber/Subscriber';
import Benefit from './Benefit/Benefit';
import Article from './Article/Article';
import SignUp from './SignUp/SignUp';
import Faq from './Faq/Faq';
import ChatAdmin from './ChatAdmin/ChatAdmin';
import Testimonial from './Testimonial/Testimonial';

function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <div style={{ backgroundColor: '#F1F1F1' }}>
        <Header></Header>
        <Subscriber></Subscriber>
        <Benefit></Benefit>
        <Testimonial></Testimonial>
        <Faq></Faq>
        <ChatAdmin></ChatAdmin>
        <SignUp></SignUp>
        <Article></Article>
      </div>

    </BrowserRouter>
  );
}

export default App;

import './App.css';
import Header from './Header';
import Stories from './Stories';
import FeedForm from './FeedForm';
import FeedPost from './FeedPost';

function App() {
  return (
    <div className="App">
      <Header />
      <Stories />
      <FeedForm />
      <FeedPost />
    </div>
  );
}

export default App;

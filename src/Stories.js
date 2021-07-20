import danki_bg from './resources/danki.png';

export default function(){
    return(
        <div className="stories">
        <div className="storiesCard" style={{backgroundImage: `url(${danki_bg})`}}>
          <p>Jean Maciel</p>
        </div>
        <div className="storiesCard" style={{backgroundImage: `url(${danki_bg})`}}>
          <p>Jean Maciel</p>
        </div>
        <div className="storiesCard" style={{backgroundImage: `url(${danki_bg})`}}>
          <p>Jean Maciel</p>
        </div>
        <div className="storiesCard" style={{backgroundImage: `url(${danki_bg})`}}>
          <p>Jean Maciel</p>
        </div>
        <div className="storiesCard" style={{backgroundImage: `url(${danki_bg})`}}>
          <p>Jean Maciel</p>
        </div>
      </div>
    );
}
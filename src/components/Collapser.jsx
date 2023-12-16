import './Collapser.css'


const Collapser = ( {prompt, cred}) => {
    return (
      <details>
        <summary>
 
          <span class="icon">➕</span>
        </summary>
        <p className='collapse-text'> Input prompt:"{prompt}" </p>
        <p className='collapse-text'> Image generation by {cred} </p>
      </details>
    );
  }
  
  export default Collapser;
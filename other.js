function App(props) {
    console.log(props)
    return (
      <div>
      {props.children}
  
      </div>
    );
  }
  
  ReactDOM.render(
    <App className='new-class-name'>
      <header>
          <h1>Sally Student</h1>
          <p>I'm an aspiring full stack web developer. I love cats, coding, and crocheting.</p>
      </header> 
          
      <main>
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
          </ul>
      </main>
      <section>
          <h2>Education</h2>
          <p>Blah</p>
      </section>
      <section>
          <h2>Employment History</h2>
          <ul>
              <li>Yadda</li>
              <li>Nadda</li>
          </ul>
      </section>
      <section>
          <h2>Contact Info</h2>
          <p>name</p>
          <address>
          <a href="#">sally@email.com</a><br/>
          <a href="#">+123-456-7890</a><br/>
          </address>
          <p>Twitter: <a href="https://twitter.com/sallyStudent">@sallyStudent</a></p>
          <img src= 'https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg' />
  
      </section>
      </App>,
    document.querySelector('#application-root')
  );
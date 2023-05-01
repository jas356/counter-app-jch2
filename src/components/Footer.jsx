export default function Footer () {
    const githubURL = 'https://github.com/jas356/counter-app-jch2'
      return (
        <footer>
          <p><small>&copy; 2023</small><br />
          <a href={githubURL} target="_blank" rel="noreferrer">Code in Github</a></p>
        </footer>
      )
    }
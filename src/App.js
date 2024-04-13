import {
	BrowserRouter as Router,
	Routes,
	Route,
  } from "react-router-dom";
 
  import Content from './Content';
  
  
  function App() {
	return (
	  <Router basename={process.env.PUBLIC_URL}>
		<Routes>
		  <Route path="/" element={<Content />} />
		</Routes>
	  </Router>
	);
  }
  
  export default App;

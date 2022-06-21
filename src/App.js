import First from "./first/first";
import About from "./about/about";
import Portfolio from "./portfolio/portfolio";
import Footer from "./footer/footer";
import Skills from "./skills/skills";
import Register from "./register/register"



import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
      {/* <h1>Hello</h1> */}
      <First/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Footer/>
      <Register/>
    </div>
  );
}

export default App;

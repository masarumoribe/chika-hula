import {Hero, Profile, Classes, Instructors, Gallery, ContactUs, Footer} from './sections'
import Nav from './components/Nav';

const App = () => (
  <main className="relative">
    <Nav />
    <section className=""><Hero /></section>
    <section className=""><Profile /></section>
    {/* <section className="padding"><Classes /></section>
    <section className="padding"><Instructors /></section> */}
    <section className=""><Gallery /></section>
    <section className=""><ContactUs /></section>
    <section className=""><Footer /></section>
  </main>
)

export default App;
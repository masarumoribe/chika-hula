import {Hero, Profile, Classes, Instructors, Gallery, Testimonials, Footer} from './sections'
import Nav from './components/Nav';

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-1 wide:padding-b"><Hero /></section>
    <section className="padding"><Profile /></section>
    <section className="padding"><Classes /></section>
    <section className="padding"><Instructors /></section>
    <section className="padding"><Gallery /></section>
    <section className="padding"><Testimonials /></section>
    <section className="padding"><Footer /></section>
  </main>
)

export default App;
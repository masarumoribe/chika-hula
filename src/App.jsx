import {Hero, Profile, Classes, Instructors, Gallery, ContactUs, Footer} from './sections'
import Nav from './components/Nav';
import Overlay from './components/Overlay';

const App = () => (
  <main className="relative overflow-hidden">
    <Nav />
    <section className=""><Hero /></section>
    <div className="absolute top-80 -left-96"><Overlay /></div>
    <section className=""><Profile /></section>
    <div className="w-[700px] absolute top-[1500px] -right-72"><Overlay /></div>
    <section className=""><Classes /></section>
    {/* <section className="padding"><Instructors /></section> */}
    <section className=""><Gallery /></section>
    <section className=""><ContactUs /></section>
    <section className=""><Footer /></section>
  </main>
)

export default App;
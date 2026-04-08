import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
const menuVideo = 'https://github.com/ishanrawat97/persona-resume/releases/download/v1.0/Mainn.mp4'
const main1 = 'https://github.com/ishanrawat97/persona-resume/releases/download/v1.0/main1.mp4'
const main2 = 'https://github.com/ishanrawat97/persona-resume/releases/download/v1.0/main2.mp4'
const main3 = 'https://github.com/ishanrawat97/persona-resume/releases/download/v1.0/main3.mp4'
import P3Menu from './P3Menu'
import VideoPage from './VideoPage'
import ResumePage from './ResumePage'
import PageTransition from './PageTransition'
import Socials from './Socials'
import AboutMe from './AboutMe'
import SideProjects from './SideProjects'
import './App.css'

function MenuScreen() {
  const navigate = useNavigate()
  return (
    <div id="menu-screen">
      <video src={menuVideo} autoPlay loop muted playsInline />
      <P3Menu onNavigate={(page) => navigate(`/${page}`)} />
    </div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition><MenuScreen /></PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition variant="about"><AboutMe /></PageTransition>
        } />
        <Route path="/resume" element={
          <PageTransition><ResumePage src={main2} /></PageTransition>
        } />
        <Route path="/socials" element={
          <PageTransition variant="socials"><Socials /></PageTransition>
        } />
        <Route path="/sideproj" element={
          <PageTransition><SideProjects src={main3} /></PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  )
}

function ControlsHint() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  return (
    <div className="global-controls">
      <span className="gc-key">↑↓</span><span className="gc-label">SELECT</span>
      <span className="gc-sep" />
      <span className="gc-key">↵</span><span className="gc-label">CONFIRM</span>
      {!isHome && <>
        <span className="gc-sep" />
        <span className="gc-key">ESC</span><span className="gc-label">BACK</span>
      </>}
    </div>
  )
}

export default function App() {
  return (
    <>
      <AnimatedRoutes />
      <ControlsHint />
    </>
  )
}

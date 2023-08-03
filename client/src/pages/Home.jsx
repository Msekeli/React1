import React from 'react'
import {motion, AnimatePresence} from 'framer-motion';
import state from '../store';
import {useStateShot} from 'valtio';
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion';
const Home = () => {
    const snap = useStateShot(state);

  return (
   <AnimatePresence>
    {snap.intro &&(
    <motion.section className='home' {...slideAnimation('left')}>
        <motion.header>
            <img src="./treejs.png" alt="logo" className='w-8 h-8 object-contain'/>
        </motion.header>
    </motion.section>)}
   </AnimatePresence>
  )
}

export default Home

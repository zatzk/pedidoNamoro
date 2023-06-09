'use client';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import ConfettiExplosion, { ConfettiProps } from 'react-confetti-explosion';
import Confetti from 'react-confetti';
import Modal from 'react-modal';
import YouTube from 'react-youtube';


const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%,-50%)',
  }
}


const VideoModal = ({isOpen, onClose, videoId}: any) => {
 
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Youtube Video Modal"
      style={modalStyles}
    >
      <button className='absolute top-2 right-2 text-white' onClick={onClose}>
        Close
      </button>
      <YouTube videoId={videoId}/>

    </Modal>
  )
}


const buttonVar1 = {
  hover: {
    scale: 2.5,
    rotate: 360,
    transition: {
      duration: 0.5,
      repeat: Infinity,
      ease: 'linear'
    },
  },
  tap: {
    scale: 0.9,
  },
  
};
const buttonVar2 = {
  hover: {
    scale: 0.5,
    transition: {
      duration: 0.1,
    },
  },
};


export const NoButton = () => {
  const [position, setPosition] = useState('static');
  const [left , setLeft] = useState(0);
  const [top , setTop] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const youtubeVideoId = '3wNJ_ySBa4Y'

  

  const handleMouse = () => {
    setPosition('absolute');
    setLeft(Math.floor(Math.random() * window.innerWidth));
    setTop(Math.floor(Math.random() * window.innerHeight));
  }



  const handleClick = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div 
      className={`position: ${position} m-4`}
      style={{left: `${left}px`, top: `${top}px`}}
      onMouseOver={handleMouse}
      >
      <motion.button
        className="
          text-white 
          bg-gray-600
          hover:bg-gradient-to-l 
          font-medium 
          rounded-lg 
          text-xs 
          px-5 
          py-3 
          text-center 
          mt-4
          mr-2 
          mb-2
        "
        variants={buttonVar2}
        whileHover="hover"
        whileTap="tap"
        onClick={handleClick} 
      > 
        Não
      </motion.button>
      <VideoModal isOpen={isModalOpen} onClose={closeModal} videoId={youtubeVideoId}/>
    </div>

  );
}

const largeProps: ConfettiProps = {
  force: 1.5,
  duration: 3000,
  particleCount: 400,
  width: 3000,
  colors: ['#041E43', '#1471BF', '#5BB4DC', '#FC027B', '#66D805'],
};

export const YesButton = () => {
  const [isLargeExploding, setisLargeExploding] = useState(false);
  const [isRainingConfetti, setisRainingConfetti] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const youtubeVideoId = 'orWnzqBA63w'

  useEffect(() => {
    const timer = setTimeout(() => {
      setisLargeExploding(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [isLargeExploding]);

  const handleClick = () => {
    setisLargeExploding(true);
    setisRainingConfetti(true);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {isRainingConfetti && <Confetti width={window.innerWidth} height={window.innerHeight}/>}
      <motion.button
        className="
          text-white 
          bg-gradient-to-r 
          from-purple-500 
          to-pink-500 
          hover:bg-gradient-to-l 
          focus:ring-4 
          focus:outline-none 
          focus:ring-purple-200 
          dark:focus:ring-purple-800 
          font-semibold 
          rounded-lg 
          text-xl 
          px-20
          py-3 
          text-center 
          mt-2
          mr-4 
          mb-2
        "
        variants={buttonVar1}
        whileHover="hover"
        whileTap="tap"
        onClick={handleClick}
      > 
      {isLargeExploding && <ConfettiExplosion {...largeProps} />}
      Sim
    </motion.button>
    <VideoModal isOpen={isModalOpen} onClose={closeModal} videoId={youtubeVideoId}/>
  </div>
  );
}

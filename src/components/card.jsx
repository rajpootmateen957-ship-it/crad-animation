import React from 'react'
import { FaFileInvoice } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { motion } from 'framer-motion';

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 250, bounceDamping: 25 }}
      whileDrag={{ scale: 1.05, zIndex: 50 }}
      whileHover={{ scale: 1.08, zIndex: 40 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className='relative flex-shrink-0 w-44 h-60 rounded-[35px] bg-zinc-900/90 text-white p-4 overflow-hidden shadow-xl select-none cursor-grab active:cursor-grabbing'
    >
      <FaFileInvoice />
      <p className='text-xs leading-tight mt-4 font-semibold'>{data.desc}</p>
      <div className='absolute bottom-0 w-full left-0'>
        <div className='flex items-center justify-between px-6 py-2 mb-2'>
          <h5 className='text-xs'>{data.filesize}</h5>
          <LuDownload size={14} />
        </div>
        {data.tag.isOpen && (
          <div className='tag w-full items-center justify-center py-3 flex bg-green-600'>
            <h3 className='text-xs font-semibold'>{data.tag.tagtitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default Card
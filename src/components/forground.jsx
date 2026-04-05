import React, { useRef } from 'react'
import Card from './card'

function Forground() {

  const ref = useRef(null);
  const data = [
    { desc: "This is the background color of the card that displayed. ",
      filesize: ".9mb",
      close: "true",
      tag: {isOpen: true, tagtitle: 'Download Now', tagcolor: 'green'}
    },
    { desc: "This is the background color of the card that displayed. ",
      filesize: ".9mb",
      close: "true",
      tag: {isOpen: true, tagtitle: 'Download Now', tagcolor: 'green'}
    },
    { desc: "This is the background color of the card that displayed. ",
      filesize: ".9mb",
      close: "true",
      tag: {isOpen: true, tagtitle: 'Download Now', tagcolor: 'green'}
    },
  ];

  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-screen flex gap-5 flex-wrap p-5'>
      {data.map((item, index) => (
        <Card key={index} data={item} reference={ref} />
      ))}
    </div>
  )
}

export default Forground
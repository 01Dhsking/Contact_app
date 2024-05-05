import React from 'react'
import { CircleAlert } from 'lucide-react';

export const Not = () => {
  return (
    <div className='flex items-center justify-center gap-4 h-[60vh]'>
        <div>
          <div className='flex items-center justify-center'>
            <CircleAlert size={150} color='gray'/>
          </div>
        <h3 className='text-3xl font-semibold text-gray-600 text-center my-2'>
          Aucun contact
        </h3>
      </div>
    </div>
  )
}

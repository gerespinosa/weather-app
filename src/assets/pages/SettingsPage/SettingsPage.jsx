import React, {useContext} from 'react'

import { ScaleContext } from '../../context/ScaleContext'

import { Link } from 'react-router-dom'

export const SettingsPage = () => {

    const {scale, setScale} = useContext(ScaleContext)

    const handleChange = (e) => {
        e.preventDefault()
        setScale(e.target.value)
    }

  return (
    <div className="w-screen h-screen p-4 relative flex flex-col gap-4 text-white"
            style={{ backgroundImage: 'linear-gradient(to bottom, #e88d25, #a2a2d0, #191970, #000000)' }}>
        
        <Link to='/' className='text-white'><i className="fa-solid fa-circle-arrow-left"></i> Back</Link>
        <div className='flex justify-between' > 
            <p>Measurement scale</p>
            <select name="scale" id="scale" 
            onChange={handleChange}
            value={scale}
            className='w-1/3 bg-transparent back'>
                <option className='text-black text-right'>Celsius</option>
                <option className='text-black text-right'>Farenheit</option>
            </select>
        </div>

    </div>
  )
}

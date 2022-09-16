import React, {useState} from 'react'

interface Props {
  className?: string; 
  description: string; 
  selectName: string; 
  options: string[] | number[];
  passData: (name : string, selectedValue: string | number ) => void; 
}

export default function Dropdown({className, description, selectName, options, passData} : Props) {
    const [selectedValue, setSelectedValue] = useState(options[0]);

    const optionList = options.map((element, index) => {
        return <option key={index} value={element}>{element}</option>
    })

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value; 
        const name = e.target.name; 
        setSelectedValue(value); 
        passData(name, value); 
    }

  return (
    <div className={`py-1 px-3 flex w-full ${className}`}>
      <div className='w-full flex justify-start'>
        <h1 className="text-mainFontColor">{description}</h1>
      </div>
      <div className='w-full flex justify-end'>
        <select className="text-center w-20 text-mainFontColor" value={selectedValue} onChange={handleChange} name={selectName}>
        {optionList}
        </select>
      </div>
    </div>

  )
}

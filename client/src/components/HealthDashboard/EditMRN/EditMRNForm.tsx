import React, {ChangeEvent, useContext, useState} from 'react'
import AuthContext from '../../../context/authContext'
import Button from '../../UI/Button';
import Dropdown from '../../UI/Dropdown';
import Input from '../../UI/Input'

export default function EditMRNForm() {
    const {user, userHealth} = useContext(AuthContext); 
    const [formValues, setFormValues] = useState({
        preferredPronouns: user.preferredPronouns.join(", "),
        preferredName: user.preferredName,
        gender: userHealth.gender, 
        sex: userHealth.sex,
        bloodGroup: userHealth.bloodGroup, 
        weight: userHealth.weight,
        age: userHealth.age
    })

    // list of blood groups
    const bloodGroups = ["O-", "O+", "B-", "B+", "A-", "A+", "AB-", "AB+"];

    // Receive dropdown blood group data 
    const receiveBloodData = (name: string, selectedValue : string | number) => {
        setFormValues({...formValues, [name] : selectedValue})        
    }

    // Receive dropdown biological sex data 
    const receiveSexData = (name : string, selectedValue : string | number) => {
        setFormValues({...formValues, [name] : selectedValue})
    }

    // Generic handle change for inputs 
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value; 
        const name = e.target.name; 

        setFormValues({...formValues, [name]: value})
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formValues);
    }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <Input label="Preferred Pronouns" name="preferredPronouns" onChange={handleChange} value={formValues.preferredPronouns} /> 
        <Input label="Preferred Name" name="preferredName" onChange={handleChange} value={formValues.preferredName} /> 
        <Input label="Gender" name="gender" onChange={handleChange} value={formValues.gender} /> 
        <Dropdown description="Sex" selectName="sex" options={["M", "F"]} passData={receiveSexData} />
        <Dropdown description="Blood Group" selectName="bloodGroup" options={bloodGroups} passData={receiveBloodData} />
        <Input label="Age" name="age" onChange={handleChange} value={formValues.age} /> 
        <Input label="Weight (kg)" name="weight" onChange={handleChange} value={formValues.weight} />
        <Button type="submit" text="Submit"  />
    </form>
  )
}

import React from 'react'
import StudentDetails from "./StudentDetails"
import "./Accordion.css"

export default function Accordion({ students, searchTerm }) {
    const [selected, setSelected] = React.useState(null)

    const toggle = i => {
        if (selected === i) return setSelected(null)
        setSelected(i)
    }

    const searchFormatter = (val) => {
        const firstName = val.firstName.toLowerCase().includes(searchTerm.toLowerCase())
        const lastName = val.lastName.toLowerCase().includes(searchTerm.toLowerCase())
        return firstName || lastName
    }

    const plusIcon = <svg className="w-10 h-10 text-gray-600 hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
    const minusIcon = <svg className="w-10 h-10 text-gray-600 hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>

    return (
        <div className="flex justify-center items-center">
            <div className="w-full">
                {students.length > 0 && students.filter((val) => {
                    if (searchTerm === "") {
                        return val
                    } else if (searchFormatter(val)) {
                        return val
                    }
                }).map((student, i) => (
                    <div key={student.id} className="bg-white border-b p-5 py-5 flex" >
                        <div className="mr-8 mt-5">
                            <img className="w-40 border rounded-full object-cover" src={student.pic} />
                        </div>

                        <div className="w-full">
                            <div className="text-gray-800 flex justify-between cursor-pointer items-center" onClick={() => toggle(i)}>
                                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase font-bold">{student.firstName} {student.lastName}</div>
                                <span>{selected === i ? minusIcon : plusIcon}</span>
                            </div>

                            <StudentDetails student={student} />

                            <div className={selected === i ? "content show" : "content"}>
                                {student.grades.map((grade, i) => <li key={i}>Test {i}: {grade}%</li>)}
                            </div>

                            <div className="w-56 pb-2">
                                <input type="text" className="border-b w-full py-2 outline-none" placeholder="Add a tag" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

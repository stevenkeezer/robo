import React from 'react'

export default function StudentDetails({ student }) {
    const calculateAverageGrade = (grades) => {
        const total = grades.reduce((curr, acc) => Number(curr) + Number(acc), 0)
        return (total / grades.length).toFixed(2)
    }

    return (
        <div className="text-gray-700 pb-2">
            <div>Email: {student.email}</div>
            <div>Company: {student.company}</div>
            <div>Skill: {student.skill}</div>
            <div>Average: {calculateAverageGrade(student.grades)}%</div>
        </div>
    )
}

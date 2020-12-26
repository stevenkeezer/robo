import React from 'react'

const Accordion = React.lazy(() => import('../components/Accordion'))

export default function Home() {
    const [students, setStudents] = React.useState({})
    const [searchTerm, setSearchTerm] = React.useState('')

    async function getData() {
        let response = await fetch('https://api.hatchways.io/assessment/students');
        let data = await response.json()
        return data;
    }

    const searchHandler = (e) => {
        e.preventDefault()
        setSearchTerm(e.target.value)
    }

    React.useEffect(() => {
        getData()
            .then(data => setStudents(data.students))
    }, [])

    return (
        <div className="min-h-screen flex flex-col mx-auto bg-gray-300">
            <div className="bg-white xl:w-1/2 sm:w-3/4 w-full mx-auto m-10 rounded-lg pb-4 shadow">
                <div className="mx-5">
                    <input type="text" className="border-b w-full outline-none py-4" placeholder="Search by name" value={searchTerm} onChange={searchHandler} />
                    <input type="text" className="border-b w-full outline-none py-4" placeholder="Search by tag" />
                </div>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Accordion searchTerm={searchTerm} students={students} />
                </React.Suspense>
            </div>
        </div>

    )
}

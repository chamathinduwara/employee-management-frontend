import './AddEmployee.css'

const AddEmployee = () => {
  return (
    <div className="flex max-w-2xl shadow-lg border-b mx-auto">
        <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1>ADD NEW EMPLOYEE</h1>
            </div>

            <div className='items-center justify-center h-14 w-full my-4 mb-10'>
                <label className='block text-gray-800 text-sm font-normal' htmlFor='firstname'>First Name</label>
                <input type='text' id='firstname' name='firstname' placeholder='First Name' className='border h-10 w-96 mt-2 px-2 py-2'/>
            </div>

            <div className='items-center justify-center h-14 w-full my-4 mb-10'>
                <label className='block text-gray-800 text-sm font-normal' htmlFor='lastname'>Last Name</label>
                <input type='text' id='lastname' name='lastname' placeholder='Last Name' className='border h-10 w-96 mt-2 px-2 py-2'/>
            </div>

            <div className='items-center justify-center h-14 w-full my-4 mb-10'>
                <label className='block text-gray-800 text-sm font-normal' htmlFor='email'>Email</label>
                <input type='email' id='email' name='email' placeholder='Email' className='border h-10 w-96 mt-2 px-2 py-2'/>
            </div>

            <div className='items-center justify-center h-14 w-full my-4 mb-10 space-x-5'>
                <button className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 px-6 py-2'>
                    Save
                </button>
                <button className='rounded text-white font-semibold bg-red-400 hover:bg-red-700 px-6 py-2'>
                    Clear
                </button>
            </div>
        </div>
    </div>
  )
}

export default AddEmployee
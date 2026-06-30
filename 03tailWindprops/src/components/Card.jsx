import React from 'react'

function Card({username, btnText = "VistMe"}) {
  return (
        <>
        <div className="min-h-screen flex justify-center items-center bg-gray-200">
      <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
        <img
          src="https://picsum.photos/301"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />

        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">
              {username}
            </h2>

            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <button className="w-full p-3 rounded-md bg-gray-800">
            {btnText}
          </button>
        </div>
      </div>
    </div>
        </>
  )
}

export default Card
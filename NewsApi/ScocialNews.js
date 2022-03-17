import React from 'react'

function ScocialNews({textTwo}) {
  return (
    <>
         <div className="container">
                <div className="max-w-sm rounded overflow-hidden shadow-lg " key={new Date().getTime().toString()}>
                    <img className="w-full" src={textTwo.urlToImage} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                            <span>{textTwo.author}</span> <br /> <br />
                            <span>{textTwo.title}</span>


                            <p className="font-bold text-xl mb-2">{textTwo.email}</p>
                        </div>
                        <p className="text-gray-700 text-base">
                            {textTwo.description}
                        </p>
                        <br />
                        <a href={textTwo.url} className="font-bold text-xl mb-2">Read more</a>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                </div>
            </div>
    </>
  )
}

export default ScocialNews
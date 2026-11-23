import React from 'react'

const MainRoute = () => {
    return (
        <div>
            <Routes>
                <Route path="admin/*" element={<Home />} />
                <Route path="/" element={<About />} />
            </Routes>
        </div>
    )
}

export default MainRoute
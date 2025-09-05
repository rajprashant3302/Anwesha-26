import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="text-center py-4 bg-gray-900 text-gray-400 text-sm">
                © {new Date().getFullYear()} Anwesha. All rights reserved.
            </footer>
        </div>
    )
}

export default Footer

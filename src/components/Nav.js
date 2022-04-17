import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <div style={{
            width: '100%', height: '10vh', background: 'black', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
            <div >
                <h1 style={{
                    marginLeft: '20px', fontSize: '30px'
                }}>Recipe <span style={{ color: 'turquoise' }}>App</span></h1>
            </div>

            <div >
                <ul style={{ display: 'flex', textDecoration: 'none' }}>
                    <Link to="/" style={{ textDecoration: 'none' }}><li style={{ color: 'white', textDecoration: 'none', listStyle: 'none', margin: '0px 10px', fontSize: "22px" }}>Home</li></Link>

                    <Link to="/categories" style={{ textDecoration: 'none' }}><li style={{ color: 'white', textDecoration: 'none', listStyle: 'none', margin: '0px 10px', fontSize: "22px", marginRight: "30px" }}>Categories</li></Link>
                    <Link to="/random" style={{ textDecoration: 'none' }}><li style={{ color: 'white', textDecoration: 'none', listStyle: 'none', margin: '0px 10px', fontSize: "22px", marginRight: "30px" }}>Random</li></Link>
                </ul>
            </div>
        </div >
    )
}

export default Nav
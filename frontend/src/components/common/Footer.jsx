import React from 'react'

function Footer() {
  return (
        <footer>
            <span className="my-footer">
                Opulent Hotel | All Right Reserved &copy; {new Date().getFullYear()}
            </span>
        </footer>
    );
}

export default Footer

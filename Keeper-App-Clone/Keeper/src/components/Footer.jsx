import React from 'react'

const Footer = () => {
    const year=new Date().getFullYear();
    const styles={
      footer:{
        backgroundColor:"rgba(255, 217, 0, 0.795)",
        color: "#fff",
        textAlign: "center",
        padding: "10px",
        position:'absolute',
        width:'100%',
        bottom:'0'
      }

    }
  return (
    <>
        <footer style={styles.footer}>
            <p>Copyright ©{year}</p>
        </footer>
    </>
  )
}

export default Footer

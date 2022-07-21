import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'



const Homepage = () => {
  return ( 

    <div className= "content">
    <h2 className={styles.title}>Welcome to Nextjs App</h2>
    <p className={styles.text}>It is a long established fact that a reader will be distracted
       by the readable content of a page when looking at its layout.
       The point of using Lorem Ipsum is that it has a more-or-less
       normal distribution of letters, as opposed to using Content here,
       content here, making it look like readable English. 
       Many desktop publishing packages and web page editors now use Lorem
      Ipsum as their default model text, and a search for will 
      uncover many web sites still in their infancy</p> 


      <Link href="/"><a className={styles.btn}>See Admin List</a></Link >
       
    </div>
   );
}
 
export default Homepage;
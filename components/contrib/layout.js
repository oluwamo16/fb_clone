import React from 'react'

import Header from '../navigation/header'
import Footer from '../navigation/footer'
import PropTypes from 'prop-types'
import Head from 'next/head'


const Layout = ({ title="",children,language }) => (
  <>
  <Head>
  <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <link rel="icon" href="favicon.ico" />

       {/* <!-- Simple bar CSS --> */}
   
    {/* <!-- Fonts CSS --> */}
    <link href="https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
    <link rel="preload" href="/fonts/Fontspring_blue_vinyl_bold_ps_ot.otf" as="font" 
    type="font/otf" crossOrigin="anonymous"  />

        <link rel="preload" href="/fonts/Fontspring_blue_vinyl_regular_ps_ot.otf" as="font" 
    type="font/otf" crossOrigin="anonymous"  />
    {/* <!-- Icons CSS --> */}
    
     <link rel="stylesheet" type="text/css" href="vendors/styles/Y1NObt1zt8A.css"/>
     <link rel="stylesheet" type="text/css" href="vendors/styles/QH57LE5sePw.css"/>
     <link rel="stylesheet" type="text/css" href="vendors/styles/I2d9R8iACnz.css"/>
     <link rel="stylesheet" type="text/css" href="vendors/styles/GjSt2myX92_.css"/>

     <link rel="stylesheet" type="text/css" href="vendors/styles/BPtsjQdiYof.css"/>
     <link rel="stylesheet" type="text/css" href="vendors/styles/3uNSO98jutY.css"/>
     <link rel="stylesheet" type="text/css" href="vendors/styles/XzMVk90uhh2.css"/>

     <link rel="stylesheet" type="text/css" href="vendors/styles/_r73XaLLB9B.css"/>
     <link rel="stylesheet" type="text/css" href="vendors/styles/MPekrvWulI1.css"/>
     <link rel="stylesheet" type="text/css" href="vendors/styles/6S1EY5VmL8j.css"/>
     <link rel="stylesheet" type="text/css" href="vendors/styles/RSX-yFH64Gs.css"/>
     <link rel="stylesheet" type="text/css" href="vendors/styles/ROwc2FMKigN.css"/>
     <link rel="stylesheet" type="text/css" href="vendors/styles/PPoo5-74Hrj.css"/>
     <link rel="stylesheet" type="text/css" href="vendors/styles/j8BZELd8JMM.css"/>
     <link rel="stylesheet" type="text/css" href="vendors/styles/gSUhwp1WYA1.css"/>
     <link rel="stylesheet" type="text/css" href="vendors/styles/dNU0-BAD4y4.css"/>
     <link rel="stylesheet" type="text/css" href="vendors/styles/2uIUfi3wRYy.css"/>
     <link rel="stylesheet" type="text/css" href="vendors/styles/zP7lLJ0FdrG.css"/>
     <link rel="stylesheet" type="text/css" href="vendors/styles/rNAw4ngfW9O.css"/>
    



   
 

    {/* <!-- App CSS --> */}

	// <link rel="stylesheet" type="text/css" href="vendors/styles/icon-font.min.css"/>




   

    </Head>

   
    <main className="layout"  >


      <div className="" >{children}</div>

    </main>



  </>
)

export default Layout

Layout.propTypes = {
  children: PropTypes.node,
  title:PropTypes.string
}
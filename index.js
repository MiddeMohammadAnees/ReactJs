// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// import React from 'react';
// import ReactDOM from 'react-dom';

// const navbar = (
//   <nav>
//       <h1>This is navbar heading</h1>
//       <ul>
//           <li>About</li>
//           <li>Contact</li>
//           <li>Pricing</li>
//       </ul>
//   </nav>
// )
// ReactDOM.render(navbar,document.getElementById("root"))

// const page=(
//   <div>
//     <h1>These are the basics of ReactJd</h1>
//     <ol>
//     <li>Hi!!</li>
//     <li>Hii!!</li>
//     <li>Hii!!</li>
//     </ol>
//   </div>
// )

// ReactDOM.render(page,document.getElementById("root"))
//JSON return plane javascript Objects

// document.getElementById("root").append(JSON.stringify(page))

// const page=(
//   <div>
//     <img src="./react-logo.png" width="100px" />
//     <h1>Fun facts about React</h1>
//   <ul>
//     <li>Was released in 2013</li>
//     <li>Was created by Jordan Walke</li>
//      <li>It is maintained by Facebook</li>
//   </ul>
//   </div>
// )
// ReactDOM.render(page,document.getElementById("root"))


// React Function

// function Demo(){
//   return (
//     <div>
//       <img src="./react-logo.png" width="100px" />
//       <h1>Fun facts about React</h1>
//     <ol>
//       <li>Was released in 2013</li>
//       <li>Was created by Jordan Walke</li>
//        <li>It is maintained by Facebook</li>
//     </ol>
//     </div>
//   )
// }
 
// ReactDOM.render(<Demo />,document.getElementById("root"))

// import React from 'react';
// import ReactDOM from 'react-dom';
// function Demo(){
//   return (
//     <div>
//       <header>
//       <nav>
      
//       <img src="./react-logo.png" width="100px" />
//       </nav>
//       </header>
//       <h1>Fun facts about React</h1>
//     <ol>
//       <li>Was released in 2013</li>
//       <li>Was created by Jordan Walke</li>
//        <li>It is maintained by Facebook</li>
//     </ol>
//     <footer>
//       <small>@Anees.All rights are reserved</small></footer>
//     </div>
//   )
// }
 
// ReactDOM.render(<Demo />,document.getElementById("root"))


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./Header"

function Header(){
  return (
  <header>
    <nav >
    <img src="./react-logo.png" width="100px" />
    <ul >
      <li>About</li>
      <li>Contact</li>
      <li>Pricing</li>
    </ul>
      <h2>The concept of composable(making the smaller parts into one big part)</h2>
    </nav>
  </header>
  )
}
function Middle(){
  return(
    
        <ol>
          <h1>Fun facts about React</h1>
          <li>Was released in 2013</li>
          <li>Was created by Jordan Walke</li>
           <li>It is maintained by Facebook</li>
        </ol>
  )
}

function Footer(){
  return (
    <footer>
    <small>@Anees.All rights are reserved</small></footer>
  )
}

function Demo(){
  return (
    <div>
      <Header />
      <Middle/>   
      <Footer/>
    </div>
  )
}
 
ReactDOM.render(<Demo />,document.getElementById("root"))



function Middle(){
  return(
    
        <ol>
          <h1>Fun facts about React</h1>
          <li>Was released in 2013</li>
          <li>Was created by Jordan Walke</li>
           <li>It is maintained by Facebook</li>
        </ol>
  )
}

function Footer(){
  return (
    <footer>
    <small>@Anees.All rights are reserved</small></footer>
  )
}

function Demo(){
  return (
    <div>
      <Header />
      <Middle/>   
      <Footer/>
    </div>
  )
}
 
ReactDOM.render(<Demo />,document.getElementById("root"))








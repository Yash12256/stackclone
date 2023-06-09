// import React from 'react';
// import './HomeMainbar.css';
// import { Link, useLocation } from 'react-router-dom';

// const HomeMainbar = () => {
//   var questionsList = [
//     {
//       id: 1,
//       votes: 3,
//       noofanswer: 2,
//       questionTitle: 'What is a function',
//       questionBody: 'Its meant to be',
//       questionTags: ['java', 'node js', 'react js', 'mongo db', 'express js'],
//       userPosted: 'mano',
//       askedOn: 'Jan 1'
//     },
//     {
//       id: 2,
//       votes: 3,
//       noofanswer: 2,
//       questionTitle: 'What is a function',
//       questionBody: 'Its meant to be',
//       questionTags: ['java', 'node js', 'react js', 'mongo db', 'express js'],
//       userPosted: 'mano',
//       askedOn: 'Jan 1'
//     },
//     {
//       id: 3,
//       votes: 3,
//       noofanswer: 2,
//       questionTitle: 'What is a function',
//       questionBody: 'Its meant to be',
//       questionTags: ['java', 'node js', 'react js', 'mongo db', 'express js'],
//       userPosted: 'mano',
//       askedOn: 'Jan 1'
//     }
//   ];

//   const location = useLocation();

  // return (
  //   <div className='main-bar'>
  //     <div className='main-bar-header'></div>
  //     {location.pathname === '/' ? (
  //       <div>
  //         <h2>a</h2>
  //         <h1 style={{ float: 'left' }}>Top Questions</h1>
  //       </div>
  //     ) : (
  //       <h1 >All Questions</h1>
  //     )}
  //     <Link to='/AskQuestion' className='ask-btn'>
  //       Ask Question
  //     </Link>
  //   </div>
  // );
  // return (
  //   <div className='main-bar'>
  //     <div className='main-bar-header'></div>
  //     {location.pathname === '/' ? (
  //       <div>
  //         <h1 style={{ float: 'left' }}>Top Questions</h1>
  //         <Link to='/AskQuestion' className='ask-btn'>
  //           Ask Question
  //         </Link>
  //       </div>
  //     ) : (
  //       <div>
  //         <h1>All Questions</h1>
  //         <Link to='/AskQuestion' className='ask-btn'>
  //           Ask Question
  //         </Link>
  //       </div>
  //     )}
  //   </div>
  // );
  

// };

// export default HomeMainbar;


import React from 'react';
import './HomeMainbar.css';
import { Link, useLocation } from 'react-router-dom';

const HomeMainbar = () => {
  var questionsList = [
    // your question data here
  ];

  const location = useLocation();

  return (
    <div>
      <div className='navbar'>
        <div className='navbar-header'>
          {location.pathname === '/' ? (
            <h1 className='top'>Top Questions</h1>
          ) : (
            <h1>All Questions</h1>
          )}
          <Link to='/AskQuestion' className='ask-btn'>
            Ask Question
          </Link>
        </div>
      </div>
      <div className='content'>
        <div className='main-bar'>
          {/* Render your question list here */}
        </div>
      </div>
    </div>
  );
};

export default HomeMainbar;

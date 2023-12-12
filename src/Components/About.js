import React from 'react';
// import PropTypes from "prop-types";

export default function About(props) {
  return (
    <>
    <div className="container" style = {{color : props.mode ==='dark'?'white':'black'}}>
        <h1 className = "my-3">About Us</h1>
      <div className="accordion" id="accordionExample" style = {{color : props.mode ==='dark'?'white':'black', backgroundColor : props.mode ==='dark'?'#4b4c50':'white', border: '2px solid grey'}} > 
        <div className="accordion-item" style = {{color : props.mode ==='dark'?'white':'black', backgroundColor : props.mode ==='dark'?'#4b4c50':'white'}} >
          <h2 className="accordion-header" >
            <button
              className="accordion-button" 
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style = {{color : props.mode ==='dark'?'white':'black', backgroundColor : props.mode ==='dark'?'#4b4c50':'white'}}
            >
              Analyze Your Text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show" 
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" >
             TextUtils gives you away to analyze your text quickly and efficiently. Be it word count, character count, convert to uppercase, to lowercase , to copy text, and replace any word from paragraph with another.
            </div>
          </div>
        </div>
        <div className="accordion-item" style = {{color : props.mode ==='dark'?'white':'black', backgroundColor : props.mode ==='dark'?'#4b4c50':'white'}}>
          <h2 className="accordion-header" >
            <button
              className="accordion-button collapsed" 
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style = {{color : props.mode ==='dark'?'white':'black', backgroundColor : props.mode ==='dark'?'#4b4c50':'white'}}
            >
              Free To Use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse" 
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" >
              TextUtils is a free character counter tool provides instant character count and word count statistics for a given text. reports the number of words  and character. thus it is a suitable for writting text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style = {{color : props.mode ==='dark'?'white':'black', backgroundColor : props.mode ==='dark'?'#4b4c50':'white'}} >
          <h2 className="accordion-header" >
            <button
              className="accordion-button collapsed" 
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style = {{color : props.mode ==='dark'?'white':'black', backgroundColor : props.mode ==='dark'?'#4b4c50':'white'}}
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse" 
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" >
              This word countersoftware works in any web browser such as chrome, firefox, Internet Explorer, Safari, Opera. It suits to count character in facebook, blog, excel document, pdf document, essays etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

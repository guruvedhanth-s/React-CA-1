import React, { useState } from 'react'
import Question from './Question'
import "../App.css"
function Options(props) {

  return (
    <div className='option' iscorrect={props.option.isCorrect.toString()} value={props.isCorrect}onClick={(e) => props.func(e)}>
        {props.option.text}
    </div>
  )
}

export default Options
import React from 'react';
import PropTypes from 'prop-types';
import QuestionQueue from '../containers/QuestionQueue'
import './Widget.css';
import minimize from './minimize.svg';
import question_mark from './question_mark.svg';

const Widget = ({minimized, onToggle}) => (
  <div className="Widget">
    {minimized ?
      <a
        className="WidgetButton"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onToggle();
        }}
      >
        <img src={question_mark} alt="Start answering questions" />
      </a>
    :
      <div className="MaximizedWidget">
        <div className="TopBar">
          <a
            className="Minimize"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onToggle();
            }}
          >
            <img src={minimize} alt="Stop answering questions" />
          </a>
        </div>
        <div className="WidgetWrapper">
          <QuestionQueue />
        </div>
      </div>
    }
  </div>
);

Widget.propTypes = {
  minimized: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Widget;

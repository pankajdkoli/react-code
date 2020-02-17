import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import faker from 'faker';
import CommentDetail from './CommentDetails';
import ApprovalCard from './ApprovalCard';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

//create react component
const App = () => {
    return( 
    <div className="ui container comments">
        <ApprovalCard>
          <h4>!Warning</h4>
            Are you sure you want to do this..?
        </ApprovalCard>
     
      <ApprovalCard>
        <CommentDetail 
          author="React" 
          timeAgo="Today at 5:00 am"
          content="this lan can use to client side"
          avatar={faker.image.avatar()}
        /> 
      </ApprovalCard>
      <ApprovalCard>
       <CommentDetail 
        author="Angular"
        timeAgo="Today at 7:00 am"
        content="Is most power full lang." 
        avatar={faker.image.avatar()}
       />
     </ApprovalCard>
     <ApprovalCard>     
       <CommentDetail 
       author="Node_js" 
       timeAgo="Yesterday at 5:00 am"
       content="it can use to server side lang"
       avatar={faker.image.avatar()}
      />
     </ApprovalCard>   
    </div>
    );
};


ReactDOM.render(<App />, document.getElementById('root'));



// serviceWorker.unregister();

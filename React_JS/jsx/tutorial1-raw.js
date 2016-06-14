var CommentBox = React.createClass(
	{
		displayName:'CommentBox',
		render:function(){
			return(
				react.createElement('div',{className:"commentBox"},
				"Hello,world! I am a CommentBox."
				)
		);
		}
	}
);
ReactDOM.render(
	React.createElement(CommentBox,null),document.getElementById('content')
);

//tutorial9.js
var CommentBox = React.createClass(
	render:function(){
		return (
			<div className="commentBox">
			<h1>Comments</h1>
			<CommentList data={this.props.data} />
			<CommentForm />
			</div>
		);
	}
);

ReactDom.render(
	<CommentBox/>,document.getElementById('content')
);

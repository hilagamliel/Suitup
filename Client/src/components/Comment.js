
const Comment = (props) => {
    return (<>
        <div id={props.comment.id}>
            <b>{props.comment.title}</b>
            <p>{props.comment.content}</p>
        </div>
    </>);
}

export default Comment;
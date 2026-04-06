const Error = ({error}) => {
    return (
        <div>
            <p>{error.status}--{error.statusText}</p>
        </div>
    );
}
 
export default Error;
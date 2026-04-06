import useFetch from "../hooks/useFetch";

const Error = () => {

    const {error} = useFetch()
    

    return (
        <div>
            <p>{error.status}--{error.statusText}</p>
        </div>
    );
}
 
export default Error;
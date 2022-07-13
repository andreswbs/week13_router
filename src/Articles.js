import {useHistory} from 'react-router-dom'
function Articles() {
    const history = useHistory()

    const navigateBack = () => {
        history.push("/")
    }

    return (
        <>
            <div>Articles page</div>
            <button onClick={navigateBack}>Main page</button>
            <button onClick={()=>{history.push("/sign-up")}} >Sign-up</button>
        </>

    )
}

export default Articles
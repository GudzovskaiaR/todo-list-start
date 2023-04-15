
const Buttons = ({listDoneHandler})=>{

    return(
        <div className="buttons">
            <input className="all-btn" type="radio" name="list" value="All" id="false" onClick={(e) =>{listDoneHandler(e.target.id)}}/>
            <label htmlFor="all">All</label>
            <input type="radio" name="list" value="Done" id="true" onClick={(e) =>{listDoneHandler(e.target.id)}} />
            <label htmlFor="done">Done</label>
           
        </div>
    )
}
export default Buttons
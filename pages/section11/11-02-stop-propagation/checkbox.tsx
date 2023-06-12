export default function Checkbox(props){
        
    const qqq2 = () => {
        alert("클릭 타이틀2");
    }
    
    const qqq3 = (event) => {
        event.stopPropagation();
        alert("클릭 타이틀3");
    }
    
    return(
        <span onClick={qqq2}>
            <input type="checkbox" onClick={qqq3}/>
        </span>
    )
}
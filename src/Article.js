function Article(props){
    return (
        <div>
            <span>{props.title}</span> | 
            <span>{props.active ? " 显示中":" 已隐藏"}</span>
        </div>
    )
}

export default Article
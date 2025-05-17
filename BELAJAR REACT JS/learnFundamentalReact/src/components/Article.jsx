function Article (props){
    return (
        <>
            <h1>Ini adalah component {props.index}</h1>
            <h2>Haii nama saya {props.name}</h2>
            <div>
                {props.title.map((title) => {
                    return (
                        <>
                            <div>- {title}</div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Article;
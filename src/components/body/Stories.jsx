export default function Stories() {
    const auxStories = ['9gag', 'meowed', 'barked', 'nathanwpylestrangeplanet', 'wawawicomics', 'respondeai', 'filomoderna', 'memeriagourmet']
    return (
        <div>
            <div className="stories">
                {auxStories.map(element => {
                    return(<Story name={element} />)
                })}
                <div className="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>
        </div>
    )
}

function Story({name}) {
    let link = `src/assets/img/${name}.svg`
    return (
        <div className="story">
            <div className="imagem">
                <img src={link} />
            </div>
            <div className="usuario">
                {name}
            </div>
        </div>
    )
}


export default function Stories() {
    const auxStories = ['9gag', 'meowed', 'barked', 'nathanwpylestrangeplanet', 'wawawicomics', 'respondeai', 'filomoderna', 'memeriagourmet']
    return (
        <div>
            <div class="stories">
                {auxStories.map(element => {
                    return(<Story name={element} />)
                })}
                <div class="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>
        </div>
    )
}

function Story({name}) {
    let link = `src/assets/img/${name}.svg`
    return (
        <div class="story">
            <div class="imagem">
                <img src={link} />
            </div>
            <div class="usuario">
                {name}
            </div>
        </div>
    )
}


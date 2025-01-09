export default function Stories() {
    return (
        <div>
            <div class="stories">
                <Story />
                <div class="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>
        </div>
    )
}

function Story() {
    const auxStories = ['9gag', 'meowed', 'barked', 'nathanwpylestrangeplanet', 'wawawicomics', 'respondeai', 'filomoderna', 'memeriagourmet']

    const arrStories = auxStories.map(element => {
        let link = `src/assets/img/${element}.svg`
        return (
            <div class="story">
                <div class="imagem">
                    <img src={link} />
                </div>
                <div class="usuario">
                    {element}
                </div>
            </div>
        )
    })
    return (
        arrStories
    )
}


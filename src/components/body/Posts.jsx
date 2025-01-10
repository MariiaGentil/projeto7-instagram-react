export default function Posts() {
    const auxPost = [{
        name: 'meowed',
        nameCurtidas: 'respondeai',
        numeroCurtidas: '101.523',
        imgPost: 'gato-telefone'
    }, {
        name: 'barked',
        nameCurtidas: 'adorable_animals',
        numeroCurtidas: '99.159',
        imgPost: 'dog'
    }]

    return (
        auxPost.map(element => {
            return (<Post name={element.name} nameCurtidas={element.nameCurtidas} numeroCurtidas={element.numeroCurtidas} imgPost={element.imgPost} />)
        })
    )
}

function Post(props) {
    const {name, nameCurtidas, numeroCurtidas, imgPost} = props
    let imgUser = `src/assets/img/${name}.svg`
    let imagemPost = `src/assets/img/${imgPost}.svg`
    let imgCurtida = `src/assets/img/${nameCurtidas}.svg`

    return (<div class="post">
        <div class="topo">
            <div class="usuario">
                <img src={imgUser} />
                {name}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>

        <div class="conteudo">
            <img src={imagemPost} />
        </div>

        <div class="fundo">
            <div class="acoes">
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src={imgCurtida} />
                <div class="texto">
                    Curtido por <strong>{nameCurtidas}</strong> e <strong>outras {numeroCurtidas} pessoas</strong>
                </div>
            </div>
        </div>
    </div>
    )
}
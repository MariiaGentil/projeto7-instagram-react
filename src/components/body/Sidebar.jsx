export default function Sidebar() {
    const auxSidebar = [{
        name: 'bad.vibes.memes',
        status: 'Segue você'
    }, {
        name: 'chibirdart',
        status: 'Segue você'
    }, {
        name: 'razoesparaacreditar',
        status: 'Novo no Instagram'
    }, {
        name: 'adorable_animals',
        status: 'Segue você'
    }, {
        name: 'smallcutecats',
        status: 'Segue você'
    }]
    return (
        <div class="sidebar">
            <InfoUsuario user='catanacomics' />
            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {auxSidebar.map(element => {
                    return (<Sugestao name={element.name} status={element.status} />)
                })}
            </div>
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}

function InfoUsuario({ user }) {
    let imgUser = `src/assets/img/${user}.svg`
    return (
        <div class="usuario">
            <img src={imgUser} />
            <div class="texto">
                <strong>{user}</strong>
                Catana
            </div>
        </div>
    )
}

function Sugestao(props) {
    const {name, status} = props
    let imgSugestoes = `src/assets/img/${name}.svg`
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={imgSugestoes} />
                <div class="texto">
                    <div class="nome">{name}</div>
                    <div class="razao">{status}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}
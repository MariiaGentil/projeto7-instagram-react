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
        <div className="sidebar">
            <InfoUsuario user='catanacomics' />
            <div className="sugestoes">
                <div className="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {auxSidebar.map(element => {
                    return (<Sugestao name={element.name} status={element.status} />)
                })}
            </div>
            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}

function InfoUsuario({ user }) {
    let imgUser = `src/assets/img/${user}.svg`
    return (
        <div className="usuario">
            <img src={imgUser} />
            <div className="texto">
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
        <div className="sugestao">
            <div className="usuario">
                <img src={imgSugestoes} />
                <div className="texto">
                    <div className="nome">{name}</div>
                    <div className="razao">{status}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    )
}
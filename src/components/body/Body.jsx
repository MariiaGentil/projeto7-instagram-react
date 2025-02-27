import Stories from './Stories'
import Posts from './Posts'
import Sidebar from './Sidebar'

export default function Body() {
  return (
    <div className="corpo">
      <div className="esquerda">
        <Stories />
        <Posts />
      </div>
        <Sidebar />
        <div className="fundo-mobile">
        <ion-icon name="home"></ion-icon>
        <ion-icon name="search-outline"></ion-icon>
        <ion-icon name="add-circle-outline"></ion-icon>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="person-outline"></ion-icon>
      </div>
    </div>
  )
}
import styled from "styled-components"
import GlobalSyles from './Components/GlobalStyles'
import Header from './Components/Header'
import SideBar from "./Components/SideBar"
import Banner from "./Components/Banner"
import Gallery from "./Components/Gallery"
import bannerBackground from './assets/banner.png'
import Photos from './photos.json'
import { useState } from "react"
import ZoomModel from "./Components/ZoomModel"

const GradientBackground = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  min-height: 100vh;
`
const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`
const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const GalleryContentContainer = styled.section`
  display:flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {

  const [galleryPhotos, setGalleryPhotos] = useState(Photos);

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const onFavorite = (photo) => {
    setGalleryPhotos(galleryPhotos.map(galleryPhoto=> {
      return {
        ...galleryPhoto,
        favorite: galleryPhoto.id === photo.id ? !photo.favorite : galleryPhoto.favorite
      }
    }))
  }

  return (
    <GradientBackground>
      <GlobalSyles />
      <AppContainer>
        <Header />
        <MainContainer>
          <SideBar />
          <GalleryContentContainer>
            <Banner
              text={'The most complete space photos gallery!'}
              backgroundImage={bannerBackground} />
            <Gallery
              selectPhoto={photo => setSelectedPhoto(photo)}
              Photos={galleryPhotos}
              onFavorite = {onFavorite} />
          </GalleryContentContainer>
        </MainContainer>
      </AppContainer>
      <ZoomModel Photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
    </GradientBackground>
  )
}

export default App

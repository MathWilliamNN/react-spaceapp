import Title from '../Title'
import Trending from './Trending'
import Picture from './Picture'
import Tags from './Tags'
import styled from 'styled-components'

const GalleryContainer = styled.div`
    display:flex;
`
const FluidSection = styled.section`
    flex-grow:1;
`
const PicturesContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`
const Gallery = ({ Photos = [], selectPhoto, onFavorite}) => {
    return (
        <>
            <Tags />
            <GalleryContainer>
                <FluidSection>
                    <Title>Navigate through the gallery</Title>
                    <PicturesContainer>
                        {Photos.map(photo =>
                            <Picture
                                whenZoomed={selectPhoto}
                                key={photo.id}
                                Photo={photo}
                                onFavorite={onFavorite}
                            ></Picture>)}
                    </PicturesContainer>
                </FluidSection>
                <Trending />
            </GalleryContainer>
        </>
    )
}

export default Gallery
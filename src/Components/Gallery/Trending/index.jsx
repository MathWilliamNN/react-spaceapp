import styled from "styled-components"
import Title from "../../Title"
import photos from './trending.json'

const PhotosColumn = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Image= styled.img`
    max-width: 212px;
    border-radius: 20px;
`

const Button = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
`

const Trending = () => {
    return (
        <section style={{margin:'0px 0px 0px 20px'}}>
            <Title style={{textAlign: 'center'}} >Trending</Title>
            <PhotosColumn>
                {photos.map(photo => <Image key={photo.id} src={photo.path} alt={photo.alt}/>)}
            </PhotosColumn>
            <Button>See more</Button>
        </section>
    ) 
}

export default Trending

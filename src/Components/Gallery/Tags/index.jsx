import tags from './tags.json'
import styled from 'styled-components'

const TagTitle = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`
const TagButton = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`
const TagsContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 64px;
    margin-top: 56px;
`
const Tags = () => {
    return (
        <>
            <TagsContainer>
            <TagTitle>Search for tags</TagTitle>
            {tags.map(tag => <TagButton key={tag.id}>{tag.text}</TagButton>)}
            </TagsContainer>
        </>
    )
}

export default Tags
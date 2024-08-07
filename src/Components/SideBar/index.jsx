import styled from "styled-components"
import NavigationItem from "./NavigationItem/NavigationItem"


// const StyledSideBar =  styled.aside`
    
// `

// const StyledNav = styled.nav`
    
// `

const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    margin-left: 24px;
    width: 212px;

`


const SideBar = () => {
    return (
        <aside>
            <nav>
                <StyledList>
                    <NavigationItem activeIcon='icons/home.png' inactiveIcon = 'icons/home-inactive.png' active={true}>
                        Home
                    </NavigationItem>
                    <NavigationItem activeIcon='icons/mostseen.png' inactiveIcon = 'icons/mostseen-inactive.png' active={false}>
                        Most Seen
                    </NavigationItem>
                    <NavigationItem activeIcon='icons/mostliked.png' inactiveIcon = 'icons/mostliked-inactive.png' active={false}>
                        Most Liked
                    </NavigationItem>
                    <NavigationItem activeIcon='icons/recents.png' inactiveIcon = 'icons/recents-inactive.png' active={false}>
                        Recents
                    </NavigationItem>
                    <NavigationItem activeIcon='icons/surpriseme.png' inactiveIcon = 'icons/surpriseme-inactive.png' active={false}>
                        Surprise me
                    </NavigationItem>
                </StyledList>
            </nav>
        </aside>

    )
}

export default SideBar
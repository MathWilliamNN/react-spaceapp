import styled from "styled-components"
import TextField from "../TextField"

const StyledHeader = styled.header`
    margin-left: 24px;
    padding: 60px 0px;
    display: flex;
    justify-content: space-between;
    img{
        max-width:212px;
    }

`

const Header = () => {
    return(
        <StyledHeader>
            <img src="./images/logo.png" ></img>
            <TextField/>
        </StyledHeader>

    )
}

export default Header
import styled from "styled-components"
import Picture from "../Gallery/Picture"
import ButtonIcon from "../ButtonIcon"


const Overlay = styled.div`
    background-color: rgba(0,0,0,0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const StyledDialog = styled.dialog`
    position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`

const ZoomModel = ({ Photo, onClose }) => {
    return (
        <>
            {Photo && <>
                <Overlay />
                <StyledDialog open={!!Photo} onClose={onClose}>
                    <Picture Photo={Photo} expanded={true} />
                    <form method="dialog">
                        <ButtonIcon formMethod="dialog">
                            <img src="/icons/close.png" alt="close icon" />
                        </ButtonIcon>
                    </form>
                </StyledDialog>
            </>}
        </>
    )
}

export default ZoomModel
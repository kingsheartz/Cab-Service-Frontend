import { OptionDiv1, OptionDiv2, ThemePickerContainerDiv, ThemePickerDiv, ThemeSelecterDiv } from '../../styled-components/Style'
import { Theme } from '../../../assets/design/Theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const ThemePicker = (props) => {

    const [showThemeSelecter, setShowThemeSelecter] = useState(false)
    const displayThemeSelector = () => {
        if (showThemeSelecter === false) {
            setShowThemeSelecter(true)
        } else {
            setShowThemeSelecter(false)
        }
    }

    return (
        <ThemePickerDiv>
            <ThemePickerContainerDiv onClick={displayThemeSelector}>
                <FontAwesomeIcon
                    icon={faPalette}
                    size={'lg'} />
            </ThemePickerContainerDiv>{showThemeSelecter ? <ThemeSelecter setTheme={props.setTheme} /> : null}
        </ThemePickerDiv>
    )
}

const ThemeSelecter = (props) => (
    <ThemeSelecterDiv>
        <OptionDiv1
            title={"Dark theme"}
            onClick={e => { props.setTheme(Theme["dark-theme"]) }} />
        <OptionDiv2
            title={"Light theme"}
            onClick={e => { props.setTheme(Theme["light-theme"]) }} />
    </ThemeSelecterDiv>
)

export default ThemePicker;

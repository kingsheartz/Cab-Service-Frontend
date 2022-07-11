// Images
import lightTileImg from "../../assets/images/reg.jpg"
import lightBgImg from "../../assets/images/lightblue.jpg"
import darkTileImg from "../../assets/images/cab-bg.jpg"
import darkBgImg from "../../assets/images/dark-bg.jpg"

export const Theme = {
    "dark-theme": {
        "bg-color": "#225",
        "form-heading": "white",
        "input-label": "#cde",
        "input-text-font": "#ccc",
        "input-text-border-bottom": "1px solid #88e",
        "input-text-border-bottom-on-focus": "1px solid #eee",
        "register-button-bg-color": "#0080c7",
        "register-button-font": "white",
        "register-button-border": "1px solid #0080c7",
        "register-button-bg-color-on-hover": "white",
        "register-button-border-on-hover": "1px solid #0080c7",
        "register-button-font-on-hover": "#0080c7",
        "bg-img": darkBgImg,
        "tile-bg-img":darkTileImg
    },

    "light-theme": {
        "bg-color": "white",
        "form-heading": "#0c2299",
        "input-label": "#0080c7",
        "input-text-font": "#0c2299",
        "input-text-border-bottom": "1px solid #88e",
        "input-text-border-bottom-on-focus": "1px solid #0c2299",
        "register-button-bg-color": "#0c2299",
        "register-button-font": "white",
        "register-button-border": "1px solid #0c2299",
        "register-button-bg-color-on-hover": "#eee",
        "register-button-border-on-hover": "1px solid #0c2299",
        "register-button-font-on-hover": "#0c2299",
        "bg-img": lightBgImg,
        "tile-bg-img":lightTileImg
    }
}
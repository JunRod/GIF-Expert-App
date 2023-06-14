import {GifGrid} from "../../src/components/GifGrid"
import { screen, render } from "@testing-library/react"


describe('Probando GifGrid', () => { 

    test('Debe de mostrar el loading inicialmente', () => { 

        const category = "One Punch"

        render(<GifGrid category={ category }/>)
        expect(screen.getByText("Cargando..."))
        expect(screen.getByText(category))
    })

    test('Debe de mostrar items cuando se cargan las imagenes useFetch', () => {
        
     })

})


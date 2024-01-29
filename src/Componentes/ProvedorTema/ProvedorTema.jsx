import { ThemeProvider } from '@emotion/react'

const tema = {
    cores: {
        branco: '',
        atencao: '',
        focos: '',

        
        primaria: {
            a: '',
            b: '',
            c: ''
        },
        secundaria: {
            a: '',
            b: '',
            c: ''
        },
        neutras: {
            a: '',
            b: '',
            c: '',
            d: ''
        },
        dark: {
            a: '',
            b: '',
            c: ''
        }


    }
}


export const ProvedorTema = ({ children }) => {
        return <ThemeProvider theme={tema}>
            {
                children
            }

        </ThemeProvider>
}
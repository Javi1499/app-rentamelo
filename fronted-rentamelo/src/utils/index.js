import FontsProvider from "style/Fonts";
import { theme } from "style/theme";
import { ThemeProvider } from "styled-components";

export const arrayCity = [{ value: 1, text: "Armeria" },
{ value: 2, text: "Colima" },
{ value: 3, text: "Comala" },
{ value: 4, text: "Coquimatlán" },
{ value: 5, text: "Cuauhtémoc" },
{ value: 6, text: "Ixtlahuacán" },
{ value: 7, text: "Manzanillo" },
{ value: 8, text: "Minatitlán" },
{ value: 9, text: "Tecomán" },
{ value: 10, text: "Villa de Álvarez" }]
export const arrayCategories =
    [{ value: 1, text: "Deportes" },
    { value: 2, text: "Herramientas" },
    { value: 3, text: "Hogar" },
    { value: 4, text: "Tecnología" }]

export const arrayTime = [{ value: 1, text: "Menos de 30min" }, { value: 2, text: "Entre 30-60min" }, { value: 3, text: "Mas de 60min" }];

export const TemplateStyled = (Story) => (
    <ThemeProvider theme={theme}>
        <Story />
        <FontsProvider />
    </ThemeProvider>
)
import * as React from "react";
import styled, { css } from "styled-components/native";
import { Switch } from "react-native";
import { ThemeProvider } from "styled-components/native";

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`

const Title = styled.Text`
    font-size: 24px;
    ${({ theme }) => css`
        color: ${theme.text}
    `}
`

const lightTheme = {
    background: '#ffffff',
    text: '#000000'
}

const darkTheme = {
    background: '#333333',
    text: '#ffffff'
}

const ThemeSwitcher = () => {
    const [isDarkMode, setIsDarkMode] = React.useState(false);
    const theme = isDarkMode ? darkTheme : lightTheme;
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Title>App</Title>
                <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
            </Container>
        </ThemeProvider>
    )
}

export default ThemeSwitcher;
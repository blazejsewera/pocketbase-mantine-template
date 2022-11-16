import { MantineProvider } from '@mantine/core'
export const MainPage = () => (
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <div className="App">Hello</div>
  </MantineProvider>
)

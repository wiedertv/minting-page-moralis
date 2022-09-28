import { BrowserRouter,Route, Routes } from "react-router-dom"
import { ScrollToTop } from "../Components/ScrollToTop/ScrollToTop"
import { MintingPage } from "../Pages/MintingPage/MintingPage"

export const AppRouter = () => {

    return (
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            {
              <Route path="/" element={
                <MintingPage />
                } />
            }
  
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    )
  }
  
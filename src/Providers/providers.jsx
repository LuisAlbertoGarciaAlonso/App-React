import { AuthProvider } from "../Context/ContextAuth"
import { ProductsProvider } from "../Context/ProductsContext"


export const Providers= ({children})  => {
    return(
        <AuthProvider>
        <ProductsProvider>
        {children}
        </ProductsProvider>
        </AuthProvider>
    )
}


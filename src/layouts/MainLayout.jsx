import Navbar from "../components/Navbar"

export const MainLayout = ({ children }) => {
    return (<div>
        <Navbar />
        <main className="max-w-7xl mx-auto">
            {children}
        </main>
    </div >)
}
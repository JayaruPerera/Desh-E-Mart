
import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar />
                {children}
        </div>
    );
};  

export default Layout
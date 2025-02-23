import Image from "next/image";
import logo from "@/assets/images/logo.png";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";

function AboutPage() {
    return ( 
        <>
        <Header />
        <main className="container mx-auto px-4 py-8 pt-32 ">
            <div className="flex flex-col items-center justify-center text-xl gap-8 max-w-4xl mx-auto font-oxygen">
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold">About page</h1>
                    <p>Welcome to Desha E-Mart, your trusted partner for all things electronics! Located in the heart of Pambahinna, Sabaragamuwa Province, near Sabaragamuwa University, we are proud to serve our community with top-quality products and reliable repair services. At Desha E-Mart, we believe in making technology accessible, convenient, and hassle-free for everyone.</p>
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold">Who We Are</h1>
                    <p>Desha E-Mart is more than just a store—we are a one-stop destination for all your electronic needs. With two physical stores—a product showroom and a dedicated repair center—we specialize in providing the latest mobile phones, laptops, CCTV systems, and electronic accessories. Our repair services ensure that your devices are always in top condition, whether it is a quick fix or a major overhaul.</p>
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold">Our Mission</h1>
                    <p>Our mission is simple: to make technology work for you. We understand that in todays fast-paced world, convenience and efficiency are key. Thats why we have taken our services online, allowing you to browse products, place orders, and track repairs from the comfort of your home. Whether you are a student, a working professional, or a tech enthusiast, we are here to make your life easier.</p>
                </div>
                <div className="mt-8">
                        <Image
                            src={logo}
                            alt="About us"
                            className="w-48 h-48"
                            priority
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default AboutPage;
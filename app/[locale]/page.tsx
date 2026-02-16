import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import WhyVersayn from '@/components/why-versayn';
import Cases from '@/components/cases';
import Services from '@/components/services';
import Drops from '@/components/drops';
import About from '@/components/about';
import VersaynEdge from '@/components/versayn-edge';
import Clients from '@/components/clients';
import Testimonials from '@/components/testimonials';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Page() {
    return (
        <main>
            <Navbar />
            <Hero />
            <WhyVersayn />
            {/* <Cases /> */}
            {/* <Services /> */}
            <Drops />
            <About />
            <VersaynEdge />
            <Clients />
            <Contact />
            <Footer />
        </main>
    );
}
